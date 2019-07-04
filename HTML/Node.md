# .NET 转前端基础知识笔记

## HTML 基础

# 一、头标签

`<meta charset="UTF-8">`编码一般采用 UTF-8,字比较少少，只用中文和少数外语和符号，但是尺寸小，文件小巧的用 gb2312。  
`<meta name="Keywords" content="关键词">`向所引器说明该网页的主要内容，便于搜索到  
`<meta name="Description" content="描述信息">`  
`<meta http-equiv="refresh" content="10;http://www.baidu.com">`10 秒后跳转到百度，类似于火车票买票支付成功后提示 5 秒后返回。

# 二、常用标签及其属性

## 1.文本标签

文本容器。`<p>`里面只能放文字、图片、表单元素。  
`<u>`：下划线标记  
`<s>`或`<del>`：中划线标记（删除线）  
`<i>`或`<em>`：斜体标记

## 2.`<h>`标签

网页标题。

## 3.超链接

在`<body>`标签中设置：link 属性表示默认显示的颜色、alink 属性表示鼠标点击但是还没有松开时的颜色、vlink 属性表示点击完成之后显示的颜色。

### （1）外部链接

`<a href="xxx.html">`点击进入另外一个文件</a>

- href：目标 URL
- title：悬停文本。
- target：告诉浏览器用什么方式来打开目标页面。target 属性有以下几个值：  
   \_self：在同一个网页中显示  
   \_blank：在新的窗口中打开  
   \_parent：在父窗口中显示  
   \_top：在顶级窗口中显示

### （2）锚链接

在本页面或者其他页面的的不同位置进行跳转。很多网页浏览到底部都有返回顶部的功能。  
 `<a href="#top">回到顶部</a>` 转到 id 为 top 的标签中去

### （3）邮件链接

`<a href="mailto:smallq1314@outlook.com">进入邮箱</a>`

## 4.图片

可以写相对路径也可以写绝对路径。

## 5.列表

1.`<ul>`无序列表  
它的内容只能为`<li>`。

```html
<ul style="list-style-type:square">
  <li>项1</li>
  <li>项2</li>
  <li>项3</li>
</ul>
```

type 属性可定义每一项前的标注样式。  
设置 li 的 float 为向左浮动，用于实现导航条的效果。

2.`<ol>`有序列表

```html
<ol type="1">
  <li>项a</li>
  <li>项b</li>
  <li>项c</li>
</ol>
```

3.`<dl>`定义列表  
例如网页底部的导航栏

```html
<dl>
  <dt>关于扇贝</dt>
  <dd>
    <a href="#">关注我们</a>
    <a href="#">加入我们</a>
    <a href="#">关于我们</a>
  </dd>
</dl>
```

## 6.表格

结构

```html
<table>
   <tr>
   <th></<th>
   <td></td>
   </tr>
</table>
```

`<tbody><thead><tfoot>`标签指明表头等表结构

## 7.表单标签

表单标签用`<form>`表示，用于与服务器的交互。
属性：

- name：表单的名称，用于 JS 来操作或控制表单时使用；
- id：表单的名称，用于 JS 来操作或控制表单时使用；
- action：指定表单数据的处理程序；
- method：表单数据的提交方式，一般取值：get(默认)和 post。

`<input>`type 属性:

- text（默认）
- password：密码类型
- radio：单选按钮
- button：普通按钮
- submit：提交按钮
- reset：重置按钮，置为最初的默认值
- image：图片按钮
- file：文件选择框

`<select>`里面的每一项用`<option>`表示。其中 size 属性可设置一次展示多少项，multiple 属性可控制能否多选。

`<textare>`为多行文本输入框。
# 三、HTML5
## 1.语义化标签
``` html
<header>
    <ul></ul>
</header>
<div >
       <article></article>
       <aside></aside>
</div>
<footer>

</footer>
```
## 2.新增表单类型
```html
<form action="">
    <fieldset>
      <legend>新增表单类型</legend>
      <label for="">
        email: <input type="email" required>
      </label>
      <label for="">
        color: <input type="color">
      </label>
      <label for="">
        url: <input type="url">
      </label>
      <label for="">
        number: <input type="number" step="3">
      </label>
      <label for="">
        range: <input type="range" value="100">
      </label>
      <label for="">
        search: <input type="search">
      </label>
      <label for="">
        tel: <input type="tel">
      </label>
      <label for="">
        time: <input type="time">
      </label>
      <label for="">
        date: <input type="date">
      </label>
      <input type="submit">
    </fieldset>
  </form>
  ```
  ## 3.多媒体
  音频 ：
  `<audio src="xxx.mp3" autoplay controls> </audio>`   
  视频 ：
  `<video src="xxx.mp4" controls autoplay></video>`
  
