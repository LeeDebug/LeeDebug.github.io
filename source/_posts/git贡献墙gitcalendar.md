---
title: git贡献墙gitcalendar
categories:
  - 前端
  - Git
tags:
  - 前端
keywords: 前端
description: git贡献墙gitcalendar
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201214124257.png'
date: 2020-12-14 12:40:34
---

> 公司为了访问便捷，大都使用gitlab或gitee，所以前两年的贡献度都在这两个仓库上。从今年打算转战github，多做项目、多做整理、多输出文章，旨在提升自己。所以本文的git贡献墙也以github为例

# 诸多解决方案

## Github Official API

参考地址：
- [github的贡献墙自带的request](https://github.com/users/LeeDebug/contributions?from=2019-12-01&to=2019-12-14)

优势：
- 官方的

缺点：
- 速度慢
- 不稳定，可能会挂
- 单纯的canvas
- 没有可读数据

## Github Chart API

参考地址：
- [github repo](https://github.com/2016rshah/githubchart-api)
- [online demo](https://ghchart.rshah.org/)

优势：
- 实时性好，与官网同步

缺点：
- 速度慢
- 不稳定，可能会挂
- 单纯的canvas
- 没有可读数据

## github-calendar.js

参考地址：
- [github repo](https://github.com/Bloggify/github-calendar)
- [online demo](https://bloggify.github.io/github-calendar/example/)

优势：
- 自带色卡

缺点：
- 作者不维护了

## GitHub Contribution Calendar API

参考地址：
- [github repo](https://github.com/rschristian/github-contribution-calendar-api)
- [online demo](https://githubapi.ryanchristian.dev/user/LeeDebug)

优势：
- 有数据返回，可读信息多

缺点：
- 没有图形化展示
- 实时性差，第二天才更新

## Butterfly-gitcalendar

结合 `github-calendar.js` 和 `GitHub Contribution Calendar API`

参考地址：
- [github repo](https://github.com/Zfour/Butterfly-gitcalendar)
- [online demo](https://zfour.github.io/Butterfly-gitcalendar/index)

优势：
- 自定义样式与弹窗
- 有数据返回，可读信息多
- 汉化

缺点：
- 实时性差，第二天才更新


# 实现方案

本次以最后一种解决方案 `Butterfly-gitcalendar` 为基础，进行了部分更改

后续更新...

```js
// some code
```