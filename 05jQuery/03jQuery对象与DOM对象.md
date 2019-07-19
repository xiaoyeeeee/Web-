# .NET 转前端基础知识笔记

# jq 对象

获取一个 jq 对象打印出来发现是一个数组，jq 对象就是把 DOM 对象重新包装了一下。

# 二者互相转换

1. jq 对象转 DOM 对象

```javascript
var jqObj = $("li");
var domObj = jqObj[0];
```

2. Dom 转 jq 对象

```javascript
var domObj = document.getElementById("btn");
var jqObj = $(domObj);
```
