# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供本仓库的指南。

## 项目概览

独立游戏 UI 配色参考工具 + 界面预览模板，纯静态（HTML / CSS / JS 全部内嵌或单文件），无构建、无依赖。

浏览器直接打开即可使用。也托管在 GitHub Pages 上。

## 文件结构

| 文件 | 作用 |
|------|------|
| `GameThemes.js` | **颜色方案唯一真源**（Single Source of Truth），所有配色 hex 值只在此定义一次 |
| `index.html` | 配色板展示、WCAG 对比度、代码导出（TS / C# / CSS / JSON） |
| `ui-showcase.html` | 游戏界面模板预览，可在右上角切换配色方案实时查看效果 |

> 新增 / 修改配色方案只需改 `GameThemes.js`，两个页面自动同步。

## 架构

### 1. 共享色板数据 — `GameThemes.js`

用 IIFE 暴露 `window.GameThemes`，含 2 套配色（`darkgold` 暗金、`emerald` 翡翠），每套含一个扁平 `colors` 对象（37 个语义 hex 键）。对外暴露 3 个 API：

- `GameThemes.indexScheme(id)` → 供 `index.html` 使用，返回 `{ id, title, scene, groups, preview }` 完整格式。其中 `groups` 每项 items 是 `[名称, hex, 前景色, 导出key]` 4 元素列表；`preview` 含 `bg / text / primary / accent / disabled / success / warning / danger / card / input`。
- `GameThemes.cssVariables(id)` → 供 `ui-showcase.html` 使用，返回 `{ '--bg-primary': '#...', ... }` 平面映射（33 个 CSS 自定义属性）。
- `GameThemes.list()` / `GameThemes.ids()` → 供切换器 UI 渲染（id、title、dots）。

### 2. 配色板页面 — `index.html`

从 `GameThemes.ids().map(indexScheme)` 派生 `schemes` 数组，通过 DOM 操作渲染。功能：

- `switchScheme()` 切换标签页
- 点击 `.swatch` / `.strip-chip` 复制 hex 值（事件委托），WCAG 对比度圆点（`contrastRatio` / `contrastDotHtml`），低于 4.5:1 红色警示
- `exportTs()` / `exportCsharp()` / `exportCss()` / `exportJson()` 导出代码常量
- 每套方案的组合预览区含：按钮、标签、HP/MP 进度条、资源计数、输入框、文字层级、物品卡片、提示框

### 3. 界面预览模板 — `ui-showcase.html`

整个 UI 全部用 `var(--xxx)` CSS 自定义属性驱动。右上角固定一个 `.theme-switcher` 玻璃态切换器，通过 `GameThemes.cssVariables(id)` + `document.documentElement.style.setProperty()` 批量更新 `:root` 变量，切换时有 0.25s 平滑过渡。

包含 12 个游戏界面：登录、主界面、任务成就、排行榜、商店、关卡、邮件、聊天、好友、装备 Tips、背包、仓库。

## 修改配色方案时的注意事项

- **改 hex 值**：只改 `GameThemes.js` 中 `themes[id].colors`，`index.html` 的 swatch 颜色和 `ui-showcase.html` 的界面颜色都会自动同步。
- **加新方案**：在 `GameThemes.js` 的 `themes` 对象中新增一个 key（含 `id / title / scene / dots / colors` 全部字段），两个页面会自动出现对应的 Tab / 切换按钮。
- **加新颜色字段**：在 `colors` 中新增 key 后，需同时在 `buildIndexScheme()`（给 index.html 分组）和 `buildCssVars()`（给 ui-showcase.css 变量映射）中引用它。
- **修改预览结构**：`index.html` 的组合预览在 `indexScheme()` 返回的 `preview` 对象中维护；`ui-showcase.html` 的组合预览直接写在 HTML 中。

## 命名约定

- 语义色 key：camelCase（如 `bgPrimary`、`textHighlight`、`rarityLegendary`）
- CSS 变量：kebab-case + `--` 前缀（如 `--bg-primary`、`--text-highlight`）
- UI 模板专用的「主色按钮文字」变量 `--primary-fg` 不直接对应某个语义色，而是按主题 ID 自动派生（暗金用深棕 `#3A2400`，翡翠用深绿 `#072717`）。
