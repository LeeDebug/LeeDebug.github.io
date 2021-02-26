---
title: navigator.userAgent获取当前设备信息
categories:
  - 移动端
tags:
  - 移动端
keywords: 移动端
description: navigator.userAgent获取当前设备信息
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210226130414.png'
date: 2021-02-17 23:14:02
---

> 获取当前是何设备，来区分不同的事件及渲染模式

# navigator.userAgent

封装好函数直接调用，利用switch直接进行判断即可

```js
export function currDevice() {
  const u = navigator.userAgent;
  const app = navigator.appVersion; // appVersion 可返回浏览器的平台和版本信息。该属性是一个只读的字符串。
  const browserLang = (navigator.browserLanguage || navigator.language).toLowerCase(); //获取浏览器语言
  const deviceBrowser = (() => {
    return {
      trident: u.indexOf('Trident') > -1,  // IE内核
      presto: u.indexOf('Presto') > -1,  // opera内核
      webKit: u.indexOf('AppleWebKit') > -1,  // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,  // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),  // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.Mac OS X/),  // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  // android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1,  // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1,  // 是否iPad
      webApp: u.indexOf('Safari') === -1,  // 是否web应用程序，没有头部和底部
      weixin: u.indexOf('MicroMessenger') > -1,  // 是否微信
      qq: u.match(/\sQQ/i) === "qq",  // 是否QQ
    };
  })();
  return deviceBrowser;
}
```


# 祝君无Bug~