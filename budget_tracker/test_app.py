import unittest
import datetime
from app import app, db, Expense

class BudgetTrackerTests(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = app.test_client()
        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_01_index_route_empty_db(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('<h1>添加新支出</h1>', response.data.decode('utf-8'))

    def test_02_add_expense_and_redirect(self):
        response = self.client.post('/add_expense', data=dict(
            date='2023-10-26',
            amount='100.50',
            category='食物',
            description='午餐'
        ), follow_redirects=False)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.location.endswith('/'))
        with app.app_context():
            expense = Expense.query.filter_by(description='午餐').first()
            self.assertIsNotNone(expense)
            self.assertEqual(expense.amount, 100.50)
            self.assertEqual(expense.category, '食物')
            self.assertEqual(expense.date, datetime.date(2023, 10, 26))

    def test_03_index_route_with_data(self):
        with app.app_context():
            test_expense = Expense(
                date=datetime.date(2023, 1, 15),
                amount=75.0,
                category='交通',
                description='地铁卡充值'
            )
            db.session.add(test_expense)
            db.session.commit()
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        response_data_decoded = response.data.decode('utf-8')
        self.assertIn('地铁卡充值', response_data_decoded)
        self.assertIn('75.00', response_data_decoded)
        self.assertIn('交通', response_data_decoded)
        self.assertIn('2023-01-15', response_data_decoded)

if __name__ == '__main__':
    unittest.main()
