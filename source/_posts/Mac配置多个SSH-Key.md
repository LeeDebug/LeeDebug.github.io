---
title: Mac配置多个SSH-Key
categories:
  - Git
tags:
  - Git
keywords: Git
description: Mac配置多个SSH-Key
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201211231351.png'
date: 2020-12-11 23:11:41
---

> 随着项目与能力的提升与扩展，一台电脑上同时用着多个git仓库的情况越来越普遍，所以我们需要创建多个ssh key来对应不同的账号。本文以github为例

# 本地配置ssh秘钥和公钥

## 进入到ssh文件夹下

```bash
→ cd ~/.ssh/
```

## 生成一个ssh-key

引号内填写你github对应的邮箱

```bash
→ ssh-keygen -t rsa -b 4096 -C "your email"
```

如果你之前mac上创建过ssh-key，在`.ssh`文件夹下会有`id_rsa`和`id_rsa.pub`两个文件，分别为秘钥和公钥；当再次创建时，会有如下提示：

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/xxx/.ssh/id_rsa):
```

如果想覆盖之前的文件直接回车即可；如果想创建新的ssh-key，则需要在此处输入新的名称，如`id_rsa_github`，回车后会提示你下次使用此ssh-key时是否需要密码，如果是个人电脑，直接回车即可（如果需要，设置便可）

```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

设置完密码后，会提示你ssh-key设置成功

```bash
our identification has been saved in id_rsa_github.
Your public key has been saved in id_rsa_github.pub.
The key fingerprint is:
SHA256: hash值 你的邮箱
The key's randomart image is:
+---[RSA 4096]----+
|        .@/0+ o  |
|        o=+0*O o |
|        .o=.*** .|
|         o.o B = |
|        @ + + * .|
|       o + + o . |
|        o . o    |
|                 |
|                 |
+----[SHA256]-----+
```

查看`.ssh`文件夹下的新文件，则会看到刚才新生成的`id_rsa_github`秘钥和`id_rsa_github.pub`公钥

```bash
→ ls
id_rsa
id_rsa.pub
id_rsa_github
id_rsa_github.pub
```

## 将ssh-key添加到ssh-agent

因为本地默认只读`id_rsa`，我们想要使用新的秘钥对则需要把新添加的ssh-key添加到ssh-agent

首先，查看ssh agent所有密钥对（如果有以下提示，则表示从未添加过）

```bash
→ ssh-add -l
The agent has no identities.
```

将新的ssh-key添加到ssh agent

```bash
→ ssh-add id_rsa_github
Identity added: id_rsa_github (id_rsa_github)
```

此时再次查看ssh agent

```bash
→ ssh-add -l
4096 SHA256: hash值 id_rsa_github (RSA)
```

# 配置github的ssh-key

首先查看我们刚配置好的ssh-key的公钥，即以`*.pub`为后缀名的文件。复制整个文件的内容，即公钥信息

```bash
→ cat id_rsa_github.pub
ssh-rsa 公钥 你的邮箱
```

登录github后，在右上角的头像下拉列表中选择`Settings`选项，在左侧菜单中选择`SSH and GPG keys`，即可看到当前的SSH Keys，点击右上角绿色的`New SSH Key`按钮，在`Key`下方的文本框中，粘贴你的公钥信息，会默认以你的邮箱作为`title`（也可自行更改），点击下方的`Add SSH Key`即可。步骤如下图所示

![github的ssh-key](https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201211234542.png)

# 测试连接

回到自己的项目仓库下`git fetch`；或打开控制台，输入以下命令

```bash
→ ssh -T git@github.com
Hi LeeDebug! You've successfully authenticated, but GitHub does not provide shell access.
```

到此，你的ssh-key已经可以正常使用，你可以使用ssh的方式去clone项目了



# 祝君无Bug~