# .NET 转前端基础知识笔记

以2.4.39 版本为例

## 1.下载
32位： https://home.apache.org/~steffenal/VC15/binaries/httpd-2.4.39-win32-VC15.zip

64位： https://home.apache.org/~steffenal/VC15/binaries/httpd-2.4.39-win64-VC15.zip


## 2.解压
解压文件并且记住你的解压位置。我这里解压到了D盘。

## 3.修改配置文件

D:\Apache24\conf\httpd.conf是我们要修改的配置文件。

1. Define SRVROOT "d:/Apache24"。修改为你自己的解压的路径。
2. DocumentRoot "D:\GitHub\Web-"  
   <Directory "D:\GitHub\Web-">
   去设置你的文件根目录。

## 4.以管理员身份运行cmd
去到D:\Apache24\bin目录下输入 httpd.exe -k install把Apache设置为开机自动启动。
在浏览器中输入自己的ip地址查看有无错误。