CSS总结
=====

# 行内元素
1. text-align: center; 水平居中。  
2. 单行文本height 和 line-height垂直居中。  
3. 多行文本display:table-cell;vertical-align:middle垂直居中。

# 块级元素
1. margin:0 auto;水平居中。  
2. display:inline;父元素设置text-align:center;转化为行内元素再水平居中。
3. display:table-cell;vertical-align:middle;垂直居中
4. 子绝父相：
要定位的元素设置为绝对定位脱标，父元素设置为相对定位可以把子代元素限制在自己的范围内移动。 
```css
.child {
            width: 100px;
            height: 100px;
            position: absolute;
            left:50%;
            top:50%;
            margin-left:-50px;
            margin-top: -50px;
        }

```
定位在50%然后减去一般的行高（列宽）。
5. transform:translate;
```css
 div {
            position: absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
```
6. 
``` css
div {          
            width: 400px;
            display: flex; 
            align-items: center; 
            justify-content: center; 
            flex-direction: column; 
        }
```
