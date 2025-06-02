# 家庭開支追蹤器 (Household Budget Tracker)

這是一個簡單的基於 Web 的家庭開支追蹤應用程式，使用 Python Flask 建構。使用者可以記錄每日開支，按類別進行分類，並檢視所有開支的列表。

## 主要功能

-   透過網頁表單新增新的開支條目（日期、金額、類別、備註）。
-   開支資料儲存在 SQLite 資料庫中。
-   提供預設的開支類別供選擇。
-   在主頁顯示所有已記錄開支的列表。
-   包含後端單元測試。

## 先決條件

在執行此專案之前，請確保您已安裝下列軟體：

-   Python 3.7+
-   pip (Python 套件安裝器)

## 安裝與設定

1.  **克隆或下載程式碼**
    ```bash
    # 如果使用 git 克隆
    git clone <repository_url>
    cd <repository_directory>/budget_tracker
    # 如果是下載的 zip 檔案，請解壓縮並進入 budget_tracker 目錄
    ```

2.  **建立並啟用虛擬環境 (建議)**
    ```bash
    # 在 budget_tracker 目錄下
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **安裝依賴套件**
    在啟用虛擬環境後，安裝所需的 Python 套件：
    ```bash
    pip install Flask Flask-SQLAlchemy
    ```

## 執行應用程式

1.  **初始化資料庫**
    資料庫和資料表將在您首次執行應用程式時自動建立（透過 `app.py` 中的 `db.create_all()`）。
    `budget.db` 檔案將建立在 `budget_tracker` 目錄下。

2.  **啟動 Flask 開發伺服器**
    在 `budget_tracker` 目錄下執行下列命令：
    ```bash
    python app.py
    ```

3.  **存取應用程式**
    開啟您的網路瀏覽器，造訪下列位址：
    [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

## 使用說明

-   **新增開支**：在主頁的表單中填寫日期、金額、選擇一個類別，並（可選地）新增備註。點擊“新增開支”按鈕。
-   **檢視開支**：所有已新增的開支將顯示在主頁表單下方的列表中。

## 專案結構

```
budget_tracker/
├── app.py            # 主要 Flask 應用程式檔案 (後端邏輯、路由、資料庫模型)
├── budget.db         # SQLite 資料庫檔案 (自動建立)
├── test_app.py       # 後端單元測試
├── static/
│   └── style.css     # CSS 樣式檔案
├── templates/
│   └── index.html    # 前端 HTML 範本
└── README.md         # 本說明檔案
```

## 執行測試

要執行後端單元測試，請在 `budget_tracker` 目錄下（確保虛擬環境已啟用並安裝了依賴套件）執行：

```bash
python test_app.py
```
