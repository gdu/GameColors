/* ================================================================
   GameThemes.js — 颜色方案唯一真源（Single Source of Truth）

   两个页面共享此文件：
     · index.html        配色板展示 / 导出  → GameThemes.indexScheme(id)
     · ui-showcase.html   界面模板预览      → GameThemes.cssVariables(id)

   新增 / 修改配色方案只需改这里，两边自动同步。
   ================================================================ */
window.GameThemes = (function () {

    /* -------------------------------------------------------------
       语义色板定义（所有页面可见的显式 hex 值都写在这里）
       ------------------------------------------------------------- */
    const themes = {

        darkgold: {
            id: 'darkgold',
            title: '经典',
            scene: '<b>低明度 · 暖对比</b> — 暗底金边、强氛围',
            dots: ['#262329', '#FFC848', '#2FB8C4'],
            accentKeys: ['accentPurple', 'accentPink', 'accentCyan'],
            accentLabels: ['紫', '粉', '青'],
            primaryFg: '#3A2400',

            colors: {
                /* 中性底 */
                bgPrimary:    '#121014',
                bgSecondary:  '#1C1A1F',
                panelBg:      '#262329',
                cardBg:       '#322E35',
                elevatedBg:   '#3D3840',
                border:       '#17140F',

                /* 主色 · 暖金 */
                primary:        '#FFC848',
                primaryHover:   '#FFEE79',
                primaryPress:   '#FDA500',
                primaryBorder:  '#9A5400',

                /* 辅助色 · 青绿 */
                accent:       '#2FB8C4',
                accentPress:  '#1F8A93',
                accentLight:  '#BEF2F2',

                /* 文本 */
                textPrimary:    '#FFFFF6',
                textSecondary:  '#DAD7C9',
                textTertiary:   '#8A8A94',
                textHighlight:  '#FAFCA0',

                /* 功能 */
                success: '#1CA455',
                warning: '#DFC50B',
                danger:  '#DA1625',

                /* 点缀 */
                accentPurple: '#AF77F9',
                accentPink:   '#F77DB7',
                accentCyan:   '#75E2EF',

                /* 稀有度 */
                rarityCommon:    '#8A8A94',
                rarityUncommon:  '#3DDC5C',
                rarityRare:      '#3E9CFF',
                rarityEpic:      '#AF77F9',
                rarityLegendary: '#E8871E',
                rarityMythic:    '#E8342B',

                /* 数值反馈 */
                fbDamage:  '#FFFFF6',
                fbCrit:    '#FFE873',
                fbHeal:    '#1CA455',
                fbExp:     '#AF77F9',
                fbGold:    '#FAFCA0',
                fbMedalGold:   '#D4A017',
                fbMedalSilver: '#C0C0C0',
                fbMedalBronze: '#B8732A',
            }
        },

        /* ---- 复古：NES 有限调色板 ---- */
        nes: {
            id: 'nes',
            title: '复古',
            scene: '<b>有限调色板 · 高对比</b> — 像素 / 平台跳跃 / 弹幕射击 · NES 时代风味',
            dots: ['#1A1C2C', '#F8D000', '#20C8F8'],
            accentKeys: ['accentCyan', 'accentBlue', 'accentPurple'],
            accentLabels: ['NES 青', 'NES 蓝', 'NES 紫'],
            primaryFg: '#1A1C2C',

            colors: {
                /* 底：经典 NES 深蓝黑（横版游戏最常见的背景色） */
                bgPrimary:    '#0F0F1B',
                bgSecondary:  '#1A1C2C',
                panelBg:      '#23253A',
                cardBg:       '#2D3049',
                elevatedBg:   '#383B58',
                border:       '#08080F',

                /* 主色：金币黄 / 马里奥红都可选 — 这里用高饱金币黄 */
                primary:        '#F8D000',
                primaryHover:  '#FCE46C',
                primaryPress:  '#C8A800',
                primaryBorder: '#7A6400',

                /* 辅助色：NES 青（天空 / 水面） */
                accent:       '#20C8F8',
                accentPress:  '#18A0C8',
                accentLight:  '#B8E8F8',

                /* 文本：偏暖白避开纯蓝感 */
                textPrimary:    '#FCFCFC',
                textSecondary:  '#B8B8C8',
                textTertiary:  '#686880',
                textHighlight:  '#F8D000',

                /* 功能 */
                success: '#3CBC3C',
                warning: '#F8D000',
                danger:  '#F83800',

                /* 点缀 */
                accentPurple: '#A854F8',
                accentPink:   '#F878B8',
                accentCyan:   '#20C8F8',
                accentBlue:   '#3858F8',

                /* 稀有度 */
                rarityCommon:    '#7C7C7C',
                rarityUncommon:  '#3CBC3C',
                rarityRare:      '#3858F8',
                rarityEpic:      '#A854F8',
                rarityLegendary: '#F8B800',
                rarityMythic:    '#F83800',

                /* 数值反馈 */
                fbDamage:  '#FCFCFC',
                fbCrit:    '#F8D000',
                fbHeal:    '#3CBC3C',
                fbExp:     '#A854F8',
                fbGold:    '#F8D000',
                fbMedalGold:   '#F8B800',
                fbMedalSilver: '#B8B8B8',
                fbMedalBronze: '#D87838',
            }
        },

        /* ---- 羊皮纸：暖棕 + 米色 ---- */
        parchment: {
            id: 'parchment',
            title: '羊皮纸',
            scene: '<b>暖棕 · 羊皮纸</b> — 奇幻 RPG · 冒险 · 桌游感 · 手绘沉浸',
            dots: ['#3A2A18', '#C89048', '#E8D5B8'],
            accentKeys: ['accentCyan', 'accentBlue', 'accentPurple'],
            accentLabels: ['青釉', '靛蓝', '暗紫'],
            primaryFg: '#2A1A08',

            colors: {
                /* 底：皮革棕 / 古木箱 */
                bgPrimary:    '#2A1E12',
                bgSecondary:  '#3A2A18',
                panelBg:      '#4A3622',
                cardBg:       '#5C442C',
                elevatedBg:   '#6E5236',
                border:       '#1A1008',

                /* 主色：古董金 / 黄铜（挂毯镶边、封印常用色） */
                primary:        '#C89048',
                primaryHover:  '#E0A858',
                primaryPress:  '#A07030',
                primaryBorder: '#6A4018',

                /* 辅助色：旧木棕 */
                accent:       '#8B5E3C',
                accentPress:  '#6B4A2C',
                accentLight:  '#E8D5B8',

                /* 文本：羊皮纸米白（旧纸张受黄） */
                textPrimary:    '#F0E0C8',
                textSecondary:  '#C8B490',
                textTertiary:   '#8A7558',
                textHighlight:  '#E8C848',

                /* 功能：取自然意象（苔藓绿、琥珀警告、干血红） */
                success: '#7A9A4C',
                warning: '#D8A030',
                danger:  '#B8402C',

                /* 点缀 */
                accentPurple: '#8B6B9A',
                accentPink:   '#C8887A',
                accentCyan:   '#6A9AAA',
                accentBlue:   '#5A7AAA',

                /* 稀有度（哑光、做旧感） */
                rarityCommon:    '#8A7558',
                rarityUncommon:  '#7A9A4C',
                rarityRare:      '#5A7AAA',
                rarityEpic:      '#8B6B9A',
                rarityLegendary: '#C89048',
                rarityMythic:    '#B8402C',

                /* 数值反馈 */
                fbDamage:  '#F0E0C8',
                fbCrit:    '#E8C848',
                fbHeal:    '#7A9A4C',
                fbExp:     '#8B6B9A',
                fbGold:    '#E8C848',
                fbMedalGold:   '#C89048',
                fbMedalSilver: '#A89878',
                fbMedalBronze: '#9A6838',
            }
        },
    };

    /* -------------------------------------------------------------
       内部：将语义 hex 值映射到 index.html 的 groups 预览格式
       ------------------------------------------------------------- */
    function buildIndexScheme(id) {
        const t = themes[id];
        if (!t) return null;
        const c = t.colors;

        return {
            id:     t.id,
            title:  t.title,
            scene:  t.scene,
            groups: [
                {
                    title: '中性色阶 · 背景/面板', usage: '全局底色、卡片容器',
                    items: [
                        ['全局背景',  c.bgPrimary,    '#FFFFF6', 'bgPrimary'],
                        ['次深背景',  c.bgSecondary,  '#FFFFF6', 'bgSecondary'],
                        ['面板底图',  c.panelBg,      '#FFFFF6', 'panelBg'],
                        ['卡片底图',  c.cardBg,       '#FFFFF6', 'cardBg'],
                        ['硬边框',    c.border,       '#FFFFF6', 'border'],
                        ['禁用底',    c.textTertiary, '#1A201D', 'disabledBg'],
                    ]
                },
                {
                    title: '主色 · 主要按钮', usage: '确认/主要操作',
                    items: [
                        ['常态',     c.primary,       t.primaryFg, 'primary'],
                        ['悬浮',     c.primaryHover,  t.primaryFg, 'primaryHover'],
                        ['按下',     c.primaryPress,  t.primaryFg, 'primaryPress'],
                        ['阴影/边框', c.primaryBorder, '#fff',      'primaryBorder'],
                    ]
                },
                {
                    title: '辅助色 · 次要按钮', usage: '取消/次要操作',
                    items: [
                        ['常态',      c.accent,      '#fff', 'accent'],
                        ['按下',      c.accentPress, '#fff', 'accentPress'],
                        ['浅底/选中', c.accentLight, '#12474C', 'accentLight'],
                    ]
                },
                {
                    title: '文本 & 功能色', usage: '内容文字、状态提示',
                    items: [
                        ['主文字(暖白)', c.textPrimary,   '#354048', 'textPrimary'],
                        ['次要文字',     c.textSecondary, '#354048', 'textSecondary'],
                        ['高亮数值',     c.textHighlight, '#354048', 'textHighlight'],
                        ['成功',         c.success,       '#fff',   'success'],
                        ['警告',         c.warning,       '#3A2400', 'warning'],
                        ['危险',         c.danger,        '#fff',   'danger'],
                    ]
                },
                {
                    title: '点缀色', usage: '稀有度、特效标记',
                    items: (() => {
                        const keys = t.accentKeys;
                        const labels = t.accentLabels;
                        // 紫 / 蓝 / 青 共用：紫色在深底上配白字，青/蓝配深色
                        const fgs = { accentPurple: '#fff', accentPink: '#fff', accentCyan: '#0F1B1D', accentBlue: '#fff' };
                        return labels.map((lab, i) => {
                            const k = keys[i];
                            return [lab, c[k], fgs[k] || '#fff', k];
                        });
                    })()
                },
                {
                    title: '稀有度 / 品级', usage: '装备·卡牌·抽卡',
                    items: [
                        ['普通 Common',    c.rarityCommon,    '#fff',    'rarityCommon'],
                        ['优秀 Uncommon',  c.rarityUncommon,  '#0a2e12', 'rarityUncommon'],
                        ['稀有 Rare',      c.rarityRare,      '#fff',    'rarityRare'],
                        ['史诗 Epic',      c.rarityEpic,      '#fff',    'rarityEpic'],
                        ['传说 Legendary', c.rarityLegendary, '#3a2400', 'rarityLegendary'],
                        ['神话 Mythic',    c.rarityMythic,    '#fff',    'rarityMythic'],
                    ]
                },
                {
                    title: '战斗数值反馈', usage: '飘字·提示',
                    items: [
                        ['普通伤害', c.fbDamage,      '#333',    'fbDamage'],
                        ['暴击伤害', c.fbCrit,        '#402d00', 'fbCrit'],
                        ['治疗回复', c.fbHeal,        '#fff',    'fbHeal'],
                        ['经验获得', c.fbExp,         '#fff',    'fbExp'],
                        ['金币/资源', c.fbGold,       '#402d00', 'fbGold'],
                        ['金牌',     c.fbMedalGold,   '#3a2c00', 'fbMedalGold'],
                        ['银牌',     c.fbMedalSilver, '#333',    'fbMedalSilver'],
                        ['铜牌',     c.fbMedalBronze, '#fff',    'fbMedalBronze'],
                    ]
                },
            ],

            preview: {
                bg:           c.panelBg,
                text:       { primary: c.textPrimary, secondary: c.textSecondary, highlight: c.textHighlight },
                primary:    { bg: c.primary,      fg: t.primaryFg },
                primaryHover:{ bg: c.primaryHover, fg: t.primaryFg },
                accent:     { bg: c.accent,       fg: '#fff' },
                disabled:   { bg: c.textTertiary, fg: '#1A201D' },
                success:    { bg: c.success,      fg: '#fff' },
                warning:    { bg: c.warning,      fg: t.primaryFg },
                danger:     { bg: c.danger,       fg: '#fff' },
                card:       { bg: c.cardBg,       border: c.border },
                input:      { bg: 'rgba(128,128,128,0.08)', border: 'rgba(128,128,128,0.2)' },
            },
        };
    }

    /* -------------------------------------------------------------
       内部：将语义 hex 值映射到 CSS 自定义属性（ui-showcase 使用）
       ------------------------------------------------------------- */
    function buildCssVars(id) {
        const t = themes[id];
        if (!t) return {};
        const c = t.colors;

        // 主色按钮文字色 — 每套方案自定义（保证在主色上的可读性）
        const primaryFg = t.primaryFg || '#3A2400';

        const vars = {
            '--bg-primary':    c.bgPrimary,
            '--bg-secondary':  c.bgSecondary,
            '--bg-panel':      c.panelBg,
            '--bg-card':       c.cardBg,
            '--bg-elevated':   c.elevatedBg,
            '--border':        c.border,
            '--border-soft':   'rgba(255,255,255,0.06)',
            '--border-gold':   hexToRgba(c.primary, 0.25),

            '--primary':        c.primary,
            '--primary-hover':  c.primaryHover,
            '--primary-press':  c.primaryPress,
            '--primary-border': c.primaryBorder,
            '--primary-glow':   hexToRgba(c.primary, 0.15),
            '--primary-fg':     primaryFg,

            '--accent':        c.accent,
            '--accent-press':  c.accentPress,
            '--accent-light':  c.accentLight,

            '--text-primary':    c.textPrimary,
            '--text-secondary':  c.textSecondary,
            '--text-tertiary':   c.textTertiary,
            '--text-highlight':  c.textHighlight,

            '--success': c.success,
            '--warning': c.warning,
            '--danger':  c.danger,

            '--purple': c.accentPurple,
            '--pink':   c.accentPink,
            '--cyan':   c.accentCyan,

            '--rarity-common':    c.rarityCommon,
            '--rarity-uncommon':  c.rarityUncommon,
            '--rarity-rare':      c.rarityRare,
            '--rarity-epic':      c.rarityEpic,
            '--rarity-legendary': c.rarityLegendary,
            '--rarity-mythic':    c.rarityMythic,
        };
        return vars;
    }

    /** 把 #rrggbb 变成 rgba(r,g,b,a) 字符串 */
    function hexToRgba(hex, a) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(ch => ch + ch).join('');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        return `rgba(${r},${g},${b},${a})`;
    }

    /* -------------------------------------------------------------
       公共 API
       ------------------------------------------------------------- */
    return {

        /** 返回所有主题 id 的数组 */
        ids: function () {
            return Object.keys(themes);
        },

        /** 返回所有主题元信息（id、title、scene、dots）*/
        list: function () {
            return Object.values(themes).map(t => ({
                id: t.id, title: t.title, scene: t.scene, dots: t.dots,
            }));
        },

        /** 取单个主题的原始语义色板 */
        raw: function (id) {
            return themes[id] || null;
        },

        /** index.html 用：返回完整的 schemes 兼容格式（含 groups + preview）*/
        indexScheme: function (id) {
            return buildIndexScheme(id);
        },

        /** ui-showcase.html 用：返回 {CSS 变量名: 值} 平面对象 */
        cssVariables: function (id) {
            return buildCssVars(id);
        },
    };
})();
