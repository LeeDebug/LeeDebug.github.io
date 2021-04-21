---
title: 预防XSS攻击插件 js-xss
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: 预防XSS攻击
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210421184346.png'
date: 2021-04-02 21:49:05
---

> 在面向客户开发时，特别是根据客户输入的内容进行入库试，无法预计会输入什么，所以需要对客户输入的内容进行过滤，以免引起不必要的bug甚至数据库崩掉

# 参考网站

- [github:js-xss](https://github.com/leizongmin/js-xss/blob/master/README.zh.md)
- [项目主页](http://jsxss.com)
- [在线测试](http://jsxss.com/zh/try.html)


# 安装插件

```bash
npm install xss
```

# 引入插件

```js
import { getDefaultWhiteList, FilterXSS } from 'xss';
```

# 封装函数

插件的github文档中给出了很多api，根据自己的需求进行封装即可，如下所示：

```js
export const filterXSS = (() => {
  const whiteList: any = getDefaultWhiteList(); // 获取默认白名单
  // 添加新的白名单标签或属性
  for (const i of Object.keys(whiteList)) {
    whiteList[i].push('style', 'class');
    if (i === 'table' && whiteList[i]) {
      whiteList[i].push('cellpadding', 'cellspacing', 'bordercolor');
    }
  }
  whiteList.strike = ['style', 'class'];
  const options = {
    whiteList,
    css: false,
    stripIgnoreTag: true, // 非白名单标签，过滤标签，显示标签里的内容
    stripIgnoreTagBody: ['script', 'style'],
    onTagAttr(tag: any, name: any, value: any, isWhiteAttr: any) {
      // 过滤img标签的src属性
      if (tag === 'img' && name === 'src') {
        return `${name}="data:image/ico;base64,aWNv" data-${name}=${value}`;
      }
      // 处理a标签
      if (tag === 'a') {
        return `${name}=${value} style="pointer-events: none;"`;
      }
      // 如果不返回任何值，表示还是按照默认的方法处理
    },
  };
  const myxss = new FilterXSS(options);
  return myxss.process.bind(myxss);
})();
```

# 使用方法

```js
import { filterXSS } from '@/utils';

var filterData = filterXSS(res.data);
console.log(filterData);
```


# 祝君无Bug~