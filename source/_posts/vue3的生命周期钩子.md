---
title: vue3的生命周期钩子
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: vue3的生命周期钩子
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201227213102.png'
date: 2020-12-27 21:28:58
---

> vue3的生命周期钩子与vue2的差不多，只是命名和调用上有一些诧异，详见下文

# 与 2.x 版本生命周期相对应的 Composition API

| Vue 2.x | Vue 3.x
|---|---
| ~~beforeCreate~~ | 改用 setup()
| ~~created~~ | 改用 setup()
| beforeMount | onBeforeMount
| mounted | onMounted
| beforeUpdate | onBeforeUpdate
| updated | onUpdated
| beforeDestroy | onBeforeUnmount
| destroyed | onUnmounted
| errorCaptured | onErrorCaptured


# 新增的钩子函数

除了和 2.x 生命周期等效项之外，Composition API 还提供了以下调试钩子函数：

- onRenderTracked
- onRenderTriggered


# 祝君无Bug~