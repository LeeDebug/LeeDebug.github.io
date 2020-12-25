---
title: 中央事件总线插件vue-bus-ts
categories:
  - Vue
tags:
  - Vue
keywords: vue插件,事件总线
description: 描述
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111165942.png
date: 2020-11-07 18:28:46
---

> 项目中难免会遇到非父子组件之间的传参与通信问题，遂整理此文。

# 简介
[vue-bus-ts](https://github.com/wowill/vue-event-bus) 是一款支持在ts环境下使用的全局事件总线插件。

# 安装及使用方法

## 安装

```zsh
npm i -S vue-bus-ts
```

## 注册

安装后需要在main.ts中引入并注册，挂载到全局的Vue实例上即可

```js
# main.ts

import Vue from 'vue';
import EventBus from 'vue-bus-ts';

Vue.use(EventBus);
var bus = new EventBus.Bus();

new Vue({
  bus,
  render: (h) => h(App),
}).$mount('#app');
```

## 注册事件

在调用事件前，需要实现注册该事件，否则不会生效

一般写在vue文件的mounted或者created生命周期中

```js
# *.vue
  
var eventId = this.$bus.$on('event_name', function (params: any) {
  // params is the parameter passed in by $emit
  // do something...
})
```

## 调用事件

注册成功后，打印`this.$bus`即可看到当前的事件总线实例，下面为调用的方法

```js
# *.vue
// params can pass in any form of value, including Array, Object, String, Number, null, undefined or even array expansion items.or example, 

var eventResult = this.$bus.$emit('event_name', params)

1. var result = this.$bus.$emit('event_name', [1,2,3])
2. var result = this.$bus.$emit('event_name', {})
3. var result = this.$bus.$emit('event_name', 'string')
4. let a = 1, b = 'test', c = [1, 2, 3], d = {a: 'test'}
    var result = this.$bus.$emit('event_name', a, b ,c, d)
5. var result = this.$bus.$emit('event_name', null)
6. var result = this.$bus.$emit('event_name')
```

## 注销事件

如果不注销的话，下一次`$on`注册同一个事件时，会生成两个相同的事件，调用时会触发n次。所以建议在离开当前页面或当前模块时注销该事件，即写在`beforeRouterLeave`中（如果开启了keep-alive，可写在deactivated中）。

```js
# *.vue

this.$bus.$off('event_name', eventId) // To unbind event binding, eventId is the return value of this.$bus.$on 
```

## 订阅事件？

```js
# *.vue

let result = this.$bus.$subscribed('event_name')
if (result) {
  // do something...
}
```

# 祝君无Bug~