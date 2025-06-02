# 家庭支出追踪器 (Household Budget Tracker)

这是一个简单的基于 Web 的家庭支出追踪应用程序，使用 Python Flask 构建。用户可以记录每日支出，按类别进行分类，并查看所有支出的列表。

## 特性

- 通过网页表单添加新的支出条目（日期、金额、类别、描述）。
- 支出数据存储在 SQLite 数据库中。
- 提供预设的支出类别供选择。
- 在主页显示所有已记录支出的列表。
- 包含后端单元测试。

## 前提条件

在运行此项目之前，请确保您已安装以下软件：

- Python 3.7+
- pip (Python 包安装器)

## 安装与设置

1.  **克隆或下载代码**
    ```bash
    # 如果使用 git 克隆
    git clone <repository_url>
    cd <repository_directory>/budget_tracker
    # 如果是下载的 zip 文件，请解压并进入 budget_tracker 目录
    ```

2.  **创建并激活虚拟环境 (推荐)**
    ```bash
    # 在 budget_tracker 目录下
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **安装依赖**
    在激活虚拟环境后，安装所需的 Python 包：
    ```bash
    pip install Flask Flask-SQLAlchemy
    ```

## 运行应用

1.  **初始化数据库**
    数据库和表将在您首次运行应用时自动创建（通过 `app.py` 中的 `db.create_all()`）。
    `budget.db` 文件将创建在 `budget_tracker` 目录下。

2.  **启动 Flask 开发服务器**
    在 `budget_tracker` 目录下运行以下命令：
    ```bash
    python app.py
    ```

3.  **访问应用**
    打开您的网络浏览器，访问以下地址：
    [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

## 如何使用

-   **添加支出**：在主页的表单中填写日期、金额、选择一个类别，并（可选地）添加描述。点击“添加支出”按钮。
-   **查看支出**：所有已添加的支出将显示在主页表单下方的列表中。

## 项目结构

```
budget_tracker/
├── app.py            # 主 Flask 应用文件 (后端逻辑, 路由, 数据库模型)
├── budget.db         # SQLite 数据库文件 (自动创建)
├── test_app.py       # 后端单元测试
├── static/
│   └── style.css     # CSS 样式文件
├── templates/
│   └── index.html    # 前端 HTML 模板
└── README.md         # 本说明文件
```

## 运行测试

要运行后端单元测试，请在 `budget_tracker` 目录下（确保虚拟环境已激活并安装了依赖）执行：

```bash
python test_app.py
```
