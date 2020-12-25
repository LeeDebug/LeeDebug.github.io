---
title: qiankun的css样式污染解决方案
categories:
  - 微前端
tags:
  - 微前端
keywords: 微前端
description: qiankun的css样式污染解决方案
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201220000516.png'
date: 2020-12-19 23:57:26
---

> 在使用qiankun框架做微前端开发的过程中，遇到了诸多难题，比如路由重定向、变量名及事件名冲突、挂载注销机制及生命周期、keep-alive等，目前遇到的比较难解决的问题可能就是css样式污染问题了。这次抽出了几天时间研究了一下，遂总结此文

# 问题概述

在qiankun加载子应用后，主子应用的样式之间会产生污染，常见的css样式污染有以下几种情况：
- 无论是否进行样式隔离：主应用的样式污染了子应用（原因：主应用的样式添加了 `!important` 属性或 `>>>` 穿透属性）
- 未进行样式隔离：子应用的样式污染了主应用（原因：样式重名，后加载的优先级高）
- 处理过样式隔离：子应用打开的弹窗、抽屉、popover等这种需要插入到主应用body的dom元素，样式丢失或应用了主项目的样式（原因：开启沙箱时，子应用的样式作用域只在子应用内，但如描述，子应用的dom被插入到了主应用的body中，遂出现了此种情况）

# qiankun自带的css沙箱

个人理解，qiankun加载子项目css样式机制大体为：挂载子应用时将子应用的css样式以style标签的形式插入并做快照，卸载子应用时再将快照内的style样式删除。所以在加载子应用期间，若未开启css沙箱隔离，后加载的这些样式，可能会对整个系统的样式产生影响，对此，qiankun提供了两种css沙箱功能，可以将子应用的样式包裹在沙箱容器内部，以此来达到样式隔离的目的。大体代码如下所示：

```js
this.microApp = loadMicroApp(
  { apps infos ... },
  {
    sandbox: {
      strictStyleIsolation: true // 严格沙箱
      experimentalStyleIsolation: true // 实验性沙箱
    }
  }
)
```

1. 严格沙箱

在加载子应用时，添加`strictStyleIsolation: true`属性，实现形式为将整个子应用放到`Shadow DOM`内进行嵌入，完全隔离了主子应用

缺点：
- 子应用的弹窗、抽屉、popover因找不到主应用的body会丢失，或跑到整个屏幕外（具体原因作者并未详细研究）
- 主应用不方便去修改子应用的样式

2. 实验性沙箱

在加载子应用时，添加`experimentalStyleIsolation: true`属性，实现形式类似于vue中style标签中的scoped属性，qiankun会自动为子应用所有的样式增加后缀标签，如：`div[data-qiankun-microName]`

缺点：
- 子应用的弹窗、抽屉、popover因插入到了主应用的body，所以导致样式丢失或应用了主应用了样式

# 最终解决方案

说了这么多qiankun自带的css沙箱隔离，但都有各自的缺点，并且对于系统的实现上，影响范围还比较严重，代码的修改范围也比较大。作者的项目中，主子应用都是vue项目，并且都用了element家的样式且都各自魔改过，遂果断<span style="color: red;font-weight: 900;">不开启css沙箱，给各自的项目class全局加上一个各自的命名空间</span>，可以自己的项目名，比如：`myVue body`、`myVue el-form-info__label`、`myVue customClass`等。

# 代码实现

1. 添加依赖

```bash
→ npm i postcss-plugin-namespace -D
```

2. 配置postcss

在项目根目录创建`postcss.config.js`文件，并复制以下内容：

```js
// console.log('=> => => postcss.config.js start => => =>')
module.exports = (ctx) => {
  return {
    plugins: [
      require('postcss-plugin-namespace')('#lee_project', {
        ignore: [
          'html', /body/, 'span', 'el-form-item'
        ]
      }),
    ]
  }
}
// console.log('=> => => postcss.config.js end => => =>')
```

该插件会将全局所有class前加上统一前缀，并过滤掉ignore内的标签；ignore内可以写字符串，可以写正则表达式。但每次编译前都会运行，所以可能会增加编译时间，所以日常开发环境下可以将此文件名随便改成别的，上线前记得改回来调试一下（如果直接隐藏掉代码的话，只要有`postcss.config.js`这个文件webpack会自动帮你执行，并且会提示你的postcss啥也没干，也相当于每次都走了这个脚本）。

注意：如果用`/body/`这样的正则，会将所有带body的class都过滤掉，比如`el-drawer__body`、`el-dialog__body`等。

# 祝君无Bug~