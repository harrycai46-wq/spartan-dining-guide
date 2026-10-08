# Spartan Dining Guide

A student-built guide to eight residential dining halls at Michigan State University. Compare dining halls by building, campus area, atmosphere, regular hours, and dietary options.

## Features

- Official MSU photographs, with source links in the detail view
- Residence hall names and street addresses
- Campus position overview and building-specific MSU map links
- Search by dining hall, building, address, or feature
- Dining hall filters, recommendations, and comparison of up to three halls
- Responsive layout for desktop and mobile

## Run locally

Open `index.html` in a modern browser. No dependency installation or build step is required. You can also open the folder in Visual Studio Code and use Live Preview.

Photos and official menus/maps require an internet connection.

## Project structure

```text
index.html  Page structure
styles.css Styling and responsive layout
app.js     Dining data and interactive features
README.md  Project documentation
```

## Data and sources

Dining names and regular hours are based on [MSU Eat at State](https://eatatstate.msu.edu/dining-hall-hours). Building information comes from [MSU Live On](https://liveon.msu.edu/neighborhoods) and [MSU Campus Maps](https://maps.msu.edu/interactive/). Photograph attribution is included in each dining hall's details.

The campus overview shows relative building positions, not entrance-level directions. Check the official map for routes and entrances. Opening status is calculated from the stored regular schedule; holidays and special hours may differ. Atmosphere, quietness, variety, and study scores are prototype estimates pending student surveys and campus visits.

This is an independent student project, not affiliated with Michigan State University. Linked photographs remain the property of their respective rights holders.

## 中文说明

这是 MSU 食堂选择工具的前端原型，包含 8 个食堂的照片、楼名、地址、位置示意、筛选、推荐及对比功能。双击 `index.html` 即可运行，也可以通过 VS Code Live Preview 预览。环境评分是原型编辑数据，营业状态依据保存的常规时间表计算。
