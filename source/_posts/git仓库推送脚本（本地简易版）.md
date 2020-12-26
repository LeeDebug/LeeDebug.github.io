---
title: git仓库推送脚本（本地简易版）
categories:
  - Git
tags:
  - Git
keywords: Git
description: git仓库推送脚本（本地简易版）
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201226234636.png'
date: 2020-12-26 23:32:34
---

> 由于每次写完代码都要执行一大堆命令来将本地代码推送至远程仓库，所以索性写一个sh脚本

# 新建`push.sh`文件：

在项目主目录，即`/git`所在目录新建`push.sh`文件，并复制以下内容：

```bash
echo → 暂存选取所有代码
git add .

read -p "→ 请输入您的commit提交信息：" MSG

echo → 提交所有暂存代码
git commit -m "$MSG"

echo → 将代码推送至三端git仓库
git push -u all master

# 如果不是hexo项目可忽略以下内容
echo → Hexo自动构建及部署
npm run clean
npm run build
npm run deploy
```

# 运行脚本

每次推送时，在当前目录运行`sh push.sh`命令即可，接下来会提示你输入要提交的信息，输入完点击回车即可

注：如果加入了hexo项目的构建部署命令，每次推送时也会帮你完成部署


# 祝君无Bug~