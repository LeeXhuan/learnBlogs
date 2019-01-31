## 环境的配置
1.  [下载Ruby](http://rubyinstaller.org/downloads)

	安装在c盘  勾选

	自动配置环境变量

	打开
	
## 开始安装sass
2. 打开电脑的`Ruby`命令终端，输入下面的命令：

	```c
	gem install sass
	```
3. 文件下载安装
	```c
	 gem install  http://rubygems.org/gems/sass
	```
	Gem instal  本地下载的sass路径

4. 淘宝 `RubyGems `镜像安装 `Sass`

	```c
	gem sources --remove https://rubygems.org/
	gem sources -a http://ruby.taobao.org/ 
	注意是http不是https
	gem sources -l
	```

5. 查询 `sass`的版本

	```c
	sass -v
	```
6. 更新sass

	```c
	gem update sass
	```
	
7. 卸载

	```c
	gem uninstall sass
	```

8. 语法

	老语法：`.sass`为扩展名      无大括号 无分号 
  
	新语法： `.scss`为扩展名 

9. 编译
	* 命令编译
	* GUI工具编译
	* 自动化编译

10. 命令编译
	* 单文件
	sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
	
	`Eg:sass E:\微信混合开发\sass\common.scss:E:\微信混合开发\css\css.css`
	
	* 多文件
	
	`sass sass/:css/`
	
	### 每次都需要重新
	- watct监视
sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
`Eg:sass --watch E:\微信混合开发\sass\common.scss:E:\微信混合开发\css\css.css`

## GUI

 [Koala](http://www.w3cplus.com/preprocessor/sass-gui-tool-koala.html) 

[CodeKit](http://www.w3cplus.com/preprocessor/sass-gui-tool-codekit.html)

##  Grunt 和 Gulp 自动化

在Sass的编译的过程中 是不支持“GBK”编码的。所以在创建 Sass 文件时，就需要将文件编码设置为“utf-8”。

- 输出方式：
  - 嵌套输出方式 `nested   --style nested`
  - 展开输出方式 `expanded   --style expanded`
  - 紧凑输出方式  `compact  --style compact`
  - 压缩输出方式 `compressed --style compressed`

- 语法:
 `SASS`允许使用变量，所有变量以`$`开头。
 
	```scss
	$blue : #1875e7;
	```
  
	`$`声明变量 `blue `变量名称 `#1875e7` 变量值

### 作用域的概念

```scss
$color: orange !default; //定义全局变量
.block {
	color: $color;
}
.em{
	$color: red;  //定义局部变量
	a{
		color: $color; //调用局部变量
	}
}
span{
	color:	$color;
}
```

### 选择器嵌套

1. 选择器嵌套
2. 属性嵌套
3. 伪类嵌套(和属性选择器很相识)

### 宏的概念(函数)

	带参数 不带参数 带默认值 多个参数

```scss
@mixin border-radius-5px{
	border-radius: 5px;
}
.button{
	@include  border-radius-5px;
}

@mixin  border-radius($radius){
	border-radius:$radius ;
}
.box{
	@include  border-radius(10px)
}

@mixin border-setborder($radius:5px){
	border-radius: $radius;
}
```

	声明关键字 `mixin`

```scss
@mixin border-radius{
	border-radius:3px
}
Button{
	@include border-radius;
}
```
	继承 关键字`extend`
```scss
.circle{
	border-radius:50%
}
```
	占位符 `%`(零时变量)  不被继承不编译

```scss
%center:{
	text-aline:center;
}
```
如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块。

如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用` Sass` 的继承。

占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。

如果变量需要镶嵌在字符串之中，就必须需要写在`#{}`之中。
```scss
　　$side : left;
		.rounded {
　　　　border-#{$side}-radius: 5px;
　　}
```
### 计算功能
SASS允许在代码中使用算式：

```scss
body {
	margin: (14px/2);
	top: 50px + 100px;
	right: $var * 10%;
}
```
