---
title: 2020前端面试
categories:
  - 面试
tags:
  - 面试
keywords: '面试'
description: 面试
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170049.png
date: 2020-08-12 23:54:32
---

> 今日裸辞，在投简历的过程中抽出一周集中复习前端知识，并做了此文以记录知识点。

# 目 录
[TOC]


<!-- #region # 自我介绍 -->
# 自我介绍
- 学历
- 项目经验
- 技术栈
<!-- #endregion -->


<!-- #region # 项目难点 -->
# 项目难点
- vue-print-nb：在windows系统上，低版本的浏览器调用#print打印会出现空白页，换成windows.print()即可；或者让用户更新浏览器
- vue-print-nb进行单据打印：不同的系统、不同的浏览器，打印效果是不一样的，比如windows系统下element的table-column的props传入的字符串中`英文单词`超过长度会变成...而不会换行，换成scope就没事了
- vue-fallcalender：日历组件，api介绍模糊，无法实现指定日期的初始化、无法对传入数据进行排序
- 自定义el-form-item组件：利用slots与props实现自定义样式
- 封装SimpleClass：每次页面都要loading、axios、赋值、closeLoading，及处理查询参数
- 封装多文件上传Modal：限制文件大小、类型、个数，默认覆盖上传
- 封装基于xlsx的Excel导入导出Modal：支持复杂表头的Excel导出
<!-- #endregion -->


