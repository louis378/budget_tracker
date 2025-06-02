import os
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import datetime # Ensure this is imported

app = Flask(__name__)

# Determine the absolute path for the database file
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, 'budget.db')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False, default=datetime.date.today) # Default can be datetime.date.today
    amount = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=True)

    def __repr__(self):
        return f'<Expense {self.id} - {self.date} - {self.amount} - {self.category}>'

PREDEFINED_CATEGORIES = ["食物", "交通", "住房", "水电费", "娱乐", "医疗健康", "教育", "其他"]

@app.route('/')
def index():
    expenses = Expense.query.all()
    # The template 'index.html' will be created in the next subtask.
    # If this route is accessed before the template exists, Flask will raise a TemplateNotFound error.
    return render_template('index.html', expenses=expenses, categories=PREDEFINED_CATEGORIES)

@app.route('/add_expense', methods=['POST'])
def add_expense():
    if request.method == 'POST':
        date_str = request.form['date']
        amount_str = request.form['amount']
        category = request.form['category']
        description = request.form['description']

        # Convert date string (e.g., 'YYYY-MM-DD') to datetime.date object
        try:
            date_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
        except ValueError:
            # Handle potential error if date format is incorrect
            # For now, we'll let it raise an error or you could redirect with a message
            # Or provide a default date, though that's usually not desired for explicit user input
            return "Invalid date format. Please use YYYY-MM-DD.", 400 # Example error handling

        # Convert amount string to float
        try:
            amount = float(amount_str)
        except ValueError:
            # Handle potential error if amount is not a valid float
            return "Invalid amount. Please enter a number.", 400 # Example error handling

        new_expense = Expense(
            date=date_obj,
            amount=amount,
            category=category,
            description=description
        )
        db.session.add(new_expense)
        db.session.commit()
        return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    print(f"Database tables checked/created at {db_path}")
    app.run(debug=True)
