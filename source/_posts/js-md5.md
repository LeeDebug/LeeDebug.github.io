---
title: js-md5
categories:
  - npm
tags:
  - npm
keywords: 'npm'
description: 前端插件
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170415.png
date: 2020-06-10 22:49:18
---

> 前端在用户登录时尝使用md5对用户的登录信息进行加密操作

# MD5简介
MD5信息摘要算法（英语：MD5 Message-Digest Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。

# js-md5简介
A simple MD5 hash function for JavaScript supports UTF-8 encoding.
详情请查看npm的[js-md5](https://www.npmjs.com/package/js-md5)部分

# 使用教程

## 安装
```
$ npm i js-md5
```

## 引入
```
$ import md5 from 'js-md5'

// 如果在main.js中引入，需要注册
$ Vue.prototype.$md5 = md5
```

## 使用
```
md5(''); // d41d8cd98f00b204e9800998ecf8427e
md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
 
// It also supports UTF-8 encoding
md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
 
// It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
md5([]); // d41d8cd98f00b204e9800998ecf8427e
md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
 
// Different output
md5(''); // d41d8cd98f00b204e9800998ecf8427e
md5.hex(''); // d41d8cd98f00b204e9800998ecf8427e
md5.array(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
md5.digest(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
md5.arrayBuffer(''); // ArrayBuffer
md5.buffer(''); // ArrayBuffer, deprecated, This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
md5.base64(''); // 1B2M2Y8AsgTpgAmY7PhCfg==
```


# 祝君无Bug~