<!-- #region # CSS -->
# CSS
- [CSS选择器](http://www.ruanyifeng.com/blog/2009/03/css_selectors.html)
{% hideToggle 查看答案 %}
    - `*`：通用元素选择器，匹配任何元素
    - `E`：标签选择器，匹配所有使用E标签的元素
    - `info`：class选择器，匹配所有class属性中包含info的元素
    - `#footer`：id选择器，匹配所有id属性等于footer的元素
    - `E,F`：多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔
    - `E F`：后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔
    - `E > F`：子元素选择器，匹配所有E元素的子元素F
    - `E + F`：毗邻元素选择器，匹配所有紧随E元素之后的同级元素F
    - `E[att=val]`：匹配所有att属性等于"val"的E元素
    - `E:first-child`：匹配父元素的第一个子元素
    - `E:last-child`：匹配父元素的最后一个子元素，等同于:nth-last-child(1)
    - `E:nth-child(n)`：匹配其父元素的第n个子元素，第一个编号为1
{% endhideToggle %}
- [CSS 布局 position 详解](https://blog.csdn.net/jianghao233/article/details/80534835)
{% hideToggle 查看答案 %}
    - fixed：固定定位，参照`整个窗口`
    - absolute：绝对定位，参照`最近定位父元素`
    - relative：相对定位，参照`父级元素的原始点`
    - static：默认值，没有定位，出现在正常的文档流中
    - sticky：吸附定位、磁铁定位、粘性定位。常和fixed结合制造吸附效果
    - inherit：集成父元素的定位
{% endhideToggle %}
- [css盒模型两种以及切换方式](https://www.axihe.com/focus/css/56.html)
- [实现三列布局](https://blog.csdn.net/u013455430/article/details/86477416)
{% hideToggle 查看答案 %}
    - float触发BFC块级布局：float: left;、float: right;、overflow:hidden;
    - flex布局：display:flex;、flex:none;、flex:1;、flex:none;
    - table布局：display:table;、display:table-cell;
    - css计算宽度布局：float:left;、width:calc(100% - 100px);、float:right;
{% endhideToggle %}
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex 布局示例](http://static.vgee.cn/static/index.html)
{% hideToggle 查看答案 %}
    - 容器的属性
    - flex-direction属性：决定主轴的方向（即项目的排列方向）。`.box { flex-direction: row | row-reverse | column | column-reverse; }`
    - flex-wrap属性：默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。`.box{ flex-wrap: nowrap | wrap | wrap-reverse; }`
    - flex-flow属性：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。`.box { flex-flow: <flex-direction> || <flex-wrap>; }`
    - justify-content属性：定义了项目在主轴上的对齐方式。`.box { justify-content: flex-start | flex-end | center | space-between | space-around; }`
    - align-items属性：定义项目在交叉轴上如何对齐。`.box { align-items: flex-start | flex-end | center | baseline | stretch; }`
    - align-content属性：定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。`.box { align-content: flex-start | flex-end | center | space-between | space-around | stretch; }`
    - 项目的属性
    - order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
    - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
    - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
    - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
    - flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    - align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
{% endhideToggle %}
- [实现两栏布局的几种方式](https://www.jianshu.com/p/267239f8e4b2)
- [页面两栏布局（变式）](https://blog.csdn.net/baidu_36065997/article/details/80279305)
- [浮动元素引起的问题和清除浮动的办法](https://www.axihe.com/focus/css/10.html)
{% hideToggle 查看答案 %}
    - 额外标签法：`div style="clear:both;"></div`
    - 使用after伪元素：`#parent:after{content:".";height:0;visibility:hidden;display:block;clear:both;}`
    - 设置 overflow 为 hidden 或者 auto
    - 父元素也设置浮动：（缺点）使得与父元素相邻的元素的布局会受到影响，不可能一直浮动到body，不推荐使用
{% endhideToggle %}
- [清除浮动overflow:hidden的原理，为什么可以清除](https://blog.csdn.net/h_qingyi/article/details/81269667)
{% hideToggle 查看答案 %}
    - 通过`触发BFC方式`，实现清除浮动
    - 缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素
{% endhideToggle %}
- [CSS伪类-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
{% hideToggle 查看答案 %}
    - active、focus、hover、link、visited
    - first-child、last-、nth-child()
    - first-of-type、last-of-、nth-of-type()
    - before、after
    - checked、not()、read-only
{% endhideToggle %}
- [div水平垂直居中的六种方法](https://www.cnblogs.com/a-cat/p/9019184.html)
- [实现一个宽度自适应100%，宽高比16:9的div水平垂直居中](https://blog.csdn.net/weixin_33690367/article/details/88712205)
{% hideToggle 查看答案 %}
```html
<div class="box">
  <div class="scale">
    <img src="http://img17.3lian.com/201612/16/88dc7fcc74be4e24f1e0bacbd8bef48d.jpg" class="item"/>
  </div>
</div>
```
```css
.box {
  width: 80%;
}

.scale {
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  position: relative;
}

.item {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  position: absolute;
}
```
{% endhideToggle %}
- [transform有哪些用法](https://www.axihe.com/focus/css/75.html)
{% hideToggle 查看答案 %}
    - 旋转：rotate（`transform: rotate(45deg);`）
    - 缩放：scale（`transform: scale(0.5, 2);`）
    - 移动：translate（`transform: skew(45px, 150px);`）
    - 倾斜：skew（`transform: skew(30deg, 30deg);`）
    - 基准点：transform-origin（`transform-origin: 10px 10px;`）
    - 用法：`transform: rotate(45deg) scale(0.5) skew(30deg, 30deg) translate(100px, 100px);`这四种变形方法顺序可以随意，但不同的顺序导致变形结果不同，原因是变形的顺序是从左到右依次进行
{% endhideToggle %}
- [CSS哪些属性脱离文档流](https://www.axihe.com/focus/css/1.html)
{% hideToggle 查看答案 %}
    - 第一种:定位
        - position:absolute
        - position:fixed
    - 第二种:浮动
        - float:left
        - float:right
    - 注：position:sticky，就是`粘性定位`并不会脱离文档流
{% endhideToggle %}
- [css表达式：expression](https://www.cnblogs.com/yingsmirk/archive/2012/04/09/2438506.html)
{% hideToggle 查看答案 %}
    - IE5及其以后版本支持在CSS中使用expression，用来把CSS属性和Javascript脚本关联起来
    - 每两小时刷新一次背景色：background-color:expression((new Date().getHours()%2?"#B8D4FF":"#F08A00"));
    - 依照浏览器的大小来安置一个元素的位置：left: expression(document.body.offsetWidth - 180   "px");
{% endhideToggle %}
- [html5/css3响应式页面开发总结](https://www.cnblogs.com/zhangbs/p/9797850.html)
{% hideToggle 查看答案 %}
    - `自适应`是一套模板适应所有终端，但每种设备上看到的版式是一样的，俗称宽度自适应。
    - `响应式`一套模板适应所有终端，但每种设备看到的版式可以是`不一样`的。如：http://segmentfault.com/ 
    - `设置meta标签`
        - <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        - §width=device-width：宽度等于当前设备的宽度
        - §initial-scale：初始的缩放比例（默认设置为1.0）
        - §minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）
        - §maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）
        - §user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）
    - `css3的媒体查询`
        - @media (orientation:portrait) and (max-width:460px) {}
        - orientation：portrait(指定输出设备中的页面可见区域高度大于或等于宽度) | landscape
        - <link rel="stylesheet" type="text/css"media="screen and (min-width: 400px) and (max-device-width: 600px)" href="smallScreen.css" />
    - `百分比布局`
{% endhideToggle %}
- [对BFC的规范的理解](https://www.axihe.com/focus/css/86.html)
{% hideToggle 查看答案 %}
    - W3CCSS2.1规范中的一个概念,它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用）
    - BFC，`块级格式化上下文`，一个创建了新的BFC的盒子是`独立布局`的，`盒子里面的子元素的样式不会影响到外面的元素`
    - 在同一个BFC中的两个毗邻的块级盒在`垂直方向`（和布局方向有关系）的margin会发生折叠
{% endhideToggle %}
- [触发BFC的条件](https://www.axihe.com/focus/css/87.html)
{% hideToggle 查看答案 %}
    - 浮动元素：float除none以外的值，float、right
    - 绝对定位元素：position（fixed、absolute）
    - display：inline-blocks、table-cells、table-captions
    - overflow除了visible以外的值：hidden、auto、scroll
{% endhideToggle %}
- [BFC的用处](https://www.axihe.com/focus/css/87.html#bfc%E7%9A%84%E7%94%A8%E5%A4%84)
{% hideToggle 查看答案 %}
    - 可以阻止边距折叠（margin collapsing）
    - 可以包含内部元素的浮动
    - 可以阻止元素被浮动覆盖
{% endhideToggle %}
- [display有哪些值？说明他们的作用。](https://www.axihe.com/focus/css/16.html)
{% hideToggle 查看答案 %}
    - `none`：隐藏，此元素不会被显示
    - `block`：块显示；此元素将显示为块级元素，此元素前后会带有换行符
    - `inline`：内嵌，默认。此元素会被显示为内联元素，元素前后没有换行符
    - `table`：表格显示，此元素会作为块级表格来显示（类似table标签），表格前后带有换行符
    - `inline-block`：元素既具有block元素可以`设置宽高`的特性，同时又具有inline元素默认`不换行`的特性
    - `list-item`：象块类型元素一样显示，并添加样式列表标记
    - `inherit`：规定应该从父元素继承display属性的值
{% endhideToggle %}
- [display中block、inline和inline-block的区别](https://www.jianshu.com/p/02f9d528397c)
{% hideToggle 查看答案 %}
    - `block`：
    - 前后都有换行，和前后元素都不在一行
    - 宽度、行高、边距都可以自行设置
    - 宽度缺省是它的容器的100%，除非设置一个宽度
    - div,p,h1,form,ul和li是块元素的例子
    - `inline`：
    - 和其他元素都在一行上
    - 高，行高及顶和底边距不可改变
    - 宽度就是它的文字或图片的宽度，不可改变
    - span,a,label,input,img,strong和em是inline元素的例子
    - `inline-block`：
    - 将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，允许空格。(应用此特性的元素呈现为内联对象，周围元素保持在同一行，但可以设置宽度和高度地块元素的属性)
{% endhideToggle %}
- [display:none和visibility:hidden的区别](https://www.axihe.com/focus/css/18.html)
{% hideToggle 查看答案 %}
特性\标签 | display:none | visibility:hidden
---|---|---
空间占据 | 不占据任何空间，它各边的元素会合拢 | 元素空间依旧存在
回流与渲染 | 会产生reflow和repaint(回流与重绘) | 没有这个影响前端性能的问题
株连性 | 其子孙节点元素全部不可见 | 子元素默认不显示，但如果子孙元素应用了visibility:visible就可以展现出来
{% endhideToggle %}
- [css隐藏页面元素的多种方法](https://www.cnblogs.com/a-cat/p/9039962.html)
{% hideToggle 查看答案 %}
- 常见的CSS预处理器：
    - Sass
    - Less
    - Stylus
    - PostCSS：模块化工具，速度快3-30倍，功能强大（既不是`预处理器`也不是`后处理器`）
{% endhideToggle %}
- [sass常用属性](https://www.cnblogs.com/morong/p/4329957.html)
- [less简介](https://www.jianshu.com/p/868d1bcbe12a)
- [谈谈PostCSS](https://segmentfault.com/a/1190000011595620)
- [纯CSS画的基本图形(圆形、三角形、多边形、爱心、八卦等)](https://www.cnblogs.com/zuobaiquan01/p/8582298.html)
- [纯CSS绘制三角形（各种角度）](https://www.jb51.net/article/42513.htm)
<!-- #endregion -->


<!-- #region # JavaScript -->
# JavaScript
1.   **作用域**
{% hideToggle 查看答案 %}
    - 作用域是一种规则，用于确定引擎在何处以及如何根据标识符名称进行变量查找（引擎、编译器、作用域）
    - 在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量或抵达最外层作用域（即全局作用域）为止。查找也分为两种：LHS和RHS
{% endhideToggle %}
1.   **作用域的两种工作模型**
{% hideToggle 查看答案 %}
    - ==词法作用域==：在`写代码或定义时`确定的，作用域链基于作用域的嵌套，即更关注`在何处声明`。大多数编程语言都采用
    - `动态作用域`：在`运行时`确定的，作用域链是基于调用栈的，即更关注函数是`从何处调用`的。this的机制也是如此(像但不是)
{% endhideToggle %}
2.   **要判断一个运行中函数的`this绑定`，就需要找到这个函数的`直接调用位置`，最重要的就是`分析调用栈`（为了到达当前执行位置所调用的所有函数，即函数调用链）。**
3.   **调用位置如何决定this的绑定对象？可顺序应用下面四条规则来判断**
{% hideToggle 查看答案 %}
    - 是否在new中调用（new绑定）？绑定到新创建的对象。`var bar = new foo()`
    - 是否通过call、apply（显示绑定）或者bind（硬绑定）调用？绑定到指定的对象。`var bar = foo.call(obj2)`
    - 是否在某个上下文对象（隐式绑定）中调用？绑定到那个上下文对象。`var bar = obj1.foo()`
    - 如果都不是即独立函数调用（默认绑定），严格模式下绑定到undefined，非严格模式下绑定到全局对象。`var bar = foo()`
{% endhideToggle %}
4.   **ES6中`箭头函数()=>{}`并不会使用这四条标准的绑定规则，而是根据`当前的词法作用域`来决定this，具体来说，箭头函数会继承外层函数调用的this绑定（无论this绑定到什么）。这其实和ES6之前的`self = this`机制一样。**
5.   **代码风格：**
{% hideToggle 查看答案 %}
    - 词法作用域风格：只使用`词法作用域`，并完全抛弃错误的this风格。
    - this风格：完全采用this风格，必要时使用`bind(...)`，尽量避免使用`self = this`和`箭头函数()=>{}`。
{% endhideToggle %}
6.   **==原型==**
{% hideToggle 查看答案 %}
    - 所有的函数都有一个特殊的属性:`prototype(原型)`，prototype属性是一个`指针`，指向的是一个`对象(原型对象)`，原型对象中的`方法和属性`都可以被函数的实例所`共享`。所谓的函数实例是指以函数作为构造函数创建的对象，这些对象实例都可以共享构造函数的原型的方法。(所有`函数`的默认原型都是`Object`的实例)
{% endhideToggle %}
7.   **==[作用域链和原型链](https://cnodejs.org/topic/59662f6dbda29e0f7480235b)==**
{% hideToggle 查看答案 %}
    - 作用域链：在`词法作用域`中寻找`标识符&变量`。作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。
    - 原型链：在`原型对象`中寻找`引用类型的属性`。
{% endhideToggle %}
8.   **==闭包==**
9.   **闭包是基于词法作用域书写代码时所产生的自然结果**
10.  **当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使==函数是在当前词法作用域之外执行==**
11.  **无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包**
12.  **闭包的应用场景：**
{% hideToggle 查看答案 %}
    - function调用`setTimeout(...)`（延迟函数的回调会在循环结束时才执行，即使定时器是`setTimeout(..., 0)`）
    - 定时器、事件监听器、Ajax请求、跨窗口通信、WebWorkers、任何异步或同步任务，只要使用了==回调函数==，实际上就是在使用闭包
    - for循环
    - 立即执行函数表达式IIFE：`(function(){...})())`（本身创建了闭包，但严格来说并不是闭包）
    - ==模块模式==：比如jQuery和$符就是jQuery模块的公共api
{% endhideToggle %}
13.  **以上均来自`《你不知道的JavaScript（上卷）》`**
14.  **[js的原型和原型链](https://www.jianshu.com/p/be7c95714586)**
{% hideToggle 查看答案 %}
    - __proto__指向其构造函数的prototype原型，即
    - `person1.__proto__`，指向`Person.prototype`（相等）
    - `Person.prototype`，指向`Object.prototype`
    - `Object.prototype`，指向`Null`
    - 上述即原型链
{% endhideToggle %}
15.  **[一篇文章看懂_proto_和prototype的关系及区别](https://www.jianshu.com/p/7d58f8f45557)**
16.  **[prototype、__proto__与constructor区别与联系](https://blog.csdn.net/qq_35376561/article/details/96651353)**
{% hideToggle 查看答案 %}
    - function Person() {}
    - Person.prototype.name = 'Lee'
    - `Person.prototype` // {% hideInline {name: "Lee"， constructor: ƒ}, 查看输出 %}
    - Person.constructor // {% hideInline [Function: Function] || ƒ Function() { [native code] }, 查看输出 %}
    - Person.__proto__ // {% hideInline {name: "Lee"， constructor: ƒ}, 查看输出 %}[Function] || ƒ () { [native code] }
    - ---我是一条分割线---
    - var person1 = new Person()
    - `person1.prototype` // {% hideInline undefined, 查看输出 %}
    - `person1.constructor` // {% hideInline [Function: Person] || ƒ Person() {}, 查看输出 %}
    - `person1.__proto__` // {% hideInline {name: "Lee"， constructor: ƒ}, 查看输出 %}
    - `person1.constructor.prototype` // {% hideInline {name: "Lee"， constructor: ƒ}, 查看输出 %}
    - person1.constructor.prototype === person1.__proto__ // {% hideInline true, 查看输出 %}
{% endhideToggle %}
1.   **[浅析JavaScript中原型及constructor、__proto__、prototype的关系](https://segmentfault.com/a/1190000019279667)**
{% hideToggle 查看答案 %}
    - 任意对象：拥有constructor，指向构造函数
    - 任意对象：拥有__proto__，指向构造函数的原型
    - 任意函数：拥有prototype，指向原型对象
    - 任意函数：拥有__proto__和constructor，因为函数也是一种对象，所以这是从它的原型即Object构造函数那里共享来的
{% endhideToggle %}
1.   **[浅拷贝和深拷贝的区别](https://segmentfault.com/a/1190000018874254)**
{% hideToggle 查看答案 %}
    - `浅拷贝`是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是`内存地址（引用类型）`，拷贝的就是内存地址，因此如果其中一个对象改变了这个地址，就会影响到另一个对象。
    - `深拷贝`会另外创造一个一模一样的对象，新对象跟原对象`不共享内存`，修改新对象不会改到原对象。
{% endhideToggle %}
1.   **深拷贝的思路（递归？利用Object.prototype.toString.call(obj)判断类型，链接同上）**
{% hideToggle 查看答案 %}
    - 递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝
{% endhideToggle %}
1.   **[实现深拷贝的方法](http://www.javanx.cn/20191217/js-deep-copy/)**
{% hideToggle 查看答案 %}
    - [JSON.parse(JSON.stringfy(obj))](https://blog.csdn.net/u013565133/article/details/102819929)
        - 缺点1：拷贝Date()类型会被转换为字符串
        - 缺点2：RegExp、Error对象，结果将只得到空对象{}
        - 缺点3：function、undefined，结果会丢失
        - 缺点4：NaN、Infinity和-Infinity，结果会变成null
        - 缺点5：JSON.stringify()只能序列化对象的可枚举的自有属性。如果obj中的对象是有构造函数生成的，则使用JSON.parse(JSON.stringify(obj))深拷贝后，结果会`丢弃对象的constructor`
    - 递归遍历逐级浅拷贝
        - 每一次递归，无论此函数是否有改变都需要重新递归
    - [proxy深拷贝](https://segmentfault.com/a/1190000021692975)
        - 判断target类型，isPlainObject()
        - const isProxy = value => !!value && !!value[MY_IMMER]
        - 利用上述语句判断是否是我们的proxy类型与对暗号，如果不是proxy，我们需要将其拦截
        - 判断我们深拷贝的对象是否有改变
{% endhideToggle %}
1.   **[函数声明和var声明的优先级](https://www.cnblogs.com/cnblogs-jcy/p/8926310.html)**
2.   **[如何利用正则匹配字符串](https://www.jb51.net/article/124041.htm)**
{% hideToggle 查看答案 %}
    - exec：查找并返回当前的匹配结果，并以数组的形式返回；exec是RegExp对象的方法；每次只返回一次匹配项
    - match：math是String对象的方法；一次性返回所有匹配项
{% endhideToggle %}
1.   **[将字符串变成数字](https://www.cnblogs.com/mica/p/11760397.html)**
{% hideToggle 查看答案 %}
    - 一、当字符串中是纯数字，var s = '234'
    - `s *= 1`，字符串在运算操作中会被当做数字类型来处理
    - string的两个转换函数，只对string有效。`parseInt(s)`和`parseFloat(s)`
    - `Number(s)`，强制类型转换
    - 二、当字符串是数字加字母等非数字，如var s = '234string'，只能用第二种方法`parseInt`、`parseFloat`
{% endhideToggle %}
1.   **~~new Set的数组去重和自己实现的哪个性能会更好~~**
2.   **[new操作符的作用及运行过程](https://blog.csdn.net/duanshilong/article/details/88235546)（new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例）**
{% hideToggle 查看答案 %}
    - 一个继承自 Person.prototype 的新对象被创建。
    - 使用指定的参数调用构造函数 Person ，并将 this 绑定到新创建的对象。new Person 等同于 new Person()，也就是没有指定参数列表，Person 不带任何参数调用的情况。
    - 由构造函数返回的对象就是new表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）
    - `简单回答`：
    - 创建一个空对象，并且this变量引用该对象，同时还继承了该函数的原型。
    - 属性和方法被加入到this引用的对象中。
    - 新创建的对象由this所引用，并且最后隐式的返回this。
{% endhideToggle %}
1.   **[Instanceof运算符的作用及运行过程](https://www.jianshu.com/p/5f6b4ec34059)（用于测试构造函数的prototype属性，是否出现在对象的原型链中的任何位置）**
{% hideToggle 查看答案 %}
    - 判断构造函数的原型对象(如Person.prototype和Object.prototype)是否在实例对象（person1）的原型链上（__proto__）;如果在对象的原型链上，就返回true，如果不在就返回false;
{% endhideToggle %}
1.   **变量提升是什么？Var、Const 、let 是如何变量提升的（暂时性死区）？**
2.   **[var与let、const的区别](https://www.jianshu.com/p/7bf685dbc12e)**
{% hideToggle 查看答案 %}
    - var声明变量存在变量提升，let和const不存在变量提升
    - let、const都是块级局部变量
    - 同一作用域下let和const不能声明同名变量，而var可以
{% endhideToggle %}
1.   **[js检测变量是否已定义](https://blog.csdn.net/joyvonlee/article/details/89603278)**
{% hideToggle 查看答案 %}
    - console.log(typeof undefined);  // undefined
    - console.log(typeof null);  // object
    - console.log(typeof 123);  // number
    - console.log(typeof "字符串");  // string
    - console.log(typeof {});  // object
    - console.log(typeof aa);  // undefined
{% endhideToggle %}
1.   **[js判断对象中是否有某属性的常用方法](https://www.jb51.net/article/141994.htm)**
{% hideToggle 查看答案 %}
    - 点(`.x`)或者方括号(`[x]`)：这里的“不存在”指的是对象自身和原型链上都不存在，如果原型链有该属性，则会返回原型链上的属性值。局限性：不能用在x的属性值存在，但可能为undefined的场景
    - `in运算符`：如果指定的属性在指定的对象或其原型链中，则in运算符返回true。局限性：无法区分自身和原型链上的属性，即无法判断该属性是否是自身的
    - `hasOwnProperty()`：适用于只判断自身属性的场景。
{% endhideToggle %}
1.   **[ES6用过的新特性](https://juejin.im/post/6844903991550181390?utm_source=gold_browser_extension)**
{% hideToggle 查看答案 %}
    - 箭头函数、字符串插值、const、let(块作用域)
    - Promises异步机制、模块import导入、模块export导出
    - function默认参数、class类定义与extend继承
    - for-of遍历对象、...展开操作符
{% endhideToggle %}
1.   **[es6中的数组方法](https://es6.ruanyifeng.com/#docs/array)**
{% hideToggle 查看答案 %}
    - 扩展运算符(...)
    - Array.from()
    - Array.of()
    - 数组实例的 copyWithin()
    - 数组实例的 find() 和 findIndex()
    - 数组实例的 fill()
    - 数组实例的 entries()，keys() 和 values()
    - 数组实例的 includes()
    - 数组实例的 flat()，flatMap()
    - 数组的空位
    - Array.prototype.sort()的排序稳定性
{% endhideToggle %}
1.   **- [es6中的对象方法](https://es6.ruanyifeng.com/#docs/object)**
{% hideToggle 查看答案 %}
    - 属性的简洁表示法：module.exports = { getItem, setItem, clear };
    - 属性名表达式：obj['a' + 'bc'] = 123;
    - 方法的name属性
    - 属性的可枚举性和遍历
        - 有四个操作会忽略enumerable为false的属性
        - for...in循环：只遍历对象自身的和继承的可枚举的属性。
        - Object.keys()：返回对象自身的所有可枚举的属性的键名。
        - JSON.stringify()：只串行化对象自身的可枚举的属性。
        - Object.assign()：忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
    - super关键字：指向当前对象的原型对象。
        - `super.foo`等同于`Object.getPrototypeOf(this).foo（属性）`或`Object.getPrototypeOf(this).foo.call(this)（方法）`
    - 对象的扩展运算符：let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    - 链判断运算符
        - obj?.prop // 对象属性
        - obj?.[expr] // 同上
        - func?.(...args) // 函数或对象方法的调用
    - Null 判断运算符
        - const animationDuration = response.settings?.animationDuration ?? 300;
{% endhideToggle %}
1.   **- [JS继承的实现方式](https://www.cnblogs.com/humin/p/4556820.html)**
{% hideToggle 查看答案 %}
    - 原型链继承：将父类的实例作为子类的原型。`function Cat(){}; Cat.prototype = new Animal()`
    - 构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）。`function Cat(name){Animal.call(this);this.name = name || 'Tom';}`
    - 实例集成：为父类实例添加新特性，作为子类实例返回。`function Cat(name){var instance = new Animal();instance.name = name || 'Tom';return instance;}`
    - 拷贝继承
    - 组合继承
    - 寄生组合继承：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
{% endhideToggle %}
1.   **- [es6中的对象新增方法](https://es6.ruanyifeng.com/#docs/object-methods)**
{% hideToggle 查看答案 %}
    - Object.is()：`Object.is('foo', 'foo')`、`Object.is({}, {})`
        - ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
    - Object.assign(target, source1, source2)
        - 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
    - Object.getOwnPropertyDescriptors(obj)
        - 返回指定对象所有自身属性（非继承属性）的描述对象（descriptor）
        - `{foo:{configurable:true,enumerable:true,value:123,writable:true}}`
    - __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
        - `Object.getPrototypeOf(person1)===person1.constructor.prototype`
    - Object.keys()，Object.values()，Object.entries()
    - Object.fromEntries()
        - 是Object.entries()的逆操作，用于将一个键值对数组转为对象
{% endhideToggle %}
1.   **- [js es6遍历对象的6种方法（应用中推荐前三种）](https://www.cnblogs.com/yuer20180726/p/11377897.html)**
{% hideToggle 查看答案 %}
    - `Object.keys()、Object.values()、Object.entries()`：返回一个数组,包括对象自身的(不含继承的)所有可枚举属性(不含Symbol属性)
    - `for…in…`：循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)
    - `Object.getOwnPropertyNames(obj)`：返回一个数组,包含对象自身的所有属性(包括`不可枚举属性`，但不含Symbol属性)
    - `Reflect.ownKeys(obj)`：返回一个数组,包含对象自身的`所有属性`(不管属性名是Symbol或字符串,也不管是否可枚举)
{% endhideToggle %}
1.   **- [for…in…遍历对象时，为什么有的对象属性可以被遍历到，有的不行？](https://www.jianshu.com/p/c6e3f4685963)**
{% hideToggle 查看答案 %}
    - js中基本包装类型的`自带原型属性`是不可枚举的，如Object, Array, Number等
    - Object.defineProperty()定义的`enumerable:false`的属性也是不可枚举的
{% endhideToggle %}
33.  **- [for-in和for-of的区别](https://www.jianshu.com/p/325f05c95c6a)**
{% hideToggle 查看答案 %}
    - for...in循环出的是key值，for...of循环出的是value值
    - 推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of
    - for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
{% endhideToggle %}
34.  **- [for-of的工作过程](https://www.jianshu.com/p/c43f418d6bf0)**
{% hideToggle 查看答案 %}
    - 首先调用集合的`Symbol.iterator`方法，返回一个新的`迭代器对象`(迭代器对象可以是任意具有.next()方法的对象)
    - for-of循环将重复调用这个`.next()`方法，每次循环调用一次
{% endhideToggle %}
35.  **- a.b.c()中c的this（idea自己实现）**
{% hideToggle 查看答案 %}
```js
var x = '我是a'
var a = {
  x: '我是a',
  b: {
    x: '我是b',
    c: function () {
      var x = '我是c'
      console.log(this)
    }
  }
}
a.b.c() // { x: '我是b', c: [Function: c] }
var d = {
  x: '我是d',
  e: () => a.b.c()
}
d.e() // { x: '我是b', c: [Function: c] }

// 如果把c改为箭头函数
c: () => {
  var x = '我是c'
  console.log(this)
}
// 输出结果如下
a.b.c() // Window {...}
d.e() // Window {...}
```
{% endhideToggle %}
1.   **[forEach和for/for...of循环在使用await上的区别](https://blog.csdn.net/u012961419/article/details/107490076)，如果想同时执行呢？（promise.all）**
{% hideToggle 查看答案 %}
    - for/for...of：遍历到每个元素后，执行await后的方法
    - forEach：在遍历每个元素后，执行的是该方法接收的`回调函数`方法，然后在回调中，执行await方法，forEach方法内部调用回调函数时，并没有使用await修饰，所以回调方法并不会等待上一个回调执行完毕。所以，内部的await也就失去了意义。
{% endhideToggle %}
1.   **[IIEF立即执行为什么用两对括号包裹](https://www.jb51.net/article/127527.htm)**
{% hideToggle 查看答案 %}
    - 模拟函数执行
    - (function () { return 233 })() // 233
    - (function () { return 233 }()) // 233
    - +function () { return 233 }() // 233
    - -function () { return 233 }() // -233
    - ~function () { return 233 }() // -233
    - !function () { return 233 }() // false
{% endhideToggle %}
1.   **[`[]+{}`和`{}+[]`结果有何不同](https://blog.csdn.net/carcarrot/article/details/97786733)**
{% hideToggle 查看答案 %}
    - 加法会进行隐式类型转换，规则是调用其valueOf()或toString()以取得一个非对象的值（primitive value）
    - []+{}   结果是 "[object Object]"，字符串串接
    - {}+[]   结果是 0，{}解析为{ // empty block }，即对一个空数组执行正号运算，实际上就是把数组转型为数字
    - ({}+[])   结果是 "[object Object]"
    - +[]     结果是 0   ，此处+为正号
    - +{}     结果是 NaN   ，此处+为正号
    - [].toString()    结果是 ""
    - ({}).toString() 结果是 "[object Object]"
    - {}.toString()：会出错，Uncaught SyntaxError: Unexpected token .
    - 0+[]    结果是 "0"
    - 0+{}    结果是 "0[object Object]"
{% endhideToggle %}
1.   **[var a=b=c=d=5是什么意思?如果接下来再写一句,d=9,a,b,c的值会变化吗?](https://www.axihe.com/focus/js/base/13.html)**
{% hideToggle 查看答案 %}
    - 初始化给a、b、c、d赋值都为5
    - `不改变`，改变d后a、b、c值不会改变,因为a、b、c、d都是值类型的变量,各自的值存在于自己的栈当中,当d变化了其他栈中的值不改变。
{% endhideToggle %}
1.   **[var a=b=c=d=【1,2,3,4,5】是什么意思?如果接下来写一句d【5】=9;a,b,c,的值会发生变化吗](https://www.axihe.com/focus/js/base/14.html)**
{% hideToggle 查看答案 %}
    - `发生变化`,a、b、c、d值都改为[1,2,3,4,5,9]
    - 因为a、b、c、d是引用类型,引用类型的数据存在于堆当中,栈中存的是指向堆的地址,初始化时 a、b、c、d在各自的栈中指向的堆是同一个,该堆保存着[1,2,3,4,5],当改变了堆中的值,其他对象跟着改变。
{% endhideToggle %}
1.   **[var a=b=c=d=【1,2,3,4,5】是什么意思?如果接下来再写一句d=【9】;a,b,c的值会发生变化吗](https://www.axihe.com/focus/js/base/15.html)**
{% hideToggle 查看答案 %}
    - `不改变`,因为对于d来说改变的是d栈中的地址,此时d指向的堆已经不是原地址,所以此时d与其他几个对象的值已经不同了。
    - 考点：对比上一题,改变的是对应堆中的值,而此题是将d栈中的指针地址改变了。
{% endhideToggle %}
1.   **[js表达式和语句的区别](https://zhidao.baidu.com/question/1758450597152165508.html)**
{% hideToggle 查看答案 %}
    - `表达式`是由运算符构成，并运算产生结果的语法结构。每个表达式都会产生一个值,它可以放在任何需要一个值的地方,比如作为一个函数调用的参数
    - `语句`：则是由“；（分号）”分隔的句子或命令。如果在表达式后面加上一个“；”分隔符，这就被称为“表达式语句”。它表明“只有表达式，而没有其他语法元素的语句”
        - 声明语句：变量声明和函数声明
        - 赋值语句
        - 控制语句：能够对语句执行顺序产生改变，包括条件语句和循环语句，当然还有比较特殊的标签语句
        - 表达式语句：这些语句去掉最后分号，都也可当表达式用的。常见的有：对象操作（new、delete）、函数调用（函数执行，必有返回值）等
{% endhideToggle %}
1.   **~~async 和 await 是谁的语法糖~~**
2.   **~~generator 又是如何实现的？~~**
3.   **[js的5种基本和1(2)种引用数据类型](https://www.axihe.com/focus/js/base/12.html)**
{% hideToggle 查看答案 %}
    - 基本数据类型 ：String、Number、Boolean 、Null、Undefined、Symbol、BigInt
    - 引用数据类型：Object（Funtion）
    - 判断方法：Object.prototype.toString.call(data)
{% endhideToggle %}
1.   **null与undefined知识点（链接同上）**
{% hideToggle 查看答案 %}
    - undefined值派生自null,所以相等比较`null==undefined为true`
    - null是空指针但未用,有个占位符,undefined连指针都没有,也没有占位符,所以绝对比较`null===undefined为false`
{% endhideToggle %}
1.   **[堆和栈的区别](https://blog.csdn.net/hupech/article/details/90522120)（第二篇帖子）**
{% hideToggle 查看答案 %}
    - 栈区（stack）—由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的`栈`。
    - 堆区（heap）—一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。注意它与数据结构中的堆是两回事，分配方式倒是类似于`链表`，呵呵。
{% endhideToggle %}
13.  **[为什么会有跨域的问题？](https://www.jianshu.com/p/9b6b6a135432)**
{% hideToggle 查看答案 %}
    - 在`前后端分离`的模式下，前后端的域名是不一致的，此时就会发生跨域访问问题。在请求的过程中我们要想回去数据一般都是post/get请求，所以跨域问题出现
    - 跨域问题来源于JavaScript的`同源策略`，即只有`协议+主机名(域名)+端口号(如存在)`相同，则允许相互访问。也就是说JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。
    - 跨域问题是针对`JS和ajax`的，`html本身没有跨域问题`（比如a标签、script标签、甚至form标签，只要是带src的）可以直接跨域发送数据并接收数据
{% endhideToggle %}
1.   **[九种跨域方式实现原理](https://zhuanlan.zhihu.com/p/56718905)**
{% hideToggle 查看答案 %}
    - `开发环境`：webpack自带proxyTable：`target:'http://192.168.0.123:8080/'、pathRewrite:{'^/api': '/api'}`
    - `生产环境`：利用nginx反向代理，将请求分发到部署到相应项目的服务器上：`location ~ /api { proxy_pass http://127.0.0.1:23480; }`
    - JSONP：ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加。（但JSONP只支持`GET请求`，不支持POST请求）[jsonp原理详解](https://blog.csdn.net/hansexploration/article/details/80314948)
    - CORS：是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing），CORS通信与同源的AJAX通信没有差别，就是在请求头信息中增加了`Origin:http://192.168.0.123:8080/`字段。[详见阮一峰的博客](http://www.ruanyifeng.com/blog/2016/04/cors.html)
    - web sockets：在JS创建了webSocket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为`web sockt协议`。只有在支持webSocket协议的服务器上才能正常工作。(http->ws; https->wss)
{% endhideToggle %}
1.   **[JavaScript手动实现JSONP代码](https://www.cnblogs.com/gogolee/p/6439664.html)**
{% hideToggle 查看答案 %}
    - document.createElement('script')
    - jsonpScript.setAttribute('src', `${url}callback=${callbackFunction}`)
    - (完成后)document.getElementsByTagName('head')[0].removeChild(script)
{% endhideToggle %}
1.   **[对前端模块化的认识](https://blog.csdn.net/u014168594/article/details/77099315)**
{% hideToggle 查看答案 %}
    - CommonJS规范：允许模块通过`require`方法来同步加载（同步意味阻塞）所要依赖的其他模块，然后通过`module.exports`来导出需要暴露的接口。CommonJS是以在浏览器环境之外构建JavaScript生态系统为目标而产生的项目，比如在服务器和桌面环境中。
    - AMD标准：AMD是RequireJS在推广过程中对模块定义的规范化产出（异步模块定义）。
        - AMD标准中定义了以下两个API：
        - require([module], callback);用来加载一系列模块
        - define(id, [depends], callback);用来定义并暴露一个模块
        - 优点：
        - `异步加载，提前执行`
        - 适合在浏览器环境中加载模块，且可以并行加载多个模块
    - CMD标准：CMD是SeaJS在推广过程中对模块定义的规范化产出(在CommomJS和AMD基础上提出)。
        - define(function (requie, exports, module) {});
        - 优点：
        - `依赖就近，延迟执行`
        - 可以很容易在服务器中运行
    - ES6模块化：EcmaScript6标准增加了JavaScript语言层面的模块体系定义（关键字）。在 ES6 中，我们使用`import`关键字引用模块，使用`export`关键字来导出模块。
{% endhideToggle %}
1.   **[四种常见的JS模块化管理方法的比较(表格形式：导入语法、导出语法、加载方式等)](https://blog.csdn.net/Mrfive555/article/details/79668797?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param)**
2.   **AMD 和 CMD 的区别**
{% hideToggle 查看答案 %}
    - 对于依赖的模块，AMD是提前执行，CMD是延迟执行。
    - AMD推崇依赖前置；CMD推崇依赖就近，只有在用到某个模块的时候再去require。
    - AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一
{% endhideToggle %}
1.   **ES6 模块与 CommonJS 模块的差异**
{% hideToggle 查看答案 %}
    - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
    - 即 CommonJS 先加载整个模块，输出一个对象，取对象内相应的值，输出后内部不会再变化；ES6 是静态编译命令，先加载一个引用，等执行时再根据引用到加载模块内取值输出，动态引用不缓存。
    - 目前很少JS引擎能直接支持 ES6 标准，因此 Babel 的做法实际上是将不被支持的 import 翻译成目前已被支持的 require。
{% endhideToggle %}
1.   **[import和require的区别](https://www.cnblogs.com/sunshq/p/7922182.html)**
{% hideToggle 查看答案 %}
    - 遵循规范
        - require 是 AMD规范引入方式
        - import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法
    - 调用时间
        - require是运行时调用，所以require理论上可以运用在代码的任何地方
        - import是编译时调用，所以必须放在文件开头
    - 本质
        - require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
        - import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
{% endhideToggle %}
1.   **~~XML和JSON的区别？~~**
2.   **[什么是dom0，dom1，dom2，dom3](https://zhidao.baidu.com/question/1771299590043658140.html)**
{% hideToggle 查看答案 %}
    - DOM0：不是W3C规范。
    - DOM1：开始是W3C规范。专注于HTML文档和XML文档。
    - DOM2：对DOM1增加了样式表对象模型
    - DOM3：对DOM2增加了内容模型(DTD、Schemas) 和文档验证。
{% endhideToggle %}
1.   **[dom0级和dom2级的区别](https://www.imooc.com/qadetail/168609)**
{% hideToggle 查看答案 %}
    - DOM0级事件处理：简单且具有跨浏览器的优势；但函数会被覆盖，只会执行最后一个的函数
    - DOM2级事件处理：不会覆盖且顺序执行；不具有跨浏览器优势
{% endhideToggle %}
1.   **[事件，事件冒泡和事件捕获](https://www.cnblogs.com/Shinigami/p/10054696.html)**
2.   **[addEventListener的第三个参数到底该怎么设置](https://www.jianshu.com/p/bad857d649f2)**
{% hideToggle 查看答案 %}
    - target.addEventListener(type, listener[, useCapture]);
    - useCapture: 默认值为false（即 使用事件冒泡）
{% endhideToggle %}
1.   **[JS阻止冒泡和取消默认事件(默认行为)](http://caibaojian.com/javascript-stoppropagation-preventdefault.html)**
{% hideToggle 查看答案 %}
    - `@click.stop="func($event)"`vue取消事件冒泡
    - `@click.prevent="func($event)"`vue阻止默认事件
    - `event.stopPropagation()`W3C提供的方法，起到阻止捕获和冒泡阶段中当前事件的进一步传播
    - `event.preventDefault()`可以取消默认事件
    - `e.cancelBubble = true`，只针对IE
{% endhideToggle %}
1.   **Javascript垃圾回收方法**
{% hideToggle 查看答案 %}
    - 标记清除（mark and sweep）是 JavaScript 最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
    - 引用计数(reference counting) 是另一种不太常见的垃圾回收策略。在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
    - 在IE中虽然JavaScript对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收垃圾的，也就是说只要涉及BOM及DOM就会出现循环引用问题。
{% endhideToggle %}
1.   **[Web Worker](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)**
{% hideToggle 查看答案 %}
    - 作用就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker线程在后台运行，两者互不干扰。等到Worker线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被Worker线程负担了，主线程（通常负责UI交互）就会很流畅，不会被阻塞或拖慢。
    - 通过 worker = new Worker(url) 加载一个JS文件来创建一个worker，同时返回一个worker实例。
    - 通过worker.postMessage( data) 方法来向worker发送数据。
    - 绑定worker.onmessage方法来接收worker发送过来的数据。
    - 可以使用 worker.terminate() 来终止一个worker的执行。
{% endhideToggle %}
1.   **[js按位运算符](https://www.cnblogs.com/happy1992/p/7064114.html)**
{% hideToggle 查看答案 %}
    - `&` 按位与
    - `|` 按位或
    - `^` 按位异或
    - `~` 按位非
    - `>>` 右移
    - `<<` 左移
{% endhideToggle %}
1.   **[常见的js位运算](https://www.jianshu.com/p/768f50569130)**
{% hideToggle 查看答案 %}
```js
一、取整
// 异或运算取整::位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。
// 所以，将一个小数与0进行或运算，等同于对该数去除小数部分，即取整数位。
12.9 ^ 0 // 12
-12.9 ^ 0 // -12

// 双否定位操作符取整
~~4.9 // 4
~~(-4.9) // -4

// 左移0位，就相当于将该数值转为32位整数，等同于取整，对于正数和负数都有效。
13.5 << 0 // 13
-13.5 << 0 // -13

// 或运算取整:位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。
// 所以，将一个小数与0进行或运算，等同于对该数去除小数部分，即取整数位。
2.9 | 0 // 2
-2.9 | 0 // -2

二、判断奇数、偶数
function assert(n) {
    if (n & 1) {
          console.log("n是奇数");
    } else {
          console.log("n是偶数");
    }
}

& 是按位与运算
1 & 1 = 1
1 & 0 = 0
0 & 0 = 0
0 & 1 = 0
int型变量在一般内存中占用4个字节
∵ 2 = 00000000 00000000 00000000 0000010
∵ 1 = 00000000 00000000 00000000 0000001
∴ 2 & 1 = 0
```
{% endhideToggle %}
1.   **[2..toString](https://blog.csdn.net/newair1798/article/details/88207671)**
2.   **[为什么0.1+0.2不等于0.3？](https://segmentfault.com/a/1190000012175422)**
{% hideToggle 查看答案 %}
    - 原因在于在JS中采用的IEEE_754的双精度标准,计算机内部存储数据的编码的时候,0.1在计算机内部根本就不是精确的0.1,而是一个有舍入误差的0.1。
    - 两个`有舍入误差的值`在求和时，相互抵消了，但这种“负负得正，相互抵消”不一定是可靠的，当这两个数字是用不同长度数位来表示的浮点数时，舍入误差可能不会相互抵消。
    - 又如，对于0.1+0.3，结果其实并不是0.4，但0.4是最接近真实结果的数，比其它任何浮点数都更接近。许多语言也就直接显示结果为0.4了，而不展示一个浮点数的真实结果了。
{% endhideToggle %}
1.   **[数组的降维5种办法](https://blog.csdn.net/xufeiayang/article/details/90111775)**
{% hideToggle 查看答案 %}
    - 数组字符串化：`arr += ''; arr = arr.split(',');`
    - 递归，判断后push或concat
    - `Array.prototype.flat()`
    - 使用reduce、concat和递归无限反嵌套多层嵌套的数组
{% endhideToggle %}
1.   **[数组的join](https://www.w3school.com.cn/jsref/jsref_join.asp)：把数组中的所有元素拼接成一个字符串，元素是通过指定的分隔符进行分隔的。**
5.   **[字符串的split](https://www.w3school.com.cn/jsref/jsref_split.asp)：把一个字符串通过指定的分隔符分割成字符串数组。**
6.   **[数组的map和forEach的区别](https://www.jianshu.com/p/83aa9a2a4055)**
{% hideToggle 查看答案 %}
    - map()方法：`创建一个新的数组`，其中每一个元素由调用数组中的每一个元素执行提供的函数得来，所以可以使用复合(composition)(map(),filter(),reduce()等组合使用)来玩出更多的花样
    - foreEach()方法：针对每一个元素执行提供的函数，不返回新数组，`返回值为undefined`
{% endhideToggle %}
1.   **[js如何判断数据类型](https://www.cnblogs.com/yi0921/p/6183422.html)**
{% hideToggle 查看答案 %}
    - `Object.prototype.toString.call(data)`：最全面，但需要注意区分大小写
    - `typeof`操作符：不适合用于判断是否为数组。当使用typeof判断数组和对象的时候，都会返回object。可以使用isArray()来判断是否为数组
    - `instanceof`：只能用来判断对象和函数，不能用来判断字符串和数字等。判断它是否为字符串和数字时，只会返回false
    - `constructor`：返回对创建此对象的数组函数的引用
{% endhideToggle %}
1.   **[ES6中Promise.all和Promise.race区别](https://www.cnblogs.com/richard1015/p/9155564.html)**
{% hideToggle 查看答案 %}
    - Promise.all：都成功才会调用success，如果有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果。
    - Promise.race：只要有一个成功就会调用success，但是进程不会立即停止
    - ~~对promise的考察，then链的应用~~
{% endhideToggle %}
1.   **[Document.cookie-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)**
2.   **[js如何操作cookie](https://www.jianshu.com/p/cf557cfe460c)**
{% hideToggle 查看答案 %}
    - `set`：document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
    - `get`：document.cookie.replace(/[ ]/g, "").split(";")
    - `delete`：document.cookie = key + "=v; expires =" + date.toGMTString();
    - 或 利用小框架：`cookies.js`
{% endhideToggle %}
1.   **[Cookie和Session的使用和区别](https://www.jianshu.com/p/9a561b36e9f3)**
2.   **[js进程（process）和线程（thread）的区别](https://zhidao.baidu.com/question/1308689490865592819.html)**
{% hideToggle 查看答案 %}
    - 进程：操作系统分配的占有CPU资源的最小单位。拥有独立的地址空间。
    - 线程：安排CPU执行的最小单位。同一个进程下的所有线程，共享进程的地址空间。
{% endhideToggle %}
1.   **[js进程（process）和线程（thread）的关系](https://www.cnblogs.com/yu-hailong/p/9596431.html)**
{% hideToggle 查看答案 %}
    - 以多进程形式，允许多个任务同时运行
    - 以多线程形式，允许单个任务分成不同的部分运行
    - 提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源
    - 以下是详细解释：
    - 进程它代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态
    - 一个进程可以包括多个线程
    - 一个进程的内存空间是共享的，每个线程都可以使用这些共享内存
    - 一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存
    - 一个防止其他线程使用的简单方法`"互斥锁"`（Mutual exclusion，缩写Mutex），防止多个线程同时读写某一块内存区域
{% endhideToggle %}
6.   **[Object.create实现了什么？传null得到的结果和普通对象有什么区别？](https://www.jianshu.com/p/28d85bebe599)**
{% hideToggle 查看答案 %}
    - 创建对象的方式不同
        - newObject():通过构造函数来创建对象, 添加的属性是在自身实例下。`console.log(b)//{rep:"apple"} console.log(b.__proto__)//{}`
        - Object.create():创建对象的另一种方式，可以理解为继承一个对象,添加的属性是在原型下。`console.log(b)//{} console.log(b.__proto__)//{rep:"apple"}`
    - 创建对象属性的性质不同，Object.getOwnPropertyDescriptors(obj)
        - newObject():{value:42,writable:true,enumerable:true,configurable:true}
        - Object.create():{value:42,writable:false,enumerable:false,configurable:false}
    - 创建空对象时不同
        - newObject():`__proto:Object`
        - Object.create():`No properties`
    - `__proto__`属性
        - newObject():？
        - Object.create():？
{% endhideToggle %}
1.   **[call、apply和bind有何区别](https://www.cnblogs.com/cosiray/p/4512969.html)**
{% hideToggle 查看答案 %}
    - call对函数直接调用：`xw.say.call(xh,"实验小学","六年级")`
    - apply对函数直接调用：`xw.say.apply(xh,["实验小学","六年级"])`
    - bind返回的是一个函数，需要手动()调用，且可在调用时传参：`xw.say.bind(xh,"实验小学","六年级")()`或`xw.say.bind(xh)("实验小学","六年级")`
{% endhideToggle %}
8.   **[手写实现call、apply、bind](https://www.jianshu.com/p/57a876fe66c8)**
{% hideToggle 查看答案 %}
模拟call
```js
Function.prototype.myCall = function(obj){
    if(obj === null || obj === undefined){
        obj = window;
    } else {
        obj = Object(obj);
    }
    let arg = [];
    let val ;
    for(let i = 1 ; i<arguments.length ; i++){
        arg.push( 'arguments[' + i + ']' ) ;
    }
    obj._fn_ = this;
    val = eval( 'obj._fn_(' + arg + ')' ) 
    delete obj._fn_;
    return val
}
```

模拟apply
```js
Function.prototype.myApply = function(obj,arr){
    if(obj === null || obj === undefined){
        obj = window;
    } else {
        obj = Object(obj);
    }
    let args = [];
    let val ;
    for(let i = 0 ; i<arr.length ; i++){
        args.push( 'arr[' + i + ']' ) ;
    }
    obj._fn_ = this;
    val = eval( 'obj._fn_(' + args + ')' ) 
    delete obj._fn_;
    return val
}
```

模拟bind
```js
Function.prototype.myFind = function(obj){
    if(obj === null || obj === undefined){
        obj = window;
    } else {
        obj = Object(obj);
    }
    let _this = this;
    let argArr = [];
    let arg1 = [];
    for(let i = 1 ; i<arguments.length ; i++){  
        arg1.push( arguments[i] );
        argArr.push( 'arg1[' + (i - 1)  + ']' ) ;
    }
    return function(){
        let val ;
        for(let i = 0 ; i<arguments.length ; i++){
            argArr.push( 'arguments[' + i + ']' ) ;
        }
        obj._fn_ = _this;
        console.log(argArr);
        val = eval( 'obj._fn_(' + argArr + ')' ) ;
        delete obj._fn_;
        return val
    };
}
```
{% endhideToggle %}
1.   **[call、apply、bind的应用](https://www.jianshu.com/p/bc541afad6ee)**
{% hideToggle 查看答案 %}
求数组中的最大和最小值
```js
var arr = [1,2,3,89,46]
var max = Math.max.apply(null,arr)//89
var min = Math.min.apply(null,arr)//1
```

将类数组转化为数组
```js
var trueArr = Array.prototype.slice.call(arrayLike)
```

数组追加
```js
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var total = [].push.apply(arr1, arr2);//6
// arr1 [1, 2, 3, 4, 5, 6]
// arr2 [4,5,6]
```

判断变量类型
```js
function isArray(obj){
    return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('dot') // false
```

利用call和apply做继承
```js
function Person(name,age){
    // 这里的this都指向实例
    this.name = name
    this.age = age
    this.sayAge = function(){
        console.log(this.age)
    }
}
function Female(){
    Person.apply(this,arguments)//将父元素所有方法在这里执行一遍就继承了
}
var dot = new Female('Dot',2)
```

使用 log 代理 console.log
```js
function log(){
  console.log.apply(console, arguments);
}
// 当然也有更方便的 var log = console.log()
```
{% endhideToggle %}
1.   **[替代es6中拓展运算符传参的方式](https://blog.csdn.net/YouZi_X/article/details/107703420)**
{% hideToggle 查看答案 %}
    - 函数调用中替代数组的apply方法
    - `add(...args)`等同于`f.apply(null, args)`
{% endhideToggle %}
1.   **实现一个发布订阅，有订阅（on），发布（emit），一次订阅功能（once）**
1.   **[实现防抖节流](https://www.jianshu.com/p/3b782abd27ed)**
{% hideToggle 查看答案 %}
防抖（debounce）：（最后一次）规定一个期限时间，在首次触发事件时，不立即执行回调函数，而是在期限时间后再执行，如果期限时间内回调函数被重复执行，则期限时间重新计时。（输入完字符串再发请求）
```js
/* 
  *fn --> 需要防抖的函数；
  *delaytime --> 毫秒数，防抖所需期限值；
*/
function debounce(fn,delaytime){
    let timer = null 
    return function(){
        if(timer){
            clearTimeout(timer) //进入这里说明当前存在一个执行过程，并且同时又执行了一个相同事件，故取消当前的执行过程
        }
        timer = setTimeout(fn,delaytime)    
    }
}
function show_scrollPosition(){
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    console.log("当前滚动条位置为：",scrollPosition);
} 

window.onscroll = debounce(show_scrollPosition,1000)
```

节流（throttle）：（第一次）规定一个期限时间，在该时间内，触发事件的回调函数只能执行一次，如果期限时间内回调函数被多次触发，则只有一次能生效。（页面滚动到底部就加载更多）
```js
function throttle(fn, delay) {
  let last_time
  let timer = null
  return function () {
    let cur_time = new Date().getTime()
    if (last_time && cur_time < last_time + delay) { //若为真，则表示上次执行过，且在期限值范围内
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn();
        last_time = cur_time
      }, delay)
    } else {
      last_time = cur_time;
      fn();
    }

  }
}

function show_scrollPosition() {
  var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  console.log("当前滚动条位置为：", scrollPosition);
}

window.onscroll = throttle(show_scrollPosition, 1000)
```
{% endhideToggle %}

1.   **实现请求并发限制，具体为：封装一个函数，传递请求并发的个数为参数，实现对并发请求的限制**
2.   **说说闭包以及垃圾回收机制**
3.   **利用async和await如何处理异常事件**
4.   **箭头函数和普通函数有什么区别？如果想改变箭头函数中绑定this怎么办？**
5.   **原生js判断鼠标在一个有对角线矩形的位置**
<!-- #endregion -->


<!-- #region # Vue 2.x -->
# Vue 2.x

## 源码相关

1.   **[BiliBili: Vue 2.x 源码解读(12) —— path阶段](https://www.bilibili.com/video/BV1rQ4y1o7WF/?spm_id_from=333.788.recommend_more_video.1)**
  - Emm...，慢慢看

2.   **v-if和v-for哪个优先级更高?如果两个同时出现，应该怎么优化得到更好的性能?**
{% hideToggle 查看答案 %}
  - 源码: `compiler/codegen/index.js`
  - 在`Vue 2.x`版本中，`v-if`的优先级大于`v-for`
  - 在`Vue 3.x`版本中，`v-for`的优先级大于`v-if`
  - `render`函数: `with(this){return _c('div', { ... })}`
{% endhideToggle %}

1.   **Vue组件data为什么必须是个函数而Vue的根实例则没有此限制?**
{% hideToggle 查看答案 %}
  - 源码: `src\core\instance\state.js - initData()`
  - Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的
  - 采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题
  - 而在Vue根实例创建过程中则不存在该限制，也是因为根实例只能有一个，不需要担心这种情况
{% endhideToggle %}

1.   **你知道vue中key的作用和工作原理吗?说说你对它的理解。**
{% hideToggle 查看答案 %}
  - 源码: `src\core\vdom\patch.js - updateChildren()`
  - key的作用主要是为了高效的更新虚拟DOM，其原理是vue在patch过程中通过key可以精准判断两 个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操 作量，提高性能
  - ~~另外，若不设置key还可能在列表更新时引发一些隐蔽的bug（暂时未知）~~
  - vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果
{% endhideToggle %}

5.   **你怎么理解vue中的diff算法?**
{% hideToggle 查看答案 %}
  - 源码1: 必要性，`lifecycle.js - mountComponent()`
    - 组件中可能存在很多个data中的key使用
  - 源码2: 执行方式，`patch.js - patchVnode()`
    - patchVnode是diff发生的地方，整体策略: 深度优先，同层比较
  - 源码3: 高效性，`patch.js - updateChildren()`
  - diff算法是虚拟DOM技术的必然产物: 通过新旧虚拟DOM作对比(即diff)，将变化的地方更新在真实DOM上
  - 另外，也需要 diff 高效的执行对比过程，从而降低时间复杂度为O(n)
  - vue 2.x 中为了降低 Watcher 粒度，每个组件只有一个Watcher与之对应，只有引入diff才能精确找到发生变化的地方
  - vue中diff执行的时刻是组件实例执行其更新函数时，它会比对上一次渲染结果oldVnode和新的渲染结果newVnode，此过程称为patch
  - diff过程整体遵循`深度优先、同层比较`的策略;两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作;比较两组子节点是算法的重点，首先假设头尾节点可能相同做`首首、尾尾、首尾、尾首`4次比对尝试，如果没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点;借助key通常可以非常精确找到相同节点，因此整个patch过程非常高效。
{% endhideToggle %}

6.   **谈一谈对vue组件化的理解?**
{% hideToggle 查看答案 %}
  - 源码1: 组件定义，`src\core\global-api\assets.js`
    - vue-loader会编译template为render函数，最终导出的依然是组件配置对象
  - 源码2: 组件化优点，`lifecycle.js - mountComponent()`
    - 组件、Watcher、渲染函数和更新函数之间的关系
  - 源码3: 组件化实现: 构造函数，`src\core\global-api\extend.js`、实例化及挂载，`src\core\vdom\patch.js - createElm()`
  - 组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用;
  - 组件化开发能大幅提高应用开发效率、测试性、复用性等;
  - 组件使用按分类有: 页面组件、业务组件、通用组件;
  - vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue;
  - vue中常见组件化技术有: 属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等;
  - 合理的划分组件，有助于提升应用性能;
  - 组件应该是高内聚、低耦合的;
  - 遵循单向数据流的原则。
{% endhideToggle %}

7.   **谈一谈对vue设计原则的理解?**
{% hideToggle 查看答案 %}
  - 在vue的官网上写着大大的定义和特点: `渐进式JavaScript框架、易用、灵活和高效`
{% endhideToggle %}

8.   **谈谈你对MVC、MVP和MVVM的理解?**
  - 源码: `compiler`

9.   **你了解哪些Vue性能优化方法?**
{% hideToggle 查看答案 %}
  - 路由懒加载
  - keep-alive缓存页面
  - 使用v-show复用DOM
  - v-for 遍历避免同时使用 v-if
  - 长列表性能优化，静态列表：`list = Object.freeze([])`
  - 虚拟滚动：[vxe-table](https://github.com/x-extends/vxe-table)
  - 事件的销毁，Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。`beforeDestroy() { clearInterval(this.timer) }`
  - 图片懒加载，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域 内的图片先不做加载，等到滚动到可视区域后再去加载。参考项目：`vue-lazyload`，代码：`<img v-lazy="/static/img/1.png">`
  - 第三方插件按需引入，`import { Button, Select } from 'element-ui';`
  - 无状态的组件标记为函数式组件，`<template functional> ... </template>`
  - 子组件分割，独立可复用功能可抽象出来
  - 变量本地化，如果有for循环等频繁访问`this.xxx`的情况，提前赋值给本地变量
  - SSR
{% endhideToggle %}

1.   **简单说一说vuex使用及其理解?**
{% hideToggle 查看答案 %}
  - Vuex实现了一个单向数据流，在全局拥有一个state存放数据，当组件要更改state中的数据时，必须通过mutation提交修改信息，mutation同时提供了订阅者模式供外部插件调用获取state数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作 需要走action，但action也是无法直接修改state的，还是需要通过mutation来修改state的数据。最后，根据state的变化，渲染到视图上。
{% endhideToggle %}

1.   **vue中组件之间的通信方式?**
{% hideToggle 查看答案 %}
  - `props ★★`
    - 父组件 A 通过 props 向子组件 B 传递值， B 组件传递 A 组件通过 $emit A 组件通过 v-on/@ 触发
    - 子组件通过 events 给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。
  - `$emit/$on 事件总线 ★★`
    - [vue-bus-ts](https://leedebug.github.io/2020/11/07/%E4%B8%AD%E5%A4%AE%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF%E6%8F%92%E4%BB%B6vue-bus-ts/)
  - `vuex ★★★`
    - 结合`localStorage`保存登录信息及权限列表等
  - `$parent/$children`
  - `$attrs/$listeners`
    - 多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法。
    - `$attrs`:包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个 组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。
    - `$listeners`: 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v- on="$listeners" 传入内部组件
  - `provide/inject ★★★`
    - 优点:使用简单 缺点:不是响应式
    - 父级：`provide: { name: '王者峡谷' //这种绑定是不可响应的 }`（`name: this`会有响应式，把当前组件实例传递下去，但子组件会绑定一些多余的属性，比如props、methonds等）
    - 子级：`inject: ['name'] }`
{% endhideToggle %}

1.   **vue-router 中的导航钩子由那些?**
  - 源码: `compiler`

2.   **什么是递归组件?**
  - 源码: `compiler`

3.   **说一说vue响应式理解?**
  - 源码: `compiler`

4.   **vue如果想要扩展某个组件现有组件时怎么做?**
  - 源码: `compiler`

5.   **vue为什么要求组件模版只能有一个根元素?**
  - 源码: `compiler`

6.   **watch和computed的区别以及怎么选用?**
  - 源码: `compiler`

7.   **你知道nextTick的原理吗?**
  - 源码: `compiler`

8.   **你知道vue双向数据绑定的原理吗?**
  - 源码: `compiler`

9.   **简单说一说vue生命周期的理解?**
  - 源码: `compiler`

10.  **[vue.js的两大核心](https://www.cnblogs.com/qlongbg/p/13025274.html)**
{% hideToggle 查看答案 %}
    - 数据驱动，也就是数据的双向绑定
    - 组件系统
        - 模板（template）：模板声明了数据和最终展现给用户的DOM之间的映射关系。
        - 初始数据（data）：一个组件的初始数据状态。对于可复用的组件来说，这通常是私有的状态。
        - 接受的外部参数(props)：组件之间通过参数来进行数据的传递和共享。
        - 方法（methods）：对数据的改动操作一般都在组件的方法内进行。
        - 生命周期钩子函数（lifecycle hooks）：一个组件会触发多个生命周期钩子函数，最新2.0版本对于生命周期函数名称改动很大。
        - 私有资源（assets）：Vue.js当中将用户自定义的指令、过滤器、组件等统称为资源。一个组件可以声明自己的私有资源。私有资源只有该组件和它的子组件可以调用。
{% endhideToggle %}
1.   **[什么是MVVM](https://juejin.im/entry/6844903491886907399)（操作数据，就是操作视图，就是操作DOM）**
2.   **MVVM的优点:**
{% hideToggle 查看答案 %}
    - 分离视图(View) 和模型(Model) ,降低代码耦合，提高视图或者逻辑的重用性:比如视图(View) 可以独立于Model|变化和修改，-个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model|变化的时候View也可以不变。你可以把一些视图逻辑放在 -个ViewModel里面， 让很多view重用这段视图逻辑
    - 提高可测试性:ViewModel的存在可以帮助开发者更好地编写测试代码
    - 自动更新dom:利用双向绑定,数据更新后视图自动更新,让开发者从繁琐的手动dom中解放
{% endhideToggle %}
1.   **MVVM的缺点:**
{% hideToggle 查看答案 %}
    -  Bug很难被调试:因为使用双向绑定的模式，当你看到界面异常了，有可能是你View的代码有Bug,也可能是Model的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的
    - 一个大的模块中model也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，不释放内存就造成了花费更多的内存
    - 对于大型的图形应用程序，视图状态较多，ViewModel的构建和维护的成本都会比较高
{% endhideToggle %}
1.   **你怎么理解vue中的diff算法?**
{% hideToggle 查看答案 %}
    - diff算法是虚拟DOM技术的必然产物:通过新旧虚拟DOM作对比(即diff)，将变化的地方更新在真实DOM上;另外,也需要diff高效的执行对比过程，从而降低时间复杂度为0(n)。
    - vue 2.x中为了降低Watcher粒度,每个组件只有一个Watcher与之对应，只有引入diff才能精确找到发生变化的地方。
    - vue中diff执行的时刻是组件实例执行其更新函数时，它会比对上-次渲染结果oldVnode和新的渲染结果newVnode,此过程称为patch。
    - diff过程整体遵循深度优先、同层比较的策略;两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作;比较两组子节点是算法的重点，首先假设头尾节点可能相同做4次比对尝试，如果没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点;借助key通常可以非常精确找到相同节点，因此整个patch过程非常高效。
{% endhideToggle %}
1.   **谈一谈对vue组件化的理解?**
{% hideToggle 查看答案 %}
    - 组件是独立和可复用的代码组织单元。组件系统是Vue核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用;
    - 组件化开发能大幅提高应用开发效率、测试性、复用性等;
    - 组件使用按分类有:页面组件、业务组件、通用组件;
    -  vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件,框架后续会生成其构造函数,它们基于VueComponent,扩展于Vue;
    -  vue中常见组件化技术有:属性prop,自定义事件,插槽等,它们主要用于组件通信、扩展等;
    - 合理的划分组件,有助于提升应用性能;
    - 组件应该是高内聚、低耦合的;
    - 遵循单向数据流的原则。
{% endhideToggle %}
1.   **谈一谈对vue设计原则的理解?**
2.   **谈谈你对MVC、MVP和MVVM的理解?**
3.   **你了解哪些Vue性能优化方法?**
4.   **什么叫发布订阅模式**
5.   **如何实现发布订阅模式**
6.   **proxy和object.definepropoty的区别**
7.   **proxy的应用场景**
8.   **你对虚拟dom和diff算法的理解，实现render函数**
9.   **绑定this的几种方式**
10.  **setState是同步还是异步的**

## 双向绑定

1.   **双向绑定的原理（差点让我手撸一个双向绑定）[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)和[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)**
{% hideToggle 查看答案 %}
    - Vue 采用[`数据劫持 结合 发布者-订阅者模式`](https://www.jianshu.com/p/1032ecd62b3a)的方式来实现数据的响应式，通过Object.defineProperty(点我查看该属性)来劫持数据的setter，getter，在数据变动时发布消息给订阅者，订阅者收到消息后进行相应的处理。
    - Observer：数据的观察者,让数据对象的读写操作都处于自己的监管之下。当初始化实例的时候，会递归遍历data，用Object.defineProperty来拦截数据（包含数组里的每个数据）。
    - Dep：数据更新的发布者，get数据的时候，收集订阅者，触发Watcher的依赖收集；set数据时发布更新，通知Watcher 。
    - Watcher：数据更新的订阅者，订阅的数据改变时执行相应的回调函数（更新视图或表达式的值）。
    - 图中红色的箭头表示的是收集依赖时获取数据的流程。Watcher会收集依赖的时候（这个时机可能是实例创建时， 解析模板、初始化watch、初始化computed，也可能是数据改变后，Watcher执行回调函数前），会获取数据的值，此时Observer会拦截数据 （即调用get函数），然后通知Dep可以收集订阅者啦。Dep将订阅数据的Watcher保存下来,便于后面通知更新。
    - 图中绿色的箭头表示的是数据改变时，发布更新的流程。当数据改变时，即设置数据时，此时Observer会拦截数据（即调用set函数），然后通知Dep，数据改变了，此时Dep通知Watcher，可以更新视图啦。
{% endhideToggle %}
1.   **vue2中对于数组的变化检测是重写数组方法：**
{% hideToggle 查看答案 %}
    - 'push'
    - 'pop'
    - 'shift'
    - 'unshift'
    - 'splice'
    - 'sort'
    - 'reverse'
{% endhideToggle %}
1.   **你知道vue中key的作用和工作原理吗?说说你对它的理解。**
{% hideToggle 查看答案 %}
    - 源码中找答案:src\core\vdom\patch.js - updateChildren()
    - key的作用主要是为了高效的更新虚拟DOM，其原理是vue在patch过程中调用updateChildren()，利用patchVNode()方法，通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个patch过程更加高效，减少DOM操作量提高性能。
    - 如果不适用key的时候，在执行patchVNode()之前会一直判断sameVNode()并返回true，因为不设置key的话标签的key会默认为undefined，此时undefined===undefined，所以会判断为同一个节点。
    - 另外，若不设置key还可能在列表更新时引发一些隐蔽的bug
    - vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。
{% endhideToggle %}
1.   **你是如何理解Vue的响应式系统的?**
{% hideToggle 查看答案 %}
    - 任何一个Vue Component都有一个与之对应的Watcher实例。
    - Vue的data上的属性会被添加getter和setter属性。
    - 当Vue Component render函数被执行的时候，data. 上会被触碰(touch),即被读,getter方法会被调用,此时Vue会去记录此Vuecomponent所依赖的所有data。(这-过程被称为依赖收集)
    - data被改动时(主要是用户操作)，即被写,setter方法会被调用，此时Vue会去通知所有依赖于此data的组件去调用他们的render函数进行更新。
{% endhideToggle %}
1.   **既然Vue通过数据劫持可以精准探测数据变化，为什么还需要虛拟DOM进行diff检测差异?**
{% hideToggle 查看答案 %}
    - 考点: Vue的变化侦测原理
    - 前置知识:依赖收集、虚拟DOM、响应式系统
    - 现代前端框架有两种方式侦测变化,-种是pull-种是push
    - push: Vue的响应式系统则是push的代表当Vue程序初始化的时候就会对数据data进行依赖的收集,-但数据发生变化,响应式系统就会立刻得知，因此Vue是-开始就知道是「在哪发生变化了」,但是这又会产生一一个问题，如果你熟悉Vue的响应式系统就知道通常一个绑定-个数据就需要一个Watcher,-但我们的绑定细粒度过高就会产生大量的Watcher,这会带来内存以及依赖追踪的开销,而细粒度过低会无法精准侦测变化，因此Vue的设计是选择`中等细粒度`的方案,在`组件级别`进行push侦测的方式，也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件，然后在组件内部进行Virtual Dom Diff 获取更加具体的差异,而`Virtual Dom Diff 则是pull操作`,Vue是`push+pull结合`的方式进行变化侦测的.
    - pull:其代表为React,我们可以回忆一下React是如何侦测到变化的，我们通常会用setStateAPI显式更新,然后React会进行一层层的Virtual Dom Diff操作找出差异然后Patch到DOM上,React从一-开始就不知道到底是哪发生了变化，只是知道「有变化了」,然后再进行比较暴力的iff操作查找「哪发生变化了」，另外-个代表就是Angular的脏检查操作。
{% endhideToggle %}

## 生命周期

1.   **如何从零开始初始化vue项目**
2.   **生命周期是什么**
{% hideToggle 查看答案 %}
    - Vue实例有一个完整的生命周期，也就是从
    - 开始创建、初始化数据、编译模版、挂载Dom->渲染、更新-> 渲染、卸载等-系列过程，我们称这是Vue的生命周期。
{% endhideToggle %}
1.   **[简单说一说vue生命周期的理解?](https://www.axihe.com/focus/vue/08.html)**
{% hideToggle 查看答案 %}
    - beforeCreate:在实例初始化之后，数据观测(data observe)和event/watcher事件配置之前被调用，这时无法访问data及props等数据;
    - created:在实例创建完成后被立即调用，此时实例已完成数据观测(data observer)，属性和方法 的运算，watch/event事件回调，挂载阶段还没开始， $el 尚不可用。
    - beforemount:在挂载开始之前被调用，相关的render函数首次被调用。
    - mounted:实例被挂载后调用，这时el被新创建的vm. $el 替换，若根实例挂载到了文档上的元素上，当mounted被调用时vm.$el也在文档内。注意mounted不会保证所有子组件一起挂载。
    - beforeupdata:数据更新时调用，发生在虚拟dom打补丁前，这时适合在更新前访问现有dom，如手动移除已添加的事件监听器。
    - updated:在数据变更导致的虚拟dom重新渲染和打补丁后，调用该钩子。当这个钩子被调用时，组件dom已更新，可执行依赖于dom的操作。多数情况下应在此期间更改状态。 如需改变，最好使用watcher或计算属性取代。注意updated不会保证所有的子组件都能一起被重绘。
    - beforedestory:在实例销毁之前调用。在这时，实例仍可用。
    - destroyed:实例销毁后调用，这时vue实例的所有指令都被解绑，所有事件监听器被移除，所有子实 例也被销毁。
    - activated:（新增钩子）keep-alive 组件激活时调用。 类似 created 没有真正创建，只是激活
    - deactivated:（新增钩子）keep-alive 组件停用时调用。类似 destroyed 没有真正移除，只是禁用
{% endhideToggle %}
1.   **[Vue.js的八大生命周期](https://www.axihe.com/focus/vue/08.html)**
2.   **[Vue.js的父子组件生命周期调用顺序](https://www.axihe.com/focus/vue/23.html)**
3.   **[Vue.js的ajax请求放在哪个生命周期中](https://www.axihe.com/focus/vue/09.html)**
4.   **你知道nextTick的原理吗?**
{% hideToggle 查看答案 %}
    - （唯一能监听到DOM改动的API：MutationObserver，HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动，是一个功能强大的利器。）
    - `事件循环(Event Loop)`，浏览器
    - `任务队列(task queues)`
    - `微任务队列(MicroTask_Queue)`，是做队列控制的最佳选择。每一次事件循环都包含一个microtask队列，在循环结束后会依次执行队列中的microtask并移除，然后再开始下一次事件循环。在执行microtask的过程中后加入microtask队列的微任务，也会在下一次事件循环之前被执行。也就是说，macrotask总要等到microtask都执行完后才能执行，microtask有着更高的优先级。
    - `常见的microtask`有：Promise、MutationObserver、Object.observe(废弃)，以及nodejs中的 process.nextTick.
    - `vue的降级策略`，队列控制的最佳选择是microtask，而microtask的最佳选择是Promise。但如果当前环境不支持Promise，vue就不得不降级为macrotask来做队列控制了。
    - 在vue2.5的源码中，macrotask降级的方案依次是:setImmediate、MessageChannel、setTimeout.
{% endhideToggle %}

## data

1.   **Vue组件data为什么必须是个函数而Vue的根实例则没有此限制?**
{% hideToggle 查看答案 %}
    - 源码中找答案:src\core\instance\state.js - initData()
    - `Vue组件`可能存在`多个实例`，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的;采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题。而在`Vue根实例`创建过程中则不存在该限制，也是因为根实例只能有一个，即`单例`存在，不需要担心这种情况。
{% endhideToggle %}
1.   **如果改了data的多个值update钩子会执行几次，为什么**

## computed && watch

1.   **Vue computed 的实现原理**
2.   **Vue watch 的实现原理**
3.   **computed和watch的区别和应用**


## vuex

1.   **[vuex是什么](https://vuex.vuejs.org/zh/)、[vuex的源码](https://unpkg.com/vuex@3.5.1/dist/vuex.js)、底层（Vuex的注入代码比较简单,调用了一下applyMixin方法,现在的版本其实就是调用了Vue）、使用场景（组件通信、登录状态、加入购物车、公共码表维护、页面缓存(慎用)）**
2.   **[mutation的用法](https://vuex.vuejs.org/zh/guide/mutations.html)**

## vue-router

1.   **Vue-router 的实现原理**
2.   **vue的两种路由模式，问我这两种路由模式的底层实现（昨天刚复习过 美滋滋）**
3.   **vue-router中push和replace的区别**
4.   **[vueRouter的钩子函数](https://zhuanlan.zhihu.com/p/70536937)**
    - 全局的路由钩子函数：beforeEach（全局前置守卫）、afterEach（全局后置守卫）
    - 路由配置文件独享的钩子函数：beforeEnter
    - 组件内的路由钩子函数：beforeRouteEnter、beforeRouteLeave、beforeRouteUpdate
5.   **[vue-router中的导航钩子由那些?](https://zhuanlan.zhihu.com/p/70536937)**
    - 全局的路由钩子函数：beforeEach（全局前置守卫）、afterEach（全局后置守卫）
    - 路由配置文件独享的钩子函数：beforeEnter
    - 组件内的路由钩子函数：beforeRouteEnter、beforeRouteLeave、beforeRouteUpdate
6.   **如何（动态）控制路有权限，颗粒多大**
7.   **[vue项目实现路由按需加载(路由懒加载)的3种方式](https://blog.csdn.net/xm1037782843/article/details/88225104)**
    - vue的异步组件技术：`component: resolve => require(['@/components/home'],resolve)`
    - es提案的import()：`const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')`。有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。
    - webpack提供的require.ensure()：`r => require.ensure([], () => r(require('@/components/index')), 'demo')`
8.   **[完整的导航解析流程](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B)**
    - 导航被触发。
    - 在失活的组件里调用离开守卫。
    - 调用全局的 beforeEach 守卫。
    - 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    - 在路由配置里调用 beforeEnter。
    - 解析异步路由组件。
    - 在被激活的组件里调用 beforeRouteEnter。
    - 调用全局的 beforeResolve 守卫 (2.5+)。
    - 导航被确认。
    - 调用全局的 afterEach 钩子。
    - 触发 DOM 更新。
    - 用创建好的实例调用 beforeRouteEnter -     守卫中传给 next 的回调函数。

## 组件通信

1.   **[Vue.js组件如何通信以及有哪些方式?](https://www.axihe.com/focus/vue/24.html)**
2.   **vue中如何实现兄弟组件通信：**
    - EventBus（事件总线），即一个新的vue实例。
    - 使用方法：export const eventBuss = new Vue()，然后event.$emit()调用，created中使用event.$on()监听
3.   **vue如果想要扩展某个组件现有组件时怎么做?**
    - mixin或者slots
4.   **什么是递归组件?**
    - 组件自身调用自身，但一定要有终止条件

## directives

1.   **[v-on事件修饰符及按键修饰符](https://blog.csdn.net/sleepwalker_1992/article/details/82903246)**
    - `.stop`：阻止事件冒泡
    - `.self`：当事件在该元素本身触发时才触发事件
    - `.capture`：添加事件侦听器是，使用事件捕获模式
    - `.prevent`：阻止默认事件
    - `.once`：事件只触发一次
    - 下面为，按键修饰符
    - `@click.stop.prevent="btnClick"`：既阻止了默认事件，又阻止了事件冒泡
    - `@keyup.enter.native="handleRegister"`或`@keyup.13="submit"`：监听回车事件
2.   **v-if和v-for哪个优先级更高?如果两个同时出现，应该怎么优化得到更好的性能?**
    - 源码中找答案`compiler/codegen/index.js`
    - 显然v-for优先于v-if被解析(把你是怎么知道的告诉面试官，比如打印渲染函数console.log(app.$options.render);或源码 else if 判断先v-for再v-if)
    - 如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能
    - 要避免出现这种情况，则在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环
    - 如果条件出现在循环内部，可通过计算属性`提前过滤掉`那些不需要显示的项
3.   **[vue自定义指令和私有指令](https://cn.vuejs.org/v2/guide/custom-directive.html)**
4.   **[delete和Vue.delete(this.$delete)删除数组的区别](https://www.jianshu.com/p/fbe96ed71fd7)**
    - var a=[1,2,3,4]
    - var b=[1,2,3,4]
    - delete a[1]
    - console.log(a) // [1,empty,2,3]
    - this.$delete(b,1)
    - console.log(b) // [1,3,4]
5.   **v-model的作用和原理**
6.   **v-show和v-if的区别，与dom操作是否相关**
7.   **如何取到子组件的实例，除了$ref还有无别的方法**

## others

1.   **vue中css处scoped的实现原理及穿透的用法**
2.   **[video的层级](https://www.jianshu.com/p/79100d43939a)（他的层级是最高的，问我怎么在video上添加一些div，我之前有看过aliplayer这个插件，面试官也很满意）**
3.   **[30行写一个Vue图片懒加载指令](https://mp.weixin.qq.com/s/vtg6DaGKdslHQZUTpDiC7w)**


<!-- #endregion -->


<!-- #region # Vue 3.x -->
# Vue 3.x

1.   **[vue3.x的新特性研究](https://blog.csdn.net/sky_cmc/article/details/104988921)**
  - Emm...，慢慢看

2.   **[你对Vue3.0的新特性有没有了解?](https://www.yuque.com/woniuppp/vue3/feature)**
3.   **vue2和vue3的特点和新特性**
4.   **Proxy与Object.defineProperty的优劣对比?**
    - Proxy的优势如”下:
        - Proxy可以直接监听对象而非属性
        - Proxy可以直接监 听数组的变化
        - Proxy有多达13种拦截方法,不限于apply、ownKeys、 deleteProperty、 has等 等是object . defineProperty不具备的
        - Proxy返回的是一个新对象，我们可以只操作新的对象达到目的,而object.defineProperty只能遍历对象属性直接修改
        - Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利
    - Object.defineProperty的优势如”下:
        - 兼容性好，支持IE9
<!-- #endregion -->


<!-- #region # Webpack -->
# Webpack
- [webpack基础配置](https://www.webpackjs.com/configuration/)：
    - context：基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    - entry：起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
    - output：位于对象最顶级键(key)，包括了一组选项，指示webpack如何去输出、以及在哪里输出你的「bundle、asset和其他你所打包或使用webpack载入的任何内容」。比如path: config.build.assetsRoot
    - resolve：extensions: ['.js', '.vue', '.json']，自动解析确定的扩展。
    - 模式(mode)：告知 webpack 使用相应模式的内置优化。development、production
- [webpack的工作原理和流程](https://blog.csdn.net/weixin_43334673/article/details/107598708)
    - Webpack CLI 启动打包流程；
    - 载入 Webpack 核心模块，创建 Compiler 对象；
    - 使用 Compiler 对象开始编译整个项目；
    - 从入口文件开始，解析模块依赖，形成依赖关系树；
    - 递归依赖树，将每个模块交给对应的 Loader 处理；
    - 合并 Loader 处理完的结果，将打包结果输出到 dist 目录。
- [webpack的构建流程](https://segmentfault.com/a/1190000021494964?utm_source=tag-newest)
    - `初始化参数`：从配置文件和Shell语句中读取与合并参数,得出最终的参数。
    - `开始编译`：用上一步得到的参数初始化Compiler对象,加载所有配置的插件,执行对象的run方法开始编译整个项目。
    - `确定入口`：根据配置中的entry找出所有的入口文件。
    - `编译模块`：从入口文件出发,调用所有配置的Loader对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
    - `完成模块编译`：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的`依赖关系树`。
    - `输出资源`：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的Chunk,再把每个Chunk转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。
    - `输出完成`：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统即dist目录。
- [webpack基础知识](https://juejin.im/post/6855129007785328653#heading-15)
- [wepack中loader和plugin的区别](https://blog.csdn.net/jiang7701037/article/details/98887179?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-4.channel_param)
    - `功能作用`的角度区分：
        - loader：直译为“加载器”，用于加载某些非js资源文件。这让webpack有了`加载和解析非js文件`的能力。因为webpack本身只能打包commonjs规范的js文件，对于其他资源例如css，图片，或者其他的语法集，比如jsx，coffee，是没有办法加载的。这就需要对应的loader将资源转化，加载进来。从字面意思，也能看出，loader是用于加载的，它作用于一个个文件上。
        - plugin：直译为“插件”，用于扩展webpack的功能。它直接作用于webpack，扩展了它的功能。在webpack的运行生命周期中会广播许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的api改变输出结果。
    - `运行时机`的角度区分：
        - loader：运行在打包文件之前（loader为在模块加载时的预处理文件）
        - plugins：在整个编译周期都起作用。
    - `配置方法`的角度区分：
        - loader：在`module.rules`中配置，也就是说他作为模块的解析规则存在。类型为数组，每一项都是一个object，里面描述了对于什么类型的文件(test)，使用了什么加载(loader)和参数(options)
        - plugins：在plugins中单独配置。类型为数组，每一项都是一个plugin的实例，参数他通过构造函数传入。
- [常见的、用过的loader](https://www.webpackjs.com/loaders/)：
    - 文件：`file-loader`将文件发送到输出文件夹，并返回（相对）URL，png|jpg|gif、svg、mp4
    - JSON：`json-loader`加载 JSON 文件（默认包含）
    - 转换编译(Transpiling)：`script-loader`在全局上下文中执行一次 JavaScript 文件（如在 script 标签），不需要解析
    - 转换编译(Transpiling)：`babel-loader`加载 ES2015+ 代码，然后使用 Babel 转译为 ES5
    - 模板(Templating)：`html-loader`导出 HTML 为字符串，需要引用静态资源
    - 样式：`css-loader`解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
    - 样式：`style-loader`将模块的导出作为样式添加到 DOM 中
    - 样式：`less-loader`加载和转译 LESS 文件
    - 样式：`sass-loader`加载和转译 SASS/SCSS 文件
    - 清理和测试(Linting && Testing)：`eslint-loader`，PreLoader，使用 ESLint 清理代码
    - 框架(Frameworks)：`vue-loader`加载和转译 Vue 组件
- [常见的、用过的plugin](https://www.webpackjs.com/plugins/)：
    - `DefinePlugin`允许创建一个在编译时可以配置的全局常量（'process.env': require('../config/dev.env')）
    - `WebpackBar`显示打包/启动可视化进度条
    - `mini-css-extract-plugin`是可以提取CSS到单独的文件中
    - `HtmlWebpackPlugin`简化了HTML文件的创建
    - `webpack.HotModuleReplacementPlugin()`启用热替换模块插件
    - `CopyWebpackPlugin`将单个文件或整个目录复制到生成目录（from:path.resolve(__dirname, '../static'),to:config.build.assetsSubDirectory,ignore: ['.*']）
- 谈谈你对webpack的看法
    - WebPack 是一个模块打包工具，你可以使用WebPack管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的HTML、JavaScript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack有对应的模块加载器。webpack模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源。
- webpack的两大特色：
    - code splitting（代码拆分）[按需加载](https://www.jianshu.com/p/b3b8fb8a2336)
    - ==loader==：可以处理各种类型的静态文件，并且支持串联操作
- webpack是以[commonJS](https://www.w3cschool.cn/zobyhd/1ldb4ozt.html)的形式来书写脚本滴，但对[AMD/CMD](https://github.com/seajs/seajs/issues/277)的支持也很全面，方便旧项目进行代码迁移。
- webpack具有requireJs和browserify的功能，但仍有很多自己的新特性：
    - 对CommonJS、AMD、ES6的语法做了兼容
    - 对js、css、图片等资源文件都支持打包
    - 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeeScript、ES6的支持
    - 有独立的配置文件webpack.config.js
    - 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间
    - 支持SourceUrls和[SourceMaps](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)，易于调试
    - 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活
    - webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快
- webpack、vint、lua
- [Vue首屏加载慢的优化方案](https://www.jianshu.com/p/b73f4aee0f1d)
    - `vendor.js过大问题解决`：
        - 在index.html中使用CDN的资源
        - 在bulid/webpack.base.conf.js文件中添加externals
        - 在main.js里将以下import注释替换require引入模块
    - `vue-cli开启打包压缩和后台配合gzip访问`
        - npm install --save-dev compression-webpack-plugin@1.1.11
        - 打开 config/index.js ，找到 build 对象中的 productionGzip ，改成 true
        - 此时打包的文件会 新增 .gz 文件
        - 后台nginx开启gzip模式访问（gzip on;），浏览器访问项目，自动会找到 .gz 的文件
- 如何用webpack来优化前端性能?（用webpack优化前端性能是指优化webpack的`输出结果`，让打包的最终结果在浏览器运行快速高效。）
    - `压缩代码`:删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的uglifyJsPlugin和ParalleluglifyPlugin来压缩JS文件，利用cssnano (css-loader?minimize) 来压缩css，利用` babel-plugin-transform-remove-console`删掉console代码
    - `利用CDN加速`:在构建过程中，将引用的静态资源路径修改为CDN.上对应的路径。可以利用webpack对于output参数和各loader的publicPath 参数来修改资源路径
    - `Tree Shaking`:将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现
    - `Code Splitting`:将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利用浏览器缓存
    - `提取公共第三方库`:SplitChunksPlugin插件来进行公共模块抽取,利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码
- 如何提高webpack的打包速度?
    - `happypack`:利用进程并行编译loader,利用缓存来使得rebuild更快，遗憾的是作者表示已经不会继续开发此项目,类似的替代者是thread-loader
    - `外部扩展(externals)`:将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，从而减少打包时间,比如jQuery用script标签引入
    - `dll`:采用webpack的DIIPlugin和DIlReferencePlugin引入dll，让-些基本不会改动的代码先打包成静态资源,避免反复编译浪费时间
    - `利用缓存`:webpack.cache、babel-loader.cacheDirectory、HappyPack.cache都可以利用缓存提高rebuild效率
    - `缩小文件搜索范围`:比如babel-loader插件,如果你的文件仅存在于src中,那么可以include: path.resolve(_dirname,'sre')，当然绝大多数情况下这种操作的提升有限,除非不小心build了node-modules文件
- 如何提高webpack的构建速度?
    - 多入口情况下，使用CommonsChunkPlugin来提取公共代码
    - 通过externals配置来提取常用库
    - 利用D1IPlugin和Dl1ReferencePlugin预编译资源模块通过D11Plugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。
    - 使用Happypack实现多线程加速编译
    - 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度
    - 使用Tree-shaking和ScopeHoisting来剔除多余代码
- 怎么配置多页应用?
    - 可以使用webpack的AutowebPlugin来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。要注意的是:
        - 每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套css样式表
        - 随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置


<!-- #endregion -->


<!-- #region # HTTP(S) -->
# HTTP(S)
- HTTP2相对于HTTP1.x有什么优势和特点?
    - 二进制分帧：HTTP/2采用二进制格式传输数据，而非HTTP 1.x的文本格式，二进制协议解析起来更高效。
        - 帧: HTTP/2 数据通信的最小单位消息:指HTTP/2中逻辑上的HTTP消息。例如请求和响应等，消息由一个或多个帧组成。
        - 流:存在于连接中的一个虚拟通道。流可以承载双向消息，每个流都有一个唯一的整数ID
    - 头部压缩：HTTP2使用“首部表”，只发送差异数据，而不是全部发送，从而减少头部的信息量。
        - HTTP/1.x会在请求和响应中中重复地携带不常改变的、冗长的头部数据，给网络带来额外的负担。
        - HTTP/2在客户端和服务器端使用“首部表"来跟踪和存储之前发送的键-值对，对于相同的数据，不再通过每次请求和响应发送
        - 首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新
        - 每个新的首部键-值对要么被追加到当前表的末尾，要么替换表中之前的值。
- http的几个状态码，比如：304、200、500、502、504等
    - 2XX成功
        - 200 OK,表示从客户端发来的请求在服务器端被正确处理
        - 201 Created请求已经被实现，而且有-个新的资源已经依据请求的需要而建立
        - 202 Accepted请求已接受,但是还没执行，不保证完成请求
        - 204 No content,表示请求成功，但响应报文不含实体的主体部分
        - 206 Partial Content, 进行范围请求
    - 3XX重定向
        - 301 moved permanently,永久性重定向，表示资源已被分配了新的URL
        - 302 found, 临时性重定向，表示资源临时被分配了新的URL（302是http1.0的协议状态码，在http1.1版本的时候为 了细化302状态码又出来了两个303和307）
        - 303 see other, 表示资源存在着另一个URL,应使用GET方法J香获取资源（303明确表示客户端应当采用get方法获取资源，他会把POST请求变为GET请求进行重定向）
        - 304 not modified,表示服务器允许访问资源，但因发生请求未满足条件的情况
        - 307 temporary redirect,临时重定向，和302含义相同（307会遵照浏览器标准，不会从post变为get）
    - 4XX客户端错误
        - 400 bad request,请求报文存在语法错误
        - 401 unauthorized,表示发送的请求需要有通过HTTP认证的认证信息
        - 403 forbidden,表示对请求资源的访问被服务器拒绝
        - 404 not found,表示在服务器.上没有找到请求的资源
        - 408 Request timeout,客户端请求超时
        - 409 Confict,请求的资源可能引起冲突
    - 5XX服务器错误
        - 500 internal sever error,表示服务器端在执行请求时发生了错误
        - 501 Not Implemented请求超出服务器能力范围，例如服务器不支持当前请求所需要的某个功能，或者请求是服务
器不支持的某个方法
        - 503 service unavailable,表明服务器暂时处于超负载或正在停机维护，无法处理请求
        - 505 http version not supported服务器不支持，或者拒绝支持在请求中使用的HTTP版本
- [关于HTTP协议，一篇就够了](https://www.cnblogs.com/ranyonsue/p/5984001.html)
- [浏览器缓存机制](https://www.cnblogs.com/skynet/archive/2012/11/28/2792503.html)
    - [缓存机制优先级](https://juejin.im/post/6854573215830933512#heading-40)：ETag > Last-Modified > Expires(HTTP1.0的东西)
    - Etag + If-None-Match
    - Last-Modified + If-Modified-Since
    - [http之Access-Control-Max-Age](https://blog.csdn.net/john1337/article/details/78928851)
- [http的状态码200(强缓存)和304(协商缓存)有什么区别](https://www.jianshu.com/p/fb59c770160c)
    - 强缓存：直接从本地副本比对读取，不去请求服务器，返回的状态码是200。主要包括`expires`和`cache-control`
    - 协商缓存：去服务器比对，若没改变才直接读取本地缓存，返回的状态码是304。主要包括`last-modified`和`Etag`
- 从输入URL到页面展现中间发生了什么
    - 域名解析 -> TCP连接（3次握手）-> 建立连接 -> HTTP请求 -> 后台处理请求 -> HTTP响应 -> 关闭连接 （4次挥手）-> 解析HTML -> 渲染
- [图解tcp三次握手四次挥手](https://blog.csdn.net/Uranus1211/article/details/80463018)
    - `可以四次握手`（确认报文段可以拆开发送，可以先发一个确认报文段：ack=x+1,ACK=1,再发送一个同步报文段：SYN=1,seq=y），但`不能两次握手`
    - `可以三次挥手`（如果服务器收到FIN的时候，也正要关闭连接，就可以将FIN 和ACK一起发送过去）
- TCP传输的三次握手
    - 第一次：SYN=1(请求连接)，seq=x(传输数据流序号)
    - 第二次：SYN=1(接受连接)，ack=x+1(ack=seq+1)(确认接受数据流)，ACK=1(确认序号)，seq=y(传输响应数据序号)
    - 第三次：ack=y+1，ACK=1(确认序号)，seq=x+1(因为第一次是x)。没有SYN，因为SYN这个标志位只有TCP建立连接时才被置为1。
- TCP传输的四次挥手
    - 第一次，FIN=1，seq=i，表示主动断开连接请求
    - 第二次，ack=i+1，ACK=1，seq=j，表示确认收到信息，同时可能存在服务器没有将数据全部传输完成
    - 第三次，FIN=1，ack=j+1，ACK=1，seq=k，表示可以(被动)关闭连接，同时可能发送数据
    - 第四次，ack=k+1，ACK=1，表示确认收到信息，断开连接。
- TCP和UDP的区别
    - TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议
    - UDP（User Data Protocol，用户数据报协议）是面向非连接的协议
- HTTP和TCP协议是什么关系？
    - 从OSI开放系统互连参考模型（物理层、数据链路层、网络层、传输层、会话层、表示层和应用层）看
    - `TCP`属于`运输层`的协议，主要解决数据如何在网络中传输，负责提供应用进程之间的通信
    - `HTTP`属于`应用层`上的一种协议，主要解决如何包装数据，是上层的协议，需要下层TCP的支持
- HTTPS为什么比较安全（这个关联性不是很大）
    - HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个`安全协议层`（SSL或TSL。包含：证书、卸载、流量转发、负载均衡、页面适配、浏览器适配、refer传递等），这个时候就成了我们常说的HTTPS。
- 创建ajax过程
    - 创建XMLHttpRequest对象,也就是创建一个异步调用对象.
    - 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
    - 设置响应HTTP请求状态变化的函数.
    - 发送HTTP请求.
    - 获取异步调用返回的数据.
    - 使用JavaScript和DOM实现局部刷新.
- 如果一条请求返回了跨域提醒，服务器是否已经接收到（是，否则无法返回相应）


<!-- #endregion -->


<!-- #region # 浏览器 -->
# 浏览器
- [图解浏览器的基本工作原理](https://zhuanlan.zhihu.com/p/47407398)
    - Browser Process（浏览器主进程）：负责包括地址栏，书签栏，前进后退按钮等部分的工作；负责处理浏览器的一些不可见的底层操作，比如网络请求和文件访问
    - Renderer Process：负责一个 tab 内关于网页呈现的所有事情
    - Plugin Process：负责控制一个网页用到的所有插件，如 flash
    - GPU Process：负责处理 GPU 相关的任务
- [线程和进程的区别](https://mtech.fatiao.pro/detail/12756.html)
- [浅读V8——强大的JavaScript引擎](https://www.jianshu.com/p/332c15fd7c7d)
    - V8的大致流程：JavaScript源代码 -> 抽象语法树（AST）-> 本地代码
    - JavaScriptCore：JavaScript源代码 -> 抽象语法树（AST）-> 字节码-> 本地代码
- cookie是干嘛的？有什么用？session又是什么？
- 浏览器的缓存机制如何实现的
- 怎么查看某个缓存的到期时间及大小
- 如何控制开关浏览器缓存
- 如何实现跨浏览器保存登录状态
- 浏览器自带多少进程
- 浏览器自带多少线程


<!-- #endregion -->


<!-- #region # WebSocket -->
# WebSocket
- [WebSocket](http://www.ruanyifeng.com/blog/2017/05/websocket.html)协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个Html5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。
- websocket（stomp.js+socket.js）


<!-- #endregion -->


<!-- #region # 安全 -->
# 安全
- 常见web安全及防护原理
    - sql注入原理：就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。
        - 1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。
        - 2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。
        - 3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
        - 4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。
    - Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。
    - XSS防范方法：
        - 尽量采用POST而非GET提交表单
        - 避免直接在cookie中泄露用户隐私，例如email、密码等等
        - 通过使cookie和系统ip绑定来降低cookie泄露后的危险。这样攻击者得到的cookie没有实际价值，不可能拿来重放
        - 如果网站不需要再浏览器端对cookie进行操作，可以在Set-Cookie末尾加上HttpOnly来防止javascript 代码直接获取cookie
- XSS与CSRF有什么区别吗？
    - XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。
    - CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。（登录受信任网站A，并在本地生成Cookie；在不登出A的情况下，访问危险网站B。）
- CSRF的防御
    - 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。
    - 通过验证码的方法
- [XSS和CSRF攻击原理浅谈](https://blog.csdn.net/hopefullman/article/details/87817193)
- [XSS与CSRF攻击的详解与区别](https://blog.csdn.net/wuhuagu_wuhuaguo/article/details/104148444)
- XSS攻击的解决办法：
    - `网站的Cookie设置HttpOnly属性`
    - html escape 转义
    - 后端永远不要相信前端的数据，服务端的输出检查。
- CSRF攻击的解决办法：
    - `Token 验证`
    - `Referer Check`：根据HTTP协议，在HTTP头中有一个字段叫Referer，它记录了该 HTTP 请求的来源地址。
    - 验证码
    - 尽量不要在页面的链接中暴露用户隐私信息。
    - 对于用户修改删除等操作最好都使用post 操作 。
- 如何解决xss攻击（慎用v-html、过滤bmp图片、我说了后端请求头加一个属性设置为true即可，具体什么属性我忘了，还有一种是字符串过滤，过滤script标签即可）


<!-- #endregion -->


<!-- #region # TypeScript -->
# TypeScript
- 有哪些操作符？Typeof 是干嘛的？
- TS引入一个JS模块？
- Declare 关键字是干嘛的？
- 什么是类型保护，有什么用？如何触发类型保护？
- Never 类型有什么用？
<!-- #endregion -->



<!-- #region Git -->
# Git
- Git rebase 和 merge 的区别
- docker实现原理及部署命令
<!-- #endregion -->


<!-- #region # 实战 -->
# 实战
1.   **编程：编译一下模板字符串**
2.   **编程：实现音频和动画的onStart和onEnd异步控制**
3.   **编程：手动实现new运算符**
4.   **编程：手动实现instanceof运算符**
5.   **编程：手写parseInt**
<!-- #endregion -->


<!-- #region # 前端思想 -->
# 前端思想
- 如何理解前端工程化
- [webpack做过哪些优化](https://juejin.im/post/6855129007785328653)
- 如何实现前端性能优化
- 你觉得前端工程的价值体现在哪
    - 为简化用户使用提供技术支持（交互部分）
    - 为多个浏览器兼容性提供支持
    - 为提高用户浏览速度（浏览器性能）提供支持
    - 为跨平台或者其他基于webkit或其他渲染引擎的应用提供支持
    - 为展示数据提供支持（数据接口）
- 谈谈性能优化问题
- 渐进增强和优雅降级
    - 渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
    - 优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
- [前端的可视化库](https://zhuanlan.zhihu.com/p/47154189)：ECharts、AntV
<!-- #endregion -->


<!-- #region # 全栈 -->
# 全栈
- 一个Web应用是怎样运作的，如何优化
<!-- #endregion -->


<!-- #region # 小程序 -->
# 小程序
- 小程序里面存在域的概念吗
- 小程序时候踩过哪些坑
<!-- #endregion -->


<!-- #region # Django -->
# Django
- [django分为哪几层：FBC和VBC？？？](https://www.cnblogs.com/rexcheny/p/11207630.html)
- 后台的登录是怎么做的
- [Django框架的运行方式及处理流程](https://www.jianshu.com/p/e122a56b6b19)
- 如何判断一个用户是否登录了
- session存在哪
<!-- #endregion -->


<!-- #region # Sql -->
# Sql
- [sql的聚合api有哪些](https://blog.csdn.net/qq_32486599/article/details/73655817)：count、sum、max、min
<!-- #endregion -->


<!-- #region # 数据结构 -->
# 数据结构
- [数组和链表的区别和优缺点总结](https://blog.csdn.net/weibo1230123/article/details/82011889)

特性\结构 | 数组 | 链表
---|---|---
元素个数 | 固定 | 按需增减
存储单元 | 定义时分配，要连续 | 程序执行时动态向系统申请，无需连续
元素顺序 | 由位置(下标)确定 | 由指针指向确定
元素增减 | 会频繁移动元素 | 改变指针指向即可
查找效率 | 随机读取效率很高 | 不可随机访问，只能按序
扩展性能 | 空间不够时要重新定义数组 | 链表大小不用定义，数据随意增删
<!-- #endregion -->


<!-- #region # 算法 -->
# 算法

排序算法 | 平均时间复杂度 | 最好情况 | 最坏情况 | 空间复杂度 | 排序方式 | 稳定性
---|---|---|---|---|---|---
==冒泡排序== | **O(n^2^)** | O(n) | O(n^2^) | O(1) | In-Place | **稳定**
选择排序 | O(n^2^) | O(n^2^) | O(n^2^) | O(1) | In-Place | 不稳定
插入排序 | O(n^2^) | O(n) | O(n^2^) | O(1) | In-Place | 稳定
希尔排序 | O(n log n) | O(n log^2^ n) | O(n log^2^ n) | O(1) | In-Place | 不稳定
归并排序 | O(n log n) | O(n log n) | O(n log n) | O(n) | Out-Place | 稳定
==快速排序== | **O(n log n)** | O(n log n) | O(n^2^) | **O(log n)** | In-Place | **不稳定**
堆排序 | O(n log n) | O(n log n) | O(n log n) | O(1) | In-Place | 不稳定
计数排序 | O(n + k) | O(n + k) | O(n + k) | O(k) | Out-Place | 稳定
桶排序 | O(n + k) | O(n + k) | O(n^2^) | O(n + k) | Out-Place | 稳定
基数排序 | O(n * k) | O(n * k) | O(n * k) | O(n + k) | Out-Place | 稳定

### 冒泡排序(Bubble Sort)

- 时间复杂度：O(n^2^)， 最好O(n)，最坏O(n^2^)
- 空间复杂度：O(1)
- 实现思路:
    - 比较相邻的元素。如果第一个比第二个大， 就交换他们两个。
    - 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
    - 针对所有的元素重复以上的步骤，除了最后一个。
    - 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

```js
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]] // 交换操作
            }
        }
    }
    return arr
}
```

- 改进1：设置-标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。

```js
function bubbleSort2(arr) {
    var i = arr.length - 1 // 初始化，最后的交换位置，保持不变
    while (i > 0) {
        var pos = 0 // 每趟开始时，无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j // 记录交换的位置
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换操作
            }
        }
        i = pos // 为下一趟排序做准备
    }
    return arr
}
```

- 改进2：传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值，我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法，一次可以得到两个最终值(最大者和最小者)，从而使排序趟数几乎减少了一半。

```js
function bubbleSort3(arr) {
    var low = 0
    var high = arr.length - 1 // 设置变量初始值
    var tmp, j
    while (low < high) {
        for (j = low; j < high; ++j) { // 正向冒泡,找到最大值
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // 交换操作
            }
        }
        --high // 前移一位
        for (j = high; j >low; --j) { // 反向冒泡，找到最小值
            if (arr[j]<arr[j-1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]] // 交换操作
            }
        }
        ++low; // 后移一位
    }
    return arr
}
```

### 快速排序(Quick Sort)

- 时间复杂度：O(n log ^n^)，最好O(n log ^n^)，最坏O(n^2^)
- 空间复杂度：O(log ^n^)
- [实现思路](https://www.cnblogs.com/fivestudy/p/10012193.html)：
    - 基准。从数组中选择中间一项作为基准pivot
    - 划分。创建两个指针，左边一个指向数组的第一项，右边指向数组最后一项。移动左指针直到我们找到一个比基准大的元素，接着，移动右指针直到找到一个比基准小的元素。然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程是的比基准小的值都排在了基准之前，而比基准大的值都排在了基准之后，这一步叫`划分操作`
    - 递归。算法对划分的小数组(较基准小的值组成的子数组，以及较基准大的值组成的子数组)重复之前的两个步骤，直至数组以完全排序。

```js
const quickSort = (function() { // 立即执行函数
    // 默认状态下的比较函数
    function compare(a, b) {
        if (a === b) {
            return 0
        }
        return a < b ? -1 : 1
    }
    
    // 交换操作
    function swap(array, a, b) {
        [array[a], array[b]] = [array[b], array[a]]
    }
    
    // 分治函数
    function partition(array, left, right) {
        // 用index取中间值，而非splice
        const pivot = array[Math.floor((right + left) / 2)]
        let i = left
        let j = right
        while (i <= j) {
            while (compare(array[i], pivot) === -1) { // arr[i] < pivot
                i++
            }
            while (compare(array[j], pivot) === 1) { // arr[j] >= pivot
                j--
            }
            if (i <= j) {
                swap(array, i, j)
                i++
                j--
            }
        }
        return i
    }
    
    // 快速排序主函数
    function quick(array, left, right) {
        let index
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
        return array
    }
    
    // 调用主函数
    return function quickSort(array) {
        return quick(array, 0, array.length - 1)
    }

})()
```

- 阮一峰的思路：

```js
const quickSort = function(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var pivotIndex = Math.floor(arr.length / 2)
    var pivot = arr.slice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
```

### 二分查找(Binary Search)

- [6种二分查找及其变式总结及牢记方法](https://blog.csdn.net/qq_42873341/article/details/86897987)
- 实现思路：
    - 折半查找算法要求查找表的数据是线性结构存储，还要求查找表中的顺序是`由小到大排序(由大到小排序)`
    - 首先设两个指针，left和right, 表示最低索引和最高索引
    - 然后取中间位置索引mid，判断mid处的值是否与所要查找的数相同，相同则结束查找，mid处的值比所要查找的值小就把left设为mid+1，如果mid处的值比所要查找的值大就把right设为mid-1
    - 然后再新区间继续查到，直到找到或者left>right找不到所要查找的值结束查找

```js
var binarySearch = function (arr, i) {
  var left = 0
  var right = arr.length - 1
  while (left <= right) {
    var mid = Math.floor((left + right) / 2)
    if (i < arr[mid]) {
      right = mid - 1
    } else if (i > arr[mid]) {
      left = mid + 1
    } else if (i === arr[mid]) {
      return mid
    }
  }
  return false
}
```

### 深度优先遍历（DFS）

- [深度优先遍历（DFS）和广度优先遍历（BFS）](https://www.jianshu.com/p/b4d8085e84bd)
- 实现思路：
    - 从某个顶点出发，首先访问这个顶点，然后找出刚访问这个结点的第一个未被访问的邻结点，然后再以此邻结点为顶点，继续找它的下一个顶点进行访问
    - 重复此步骤，直至所有结点都被访问完为止

###### DFS 递归写法
```js
function deepTraversal(node, nodeList) {
    if (node) {
            nodeList.push(node)
            var children = node.children
            for (var i = 0; i < children.length; i++) {
                deepTraversal(children[i], nodeList)
            }
        }
    return nodeList
}
var root = document.getElementById('root')
console.log(deepTraversal(root,nodeList=[]))
```

###### DFS 非递归写法
```js
function deepTraversal(node) {
    var nodeList = []
    if (node) {
        var stack = []
        stack.push(node)
        while (stack.length != 0) {
            var childrenItem = stack.pop()
            nodeList.push(childrenItem)
            var childrenList = childrenItem.children
            for (var i = childrenList.length - 1; i >= 0; i--) {
                stack.push(childrenList[i])
            }
        }
    }
    return nodeList
}
var root = document.getElementById('root')
console.log(deepTraversal(root))
```

### 广度优先遍历（BFS）

- [深度优先遍历（DFS）和广度优先遍历（BFS）](https://www.jianshu.com/p/b4d8085e84bd)
- 实现思路：
    - 从某个顶点出发，首先访问这个顶点，然后找出刚访问这个结点所有未被访问的邻结点，访问完后再访问这些结点中第一个邻结点的所有结点
    - 重复此方法，直到所有结点都被访问完为止

###### BFS 非递归写法
```js
function wideTraversal(node) {
    var nodes = []
    if (node != null) {
        var queue = []
        queue.unshift(node)
        while (queue.length != 0) {
            var item = queue.shift()
            nodes.push(item)
            var children = item.children
            for (var i = 0; i < children.length; i++) {
                queue.push(children[i])
            }
        }
    }
    return nodes
}
var root = document.getElementById('root')
console.log(wideTraversal(root))
```
<!-- #endregion -->


<!-- #region # 未分类试题 -->
# 未分类试题

- [前端和后端的区别](https://zhuanlan.zhihu.com/p/83515211)
- http和http2.0
- http和https
- 如果要把http升级成https应该怎么做
- get和post的区别
- 浏览器缓存机制
- 浏览器缓存存放位置
- 浏览器从输入url到页面生成结果哪些步骤
- tcp三次连接
- 进程和线程
- bfc是什么，解决哪些问题
- ajax的原理和缺点
- typeof和instanceof的区别
- 有几种方式判断Array类型
- 函数深拷贝和浅拷贝的区别，怎么实现深拷贝
- js垃圾回收机制
- 事件循环
- 事件冒泡
- 阻止事件冒泡的方式，ie是什么方式
- this的情况
- js的继承方式，有什么缺点
- new做了什么事情
- node线程池
- node有哪些模块
- node的事件循环和浏览器的有什么区别
- node应该怎么读取2DB的数据
- vue的双向绑定是怎么做到的
- vue的diff算法是怎么样的
- vue cil做了哪些事情，你会怎么设计
- MVC，ajax, 布局，JQuery
- “敏感信息"(密码、身份证之类的)的处理
- 页面优化相关
- px rem em
- border-radius，完整写法几个值
- 实现一个背景色，一半红一半白
- 什么场景使用HTTP，什么场景使用HTTPS
- web前端学习到了什么程度
- MVVM和MVC的区别
- Vue哪些对数组的操作不会导致页面变化
- websocket原理
- nocache和nostore的区别
- 有没有做哪些自适应的页面布局（栅格，圣杯布局）
- cookie和localstorage的区别
- cookie可以取哪些值
- xss是什么如何防范
- csp了解吗
- async await settimeout promise一堆放在一起的执行结果
- 隐式类型转换
- 写个css布局左右定宽中间自适应
- 数组去掉（false，null, undefine）去重后从大到小排序
- 给一个对象数组，是一个树的形式存储的城市代码，要求遍历找到id为x的节点输出城市名
- css怎么实现水平垂直居中
- css如何处理类名冲突的问题
- plugin的原理
- promise怎么实现
- ip协议有哪些
- f5随机生成0-5的随机数，如何构造f7
- 一个桥有20个格子，出发点有无限多的米，一个人每前进一步需要吃十粒米，后退不需要，问如何能够走到桥对面

<!-- #endregion -->


# 祝君无Bug~




