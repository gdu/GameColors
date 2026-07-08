# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

独立游戏 UI 配色参考工具，单文件（`index.html`），CSS 和 JS 全部内嵌，无构建、无依赖。

浏览器直接打开 `index.html` 即可使用。也托管在 GitHub Pages 上。

## 架构

用纯数组/对象定义配色数据，通过 DOM 操作渲染。分三层：

1. **配色方案数据**（`schemes` 数组）— 3 套游戏配色（暖橙休闲、暗金像素、冷色专业），每套包含若干分组，每组为 `[名称, hex, 前景色]` 的色块列表。部分色块有第 4 个布尔标记表示文本/功能色。
2. **通用系统色**（`rarityColors`、`feedbackColors` 数组）— 跨游戏类型通用的稀有度色阶和战斗数值反馈色。
3. **渲染层** — `renderSwatchGrid()` 负责通用色区域，配色面板、标签页、预览区通过遍历 `schemes` 动态拼接 HTML 生成。

主要功能：
- `switchScheme()` 切换标签页
- 点击 `.swatch` 复制 hex 值（事件委托）
- `exportTs()` / `exportCsharp()` 导出代码常量，遇到同名 key 自动加分組前缀去重
- 每个色块显示 WCAG 对比度（`hexToLinear` / `contrastRatio` / `ratioHTML`），低于 4.5:1 红色警示
- 每套方案的组合预览区含：按钮、标签、HP/MP 进度条、资源计数、输入框、文字层级
