# Enzyme Code | 個人作品集網站

Enzyme Code 的個人作品集網站，展示後端開發與資料工程相關的專案與技術棧。以 Nuxt 4 + Vue 3 + Tailwind CSS 打造，採深色主題與滾動顯現動效呈現。

**線上網址：** [aeropulse.enzycode.com](https://aeropulse.enzycode.com/)

## 技術棧

- [Nuxt 4](https://nuxt.com/) — Vue 全端框架
- [Vue 3](https://vuejs.org/)（`<script setup>` + TypeScript）
- [Tailwind CSS](https://tailwindcss.com/)（透過 `@nuxtjs/tailwindcss`）
- IntersectionObserver 實作的自訂滾動顯現效果（[useScrollReveal](app/composables/useScrollReveal.ts)）

## 專案結構

```
app/
├── components/
│   ├── about/         # 關於我頁面專用元件（ProfileCard、ToolkitCard、LifecycleStep）
│   ├── sections/       # 各頁主要區塊（Hero、About、Projects）
│   ├── shared/         # 共用元件（SectionHeading、CopyrightNotice）
│   ├── AppHeader.vue   # 頂部導覽列
│   └── AppFooter.vue   # 頁尾
├── composables/
│   └── useScrollReveal.ts
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue       # 首頁
│   ├── about.vue       # 關於我
│   └── projects.vue    # 專案作品
└── assets/css/main.css
```

## 開發

安裝依賴：

```bash
npm install
```

啟動開發伺服器（預設 `http://localhost:3000`）：

```bash
npm run dev
```

## 建置與預覽

```bash
# 建置正式環境
npm run build

# 本機預覽建置結果
npm run preview

# 產生靜態網站
npm run generate
```

更多部署細節請參考 [Nuxt 部署文件](https://nuxt.com/docs/getting-started/deployment)。
