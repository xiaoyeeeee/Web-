# .NET 转前端基础知识笔记

## node.js的安装
官网地址：https://nodejs.org/en/    

下载下来直接下一步。   

换源：安装cnpm：打开cmd输入npm install cnpm -g --registry=https://registry.npm.taobao.org 这是阿里的别的腾讯的什么都行，安装的原因是用国内的cnpm会比较快。或者是制作自己的cnpm。

## 测试
在d盘根目录下建一个test.js文件
```javascript
console.log("node.js测试");
```
打开cmd去到d盘根目录  
输入 node test.js 将会打印出“node.js测试”；