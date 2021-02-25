---
title: 安卓微信浏览器中type=file的input框无法使用
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: 安卓微信浏览器中type=file的input框无法使用
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210225125447.png'
date: 2021-01-17 19:35:03
---

> 如果使用html的input框设为`type=file`来选择文件，在安卓的微信中打开页面时，会提示`暂无可使用应用`等错误提示

# 解决方案

若要选择图片，需将input框的accept属性设为`image/*`；若要选择文件，需将此属性设为` `空

```html
<input
  v-show="false"
  :ref="el => { if (el) uploadRefs = el }"
  type="file"
  :accept="acceptFileTypeArr"
  @change="handleUploadFunc"
/>
```
```js
const acceptFileTypeArr: any = computed(() => { // 当前支持上传类型
  if (uploadType.value === 'image') {
    return 'image/*';
  }
  if (uploadType.value === 'file') {
    return '';
  }
  return '';
});
```


# 祝君无Bug~