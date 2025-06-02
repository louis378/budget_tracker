// script.js

// 预设支出类别 (繁体中文)
const PREDEFINED_CATEGORIES = ["食物", "交通", "居住", "水電雜費", "娛樂", "醫療保健", "教育", "其他"];

// localStorage 键名
const LOCAL_STORAGE_KEY = 'budgetExpenses';

/**
 * 从 localStorage 加载支出数据
 * @returns {Array} 支出对象数组，如果 localStorage 中没有数据则为空数组
 */
function loadExpenses() {
    const expensesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    return expensesJSON ? JSON.parse(expensesJSON) : [];
}

/**
 * 将支出数据保存到 localStorage
 * @param {Array} expensesArray 要保存的支出对象数组
 */
function saveExpenses(expensesArray) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expensesArray));
}

// 初始加载时可以执行的测试 (可选, 主要用于开发时验证)
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("预设类别:", PREDEFINED_CATEGORIES);
//     let currentExpenses = loadExpenses();
//     console.log("当前存储的支出:", currentExpenses);
//
//     // 示例：添加一个虚拟支出并保存 (仅用于测试，后续会被表单功能替代)
//     // if (currentExpenses.length === 0) {
//     //     currentExpenses.push({ date: '2023-01-01', amount: 100, category: '测试', description: '初始测试数据' });
//     //     saveExpenses(currentExpenses);
//     //     console.log("添加测试数据后:", loadExpenses());
//     // }
// });

// (Existing code: PREDEFINED_CATEGORIES, LOCAL_STORAGE_KEY, loadExpenses, saveExpenses)

/**
 * 渲染支出列表到 HTML 表格
 */
function renderExpenses() {
    const expenses = loadExpenses();
    const expenseListBody = document.getElementById('expense-list-body');

    if (!expenseListBody) {
        console.error('Expense list body with id "expense-list-body" not found.');
        return;
    }

    // 清空现有列表内容
    expenseListBody.innerHTML = '';

    if (expenses.length === 0) {
        const row = expenseListBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 4; // 横跨所有列
        cell.textContent = '目前沒有任何開支紀錄。';
        cell.style.textAlign = 'center';
        return;
    }

    expenses.forEach(expense => {
        const row = expenseListBody.insertRow(); // 在 tbody 末尾插入新行

        const dateCell = row.insertCell();
        dateCell.textContent = expense.date;

        const amountCell = row.insertCell();
        amountCell.textContent = parseFloat(expense.amount).toFixed(2); // 格式化金额为两位小数
        amountCell.style.textAlign = 'right'; // 金额通常右对齐

        const categoryCell = row.insertCell();
        categoryCell.textContent = expense.category;

        const descriptionCell = row.insertCell();
        descriptionCell.textContent = expense.description;
    });
}

// 修改 DOMContentLoaded 事件监听器
document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseDateInput = document.getElementById('date');
    const expenseAmountInput = document.getElementById('amount');
    const expenseCategorySelect = document.getElementById('category');
    const expenseDescriptionInput = document.getElementById('description');

    // 动态填充类别下拉列表
    PREDEFINED_CATEGORIES.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        expenseCategorySelect.appendChild(option);
    });

    if (expenseForm) {
        expenseForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const date = expenseDateInput.value;
            const amountString = expenseAmountInput.value;
            const category = expenseCategorySelect.value;
            const description = expenseDescriptionInput.value;

            if (!date) {
                alert('請選擇日期。');
                return;
            }
            if (!amountString || isNaN(parseFloat(amountString)) || parseFloat(amountString) <= 0) {
                alert('請輸入有效的正數金額。');
                return;
            }
            // Category validation removed as select will always have a value if populated

            const amount = parseFloat(amountString);
            const newExpense = {
                id: Date.now().toString(),
                date: date,
                amount: amount,
                category: category,
                description: description
            };

            let expenses = loadExpenses();
            expenses.push(newExpense);
            saveExpenses(expenses);

            renderExpenses(); // <--- 主要修改点：调用 renderExpenses 更新列表

            expenseDateInput.value = '';
            expenseAmountInput.value = '';
            expenseDescriptionInput.value = '';
            // expenseCategorySelect.selectedIndex = 0; // 保持上次选择或重置
        });
    } else {
        console.error('Expense form with id "expense-form" not found.');
    }

    // 页面加载时首次渲染支出列表
    renderExpenses(); // <--- 主要修改点：页面加载时渲染
});
