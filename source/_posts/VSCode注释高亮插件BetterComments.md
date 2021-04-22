---
title: VSCode注释高亮插件 Better Comments
categories:
  - VSCode
tags:
  - VSCode
keywords: VSCode,Better Comments
description: VSCode注释高亮插件 Better Comments
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210422112146.png'
date: 2021-03-25 12:21:54
---

> 本文概要

# 安装插件

打开VSCode的插件市场，搜索`Better Comments`，点击`install`

![插件安装](https://img2020.cnblogs.com/blog/1725797/202007/1725797-20200707222847183-973879171.png)

# 使用

该插件提供5中默认的高亮方式，配置信息如下：

```js
"better-comments.tags": [
  {
    "tag": "!",
    "color": "#FF2D00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "?",
    "color": "#3498DB",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "//",
    "color": "#474747",
    "strikethrough": true,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "todo",
    "color": "#FF8C00",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  },
  {
    "tag": "*",
    "color": "#98C379",
    "strikethrough": false,
    "underline": false,
    "backgroundColor": "transparent",
    "bold": false,
    "italic": false
  }
]
```

效果如下所示：

![](https://img2020.cnblogs.com/blog/1725797/202007/1725797-20200707222904071-401665639.png)

![](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210421182451.jpg)

# 祝君无Bug~