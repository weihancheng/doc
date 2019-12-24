### php源码安装

- 第一步 下载
`https://www.php.net/downloads`
> 下载相应的php版本(下载tar.bz2)

- 第二步
> 将源码包传到linux服务器或者复制到虚拟机的映射目录中(本人一般使用xftp直接发到服务器或者通过phpstorm同步文件)

- 第三步
> 登录服务器(本人一般采用phpstrom或者xshell, 如果是使用虚拟机的可以自己下载git使用git bush进行操作)

- 第四步 解压
`
// 1. 去到源码包的位置

// 2. 解压
tar -xjvf php-7.4.0.tar.bz2

// 3. 进入php目录
cd php-7.4.0
`

在php文件目录下有一个configure文件：这个文件是用于源码安装
`
    ./configure --help
`

- 第五步
> 指定安装路径并安装（也可以不指定，不指定系统会有一个默认的安装路径）看到Thank you for using PHP.表示安装完毕
`
./configure --prefix=/home/work/study/soft/php
`

- 第六步
> 看到Build complete.表示make完成，可以使用make test进行测试
`make`

- 第七步
`make install`

- 第八步 简化php执行命令
vi ~/.bash_profile
新增代码：/home/work/study/soft/php/bin/php
source ~/.bash_profile

- 第九步 将php.ini 放到指定目录下面
`
    // 使用以下命令可以知道php.ini应该存放的路径， php7.4的存放路径为php/lib， 有些版本在是php/etc
    php -i | grep php.ini

    // 去到解压包的位置，并使用以下代码
    cp php.ini-development /home/work/study/soft/php/bin/

    cd /home/work/study/soft/php/bin/

    // 重命名
    mv php.ini-development php.ini

    // 如果看到php.ini表示ok了
    ls
`

- make时出现的错误（基本百度一下都能搞定）
`
// error: Package requirements (sqlite3 > 3.7.4) were not met
解决：yum install libsqlite3x-devel -y

// error: Package requirements (oniguruma) were not met
解决：yum install oniguruma-devel -y
`



