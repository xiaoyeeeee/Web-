# .NET 转前端基础知识笔记

## ES6

# 1.变量声明

关键词 let 与 const  
const 用来声明常量，是不可改变的。  
let 主要是解决了两个问题：

1. 变量重复声明的问题。

```javascript
var a = 1;
var a = "123";
```

2. 作用域的问题
   ，原来用 var 只有两种作用域，全局的及函数级的。现在引入了块级的概念也就是花括号内声明的作用域为花括号内。

```javascript
if (true) {
  let a = 1;
}
```

# 2.解构赋值

```javascript
let { a, b, c } = { a: 1, b: 2, c: 3 };
let [a, b, c] = [1, 2, 3];
```

# 3.箭头函数

(参数)=>{}

如果有且仅有 1 个参数，()也可以省  
如果有且仅有 1 条语句-return，{}可以省

```javascript
let fun1 = function(a) {
  return a;
};

let fun1 = a => {
  return a;
};

let fun1 = a => {
  return a;
};

let fun1 = a => a;
```

## 箭头函数中 this 的问题

```javascript
let test = {
  a: 2,
  show: function() {
    console.log(this);
  }
};

test.show();
window.onclick = test.show;
```

看上面的代码在普通的函数中，this 指向调用者，test.show()会打印出 test 这个 Object，而 window.onclick 会打印出 window 这个对象。

```javascript
let test = {
  a: 2,
  show: () => {
    console.log(this);
  }
};

test.show();
window.onclick = test.show;
```

稍作改变发现两个打印出的都是 window。这是因为箭头函数中 this 不是调用的时候确定的。箭头函数根本没有自己的 this，导致内部的 this 就是外层代码块的 this。上面的代码中箭头函数属于 test 这个模块他的外层是 window。

```javascript
let test = {
  a: 2,
  show: function() {
    let b = () => {
      console.log(this);
    };
    b();
  }
};

test.show();
window.onclick = test.show;
```

再做改变，这个时候箭头函数属于 show 这个模块，他的再上一层是 test 这个对象，所以说打印出来应该是 test 这个 Object。
