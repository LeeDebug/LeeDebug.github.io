---
title: git推送后没有贡献记录
categories:
  - Git
tags:
  - Git
keywords: Git
description: git推送后没有贡献记录
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201211143223.png'
date: 2020-12-11 12:55:15
---

> github的contribution记录墙不展示问题

# 问题背景

最近打算把自己的项目同时部署到github、gitlab、gitee上，并且都改成了统一的email邮箱和username用户名，但是发现只有github没有任何的contribution记录。

于是我把本地的git信息及mac钥匙串保存的信息都删掉，重新记录了一遍；把SSH KEY也都删掉重新加了一遍。但都么有解决问题。

最后发现是github和其他两个仓库用的邮箱不一样，本地git的全局配置邮箱为a，gitee和gitlab用的邮箱也是a，只有github用的邮箱为b；所以github可能认为提交者不是当前用户，所以就没有提交记录。

# 解决方案

所以将多个仓库的邮箱改为同一个，并且将全局的gitconfig的email也改成此邮箱，即可。

# 命令代码

查看全局git信息：

```bash
git config --global --list

# 或

cat ~/.gitconfig
```

修改全局的git信息的邮箱：

```bash
git config --gloabl user.email "your github email"
```

配置本仓库的git信息的邮箱：

```bash
git config user.email "your github email"
```


# 祝君无Bug~