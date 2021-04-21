---
title: Ubuntu 16.04 部署命令
categories:
  - 服务器
tags:
  - 服务器
keywords: '服务器'
description: 服务器
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170149.png
date: 2020-07-06 15:17:53
---

> 现时代身为一名前端工程师，配置服务器、部署线上项目等技能是必不可少的。

# 参考文档
- [使用 pyenv 可以在一个系统中安装多个python版本](https://www.jianshu.com/p/a23448208d9a)


# 配置步骤

## 基本配置

```bash
# 连接
ssh -p 22 root@47.104.223.131

# 修改主机名
sudo vi /etc/hostname
改为：
    LeeJs

# 修改配置文件
sudo vi /etc/hosts
添加：
    127.0.1.1   LeeJs
    
# 重启
reboot

# apt 检测更新
sudo apt update
apt list --upgradable

# 查看版本信息
lsb_release -a
uname -a
cat /proc/version
```

---
** ⚠️ 注：以下命令已打包至 install.sh **


## 安装yum（不需要）
```bash
apt install yum
```


## 安装 ruby（不需要）
```bash
apt install ruby
```


## 安装 LinuxBrew（不需要）
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
```


## 安装 screen
```bash
apt install screen

# 查看路径
which screen

# 查看版本
screen -v

# 查看所有
screen -ls

# 新建
screen -S qf_backend

# 恢复之前在线的screen，并置位离线
screen -x -d qf_backend/PID

# 重连
screen -r qf_backend/PID
ctrl + r ==> 输入PID

# 先重连，若找不到离线作业，则新建
screen -R qf_backend/PID

# 删除screen
screen -X -S PID quit
```


## 安装 git
```bash
apt install git
```


## 安装 pyenv
```bash
sudo curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash

# 添加源
sudo vi ~/.bashrc

# 添加下面三行
export PATH="/root/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# 更新源
source ~/.bashrc
```


## 安装「 python 所需依赖包 」
```bash
apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline6 libreadline6-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev zlib*
```


- ERROR: The Python ssl extension was not compiled. Missing the OpenSSL lib?
```bash
apt install libbz2-dev libssl-dev libsqlite3-dev libreadline6 libreadline6-dev
```


## 通过 pyenv 安装 python
```bash
# 下载 python
wget http://mirrors.sohu.com/python/3.6.5/Python-3.6.5.tar.xz -P ~/.pyenv/cache/

# 查看目录
cd ~/.pyenv/cache/

# 所有支持版本
pyenv install --list

# 安装指定版本python，-v：显示全过程
pyenv install 3.6.5 -v

# 刷新pyenv
pyenv rehash

# 查看所有的版本
pyenv versions

# 安装pyenv-virtualenv插件
git clone git://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv

# 以python 3.6.5 新建名为 qf_admin_3.6.5 的虚拟环境
pyenv virtualenv 3.6.5 qf_admin_3.6.5

# 激活虚拟环境
pyenv activate qf_admin_3.6.5

# 离开已经激活的环境
pyenv deactivate

# 设置当前路径的python版本，优先级：shell > local > global
pyenv local 3.6.5

# 删除虚拟环境（删除所在目录即可）
rm -rf ~/.pyenv/versions/test3.7.3/

```


## 安装 mysql
- [如何在Ubuntu 16.04下安装MySQL](https://blog.csdn.net/james_nan/article/details/82053430)
```bash
# 安装 mysql 基础服务
apt install mysql-server
apt install mysql-client
apt install libmysqlclient-dev

# 测试是否安装成功
netstat -tap | grep mysql

# 打开数据库
mysql -uroot -p

# 配置文件
sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

# 重启 mysql 服务
service mysql restart
```


## 安装 nginx
```bash
# 安装 nginx
apt install nginx

# 查看nginx安装路径
whereis nginx

# 查看 nginx 加载的哪个配置文件
sudo nginx -t

# 配置文件位置
cat /etc/nginx/nginx.conf

# 启动
nginx

# 重启
nginx -s reload
```


## 配置 HTTPS 443

- [Django 中将HTTP转换为HTTPS [已成功？？？]](https://blog.csdn.net/qq1154479896/article/details/89408428)
- [在本地环境（mac）启用https](https://www.cnblogs.com/programs/p/11043169.html)
- [阿里云服务器https配置](https://blog.csdn.net/wqhjfree/article/details/77256131)

```bash
# 服务器报错 400
You're accessing the development server over HTTPS, but it only supports HTTP.

# 安装 pyOpenSSL（测试时用）
pip install pyOpenSSL

# 以 https 方式启动 django（测试专用）
python manage.py runserver_plus --cert cert.crt 0.0.0.0:23480

--------------------------------

# SSL 证书
阿里云：https://yundunnext.console.aliyun.com/?spm=5176.2020520163.aliyun_sidebar.daliyun_sidebar_cas.5f3956a7FAnrMY&p=cas#/overview/cn-hangzhou
下载并解压后放在：/etc/nginx/certificate/

# nginx https 配置
server
    {
        listen 443;
        server_name www.lee521.top;
        ssl on;
        root html;
        index index.html index.htm;
        ssl_certificate      /etc/nginx/certificate/2501940_lee521.top.pem;
        ssl_certificate_key  /etc/nginx/certificate/2501940_lee521.top.key;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
            root html;
            index index.html index.htm;
        }
    	location ~ /api {
    	    proxy_pass http://127.0.0.1:23480;
    	}
    	location ~ /doc {
     	    proxy_pass http://127.0.0.1:23480;
    	}
    	location ~ /static {
     	    proxy_pass http://127.0.0.1:23480;
    	}
    }
    
# 配置成功 ！
https://www.lee521.top/doc/
https://www.lee521.top/api/system/system_user/
```


## 配置前端
```bash
        server {
                listen 10086;
                server_name localhost;
                root /root/www/vue-element-admin/dist/;
        }
```


# 打包 install.sh 脚本文件

**==执行 source ~/.bashrc 会出错，提示 source not found，可以分两批执行==**

```bash
sudo apt update
apt list --upgradable
# need keyboard input: y
sudo apt install yum
# need keyboard input: y
sudo apt install ruby
sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
# need keyboard input: y
sudo apt install screen
sudo apt install git
# install pyenv
rm -rf ~/.pyenv/
sudo curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash

# update source
sed -i '1i export PATH="/root/.pyenv/bin:$PATH"' ~/.bashrc
sed -i '2i eval "$(pyenv init -)"' ~/.bashrc
sed -i '3i eval "$(pyenv virtualenv-init -)"' ~/.bashrc
# 执行这一句会出错，提示 source not found
source ~/.bashrc

# install depend package
sudo apt install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev
# download python 3.6.5
wget http://mirrors.sohu.com/python/3.6.5/Python-3.6.5.tar.xz -P ~/.pyenv/cache/
# install 2.6.5 with pyenv
pyenv install 3.6.5 -v
# refresh pyenv
pyenv rehash
# clone pyenv-virtualenv
git clone git://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
# new a virtualenv named custom_3.6.5 with python3.6.5
pyenv virtualenv 3.6.5 custom_3.6.5
# show all virtualenv
pyenv versions
```

# 新版项目启动代码

```bash
gunicorn -c ./gunicorn-config.py backend.wsgi
```


# 祝君无Bug~