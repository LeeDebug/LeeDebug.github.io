---
title: node打包内存溢出
categories:
  - Webpack
tags:
  - Webpack
keywords: Webpack
description: node打包内存溢出
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201211230124.png'
date: 2020-12-11 22:55:31
---

> vue项目利用webpack打包时提示内存堆栈溢出

# 报错信息

```bash
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

# 解决方案

在build前，根据自己的项目大小设置一下最大分配内存空间，即可。

```js
// 在package.json中
"scripts": {
  ...
  "build": "node --max_old_space_size=4096 build/build.js"
}
```

# 祝君无Bug~