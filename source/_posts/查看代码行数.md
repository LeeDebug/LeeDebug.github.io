---
title: 查看代码行数
categories:
  - 个人文档
tags:
  - 个人文档
keywords: 个人文档
description: 查看代码行数
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210305125935.png'
date: 2021-03-01 12:51:35
---

> 项目写久了，就像看看自己一个项目的真实代码有多少行，所以找了下面两个方法

# 命令行查看

用mac终端自带的的find命令，可以查看目录下每个文件的行数，及最后输出总行数

```bash
# input >
find . "(" -name "*.vue" -or -name "*.html" -or -name "*.ts" -or -name "*.js" ")" -print | xargs wc -l

# output >
423 a.js
1842 b.vue
52 c.html
7253 total
```


# VsCode查看

直接在vscode的全局搜索中（快捷键为Command + Shift + c），输入`b*[^:b#/]+.*$`，并使用`Use Regular Expression`选项（即最右侧的星号和方块的按钮），进行搜索,即可查看

```bash
# input >
b*[^:b#/]+.*$

# output >
7253 results in 77 files

423 a.js
1842 b.vue
52 c.html
```

![VsCode查看代码行数](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210305125911.png)


# 祝君无Bug~