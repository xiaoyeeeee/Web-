小米首页案例
===

 `<head>`部分有几点需要注意：
## 1.引入CSS初始化文件
```html
 <link rel="stylesheet" href="css/normalize.css">
```
这里我用的是normalize.css这个文件，这个是专业的去除标签元素默认边距等东西的css库。网上一搜下载下来直接用就可以。

## 2.引入icon
```html
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```
1.icon的来源：https://www.mi.com/favicon.ico 几乎所有的网站后面加上"/favicon.ico",都可以获取到它的小图标。  
2.我们把我们的ico也要放到与index.html同级的也就是跟目录下。然后引用就行了。

## 3.网站（搜索）优化三标签
```html
    <!-- 不超过28个中文 -->
    <title>小米商城 - 小米CC9、小米MIX 3、Redmi K20，小米电视官方网站</title>
    <!-- 不超过120个汉字 -->
    <meta name="description" content="小米商城直营小米公司旗下所有产品，包括小米手机系列小米CC9、小米9、小米MIX 3，Redmi 红米系列Redmi K20 Pro、Redmi Note 7，小米电视、笔记本、米家智能家居等，同时提供小米客户服务及售后支持。" />
    <!-- 6-8个关键词 -->
    <meta name="keywords" content="小米,小米9,小米cc9,Redmi K20,Redmi Note 7,小米MIX3,小米商城" />
```
对于搜索引擎有帮助的三个要素：title、description、keywords

长度要求在上面的代码里。另外keywords顺序上来说，把重要的关键词放前面。