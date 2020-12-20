---
title: LeetCode常见题
categories:
  - LeetCode
tags:
  - LeetCode
keywords: 'LeetCode'
description: LeetCode
cover: https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170207.png
date: 2020-07-01 22:32:05
---

> 算法对前端的重要性可以说至关重要，不可小觑。

# 算法思想

- 基础技巧: 分治、二分、贪心
- 排序算法: 快速排序、归并排序、计数排序
- 搜索算法: 回溯、递归、深度优先遍历，广度优先遍历，二叉搜索树等
- 图论: 最短路径、最小生成树
- 动态规划: 背包问题、最长子序列

## - 双指针

> 88. 合并两个有序数组

给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:
- 输入:
    - nums1 = [1,2,3,0,0,0], m = 3
    - nums2 = [2,5,6],       n = 3
- 输出: 
    - [1,2,2,3,5,6]

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1, j = n - 1, len = m + n -1
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            nums1[len--] = nums2[j--]            
        } else if (j < 0) {
            nums1[len--] = nums1[i--]
        } else if (nums1[i] > nums2[j]) {
            nums1[len--] = nums1[i--]
        } else {
            nums1[len--] = nums2[j--]
        }
    }
};
```

## - 排序

## - 贪心思想

## - 二分查找

## - 分治

## - 搜索

## - 动态规划

## - 数学


# 数据结构相关

- 数组与链表:单/双向链表
- 栈与队列
- 哈希表
- 堆:最大堆/最小堆
- 树与图:最近公共祖先、并查集
- 字符串:前缀树(字典树) /后缀树

## - 链表

## - 树

## - 栈和队列

## - 哈希表

## - 字符串

## - 数组与矩阵

## - 图

## - 位运算


# 祝君无Bug~
