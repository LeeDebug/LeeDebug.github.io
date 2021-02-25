---
title: copy-webpack-plugin处理单独js文件
categories:
  - Webpack
tags:
  - Webpack
keywords: Webpack
description: copy-webpack-plugin处理单独js文件
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210225123255.png'
date: 2021-01-08 22:42:14
---

> 当文件在`static或public`目录下但又想对文件进行编译处理，即可在此插件中进行配置

# 使用说明

`copy-webpack-plugin`是webpack自带的插件，本意是将某个文件/文件夹，从`dir1`处复制到`dist`下，即当你在运行`npm run build`时，`static或public`目录下的文件就是走的此插件

# 配置信息

因为我使用的是基于`@vue/cli-service`的`vue3.x`，所以是在`vue.config.js`中设置（如果是vue2.x的版本，请在`webpack.base.js`中设置）

```js
// 引入
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJS = require('uglify-js')

// 使用
let config = {
  // ...others,
  configureWebpack: config => {
    config.plugins.push(
      // see document: https://www.npmjs.com/package/copy-webpack-plugin/v/5.1.2
      new CopyWebpackPlugin([
        {
          from: resolve('./public/handle.js'), // 文件名或目录
          to: './[name].[contenthash].[ext]', // 文件名后添加hash值
          transform(content, path) { // 修改文件内容
            const code = UglifyJS.minify(content.toString()).code;
            return code;
          },
          transformPath(targetPath, absolutePath) { // 修改文件路径：目标路径、源路径
            newHashPath = targetPath;
            return targetPath;
          },
        },
        {
          from: resolve('./public/index2.html'),
          to: './[name].[ext]',
          transform(content, path) {
            let code = UglifyJS.minify(content.toString()).code;
            return code;
          },
          force: true, // 覆盖已经存在的文件
        },
      ])
    );
  },
}
module.exports = config;
```

# 祝君无Bug~