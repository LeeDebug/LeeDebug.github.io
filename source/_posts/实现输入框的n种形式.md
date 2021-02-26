---
title: 实现输入框的n种形式
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: 实现输入框的n种形式
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210226125630.png'
date: 2021-02-10 22:19:34
---

> 开发过程中遇到的新方案

# textarea

最常见的就是这种形式，不多赘述。代码如下

但要展示带html元素的内容，可能就不是那么方便了

```html
<textarea
  id="sendMsgBox"
  class="sendMsgBox"
  ref="sendMsgBox"
  row="3"
  maxlength="1000"
  v-model="sendContent"
  :readonly="cantOperate"
  :placeholder="getPlaceholder"
  @blur="handleBlurFun"
  @focus="handleFocusFun"
  @keydown="handleKeyDown($event)"
  :style="{ 'height': textareHeight }"
></textarea>
```

# pre标签

`contenteditable`属性会将该段落变为可编辑状态，如同直接用vue的`v-html`展示。代码如下

```html
<pre contenteditable="true">
  可以直接在这里输入.....
</pre>
```


# 祝君无Bug~