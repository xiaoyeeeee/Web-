# .NET 转前端基础知识笔记

## node.js 的安装

官网地址：https://nodejs.org/en/

下载下来直接下一步。

换源：安装 cnpm：打开 cmd 输入 npm install cnpm -g --registry=https://registry.npm.taobao.org 这是阿里的别的腾讯的什么都行，安装的原因是用国内的 cnpm 会比较快。或者是制作自己的 cnpm。

## 测试

在 d 盘根目录下建一个 test.js 文件

```javascript
console.log("node.js测试");
```

打开 cmd 去到 d 盘根目录  
输入 node test.js 将会打印出“node.js 测试”；

## vs code 智能提示

1. 首先下载 typings 包：cnpm install -g typings
2. 到开发目录下输入：typings init 初始化会生成 typings.json 的配置文件
3. 最后输入：typings install dt~node --global--save 这就是 node.js 的智能提示。
