# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A standalone HTML color palette tool for indie game UI design. Single file (`game_colors.html`) with embedded CSS and JS. No build step, no dependencies.

Open `game_colors.html` directly in a browser to use.

## Architecture

The JS defines color data as plain arrays/objects, then renders everything via DOM manipulation. Three layers:

1. **Color scheme data** (`schemes` array) — 4 game-specific palettes, each with groups of color items `[name, hex, foreground]`. Some items have a 4th boolean flag for text/functional colors.
2. **Universal system colors** (`rarityColors`, `feedbackColors` arrays) — industry-standard rarity tiers and battle feedback colors shared across all game genres.
3. **Rendering** — `renderSwatchGrid()` for the universal section, inline DOM generation for scheme panels, tabs, and demo previews, all wired up in a single loop over `schemes`.

Features: tab switching via `switchScheme()`, click-to-copy hex via event delegation on `.swatch`, export to TypeScript (`exportTs()`) or C# (`exportCsharp()`) via event delegation on `.export-btn`.
