---
title: viewerjs查看大图组件
categories:
  - Vue
tags:
  - Vue
keywords: Vue
description: viewerjs查看大图组件
cover: 'https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210225140807.png'
date: 2021-02-06 23:07:33
---

> 因为项目没有使用`element-ui`，所以不能使用自带的`el-image`组件进行大图查看，遂找了一个单独的组件

# 安装

```bash
npm install viewerjs
```

# 使用案例

```html
<!-- 单个图片查看 -->
<div>
  <img id="image" src="picture.jpg" alt="Picture">
</div>

<!-- 多个图片查看 -->
<div>
  <ul id="images">
    <li><img src="picture-1.jpg" alt="Picture 1"></li>
    <li><img src="picture-2.jpg" alt="Picture 2"></li>
    <li><img src="picture-3.jpg" alt="Picture 3"></li>
  </ul>
</div>
```

```js
// see document: https://github.com/fengyuanchen/viewerjs/blob/master/README.md
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
let viewer: any;
export function initImageViewer(thumbnail: string = '') {
  // 获取最新的消息框实例
  const msgDom: any = (document as any).getElementById('messageBox');
  // 已加载过
  if (viewer) {
    // 更新实例里的图片源
    viewer.update(msgDom);
  } else { // 第一次加载
    viewer = new Viewer(msgDom, {
      // 只筛选出图片消息
      filter(image: any) {
        const isImgMsg = image.className.indexOf('imageMsg') > -1;
        return isImgMsg;
      },
      // 去掉url中的缩略图参数
      url(image: any) {
        return image.src.replace(thumbnail, '');
      },
    });
  }
}

```


# 祝君无Bug~