---
title: 《前端内参》读书笔记
categories: 
  - 读书笔记
tags:
  - 读书笔记
keywords: 读书笔记
description: 读书笔记
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170225.png
date: 2020-06-23 21:08:31
---

> 做web前端开发也有两年的时间了，但技术层面一直很浅，特别是近期感觉遇到了知识瓶颈，还是因为看书少、不爱总结。本次笔记在参考Bob Ma大佬整理分享的[《前端内参》](https://coffe1891.gitbook.io/frontend-hard-mode-interview/)的基础上，记录并整理下来一些自己平时不注意的知识点。


# 壹.1.1.3 ES 8 新特性

## 字符串追加

在 ES 8 中String新增了两个实例函数`String.prototype.padStart`和`String.prototype.padEnd`，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。
- String.padStart(targetLength,[padString])  
    *targetLength*：当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
    *padString*：(可选)填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为空格。
- `String.padEnd(targetLength,padString])` 参数释义同上。

```js
'es8'.padStart(2);          // 'es8'
'es8'.padStart(5);          // '  es8'
'es8'.padStart(6, '1891');  // '189es8'
'es8'.padStart(14, 'coffe');  // 'coffecoffeces8'
'es8'.padStart(7, '0');     // '0000es8'

'es8'.padEnd(2);            // 'es8'
'es8'.padEnd(5);            // 'es8  '
'es8'.padEnd(6, '1891');    // 'es81891'
'es8'.padEnd(14, 'coffe');    // 'es8coffecoffec'
'es8'.padEnd(7, '9');       // 'es89999'
```


## 异步函数
Async Functions也就是我们常说的`Async/Await`，相信大家对于这个概念都已经不陌生了。`Async/Await`是一种用于处理JS异步操作的语法糖，可以帮助我们摆脱`回调地狱（callback hell）`，编写更加优雅的代码。

通俗的理解，async关键字的作用是告诉编译器对于标定的函数要区别对待。当编译器遇到标定的函数中的await关键字时，要暂时停止运行，等到await标定的函数处理完毕后，再进行相应操作。如果该函数fulfiled了，则返回值是fulfillment value，否则得到的就是reject value。

下面通过拿普通的promise写法来对比，就很好理解了：

```js
async function asyncFunc() {
    const result = await otherAsyncFunc();// otherAsyncFunc()返回一个Promise对象
    console.log(result);
}

// 等同于:
function asyncFunc() {
    return otherAsyncFunc()// otherAsyncFunc()返回一个Promise对象
    .then(result => {
        console.log(result);
    });
}
```

按顺序处理多个异步函数的时候优势更为明显：

```js
async function asyncFunc() {
    const result1 = await otherAsyncFunc1();// otherAsyncFunc1()返回一个Promise对象
    console.log(result1);
    const result2 = await otherAsyncFunc2();// otherAsyncFunc2()返回一个Promise对象
    console.log(result2);
}

// 等同于:
function asyncFunc() {
    return otherAsyncFunc1()// otherAsyncFunc1()返回一个Promise对象
    .then(result1 => {
        console.log(result1);
        return otherAsyncFunc2();// otherAsyncFunc2()返回一个Promise对象
    })
    .then(result2 => {
        console.log(result2);
    });
}
```

并行处理多个异步函数：

```js
async function asyncFunc() {
    const [result1, result2] = await Promise.all([
        otherAsyncFunc1(),// otherAsyncFunc1()返回一个Promise对象
        otherAsyncFunc2() // otherAsyncFunc2()返回一个Promise对象
    ]);
    console.log(result1, result2);
}

// 等同于:
function asyncFunc() {
    return Promise.all([
        otherAsyncFunc1(),// otherAsyncFunc1()返回一个Promise对象
        otherAsyncFunc2() // otherAsyncFunc2()返回一个Promise对象
    ])
    .then([result1, result2] => {
        console.log(result1, result2);
    });
}
```

处理错误：

```js
async function asyncFunc() {
    try {
        await otherAsyncFunc();// otherAsyncFunc()返回一个Promise对象
    } catch (err) {
        console.error(err);
    }
}

// 等同于:
function asyncFunc() {
    return otherAsyncFunc()// otherAsyncFunc()返回一个Promise对象
    .catch(err => {
        console.error(err);
    });
}
```

# 壹.1.1.4 ES 9 新特性

## 异步迭代器 Asynchronous Iteration

在`async`/`await`的某些时刻，你可能尝试在同步循环中调用异步函数。例如：

```js
async function func(array) {
  for (let i of array) {
    await someFunc(i);
  }
}
```

这段代码不会达到预期目的，下面这段同样也不会：

```js
async function func(array) {
  array.forEach(async i => {
    await someFunc(i);
  });
}
```

上面这段代码中，循环本身依旧保持同步，并在内部异步函数之前全部调用完成。
引入异步迭代器后，就像常规迭代器，除了next()方法返回一个Promise。因此await可以和for...of循环一起使用，以串行的方式运行异步操作。

```js
async function func(array) {
  for await (let i of array) {//异步迭代
    someFunc(i);
  }
}
```

更多详细论述见“壹.2.12”。

## 重新修订了字面量的转义

ES9 之前，`\u`表示unicode转义，`\x`表示十六进制转义，`\`后跟一个数字表示八进制转义，这使得创建特定的字符串变得不可能，例如Windows文件路径`C:\uuu\xxx\111`。

要取消转义序列的语法限制，可在模板字符串之前使用标记函数String.raw。

```js
let s = `\u{54}` //会转义成unicode "T"
console.log(s);//>> T

let str = String.raw`\u{54}`; //不会被转义
console.log(str);//>> \u{54}
```

## Rest / Spread 属性

这个就是我们通常所说的三个点`...`，在`=`左边的是**rest参数**，放在`=`右边或者作为参数的是**扩展运算符**，这项特性在ES6中已经引入，但是ES6中的作用对象仅限于数组。在ES9中，为对象提供了像数组一样的rest参数和扩展运算符：

```js
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const { a, ...param } = obj; //这里...是rest参数
console.log(a); //>> 1
console.log(param); //>> {b: 2, c: 3}

function foo({ a, ...param }) {//这里...是扩展运算符
  console.log(a); //>> 1
  console.log(param); //>> {b: 2, c: 3}
}
```

## 正则表达式dotAll模式

正则表达式中点`.`匹配除回车外的任何单字符，标记`s`改变这种行为，允许匹配回车换行。

```js
/hello.world/.test('hello\nworld');  // false
/hello.world/s.test('hello\nworld'); // true
console.log(/hello.world/s.test(`hello
world`))   //>> true
```

## 正则表达式命名捕获组

未看

## 正则表达式后行断言

未看

## 正则表达式 Unicode 转义

未看


# 壹.1.1.5 ES 10 新特性

## 啊


# 祝君无Bug~






