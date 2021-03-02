---
title: linear-gradient函数实现线性渐变
categories:
  - CSS
tags:
  - CSS
keywords: CSS
description: linear-gradient函数实现线性渐变
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210302102414.png'
date: 2021-02-21 10:23:14
---

> 当tab标签超出滚动时，在侧边增加一个渐变透明的框，会使视觉上更加明显，让用户感知到该处可以滑动

# 效果对比展示

原本样式：

![原本样式](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210302103343.png)

增加渐变的透明框后的样式：

![增加渐变的透明框后的样式](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210302103521.png)

滚动后的效果：

![滚动后的效果](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210302103619.png)


# 可滑动的tab标签

```css
/* 超出部分可所有滑动 */
.tab_scroll {
  display: -webkit-box;
  overflow: auto;
}
/* 隐藏滚轮 */
.tab_scroll::-webkit-scrollbar {
  display: none;
}
```


# 渐变透明的小方块

```css
.tab_scroll:before {
  content: '';
  position: absolute;
  right: 0;
  float: right;
  /* border: 1px solid red; */
  height: 66px;
  width: 60px;
  background: linear-gradient(to right, transparent, white);
}
```


# 祝君无Bug~