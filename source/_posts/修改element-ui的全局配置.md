---
title: 修改element-ui的全局配置
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: 修改element-ui的全局配置
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210225125906.png'
date: 2021-01-26 23:44:41
---

> 项目因使用qiankun嵌入了子项目，且都使用了`element-ui`的弹窗样式，遂导致子应用中插入到父应用body的弹窗因层级过低无法展示

# 配置信息

因`element-ui`的弹窗默的`z-index层级`默认是从`2000`开始的，并且打开多个弹窗时`z-index`会逐步递增，所以若主子应用不做区分的话，很可能会导致有的弹窗被遮挡

好在element提供了入口可将全局的弹窗层级设置一个起始值，即只需将子应用的层级初始值调高即可

```js
// 在main.ts中
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, {
  size: 'small', // 组件的默认尺寸 mini、small、medium
  zIndex: 3000 // 弹窗默认层级初始值，默认2000
});
```


# 祝君无Bug~