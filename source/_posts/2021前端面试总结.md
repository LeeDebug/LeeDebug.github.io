---
title: 2021前端知识点总结
categories:
  - 面试
tags:
  - 面试,Vue,JavaScript
keywords: 面试,Vue,Vue3,JavaScript
description: 2021前端面试总结
cover: 'https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg.png'
date: 2021-05-24 18:17:08
---

<!-- > 从业一年后，临近毕业，遂决定再次跳槽~ -->

# 目录
[TOC]


# JavaScript

001. **啊**
  - 啊

001. **啊**
  - 啊


# Vue 2.x

001. **[BiliBili: Vue 2.x 源码解读(12) —— path阶段](https://www.bilibili.com/video/BV1rQ4y1o7WF/?spm_id_from=333.788.recommend_more_video.1)**
  - Emm...，慢慢看

001. **v-if和v-for哪个优先级更高?如果两个同时出现，应该怎么优化得到更好的性能?**
  - 源码: `compiler/codegen/index.js`
  - 在`Vue 2.x`版本中，`v-if`的优先级大于`v-for`
  - 在`Vue 3.x`版本中，`v-for`的优先级大于`v-if`
  - `render`函数: `with(this){return _c('div', { ... })}`

001. **Vue组件data为什么必须是个函数而Vue的根实例则没有此限制?**
  - 源码: `src\core\instance\state.js - initData()`
  - Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的
  - 采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题
  - 而在Vue根实例创建过程中则不存在该限制，也是因为根实例只能有一个，不需要担心这种情况

001. **你知道vue中key的作用和工作原理吗?说说你对它的理解。**
  - 源码: `src\core\vdom\patch.js - updateChildren()`
  - key的作用主要是为了高效的更新虚拟DOM，其原理是vue在patch过程中通过key可以精准判断两 个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操 作量，提高性能
  - ~~另外，若不设置key还可能在列表更新时引发一些隐蔽的bug（暂时未知）~~
  - vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果

001. **你怎么理解vue中的diff算法?**
  - 源码1: 必要性，`lifecycle.js - mountComponent()`
    - 组件中可能存在很多个data中的key使用
  - 源码2: 执行方式，`patch.js - patchVnode()`
    - patchVnode是diff发生的地方，整体策略: 深度优先，同层比较
  - 源码3: 高效性，`patch.js - updateChildren()`
  - diff算法是虚拟DOM技术的必然产物: 通过新旧虚拟DOM作对比(即diff)，将变化的地方更新在真实DOM上
  - 另外，也需要 diff 高效的执行对比过程，从而降低时间复杂度为O(n)
  - vue 2.x 中为了降低 Watcher 粒度，每个组件只有一个Watcher与之对应，只有引入diff才能精确找到发生变化的地方
  - vue中diff执行的时刻是组件实例执行其更新函数时，它会比对上一次渲染结果oldVnode和新的渲染结果newVnode，此过程称为patch
  - diff过程整体遵循`深度优先、同层比较`的策略;两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作;比较两组子节点是算法的重点，首先假设头尾节点可能相同做`首首、尾尾、首尾、尾首`4次比对尝试，如果没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点;借助key通常可以非常精确找到相同节点，因此整个patch过程非常高效。

001. **谈一谈对vue组件化的理解?**
  - 源码1: 组件定义，`src\core\global-api\assets.js`
    - vue-loader会编译template为render函数，最终导出的依然是组件配置对象
  - 源码2: 组件化优点，`lifecycle.js - mountComponent()`
    - 组件、Watcher、渲染函数和更新函数之间的关系
  - 源码3: 组件化实现: 构造函数，`src\core\global-api\extend.js`、实例化及挂载，`src\core\vdom\patch.js - createElm()`
  - 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用;
  - 组件化开发能大幅提高应用开发效率、测试性、复用性等;
  - 组件使用按分类有: 页面组件、业务组件、通用组件;
  - vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue;
  - vue中常见组件化技术有: 属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等;
  - 合理的划分组件，有助于提升应用性能;
  - 组件应该是高内聚、低耦合的;
  - 遵循单向数据流的原则。

001. **谈一谈对vue设计原则的理解?**
  - 在vue的官网上写着大大的定义和特点: `渐进式JavaScript框架、易用、灵活和高效`

001. **谈谈你对MVC、MVP和MVVM的理解?**
  - 源码: `compiler`

001. **你了解哪些Vue性能优化方法?**
  - 路由懒加载
  - keep-alive缓存页面
  - 使用v-show复用DOM
  - v-for 遍历避免同时使用 v-if
  - 长列表性能优化，静态列表：`list = Object.freeze([])`
  - 虚拟滚动：[vxe-table](https://github.com/x-extends/vxe-table)
  - 事件的销毁，Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。`beforeDestroy() { clearInterval(this.timer) }`
  - 图片懒加载，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域 内的图片先不做加载，等到滚动到可视区域后再去加载。参考项目：`vue-lazyload`，代码：`<img v-lazy="/static/img/1.png">`
  - 第三方插件按需引入，`import { Button, Select } from 'element-ui';`
  - 无状态的组件标记为函数式组件，`<template functional> ... </template>`
  - 子组件分割，独立可复用功能可抽象出来
  - 变量本地化，如果有for循环等频繁访问`this.xxx`的情况，提前赋值给本地变量
  - SSR

2.   **简单说一说vuex使用及其理解?**
  - Vuex实现了一个单向数据流，在全局拥有一个state存放数据，当组件要更改state中的数据时，必须通过mutation提交修改信息，mutation同时提供了订阅者模式供外部插件调用获取state数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作 需要走action，但action也是无法直接修改state的，还是需要通过mutation来修改state的数据。最后，根据state的变化，渲染到视图上。

3.   **vue中组件之间的通信方式?**
  - `props ★★`
    - 父组件 A 通过 props 向子组件 B 传递值， B 组件传递 A 组件通过 $emit A 组件通过 v-on/@ 触发
    - 子组件通过 events 给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。
  - `$emit/$on 事件总线 ★★`
    - [vue-bus-ts](https://leedebug.github.io/2020/11/07/%E4%B8%AD%E5%A4%AE%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF%E6%8F%92%E4%BB%B6vue-bus-ts/)
  - `vuex ★★★`
    - 结合`localStorage`保存登录信息及权限列表等
  - `$parent/$children`
  - `$attrs/$listeners`
    - 多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法。
    - `$attrs`:包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个 组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。
    - `$listeners`: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v- on="$listeners" 传入内部组件
  - `provide/inject ★★★`
    - 优点:使用简单 缺点:不是响应式
    - 父级：`provide: { name: '王者峡谷' //这种绑定是不可响应的 }`（`name: this`会有响应式，把当前组件实例传递下去，但子组件会绑定一些多余的属性，比如props、methonds等）
    - 子级：`inject: ['name'] }`

4.   **vue-router 中的导航钩子由那些?**
  - 源码: `compiler`

5.   **什么是递归组件?**
  - 源码: `compiler`

6.   **说一说vue响应式理解?**
  - 源码: `compiler`

7.   **vue如果想要扩展某个组件现有组件时怎么做?**
  - 源码: `compiler`

8.   **vue为什么要求组件模版只能有一个根元素?**
  - 源码: `compiler`

9.   **watch和computed的区别以及怎么选用?**
  - 源码: `compiler`

10.  **你知道nextTick的原理吗?**
  - 源码: `compiler`

11.  **你知道vue双向数据绑定的原理吗?**
  - 源码: `compiler`

12.  **简单说一说vue生命周期的理解?**
  - 源码: `compiler`


# Vue 3.x

001. **[vue3.x的新特性研究](https://blog.csdn.net/sky_cmc/article/details/104988921)**
  - Emm...，慢慢看


# Webpack

001. **啊**
  - 啊


# Css & Css3

001. **啊**
  - 啊


# 项目结构化？

001. **啊**
  - 啊


# 祝君无Bug~