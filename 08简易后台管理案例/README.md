# .NET 转前端基础知识笔记

## Demo定位
    对所学的koa的知识进行实际运用。巩固一下。
## 功能描述
    1. 登录页面，登陆成功可重定向到相关页面，登陆失败给出相应提示。  
    2. 对数据库进行增删改查。
    一般的后台管理的页面最基本的就是这两个功能
## 目录结构说明
```
|--libs                 ////存储一些公共的东西，如数据库之类的
|--log                  ////日志
|--routers              ////路由每个不同的功能一个文件夹
    |--admin
    |--api
    |--www
|--static               ////静态文件，分为前端页面需要的和上传的
    |--css
    |--fonts
    |--js
    |--upload
|--ejstemplate          //// ejs的模板文件
```


