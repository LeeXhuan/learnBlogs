# Git 中 SSH key 生成步骤
**由于本地`Git`仓库和`GitHub`仓库之间的传输是通过`SSH`加密的，所以必须要让`github`仓库认证你`SSH key`，在此之前，必须要生成`SSH key`**
* 第1步：创建`SSH Key`。

	在`windows`下查看`c盘->用户->自己的用户名->.ssh`下是否有`id_rsa`、`id_rsa.pub`文件，如果没有需要手动生成。打开`git bash`，在控制台中输入以下命令。
	```ruby
	$ ssh-keygen -t rsa -C "youremail@example.com"
	```
	密钥类型可以用 `-t` 选项指定。如果没有指定则默认生成用于`SSH-2`的`RSA`密钥。这里使用的是`rsa`。
	
	同时在密钥中有一个注释字段，用`-C`来指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。所以在这里输入自己的邮箱或者其他都行。

	输入完毕后程序同时要求输入一个密语字符串(`passphrase`)，空表示没有密语。接着会让输入2次口令(`password`)，空表示没有口令。3次回车即可完成当前步骤，此时`c盘>用户>自己的用户名>.ssh`目录下已经生成好了。

* 第2步：登录`github`。

 	打开`setting`->`SSH keys`，点击右上角 `New SSH key`，把生成好的公钥`id_rsa.pub`放进 `key`输入框中，再为当前的`key`起一个`title`来区分每个`key`。
	
# 避免每次都需要输入用户名和密码
```ruby
$ git config --global credential.helper store
```
