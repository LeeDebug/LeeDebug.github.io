---
title: git贡献墙 gitcalendar
categories:
  - Git
tags:
  - Git
keywords: Git
description: git贡献墙gitcalendar
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201214124257.png'
date: 2020-12-14 12:40:34
---

> 公司为了访问便捷，大都使用gitlab或gitee，所以前两年的贡献度都在这两个仓库上。从今年打算转战github，多做项目、多做整理、多输出文章，旨在提升自己。所以本文的git贡献墙也以github为例

# 诸多解决方案

## Github Official API

参考地址：
- [github的贡献墙自带的request](https://github.com/users/LeeDebug/contributions?from=2019-12-01&to=2019-12-14)

优势：
- 官方的

缺点：
- 速度慢
- 不稳定，可能会挂
- 单纯的canvas
- 没有可读数据

## Github Chart API

参考地址：
- [github repo](https://github.com/2016rshah/githubchart-api)
- [online demo](https://ghchart.rshah.org/)

优势：
- 实时性好，与官网同步

缺点：
- 速度慢
- 不稳定，可能会挂
- 单纯的canvas
- 没有可读数据

## github-calendar.js

参考地址：
- [github repo](https://github.com/Bloggify/github-calendar)
- [online demo](https://bloggify.github.io/github-calendar/example/)

优势：
- 自带色卡

缺点：
- 作者不维护了

## GitHub Contribution Calendar API

参考地址：
- [github repo](https://github.com/rschristian/github-contribution-calendar-api)
- [online demo](https://githubapi.ryanchristian.dev/user/LeeDebug)

优势：
- 有数据返回，可读信息多

缺点：
- 没有图形化展示
- 实时性差，第二天才更新

## Butterfly-gitcalendar

结合 `github-calendar.js` 和 `GitHub Contribution Calendar API`

参考地址：
- [github repo](https://github.com/Zfour/Butterfly-gitcalendar)
- [online demo](https://zfour.github.io/Butterfly-gitcalendar/index)

优势：
- 自定义样式与弹窗
- 有数据返回，可读信息多
- 汉化

缺点：
- 实时性差，第二天才更新


# 实现方案

本次以最后一种解决方案 `Butterfly-gitcalendar` 为基础，进行了部分更改

## 步骤一：新增gitcalendar.pug页面

在`项目根目录/themes/hexo-theme-butterfly-3.3.0/layout/`文件夹下新建`gitcalendar.pug`文件，并复制以下代码

```js
#calendar.calendar
  #gitmessage(:style='{top:y+px,left:x+px,position: fixed,zIndex:9999}')
    .angle-wrapper
      span {{span1}} &nbsp;
      span {{span2}} 次提交
  .position-relative
    .border.py-2.graph-before-activity-overview
      .js-calendar-graph.mx-md-2.mx-3.d-flex.flex-column.flex-items-end.flex-xl-items-center.overflow-hidden.pt-1.is-graph-loading.graph-canvas.calendar-graph.height-full.text-center(data-graph-url='/users/LeeDebug/contributions?to=2020-10-29', data-url='/LeeDebug', data-from='2019-10-27 00:00:00 UTC', data-to='2020-10-29 23:59:59 UTC', data-org)
        #calendarcanvasbox(v-if='simplemode')
          canvas#gitcanvas(style='animation: none;')
        svg.js-calendar-graph-svg(width='100%', viewBox='0 0 770 128', v-if='!simplemode')
          text.month(:x='32 + monthindex*64', y='20', v-for='(month,monthindex) in monthchange') {{month}}
          text.wday(text-anchor='start', dx='0', dy='40')  日
          text.wday(text-anchor='start', dx='0', dy='65')  二
          text.wday(text-anchor='start', dx='0', dy='90')  四
          text.wday(text-anchor='start', dx='0', dy='115') 六
          g(v-for='(weekitem,weekIndex) in data', :transform='\'translate(\'+ (16 + weekIndex*14) + \',\' + \'0)\'')
            rect(@mouseover="selectStyle(dayitem,$event)"  @mouseleave="outStyle()" v-for='(dayitem,dayIndex) in weekitem', :style='{fill:thiscolor(dayitem.count),shapeRendering:crispedges}', :data-score='dayitem.count', :data-date='dayitem.date', x='0', :y=' 30 + dayIndex*13 ', width='11', height='11')
      .contrib-footer.clearfix.mt-1.mx-3.px-3.pb-1
        .float-left.text-gray
          | 数据来源 
          a(:href="'https://github.com/'+ user ", target='blank') @{{user}}
        .contrib-legend.text-gray(title='A summary of pull requests, issues opened, and commits to the default and gh-pages branches.')
          | Less

          ul.legend
            li(:style='{backgroundColor:leeGreen[0]}')
            li(:style='{backgroundColor:leeGreen[1]}')
            li(:style='{backgroundColor:leeGreen[2]}')
            li(:style='{backgroundColor:leeGreen[3]}')
            li(:style='{backgroundColor:leeGreen[4]}')
          | More

  .contrib-column.contrib-column-first.table-column
    span.text-muted 过去一年提交
    span.contrib-number {{total}}
    span.text-muted.data-range {{oneyearbeforeday}}&nbsp;-&nbsp;{{thisday}}
  .contrib-column.table-column
    span.text-muted 最近一月提交
    span.contrib-number {{thisweekdatacore}}
    span.text-muted.data-range {{amonthago}}&nbsp;-&nbsp;{{thisday}}
  .contrib-column.table-column
    span.text-muted 最近一周提交
    span.contrib-number {{weekdatacore}}
    span.text-muted.data-range {{aweekago}}&nbsp;-&nbsp;{{thisday}}
```

注：请将代码中的两处`LeeDebug`替换为你自己的github用户名

## 步骤二：在首页引用gitcalendar.pug

请打开`项目根目录/themes/hexo-theme-butterfly-3.3.0/layout/index.pug`页面，添加下面三行代码（如有顾虑，请自行备份）

```js
  extends includes/layout.pug

  block content
    include ./includes/mixins/post-ui.pug
    #recent-posts.recent-posts
+     .recent-post-item(style='width:100%; height: auto;')
+       include gitcalendar.pug
+     .recent-post-item(style='height:0px; clear:both; margin-top: 0px;')
      +postUI
      include includes/pagination.pug
```

前两行为引用`gitcalendar.pug`页面，第3行是为了清除上面的布局样式；如有影响，请删除即可

## 步骤三：新增gitcalendar.js脚本

在`项目根目录/themes/hexo-theme-butterfly-3.3.0/source/`下，新建文件夹并命名为`gitcalendar`，在此目录下新建文件夹并命名为`js`，在此目录下新建js文件并命名为`gitcalendar.js`（为了区分版本，个人命名为`gitcalendar_v01.js`），并复制以下代码

```js
const calendar = new Vue({
  el: '#calendar',
  data: {
    // 打开时使用canvas绘制gitcalendar，关闭时使用svg绘制gitcalendar
	  // canvas：dom数少，但图像会发生模糊，自适应一般  svg：dom数多，图像清晰，自适应更佳  
    simplemode: false,
    // 这里填写你的github用户名
    user: 'LeeDebug',
    fixed: 'fixed',
    px: 'px',
    x: '',
    y: '',
    span1: '',
    span2: '',
    month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthchange: [],
    oneyearbeforeday: '',
    thisday: '',
    amonthago: '',
    aweekago: '',
    weekdatacore: 0,
    datacore: 0,
    total: 0,
    datadate: '',
    data: [],
    positionplusdata: [],
    firstweek: [],
    lastweek: [],
    beforeweek: [],
    thisweekdatacore: 0,
    mounthbeforeday: 0,
    mounthfirstindex: 0,
    crispedges: 'crispedges',
    thisdayindex: 0,
    amonthagoindex: 0,
    amonthagoweek: [],
    firstdate: [],
    first2date: [],
    montharrbefore: [],
    monthindex: 0,
    leeGreen: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], // github的强度颜色
    purple: ['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f',],
    green: ['#ebedf0', '#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
    blue: ['#ebedf0', '#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c',],
    color: ['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f',]
  },
  methods: {
    selectStyle(data, event) {
      $('.angle-wrapper').show();
      this.span1 = data.date;
      this.span2 = data.count;
      this.x = event.clientX - 100;
      this.y = event.clientY - 60
    },
    outStyle() {
      $('.angle-wrapper').hide()
    },
    thiscolor(x) {
      if (x === 0) {
        return this.leeGreen[0]
      } else if (x <= 5) {
        return this.leeGreen[1]
      } else if (x <= 10) {
        return this.leeGreen[2]
      } else if (x <= 18) {
        return this.leeGreen[3]
      } else {
        return this.leeGreen[4]
      }
    },
  }
});
let githubapiurl = "https://githubapi.ryanchristian.dev/user/" + calendar.user;
$(function () {
  $.ajax({
    type: "GET",
    url: githubapiurl,
    dataType: "json",
    success: function (data) {
      ;
      calendar.data = data.contributions;
      calendar.total = data.total;
      calendar.first2date = calendar.data[48];
      calendar.firstdate = calendar.data[47];
      calendar.firstweek = data.contributions[0];
      calendar.lastweek = data.contributions[52];
      calendar.beforeweek = data.contributions[51];
      calendar.thisdayindex = calendar.lastweek.length - 1;
      calendar.thisday = calendar.lastweek[calendar.thisdayindex].date;
      calendar.oneyearbeforeday = calendar.firstweek[0].date;
      calendar.monthindex = calendar.thisday.substring(5, 7) * 1;
      calendar.montharrbefore = calendar.month.splice(calendar.monthindex, 12 - calendar.monthindex);
      calendar.monthchange = calendar.montharrbefore.concat(calendar.month);
      addweek();
      addlastmonth();

      function responsiveChart() {
        let c = document.getElementById("gitcanvas");
        let cmessage = document.getElementById("gitmessage");
        let ctx = c.getContext("2d");
        c.width = document.getElementById("calendarcanvasbox").offsetWidth;
        let linemaxwitdh = 0.96 * c.width / calendar.data.length;
        c.height = 9 * linemaxwitdh;
        let lineminwitdh = 0.8 * linemaxwitdh;
        let setposition = {
          x: 0.02 * c.width,
          y: 0.025 * c.width
        };
        for (let week in calendar.data) {
          weekdata = calendar.data[week];
          for (let day in weekdata) {
            let dataitem = {date: "", count: "", x: 0, y: 0};
            calendar.positionplusdata.push(dataitem);
            ctx.fillStyle = calendar.thiscolor(weekdata[day].count);
            // ctx.fillStyle = calendar.leeGreen[weekdata[day].intensity]; // 可按api的强度直接取色
            setposition.y = Math.round(setposition.y * 100) / 100;
            dataitem.date = weekdata[day].date;
            dataitem.count = weekdata[day].count;
            dataitem.x = setposition.x;
            dataitem.y = setposition.y;
            ctx.fillRect(setposition.x, setposition.y, lineminwitdh, lineminwitdh);
            setposition.y = setposition.y + linemaxwitdh
          }
          ;
          setposition.y = 0.025 * c.width;
          setposition.x = setposition.x + linemaxwitdh
        }
        ;
        ctx.font = "600  Arial";
        ctx.fillStyle = '#aaa';
        ctx.fillText("日", 0, 1.9 * linemaxwitdh);
        ctx.fillText("二", 0, 3.9 * linemaxwitdh);
        ctx.fillText("四", 0, 5.9 * linemaxwitdh);
        ctx.fillText("六", 0, 7.9 * linemaxwitdh);
        let monthindexlist = c.width / 24;
        for (let index in calendar.monthchange) {
          ctx.fillText(calendar.monthchange[index], monthindexlist, 0.7 * linemaxwitdh);
          monthindexlist = monthindexlist + c.width / 12
        }
        ;
        cmessage.onmousemove = function (event) {
          $('.angle-wrapper').hide()
        };
        c.onmousemove = function (event) {
          $('.angle-wrapper').hide()
          getMousePos(c, event);
        };

        function getMousePos(canvas, event) {
          var rect = canvas.getBoundingClientRect();
          var x = event.clientX - rect.left * (canvas.width / rect.width);
          var y = event.clientY - rect.top * (canvas.height / rect.height);
          for (let item of calendar.positionplusdata) {
            let lenthx = x - item.x;
            let lenthy = y - item.y;
            if (0 < lenthx && lenthx < lineminwitdh) {
              if (0 < lenthy && lenthy < lineminwitdh) {
                $('.angle-wrapper').show();
                calendar.span1 = item.date;
                calendar.span2 = item.count;
                calendar.x = event.clientX - 100;
                calendar.y = event.clientY - 60
              }
            }
          }
        }
      }

      responsiveChart();
      $(window).on('resize', responsiveChart);
      window.onscroll = function () {
        $('.angle-wrapper').hide()
      };
      console.log(calendar.positionplusdata)

      function addlastmonth() {
        if (calendar.thisdayindex === 0) {
          thisweekcore(52);
          thisweekcore(51);
          thisweekcore(50);
          thisweekcore(49);
          thisweekcore(48);
          calendar.thisweekdatacore += calendar.firstdate[6].count;
          calendar.amonthago = calendar.firstdate[6].date
        } else {
          thisweekcore(52);
          thisweekcore(51);
          thisweekcore(50);
          thisweekcore(49);
          thisweek2core();
          calendar.amonthago = calendar.first2date[calendar.thisdayindex - 1].date
        }
      };

      function thisweek2core() {
        for (let i = calendar.thisdayindex - 1; i < calendar.first2date.length; i++) {
          calendar.thisweekdatacore += calendar.first2date[i].count
        }
      };

      function thisweekcore(index) {
        for (let item of calendar.data[index]) {
          calendar.thisweekdatacore += item.count
        }
      };

      function addlastweek() {
        for (let item of calendar.lastweek) {
          calendar.weekdatacore += item.count
        }
      };

      function addbeforeweek() {
        for (let i = calendar.thisdayindex; i < calendar.beforeweek.length; i++) {
          calendar.weekdatacore += calendar.beforeweek[i].count
        }
      };

      function addweek() {
        if (calendar.thisdayindex === 6) {
          calendar.aweekago = calendar.lastweek[0].date;
          addlastweek()
        } else {
          lastweek = data.contributions[51];
          calendar.aweekago = lastweek[calendar.thisdayindex + 1].date;
          addlastweek();
          addbeforeweek()
        }
      }
    }
  })
});
if(document.getElementById("calendarcanvasbox").offsetWidth<500){calendar.simplemode=false}
```

注：同理，请将代码中的一处`LeeDebug`替换为你自己的github用户名

## 步骤四：新增gitcalendar.css样式

在步骤三新增的gitcalendar目录下，即`项目根目录/themes/hexo-theme-butterfly-3.3.0/source/gitcalendar`下，新建文件夹并命名为`css`，在此目录下新建css文件并命名为`gitcalendar.css`（同理，为了区分版本，个人命名为`gitcalendar_v01.css`），并复制以下代码

```js
.calendar {
    font-family: SourceHanSans-Medium;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
    min-height: 120px;
    text-align: center;
    margin: 0 auto;
	border-width:0px;
	width:100%;
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	align-items:center;
	flex-wrap:wrap;
}
.calendar-graph text.wday,
.calendar-graph text.month {
    font-size: 10px;
    fill: #aaa;
}
.contrib-legend {
    text-align: right;
    padding: 0 14px 10px 0;
    display: inline-block;
    float: right;
}
.contrib-legend .legend {
    display: inline-block;
    list-style: none;
    margin: 0 5px;
    position: relative;
    bottom: -1px;
    padding: 0;
}
.contrib-legend .legend li {
    display: inline-block;
    width: 10px;
    height: 10px;
}
.text-small {
    font-size: 12px;
    color: #767676;
}
.calendar-graph {
    padding: 15px 0 0;
    text-align: center;
}
.contrib-column {
    text-align: center;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    font-size: 11px;
}
.contrib-column-first {
    border-left: 0;
}
.table-column {
	padding:10px;
    display: table-cell;
    width:33%;
    vertical-align: top;
}
.contrib-number {
    font-weight: 300;
    line-height: 1.3em;
    font-size: 24px;
    display: block;
}
.calendar img.spinner {
    width: 70px;
    margin-top: 50px;
    min-height: 70px;
}
.monospace {
    text-align: center;
    color: #000;
    font-family: monospace;
}
.monospace a {
    color: #1D75AB;
    text-decoration: none;
}
.contrib-footer {
    font-size: 12px;
    padding: 0 12px 12px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    height: 26px;
}
.left.text-muted {
    float: left;
    margin-left: 9px;
    color: #767676;
}
.left.text-muted a {
    color: #4078c0;
    text-decoration: none;
}
.left.text-muted a:hover,
.monospace a:hover {
    text-decoration: underline;
}
h2.f4.text-normal.mb-3 {
    display: none;
}

.float-left.text-gray {
    float: left;
}
#user-activity-overview{
    display:none;
}
.day-tooltip {
    white-space: nowrap;
    position: absolute;
    z-index: 99999;
    padding: 10px;
    font-size: 12px;
    color: #959da5;
    text-align: center;
    background: rgba(0,0,0,.85);
    border-radius: 3px;
    display: none;
    pointer-events: none;
}
.day-tooltip strong {
    color: #dfe2e5;
}
.day-tooltip.is-visible {
    display: block;
}
.day-tooltip:after {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 5px;
    height: 5px;
    box-sizing: border-box;
    margin: 0 0 0 -5px;
    content: " ";
    border: 5px solid transparent;
    border-top-color: rgba(0,0,0,.85)
}
.position-relative {
    width:100%;
    padding-left:20px;
    padding-right:20px;
}
@media screen and (max-width: 650px){
    .contrib-footer{
        padding: 0;
    }
    .contrib-column{
        /* display:none */
        line-height: initial;
        padding: 5px;
    }
    .contrib-column .contrib-number{
        font-size: 14px;
        font-weight: 500;
    }
    .contrib-column .data-range{
        display:none
    }
}
.angle-wrapper {
    z-index:9999;
    display:inline;
    display:none;
    width: 200px;
    height: 40px;
    position: relative;
    padding: 5px 0;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    text-align: center;
    color: white;
}
.angle-box {
    position:fixed;
    padding:10px
}
.angle-wrapper span{
	padding-bottom:1em;
}
.angle-wrapper:before {
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 47.5%;
    top: 100%;
}
```

## 引入js、css代码，即vue的依赖

在`项目根目录/themes/hexo-theme-butterfly-3.3.0/_config.yml`文件内，找到`inject`处，并添加以下3行代码

```js
inject:
  head:
+   - <link rel="stylesheet" href="/gitcalendar/css/gitcalendar_v01.css"/>
  bottom:
+   - <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
+   - <script src="/gitcalendar/js/gitcalendar_v01.js"></script>
```

注：此处的js和css文件也可改为cdn引入，但要注意缓存问题。另，如无特殊需求，请引入`vue@2.6.11`，非必要请不要修改

## 步骤五：打包部署

教程到此结束，打包部署即可查看效果。如有疑问请联系博主


# 祝君无Bug~