---
title: 加载聊天历史记录并保留滚动条当前位置
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: 加载聊天历史记录并保留滚动条当前位置
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210413164038.png'
date: 2021-03-08 12:35:19
---

> 在聊天框中，加载历史消息肯定是往消息的上面去加载，即对应数组的`Array.unshift()`操作，此时默认滚动条会回到顶部，所以我们需要重置滚动条的位置

# Vue中代码实现

首先记录加载历史前，滚动条的位置`scrollHeight`

```js
const scrollHeight: number = (document as any).getElementById('messageBox').scrollHeight;
```

加载历史消息

```js
for (let i = 0; i < outMsg.list.length; i++) {
  // todo sth, ex: 消息处理
  activeList.unshift(list[i]);
}
```

滚动到原来的位置

注：因为我是在vue环境下，需要确保页面已经渲染完，再滚动到加载前的位置，所以使用`Vue.nextTick()`

```js
nextTick(() => {
  const scrollDom: any = (document as any).getElementById('messageBox');
  scrollDom.scrollTop = (scrollDom.scrollHeight - scrollHeight);
});
```

# jQuery代码实现

原理同上，直接上代码

```js
var scrollHeight = document.getElementById("messageBox").scrollHeight;
$("#messageBox").scrollTop(document.getElementById("messageBox").scrollHeight - scrollHeight);
```

# 祝君无Bug~