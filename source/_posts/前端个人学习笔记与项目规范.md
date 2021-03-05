---
title: 前端个人学习笔记与项目规范
categories:
  - 个人文档
tags:
  - 个人文档
keywords: 个人文档
description: 个人文档
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170242.png
date: 2020-06-20 10:35:22
---

```
# Lee 更新于 2019-05-30

以下是学习Vue的渐进路线，并非适合所有人但适合大多数人
如果是计算机专业的话，而且有其他语言基础的，1～2天就可以过一遍
如果是非计算机专业的话，可能要半个月左右，不会的一定要勤问（发扬不要脸的精神）
看完之后别逗留太久，尽早跟着项目走，真正开始动手写点儿东西的时候，才是你刚开始入门的时候



        人生、工作的结果 = 思维方式 × 热情 × 能力
                                    
                                    --- 稻盛和夫《活法》
```


# Basic Document：

- HTML(***)：http://www.w3school.com.cn/html/index.asp
- JS(****)：https://wangdoc.com/javascript/index.html
- Js(W3c版)：http://www.w3school.com.cn/jsref/jsref_obj_array.asp
- CSS3(*)：http://www.w3school.com.cn/css3/index.asp
- Vue官方文档（重点）(*****)：https://cn.vuejs.org/
- VueX官方文档(*****)：https://vuex.vuejs.org/zh/guide/
- VueRouter官方文档(*****)：https://router.vuejs.org/guide/#html
- Element UI框架(****)：http://element.eleme.io/#/zh-CN （随用随找）
- 看Git的前3章节(***)：https://git-scm.com/book/en/v2
- ES6(*)：http://es6.ruanyifeng.com/#README
- 阮一峰 Webpack Demo：https://www.jianshu.com/p/080e18fcf0e3
- Http协议(**)：https://www.cnblogs.com/ranyonsue/p/5984001.html
- 【Vue官方项目Demo】：https://panjiachen.github.io/vue-element-admin/#/login
- 【项目目录解析】（只看第一章就行）：https://segmentfault.com/a/1190000009275424

# Basis SoftWare：

**baiduCloud链接（Mac版）：链接:https://pan.baidu.com/s/1dQJAJ8nSV2FyOcZt19KP5Q  密码:x605**

**baiduCloud链接（Windows版）：链接:https://pan.baidu.com/s/1Imq9YggdknZOegJc8LNr8A  密码:qo6z**

- IDE：Websotrm
- GIt仓库管理：Sourcetree（用baiduCloud里的sourcetree276a.zip）
- 接口测试：Postman
- 浏览器（推荐）：chrome
- 常用fq：Shadow--socks (敏感词，下载的时候把--去掉)


# 开会内容：新项目的统一规范（2019-02-22）

## 1. Form封装问题
```
能在一个页面中写完的内容就不要随便抽象出一个组件，意义不大。
```

## 2. 组件引用的路径：
```
为了方便代码复用，统一使用绝对路径（如：'@/components/LqPagination'），按住Commond键 + 左键单击 即可跳转到该组件
PS：如果你的webStorm绝对路径无法跳转，请根据以下操作引入webpack文件：
    webStorm --> preferences --> Languages & Frameworks --> JavaScript --> Webpack：../qf_admin/admin/build/webpack.base.conf.js
```

## 3. 分页组件：
```
为了解决分页时的loading问题，给分页组件传参数
LqPagination组件：【:init-func="initData"】
Pagination组件：【@pagination="initData"】
每个函数只做一件事情，initData()就只是一个初始化列表函数，不要写别的内容。
![image](http://note.youdao.com/yws/res/7075/13C1D152E20F48649D28553B9D5B309A)
```

## 4. 混入
```
每个模块的混入文件有且仅有一个，放在该模块主目录下的mixin里即可。
混入文件内仅存放Vuex的相关代码，不要放其他的
```

## 5. Vuex的使用
```
数据缓存的问题，以动态控制keep-alive来解决
【能不用Vuex的地方就不要用】
码表必须要用Vuex维护，并且必传：config = { usingCache: true }
![image](http://note.youdao.com/yws/res/7086/3C16AC303C164E6A8B4D22C81C0332FC)
```

## 6. 命名规范 & 页面规范

### 项目目录为：
     - views // 项目文件目录 */
        - target-action // 日程模块 */
            - components // 此模块公用的组件 */
                - scheduleTable.vue
            - mixin // 此模块公用的混入文件 */
                - Data.js
            - index.vue // 模块主页 */
            - personal // 子模块 */
                - month.vue
            - create.vue // 新增 || 修改 页面 */
        - announcement // 公告栏模块 */
        - ... // 其他模块 */
        
```
# 文件夹 & 文件 命名规范
全部为小写，多个单词的话中间以 _ 【下划线】连接，如：
target_action，day_schedule，customer_info

# vue文件内部name命名规范
***.vue页面的name（同其在路由中的name）,按照此文件的目录结构【小驼峰】命名，如：
1. 日程模块主页的name命名为：targetActionIndex
2. 日程模块新增页面的name命名为：createTargetAction
3. target-action的子模块personal的month页面的name命名为：targetActionPersonalMonth

# 函数命名规范
按照函数的具体功能【小驼峰】命名，如：
1. 初始化数据函数：initData()
2. 刷新table函数：handleFilter()
3. 选中当前行函数：handleCurrentChange()
4. 提交 || 确认 函数：handleConfirm()

# 页面格式规范
整体section内：class="app-container"（即padding="20px";）
如xxc_admin项目所有页面都封装在el-card中，已自带padding：20px，所以就不需要class="app-container"了
常规左右分栏布局：元素多的一侧 :span=14，少的一侧 :span=10
页面最下方距离底部尽量留出50px～60px的距离，以免页面宽度缩小之后有的元素被换行而挡住
高度实在放不开的页面，设置滚动：height: 800px;overflow:auto;overflow-x:hidden;

# 按钮样式规范
【table内】的按钮：放到el-tooltip中，提示框在上面，按钮size="mini",区分type，非圆角,带icon
【查询参数后】的按钮：round，正常sizi，区分type，带icon
【增加／修改页面】的按钮：非圆角，正常大小
    「左边是“提交”，type="success" icon="el-icon-check"」
    「右边是“作废”，type="danger" <svg-icon icon-class="ic-ban" style="margin-right: 5px;"/>」
【详情页面】的按钮：“返回”放到最右边，type="warning" icon="el-icon-back" @click="gotoAndClose()"
1.  增加：type=success，icon=plus
2.  删除：type=danger，icon=delete
3.  修改：type=primary，icon=edit（如果有两种修改按钮时：icon=edit-outline）
4.  查询：type=default，icon=search
5.  刷新：type=default，icon=refresh
6.  确定：type=success，icon=success
7.  取消：type=warning，icon=error
8.  提交：type=success，icon=check
9.  关闭：type=warning，icon=close
10. 详情：type=info，icon=info
11. 打印：type=info，icon=printer
12. Excel：type=success，icon=document

# 全局table样式规范
1. 按照客户的需求，全局修改css
2. 如果右侧有操作列，需fixed="right"固定在最右侧，且设置固定宽度
3. 能设置固定宽度的尽量设定，如：时间、日期、姓名(不会超过5个字)
4. 序号列，可有可无，如果表格字段过少，可充数用

# 函数执行成功后的提示
1. 创建、修改、更新、删除【成功】后统一用this.$notify，即notification
2. 【操作错误、参数错误】等提醒用this.$message
```


# 祝君无Bug~