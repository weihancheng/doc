### laravel安装常见错误

- 问题1：[Symfony Component Process Exception RuntimeException] The Process class relies on proc_open, which

> 这里是php禁止了proc_open这个函数

解决办法：
linux环境下：使用find / -name php.ini 找到文件，然后搜索disdisable_functions，找到类似如下内容,找到proc_open并删除即可。

`disable_functions = passthru,exec,system,chroot,scandir,chgrp,chown,shell_exec,proc_get_status,popen,ini_alter,ini_restore,dl,openlog,syslog,readlink,symlink,popepassthru,stream_socket_server`
