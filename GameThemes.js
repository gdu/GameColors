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

        /* ---- 海雾青：深底青灰 + 明亮蓝青,适合工具/Dev 界面 ---- */
        oceanic: {
            id: 'oceanic',
            title: '海雾青',
            scene: '<b>深底青灰 · 高可读</b> — 低视觉疲劳 · 适合控制台/编辑器/Dev 工具面板',
            dots: ['#0f172a', '#38bdf8', '#10b981'],
            accentKeys: ['accentCyan', 'accentGreen', 'accentOrange'],
            accentLabels: ['青', '翠', '橙'],
            primaryFg: '#0f172a',

            colors: {
                /* 底：蓝调深灰 */
                bgPrimary:    '#0b1120',
                bgSecondary:  '#0f172a',
                panelBg:      '#131c2e',
                cardBg:       '#182238',
                elevatedBg:   '#1e2a42',
                border:       '#0a0f1a',

                /* 主色：天蓝青 */
                primary:        '#38bdf8',
                primaryHover:  '#7dd3fc',
                primaryPress:  '#0ea5e9',
                primaryBorder: '#0369a1',

                /* 辅助色：更深蓝 */
                accent:       '#3b82f6',
                accentPress:  '#2563eb',
                accentLight:  '#1e3a5f',

                /* 文本：冷白 */
                textPrimary:    '#f1f5f9',
                textSecondary:  '#94a3b8',
                textTertiary:   '#475569',
                textHighlight:  '#7dd3fc',

                /* 功能 */
                success: '#10b981',
                warning: '#f59e0b',
                danger:  '#ef4444',

                /* 点缀 */
                accentPurple: '#a78bfa',
                accentPink:   '#f472b6',
                accentCyan:   '#22d3ee',
                accentGreen:  '#34d399',
                accentOrange: '#fb923c',

                /* 稀有度 */
                rarityCommon:    '#475569',
                rarityUncommon:  '#34d399',
                rarityRare:      '#38bdf8',
                rarityEpic:      '#a78bfa',
                rarityLegendary: '#fb923c',
                rarityMythic:    '#ef4444',

                /* 数值反馈 */
                fbDamage:  '#f1f5f9',
                fbCrit:    '#fde047',
                fbHeal:    '#34d399',
                fbExp:     '#a78bfa',
                fbGold:    '#fb923c',
                fbMedalGold:   '#facc15',
                fbMedalSilver: '#cbd5e1',
                fbMedalBronze: '#d97706',
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
                        ['全局背景',  c.bgPrimary,    autoFg(c.bgPrimary),    'bgPrimary'],
                        ['次深背景',  c.bgSecondary,  autoFg(c.bgSecondary),  'bgSecondary'],
                        ['面板底图',  c.panelBg,      autoFg(c.panelBg),      'panelBg'],
                        ['卡片底图',  c.cardBg,       autoFg(c.cardBg),       'cardBg'],
                        ['硬边框',    c.border,       autoFg(c.border),       'border'],
                        ['禁用底',    c.textTertiary, autoFg(c.textTertiary), 'disabledBg'],
                    ]
                },
                {
                    title: '主色 · 主要按钮', usage: '确认/主要操作',
                    items: [
                        ['常态',     c.primary,       t.primaryFg, 'primary'],
                        ['悬浮',     c.primaryHover,  t.primaryFg, 'primaryHover'],
                        ['按下',     c.primaryPress,  t.primaryFg, 'primaryPress'],
                        ['阴影/边框', c.primaryBorder, autoFg(c.primaryBorder), 'primaryBorder'],
                    ]
                },
                {
                    title: '辅助色 · 次要按钮', usage: '取消/次要操作',
                    items: [
                        ['常态',      c.accent,      autoFg(c.accent),      'accent'],
                        ['按下',      c.accentPress, autoFg(c.accentPress), 'accentPress'],
                        ['浅底/选中', c.accentLight, autoFg(c.accentLight), 'accentLight'],
                    ]
                },
                {
                    title: '文本 & 功能色', usage: '内容文字、状态提示',
                    items: [
                        ['主文字',   c.textPrimary,   autoFg(c.textPrimary),   'textPrimary'],
                        ['次要文字', c.textSecondary, autoFg(c.textSecondary), 'textSecondary'],
                        ['高亮数值', c.textHighlight, autoFg(c.textHighlight), 'textHighlight'],
                        ['成功',     c.success,       autoFg(c.success),       'success'],
                        ['警告',     c.warning,       autoFg(c.warning),       'warning'],
                        ['危险',     c.danger,        autoFg(c.danger),        'danger'],
                    ]
                },
                {
                    title: '点缀色', usage: '稀有度、特效标记',
                    items: (() => {
                        const keys = t.accentKeys;
                        const labels = t.accentLabels;
                        return labels.map((lab, i) => {
                            const k = keys[i];
                            return [lab, c[k], autoFg(c[k]), k];
                        });
                    })()
                },
                {
                    title: '稀有度 / 品级', usage: '装备·卡牌·抽卡',
                    items: [
                        ['普通 Common',    c.rarityCommon,    autoFg(c.rarityCommon),    'rarityCommon'],
                        ['优秀 Uncommon',  c.rarityUncommon,  autoFg(c.rarityUncommon),  'rarityUncommon'],
                        ['稀有 Rare',      c.rarityRare,      autoFg(c.rarityRare),      'rarityRare'],
                        ['史诗 Epic',      c.rarityEpic,      autoFg(c.rarityEpic),      'rarityEpic'],
                        ['传说 Legendary', c.rarityLegendary, autoFg(c.rarityLegendary), 'rarityLegendary'],
                        ['神话 Mythic',    c.rarityMythic,    autoFg(c.rarityMythic),    'rarityMythic'],
                    ]
                },
                {
                    title: '战斗数值反馈', usage: '飘字·提示',
                    items: [
                        ['普通伤害', c.fbDamage,      autoFg(c.fbDamage),      'fbDamage'],
                        ['暴击伤害', c.fbCrit,        autoFg(c.fbCrit),        'fbCrit'],
                        ['治疗回复', c.fbHeal,        autoFg(c.fbHeal),        'fbHeal'],
                        ['经验获得', c.fbExp,         autoFg(c.fbExp),         'fbExp'],
                        ['金币/资源', c.fbGold,       autoFg(c.fbGold),       'fbGold'],
                        ['金牌',     c.fbMedalGold,   autoFg(c.fbMedalGold),   'fbMedalGold'],
                        ['银牌',     c.fbMedalSilver, autoFg(c.fbMedalSilver), 'fbMedalSilver'],
                        ['铜牌',     c.fbMedalBronze, autoFg(c.fbMedalBronze), 'fbMedalBronze'],
                    ]
                },
            ],

            preview: {
                bg:           c.panelBg,
                text:       { primary: c.textPrimary, secondary: c.textSecondary, highlight: c.textHighlight },
                primary:    { bg: c.primary,      fg: t.primaryFg },
                primaryHover:{ bg: c.primaryHover, fg: t.primaryFg },
                accent:     { bg: c.accent,       fg: autoFg(c.accent) },
                disabled:   { bg: c.textTertiary, fg: autoFg(c.textTertiary) },
                success:    { bg: c.success,      fg: autoFg(c.success) },
                warning:    { bg: c.warning,      fg: autoFg(c.warning) },
                danger:     { bg: c.danger,       fg: autoFg(c.danger) },
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

    /** 按底色亮度自动返回可读的黑/白前景色 */
    function autoFg(hex) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(ch => ch + ch).join('');
        const r = parseInt(hex.substr(0, 2), 16) / 255;
        const g = parseInt(hex.substr(2, 2), 16) / 255;
        const b = parseInt(hex.substr(4, 2), 16) / 255;
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return lum > 0.55 ? '#18181b' : '#F5F5F5';
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
