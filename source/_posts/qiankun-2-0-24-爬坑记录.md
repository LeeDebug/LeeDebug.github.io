---
title: qiankun 2.0.24 爬坑记录
categories:
  - 微前端
tags:
  - 微前端
keywords: '微前端'
description: 描述
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170023.png
date: 2020-10-27 23:45:08
---

> 由于本次开发项目需要嵌入之前的老项目，由于考虑到iframe速度慢、css/js需要额外请求、阻塞页面加载、浏览器前进/后退等缺点，遂打算踩坑qiankun，为了更早的爬坑，整理此文。

# 简介
[qiankun](https://github.com/umijs/qiankun) 是一个基于 [single-spa](https://github.com/single-spa/single-spa) 的`微前端`实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

**官方提供的资源：**
- 官方提供了一个 [示例代码](https://github.com/fengxianqi/qiankun-example)
- 示例代码的[在线demo](http://qiankun.fengxianqi.com/)
- 单独访问在线[vue子应用](http://qiankun.fengxianqi.com/subapp/sub-vue/)
- 单独访问在线[react子应用](http://qiankun.fengxianqi.com/subapp/sub-react/)

**根据 [qiankun官方文档](https://qiankun.umijs.org/zh/guide#%E7%89%B9%E6%80%A7) 介绍，主要有以下七大特性：**
- 📦 基于 single-spa 封装，提供了更加开箱即用的 API。
- 📱 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
- 💪 HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
- 🛡​ 样式隔离，确保微应用之间样式互相不干扰。
- 🧳 JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
- ⚡️ 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
- 🔌 umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。


**行业内其他前端团队对微前端的看法和实践：**
- [每日优鲜供应链前端团队微前端改造](https://juejin.im/post/6844903943873675271)
- [微前端在美团外卖的实践](https://juejin.im/post/6844904073972432903)
- [前端微服务在字节跳动的打磨与应用](https://juejin.im/post/6844904046487142408)
- [微前端在小米 CRM 系统的实践](https://juejin.im/post/6844904112421765134)
- [标准微前端架构在蚂蚁的落地实践](https://developer.aliyun.com/article/742576)


# API介绍

此处只介绍api的简单功能描述，如想继续了解请移步[官方文档](https://qiankun.umijs.org/zh/api)

## registerMicroApps(apps, lifeCycles?)

注册微应用的基础配置信息。当浏览器 url 发生变化时，会自动检查每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活。

```js
import { registerMicroApps } from 'qiankun';

registerMicroApps(
  [
    {
      // name - string - 必选，微应用的名称，微应用之间必须确保唯一
      name: 'apass-micro',
      // entry - string - 必选，微应用的入口
      entry: 'localhost:8080',
      // container - string | HTMLElement - 必选，微应用的容器节点的选择器或者 Element 实例
      container: '#apassMicroTemplateConfig',
      // activeRule - string - 必选，微应用的激活规则
      activeRule: '/index/config/template/edit',
      // props - object - 可选，主应用需要传递给微应用的数据
      props: {
        name: 'kuitos',
        routerPushFunc: (that) => {
          that.$router.push('/713/5f4f65fabcb7c173/fields')
        },
        data: {
          // 已响应式的数据通信
          store: microAppStore.getGlobalState
        },
      }
    }
  ],
  {
    beforeLoad: app => console.log('before load', app.name),
    beforeMount: [
      app => console.log('before mount', app.name),
    ],
    afterMount: [
      app => console.log('after mount', app.name),
    ],
    beforeUnmoun: [
      app => console.log('before unmount', app.name),
    ],
    afterUnmount: [
      app => console.log('after unmount', app.name),
    ]
  },
);
```

## start(opts?)

启动 qiankun

```js
import { start } from 'qiankun';

start();
```

## setDefaultMountApp(appLink)

设置主应用启动后默认进入的微应用。

```js
import { setDefaultMountApp } from 'qiankun';

setDefaultMountApp('/homeApp');
```

## runAfterFirstMounted(effect)

第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。

```js
import { runAfterFirstMounted } from 'qiankun';

runAfterFirstMounted(() => {
  console.log('第一个子应用加载完后，该方法被调用')
  this.otherFunction()
})
```

## loadMicroApp(app, configuration?)

适用于需要手动 加载/卸载 一个微应用的场景。

通常这种场景下微应用是一个不带路由的可独立运行的业务组件。 微应用不宜拆分过细，建议按照业务域来做拆分。业务关联紧密的功能单元应该做成一个微应用，反之关联不紧密的可以考虑拆分成多个微应用。 一个判断业务关联是否紧密的标准：看这个微应用与其他微应用是否有频繁的通信需求。如果有可能说明这两个微应用本身就是服务于同一个业务场景，合并成一个微应用可能会更合适。

```js
import { loadMicroApp } from 'qiankun';

// 因为loadMicroApp()返回子应用的实例，拿一个全局变量接收后续可进行其他操作如：手动卸载子应用
this.microApp = loadMicroApp(
  {
    name: 'sub-vue',
    entry: 'http://localhost:7777/subapp/sub-vue',
    container: '#apassMicroTemplateConfig',
    props: {
      routerBase: '/index/config/template/edit',
      getGlobalState: microAppStore.getGlobalState,
      sheetId: '2133123123'
    }
  },
  {
    // sandbox - boolean | { strictStyleIsolation?: boolean, experimentalStyleIsolation?: boolean } - 可选，是否开启沙箱，默认为 true
    sandbox: { strictStyleIsolation: true },
    // singular - boolean | ((app: RegistrableApp<any>) => Promise<boolean>); - 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 false
    singular: true
  }
)

// 封装卸载子应用的函数
private unmountMicroApp () {
  if (this.microApp) {
    this.microApp.mountPromise.then(() => {
      this.microApp.unmount()
    })
  }
}
```

## prefetchApps(apps, importEntryOpts?)

手动预加载指定的微应用静态资源。仅`手动加载`微应用场景需要，基于路由自动激活场景直接配置 prefetch 属性即可。

```js
import { prefetchApps } from 'qiankun';

prefetchApps([ { name: 'app1', entry: '//locahost:7001' }, { name: 'app2', entry: '//locahost:7002' } ])
```


# 主应用配置

## 安装qiankun

```bash
$ npm i qiankun -S # 或者 yarn add qiankun
```

## 调整main.js

如果你需要在项目初始化的时候就加载这些子应用，那么需要修改main.js的一些配置；如果是在页面中手动加载可略过此步。

```js
import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import { registerMicroApps, setDefaultMountApp, start } from "qiankun"
Vue.config.productionTip = false
let app = null;
/**
 * 渲染函数
 * appContent 子应用html内容
 * loading 子应用加载效果，可选
 */
function render({ appContent, loading } = {}) {
    if (!app) {
        app = new Vue({
            el: "#container",
            router,
            data() {
                return {
                    content: appContent,
                    loading
                };
            },
            render(h) {
                return h(App, {
                    props: {
                        content: this.content,
                        loading: this.loading
                    }
                });
            }
        });
    } else {
        app.content = appContent;
        app.loading = loading;
    }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
    render({ appContent: '', loading: true });
}

initApp();

// 传入子应用的数据
let msg = {
    data: {
        auth: false
    },
    fns: [
        {
            name: "_LOGIN",
            _LOGIN(data) {
                console.log(`父应用返回信息${data}`);
            }
        }
    ]
};

// 注册子应用
registerMicroApps(
    [
        {
            name: "sub-app-1",
            entry: "//localhost:8091",
            render,
            activeRule: genActiveRule("/app1"),
            props: msg
        },
        {
            name: "sub-app-2",
            entry: "//localhost:8092",
            render,
            activeRule: genActiveRule("/app2"),
        }
    ],
    {
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ], // 挂载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ] // 卸载后回调
    }
);

// 设置默认子应用,与 genActiveRule中的参数保持一致
setDefaultMountApp("/app1");

// 启动
start();
```

## 修改App.vue中的id 或 增加渲染子应用的盒子

因为一个主应用可能会嵌套多个子应用，所以App.vue难免会重名，所以最好加一个自己项目名称的前缀来做区分。

```html
<template>
  <div id="main-root">
    <!-- loading -->
    <div v-if="loading">loading</div>
    <!-- 子应用盒子 -->
    <div id="root-view" class="app-view-box" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    loading: Boolean,
    content: String
  }
};
</script>
```



# 配置vue子应用

因为子应用本身就是一个单独的应用，所以不必安装qiankun，只需要暴露被当做子应用嵌入时，qiankun所需的3个生命周期即可。

## 配置maim.js

在支持被当做子应用嵌入的同时，需要支持项目独立运行，兼容之前配置

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import './public-path';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/app1' : '/',
        mode: 'history',
        routes,
    });

    instance = new Vue({
        router,
        render: h => h(App),
        beforeMount () {
            if (window.__POWERED_BY_QIANKUN__) {
                routerPushFunc(this)
                AppModule.SET_CURRENT_ENV()
            }
        }
    }).$mount(container ? container.querySelector('#templateConfig') : '#templateConfig');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('vue app bootstraped');
}

export async function mount(props) {
    console.log('props from main app', props);
    render();
}

export async function unmount() {
    (instance as Vue).$destroy();
    (instance as Vue).$el.innerHTML = ''; // 防止内存泄漏，子项目销毁时清空dom
    instance = null;
    router = null;
}
```

## public-path.js

使用 webpack 静态 publicPath 配置：可以通过两种方式设置，一种是直接在 mian.js 中引入 public-path.js 文件，一种是在开发环境直接修改 vue.config.js

```js
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
```

## 配置 vue.config.js

子应用必须支持跨域：由于 qiankun 是通过 fetch 去获取子应用的引入的静态资源的，所以必须要求这些静态资源支持跨域

```js
const path = require('path');
const { name } = require('./package');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const pagesMicro = {
  templateConfig: {
    entry: 'src/microPage/templateConfig/main.ts',
    template: 'src/microPage/templateConfig/index.html',
    chunks: ['runtime~templateConfig', 'chunk-vendors', 'chunk-common', 'templateConfig']
  },
}

const pagesMain = {
  index: {
    entry: 'src/main.ts',
    template: '/index.html'
  }
}

const pages = process.env.VUE_APP_ENTRY === 'main' ? pagesMain : pagesMicro

let config = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};

if (process.env.VUE_APP_ENTRY === 'micro') {
  config.pages = pagesMicro
}

module.exports = config
```


# qiankun常见问题及解决方案

## 避免 css 污染

qiankun 只能解决子项目之间的样式相互污染，不能解决子项目的样式污染主项目的样式，技术与规范方面大约有这 5 种方案：

- vue自带的scope
    - 只能解决一部分页面内的样式污染，但一般不会有这个问题
- BEM命名方式
- css-in-js
    - 学习曲线高；可读性差；借助前端堆栈消耗性能；
- css-loader
    - 开启css-modules，类似于图片懒加载，替换attr
    - 缺点：页面中需要把class写成css-modules的形式；样式多了之后都是hash的形式可读性不高；
- postcss-loader
    - 利用postcss-modules插件的getJson()函数将所有css文件中的class转为json对象；利用postcss-html把json对象渲染回html页面的class
    - 缺点：利用新的gulp，意义不大；每次修改都要编译，很慢；

**拿css-loader举例，开启css-modules，可参考以下文章：**

- [阮一峰的 CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules 基本用法](https://blog.csdn.net/qq_26733915/article/details/54313492)
- [浅谈CSS Modules以及CSS Modules在Vue.js上的使用](https://blog.csdn.net/weixin_44869002/article/details/105806021)
- [css 命名：BEM, scoped css, css modules 与 css-in-js](https://juejin.im/post/6844903748926439431)
- [Vue CLI 的 CSS相关配置](https://cli.vuejs.org/zh/guide/css.html#%E5%BC%95%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90)
- [css-loader 的 github](https://github.com/webpack-contrib/css-loader)
- [css-modules 的 github](https://github.com/css-modules/css-modules)
- [TypeScript 中使用 CSS Modules](https://juejin.im/post/6844903497532473352)

```js
module.exports = {
  // ... 省略其他配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {
        // These properties are valid:
        // object { url?, import?, modules?, sourceMap?, importLoaders?, localsConvention?, onlyLocals?, esModule? }
        modules: {
          // These properties are valid:
          // object { auto?, mode?, exportGlobals?, localIdentName?, localIdentRegExp?, context?, hashPrefix?, getLocalIdent? }
          exportGlobals: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        },
        localsConvention: 'asIs' // asIs camelCase camelCaseOnly dashes dashesOnly
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
}
```

## 谨慎使用 position：fixed

在子项目中这个定位会出现问题，基本出现在模态框和抽屉的定位上，应尽量避免使用，确有相对于浏览器窗口定位需求，可以用 `position: sticky`，但是会有兼容性问题（IE不支持）。如果定位使用的是 bottom 和 right，则问题不大。
还有个办法，位置可以写成动态绑定 style 的形式:

```html
<div :style="{ top: isQiankun ? '10px' : '0'}">
```

## 给 body 、 document 等绑定的事件，请在 unmount 周期清除

js 沙箱只劫持了 window.addEventListener，使用 document.body.addEventListener 或者 document.body.onClick 添加的事件并不会被沙箱移除，会对其他的页面产生影响，请在 unmount 周期清除

## 报错：Uncaught Error application 'xxx' died in status LOADING_SOURCE_CODE: [qiankun] You need to export lifecycle functions in xxx entry

一般就是打包姿势不对，可能原因：未打包成umd格式；所需的js文件虽然被整体打包了但没被加载，需要利用runtimeChunk单独打包出来

## 现刷新页面报错，容器找不到

解决方案1：在组件 mounted 周期注册并启动 qiankun

解决方案2：new Vue() 之后，等 DOM 加载好了再注册并启动 qiankun

```js
const vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
vueApp.$nextTick(() => {
  //在这里注册并启动 qiankun
})
```

## 主、子应用的路由，均可用 history 模式

因为vue-router的history模式是全匹配的，所以如果当前子应用是被qiankun嵌入时，需要在子应用的一级路由前加上主应用除了`http://ip+port/`后的所有路由，即在主应用中初始子应用是定义的`activeRule`。

```js
router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/templateConfig' : '/',
    mode: 'history',
    routes: [
        { ... }
    ]
})
```

## history模式下，主、子应用的路由配置问题

如果主、子应用的vue-router都是history模式（即路由全匹配）时
- 主应用中的route信息的path属性需要改为'index/edit*'的形式，即模糊全匹配，而且子应用的跟路由需要改为'index/edit/'的形式（上面说过了）。否则子应用改变路由后，主应用匹配不到当前页面，则会跳回登录页会调至404。
- 子应用中的route信息里最好不要有''或者'*'之类的判空。否则主应用（从嵌入子应用的那个页面）跳转到其他页面后，会触发子应用的路由匹配规则，进而跳转至子应用的登录页，而且导致主应用的路由跳转失败（也不能叫失败，实际上是跳转出去了又被redirect重定向回来了）。

## 从一个子项目跳转到另一个子项目

在子项目里面如何跳转到另一个子项目/主项目页面呢，直接写 <router-link> 或者用 router.push/router.replace 是不行的，原因是这个 router 是子项目的路由，所有的跳转都会基于子项目的 base 。写 <a> 链接可以跳转过去，但是会刷新页面，用户体验不好。

解决办法也比较简单，在子项目注册时将主项目的路由实例对象传过去，子项目挂载到全局，用父项目的这个 router 跳转就可以了。

但是有一丢丢不完美，这样只能通过 js 来跳转，跳转的链接无法使用浏览器自带的右键菜单

## 图片资源报错404

最好改为绝对路径

```html
<img src="./img/logo.jpg">
<!-- 改为 -->
<img src="/img/logo.jpg">
```

或者在主应用中配置nginx静态文件的代理（这里没有后台的nginx配置，所以拿webpack自带的proxyTable代理作示例）

```js
if (item === '/index/config/template/edit/static') { // 登录页img
    proxyObj[item] = {
      target: 'http://localhost:8081',
      ws: false,
      changeOrigin: true,
      pathRewrite: { '^/index/config/template/edit/static': '/static' }
    }
  } else if (item === '/static/home') { // 首页img
    proxyObj[item] = {
      target: 'http://localhost:8081',
      ws: false,
      changeOrigin: true,
      pathRewrite: { '^/static/home': '/static/home' }
    }
}
```

## 手动加载子应用时，如果子应用的js文件太大会造成阻塞

如果是手动加载子应用，即loadMicroApp()，推荐在页面初始化的时候就预加载资源，即prefetchApps()。避免请求的pending时间太长阻塞加载


## ts项目与js项目文件加载的问题

因为主项目是ts，默认加载的是ts文件；但子项目是js。所以在子项目中引入js文件的时候要标清楚后缀名，例如
```
// 会报错  Unknown custom element: <widget> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
import {widgetInRecord as widget} from '@/views/sheetConfig/fieldConfig/widget/widget'

// 加上后缀名就不报错了
import {widgetInRecord as widget} from '@/views/sheetConfig/fieldConfig/widget/widget.js'
```


## 在一个页面内以不同的初始化数据加载同一子应用（如：左侧是列表，右侧的详情是qiankun嵌入的子应用）

重复加载问题、数据通信问题、请求响应问题

```
```

## 主项目与子项目的数据通信

项目之间的不要有太多的数据依赖，毕竟项目还是要独立运行的。通信操作需要判断是否 qiankun 模式，做兼容处理。

通过 props 传递父项目的 Vuex ，如果子项目是 vue 技术栈，则会很好用。假如子项目是 jQuery/react/angular ，就不能很好的监听到数据的变化。

qiakun 提供了一个全局的 GlobalState 来共享数据。主项目初始化之后，子项目可以监听到这个数据的变化，也能提交这个数据。

```js
// 主项目初始化
import { initGlobalState } from 'qiankun';

const actions = initGlobalState(state);

// 主项目项目监听和修改
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

actions.setGlobalState(state);

// 子项目监听和修改
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  props.setGlobalState(state);
}
```

## vue子项目内存泄露问题

这个问题挺难发现的，是在 qiankun 的 issue 区看到的: github.com/umijs/qiank… ，排查过程我就不发了，解决方案挺简单。

子项目销毁时清空 dom 即可：

```js
export async function unmount() {
  instance.$destroy();
+ instance.$el.innerHTML = ""; //新增这一行代码
  instance = null;
  router = null;
}
```

但是其实，来回切换子项目并不会使内存不断增加。也就是说，即使卸载子项目时，子项目占用的内存没有被释放，但是下次加载时会复用这块内存，那这样的话，子项目会不会加载更快？（还未考证）

## 安全和性能的问题

qiankun 将每个子项目的 js/css 文件内容都记录在一个全局变量中，如果子项目过多，或者文件体积很大，可能会导致内存占用过多，导致页面卡顿。

另外，qiankun 运行子项目的 js，并不是通过 script 标签插入的，而是通过 eval 函数实现的，eval 函数的安全和性能是有一些争议的：[MDN的eval介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)


# 祝君无Bug~