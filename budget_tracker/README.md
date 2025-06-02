# 家庭開支追蹤器 (Client-Side Version)

這是一個純前端、基於 Web 的家庭開支追蹤應用程式，使用 HTML、CSS 和原生 JavaScript 构建。它允許使用者在本機瀏覽器中記錄每日支出、按類別進行分類，并查看所有支出的列表。

## 主要功能

-   通過網頁表單新增開支条目（日期、金額、類別、備註）。
-   開支數據存儲在使用者瀏覽器的 `localStorage` 中。
-   提供預設的開支類別供选择。
-   在主頁動態顯示所有已記錄開支的列表。

## 技術棧

-   HTML
-   CSS
-   JavaScript (原生)

## 數據存儲

本應用程式使用瀏覽器的 `localStorage` 來存儲您的開支數據。這意味著：
-   數據僅保存在您目前使用的瀏覽器中。
-   數據不會在不同的瀏覽器或設備之間同步。
-   如果您清除瀏覽器的網站數據或 `localStorage`，所有已記錄的開支將會遺失。

## 安裝與設定

1.  **克隆或下載程式碼**
    ```bash
    # 如果使用 git 克隆
    git clone <repository_url>
    cd <repository_directory>/budget_tracker
    # 如果是下載的 zip 檔案，請解壓縮並進入 budget_tracker 目錄
    ```
    *(注意: `<repository_url>` 和 `<repository_directory>` 是您實際倉庫位置的佔位符)*

2.  **無需額外安裝**
    這是一個純客戶端應用程式，不需要安裝 Python 或其他依賴套件。

## 執行應用程式

1.  導航到包含專案檔案的 `budget_tracker` 目錄。
2.  直接在您的網頁瀏覽器中開啟 `index.html` 檔案。
    -   例如，在檔案總管中雙擊 `index.html`，或使用瀏覽器的 "開啟檔案..." 選項。

## 如何使用

-   **新增開支**：在主頁的表單中填寫日期、金額、選擇一個類別，并（可選地）添加備註。點擊“新增開支”按鈕。新的開支將被保存到您瀏覽器的 `localStorage` 中。
-   **檢視開支**：所有已添加的開支將動態顯示在主頁表單下方的列表中。

## 專案結構

```
budget_tracker/
├── index.html        # 主要的 HTML 結構檔案
├── script.js         # JavaScript 應用程式邏輯
├── static/
│   └── style.css     # CSS 樣式檔案
└── README.md         # 本說明檔案
```

## GitHub Pages 部署

您可以將此專案部署到 GitHub Pages 以便在线访问。

1.  **準備您的倉庫**：
    *   確保您的 `index.html`, `script.js`, 和 `static` 文件夾位於您希望 GitHub Pages 提供服務的目錄的根部。如果您的 `budget_tracker` 目錄就是您要部署的內容，那麽這些檔案應該直接在 `budget_tracker` 目錄下。
    *   將您的更改推送到 GitHub 倉庫。

2.  **設定 GitHub Pages**：
    *   在您的 GitHub 倉庫頁面，點擊 "Settings" (設定)。
    *   在左側導航欄中，選擇 "Pages"。
    *   在 "Build and deployment" 下的 "Source" 部分，選擇您要部署的分支 (例如 `main` 或 `budget-tracker-feature`)。
    *   選擇資料夾：
        *   如果您倉庫的根目錄就是 `budget_tracker` 的內容 (即 `index.html` 在根目錄)，選擇 `/ (root)`。
        *   如果 `budget_tracker` 是一個子目錄，並且您想從這個子目錄部署，您可能需要將 `budget_tracker` 重新命名為 `docs` 並將其放在倉庫根目錄，然後選擇 `/docs` 資料夾。最簡單的方式通常是將 `index.html` 等檔案放在分支的根目錄。
    *   點擊 "Save"。

3.  **訪問您的網站**：
    *   GitHub Pages 可能需要幾分鐘來構建和部署您的網站。
    *   部署完成後，您應該能在同一頁面上看到您的網站 URL (通常是 `https://<your-username>.github.io/<repository-name>/`)。

```
