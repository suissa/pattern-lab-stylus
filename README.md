# stylus-seed

規劃 stylus 檔案結構

    ┌ /stylus
    │   ├ /settings               // 所有變數設定，responsive 該有的參數設定也都在這裡
    │   │   ├ index.styl          // @import settings 目錄下的所有檔案
    │   │   └ default.styl        // 一般情況下的設定
    │   ├ functions.styl
    │   ├ mixins.styl
    │   └ main.styl               // 主要樣式檔案
    ├ /css
    │   ├ reset.css               // html5 doctor 的 reset.css
    │   └ main.css                // 由 stylus 產生的 css 檔案
    └ README.md

## 使用

    stylus -w stylus/main.styl -o css
