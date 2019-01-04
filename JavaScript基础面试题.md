# 二、JavaScript基础
### 1、`javascript`的`typeof`返回哪些数据类型
* `object` `number` `function` `boolean` `underfind` `string`
	```javascript
	typeof null;//object
	typeof isNaN;//function
	typeof isNaN(123);//boolean
	typeof [];//object 
	Array.isArray(); //es5
	toString.call([]);//”[object Array]”
	var arr=[];
	arr.constructor;//Array
	```
### 2、例举3种强制类型转换和2种隐式类型转换?
* 强制（`parseInt`,`parseFloat`,`Number()`）
* 隐式（`==`）
	* `1==”1”//true`
	* `null==undefined//true`
### 3、`split()` `join()` 的区别
* split是切割成数组的形式，
* join是将数组转换成字符串
### 4、数组方法`pop()` `push()` `unshift()` `shift()`
* `push()`尾部添加 
* `pop()`尾部删除
* `unshift()`头部添加
* `shift()`头部删除
### 5、事件绑定和普通事件有什么区别
传统事件绑定和符合W3C标准的事件绑定有什么区别？
```html
div1.onclick=function(){};
<button  onmouseover=””></button>
```
1. 如果说给同一个元素绑定了两次或者多次相同类型的事件，那么后面的绑定会覆盖前面的绑定
2. 不支持DOM事件流 事件捕获阶段目标元素阶段=>事件冒泡阶段

*  `addEventListener`
1. 	如果说给同一个元素绑定了两次或者多次相同类型的事件，所以的绑定将会依次触发
2. 	支持DOM事件流的
3. 	进行事件绑定传参不需要`on`前端
	```javascript
	addEventListener(“click”,function(){},true);
	//此时的事件就是在事件冒泡阶段执行
	```
* ie9开始，`ie11 edge：addEventListener`
* ie9以前：`attachEvent('onclick')/detachEvent('onclick')`
1.	进行事件类型传参需要带上`on`前缀
2.	这种方式只支持事件冒泡，不支持事件捕获
事件绑定是指把事件注册到具体的元素之上，普通事件指的是可以用来注册的事件
* 事件委托是什么
符合W3C标准的事件绑定addEventLisntener /attachEvent
让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！

* IE和DOM事件流的区别
	1. 执行顺序不一样
	2. 参数不一样
	3. 事件加不加`on`
	4. `this`指向问题

### 6、IE和标准下有哪些兼容性的写法
```js
var ev = ev || window.event;
document.documentElement.clientWidth || document.body.clientWidth;
var target = ev.srcElement || ev.target;
```
### 7、call和apply的区别
call和apply相同点：
都是为了用一个本不属于一个对象的方法，让这个对象去执行
```js
toString.call([],1,2,3)
toString.apply([],[1,2,3])
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)
```
### 8、、`JavaScript` `this`指针、闭包、作用域
* `this`：指向调用上下文
* 闭包：内层作用域可以访问外层作用域的变量
	* 闭包就是能够读取其他函数内部变量的函数。
	* 闭包的缺点：滥用闭包函数会造成内存泄露，因为闭包中引用到的包裹函数中定义的变量都永远不会被释放，所以我们应该在必要的时候，及时释放这个闭包函数

* 作用域：定义一个函数就开辟了一个局部作用域，整个js执行环境有一个全局作用域

### 9、如何阻止事件冒泡和默认事件
```js
e.stopPropagation();//标准浏览器
event.canceBubble=true;//ie9之前
```
阻止默认事件：
为了不让a点击之后跳转，我们就要给他的点击事件进行阻止
```js
return false; 
e.preventDefault();
```
### 10、添加、删除、替换、插入到某个接点的方法
```js
obj.appendChild()//向节点添加最后一个子节点 
obj.insertBefore() //指定的已有子节点之前插入新的子节点；
//原生的js中不提供insertAfter();
obj.replaceChild()//替换
obj.removeChild()//删除
```
### 11、javascript的本地对象，内置对象和宿主对象
* 本地对象为`array` `obj` `regexp`等可以`new`实例化
* 内置对象为`Global` `Math` 等不可以实例化的
* 宿主为浏览器自带的`document`,`window` 等
### 12、`document load `和`document ready`的区别
* `Document.onload` 是在结构和样式加载完才执行js
* `window.onload`：不仅仅要在结构和样式加载完，还要执行完所有的样式、图片这些资源文件，全部加载完才会触发`window.onload`事件
* `Document.ready`原生种没有这个方法，`jquery`中有 `$().ready(function)`
### 13、”==”和“===”的不同
* 前者会自动转换类型、后者不会
	```js
	1==”1”
	null==undefined
	```
	`===`先判断左右两边的数据类型，如果数据类型不一致，直接返回`false`之后才会进行两边值的判断
### 14、javascript的同源策略
* 一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合
	* `http`,`ftp`:协议
	* 主机名；`localhost`
	* 端口名：`80`(http协议的默认端口)
	* `https`:默认端口是`8083`
同源策略带来的麻烦：`ajax`在不同域名下的请求无法实现，
如果说想要请求其他来源的`js`文件，或者`json`数据，那么可以通过`jsonp`来解决
### 15、编写一个数组去重的方法
```js
var arr=[1,1,3,4,2,4,7];=>[1,3,4,2,7];
```
一个比较简单的实现就是：
1.	先创建一个空数组，用来保存最终的结果
2.	循环原数组中的每个元素
3.	再对每个元素进行二次循环，判断是否有与之相同的元素，如果没有，将把这个元素放到新数组中
4.	返回这个新数组
	```js
	function oSort(arr) {	
		var result ={};
		var newArr=[];
		arr.forEach(item=>{
			if(!result[item]) {
			newArr.push(item)
			result[arr]=1
			}
		});
		return newArr
	}
	```
	
### 16、JavaScript是一门什么样的语言，它有哪些特点？

* 运行环境：浏览器中的JS引擎（`v8`）
* 语言特性：面向对象，动态语言：
	```js
	//动态语言的特性
	var num=10;//num是一个数字类型
	num = "jim";//此时num又变成一个字符串类型
	```
* 我们把一个变量用来保存不同数据类型的语言称之为一个动态语言
* 静态语言：`c# java c c++`
* 静态语言在声明一个变量就已经确定了这个变量的数据类型，
* 而且在任何时候都不可以改变他的数据类型

### 17、JavaScript的数据类型都有什么？
* 基本数据类型：**String**,**Boolean**,**number**,**undefined**,**object**,**Null**
* 引用数据类型：**Object(Array,Date,RegExp,Function)**
* 那么问题来了，如何判断某变量是否为数组数据类型？
	- 方法一.	判断其是否具有“数组性质”，如`slice()`方法。可自己给该变量定义`slice`方法，故有时会失效
	- 方法二.	`obj instanceof Array `在某些IE版本中不正确
	- 方法三.	方法一二皆有漏洞，在`ECMA Script5`中定义了新方法`Array.isArray()`, 保证其兼容性，最好的方法如下：
		```js
		toString.call(18);//”[object Number]”
		toString.call(“”);//”[object String]”
		```
		解析这种简单的数据类型直接通过`typeof`就可以直接判断
		```js
		//toString.call常用于判断数组、正则这些复杂类型
		toString.call(/[0-9]{10}/)//”[object RegExp]”
		if(typeof Array.isArray==="undefined"){
		  Array.isArray = function(arg){
				return Object.prototype.toString.call(arg)==="[object Array]"
			};
		}
		```
### 18、已知ID的`Input`输入框，希望获取这个输入框的输入值，怎么做？(不使用第三方框架)
```js
	document.getElementById(“ID”).value
```
### 19、希望获取到页面中所有的`checkbox`怎么做？(不使用第三方框架)
```js
var domList = document.getElementsByTagName(‘input’)
var checkBoxList = [];//返回的所有的checkbox
var len = domList.length;//缓存到局部变量
while (len--) {//使用while的效率会比for循环更高
  if (domList[len].type == ‘checkbox’) {
	  checkBoxList.push(domList[len]);
  }
}
```
### 20、设置一个已知ID的DIV的html内容为xxxx，字体颜色设置为黑色(不使用第三方框架)
```js
var dom = document.getElementById(“ID”);
dom.innerHTML = “xxxx”
dom.style.color = “#000”
```
### 21、当一个DOM节点被点击时候，我们希望能够执行一个函数，应该怎么做？
* 直接在DOM里绑定事件：`<div></div>`
* 在JS里通过`onclick`绑定：`xxx.onclick = test`
* 通过事件添加进行绑定：`addEventListener(xxx, ‘click’, test)`
* 那么问题来了，`Javascript`的事件流模型都有什么？
	- “事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
	- “事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
	- “DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡
### 22、看下列代码输出为何？解释原因。
```js
var a;
alert(typeof a); // “undefined”
//alert(b); // 报错
b=10;
alert(typeof b);//”number”
```
解释：`undefined`是一个只有一个值的数据类型，这个值就是“`undefined`”，在使用var声明变量但并未对其赋值进行初始化时，这个变量的值就是`undefined`。而b由于未声明将报错。注意未申明的变量和声明了未赋值的是不一样的。
`undefined`会在以下三种情况下产生：
1.	一个变量定义了却没有被赋值
2.	想要获取一个对象上不存在的属性或者方法:
3.	一个数组中没有被赋值的元素
注意区分`undefined`跟`not defnied`(语法错误)是不一样的
### 23、看下列代码,输出什么？解释原因。
```js
var a = null;
alert(typeof a); //object
```
解释：`null`是一个只有一个值的数据类型，这个值就是`null`。表示一个空指针对象，所以用`typeof`检测会返回”`object`”。
### 24、看下列代码,输出什么？解释原因。
```js
var undefined;//此时undefined这个变量的值是undefined
undefined == null; // true
1 == true;   // true
```
此时会把布尔类型的值转换为数字类型 `true=1 false=0`
```js
2 == true;   // false
0 == false;  // true
0 == '';     // true
NaN == NaN;  // false
[] == false; // true
[] == ![];   // true
```
`undefined`与`null`相等，但不恒等（`===`）
一个是`number`一个是`string`时，会尝试将`string`转换为`number`
尝试将`boolean`转换为`number`，`0`或`1`
尝试将`Object`转换成`number`或`string`，取决于另外一个对比量的类型
所以，对于`0`、`空字符串`的判断，建议使用 “`===`” 。“`===`”会先判断两边的值类型，类型不匹配时为`false`。
那么问题来了，看下面的代码，输出什么，foo的值为什么？
```js
var foo = "11"+2-"1";
console.log(foo);//111
console.log(typeof foo);
```
执行完后`foo`的值为`111`，`foo`的类型为`number`。
### 25、看代码给答案。
```js
var a = new Object();
a.value = 1;
b = a; //{value:1}
b.value = 2;
alert(a.value);//2
```
### 26、已知数组`var stringArray = [“This”, “is”, “Baidu”, “Campus”]`，`Alert`出”`This is Baidu Campus`”。
```js
alert(stringArray.join(""))
```
已知有字符串`foo=”get-element-by-id”`,写一个`function`将其转化成驼峰表示法”`getElementById`”。
```js
function combo(msg) {
	var arr = msg.split("-");	//[get,element,by,id]
	for (var i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length-1);	//Element
	}
	msg = arr.join(""); //msg=” getElementById”
	return msg;
}
(考察基础API)
```
### 27、`var numberArray = [3,6,2,4,1,5]`; （考察基础API）
1) 实现对该数组的倒排，输出[5,1,4,2,6,3]
```js
numberArray.reverse();//[5, 1, 4, 2, 6, 3]
```
2) 实现对该数组的降序排列，输出[6,5,4,3,2,1]
```js
numberArray.sort(function (x,y) {
	return y-x;
});//[6, 5, 4, 3, 2, 1]
```
### 28、输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
```js
var d = new Date();
// 获取年，getFullYear()返回4位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0是1月，11是12月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
```
### 29、将字符串”`<tr><td>{$id}</td><td>{$name}</td></tr>`”中的`{$id}`替换成`10`，`{$name}`替换成`Tony` （使用正则表达式）
```js
'<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>'.replace(/{\$id}/g, ’10′).replace(/{\$name}/g, ‘Tony’);
```
### 30、为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数`escapeHtml`，将`<, >, &, “`进行转义
```js
function escapeHtml(str) {
//[<>”&]:中括号中字符只要其中的一个出现就代表满足条件
//给replace第二个参数传递一个回调函数，回调函数中参数就是匹配结果，如果匹配不到就是null
return str.replace(/[<>”&]/g, function(match) {
    switch (match) {
     case '<':
    	return '<';
     case '>':
        return '>';
     case '&':
       	return '&amp;';
     case '\':
        return '&quot;';
    }
  });
}
```
### 31、`foo = foo||bar` ，这行代码是什么意思？为什么要这样写？
这种写法称之为短路表达式
答案：`if(!foo) foo = bar; //如果foo存在，值不变，否则把bar的值赋给foo。`
短路表达式：作为”`&&`”和”`||`”操作符的操作数表达式，这些表达式在进行求值时，只要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。
注意`if`条件的真假判定，记住以下是`false`的情况：
`空字符串`、`false`、`undefined`、`null`、`0`
### 32、看下列代码，将会输出什么?(变量声明提升)
```js
var foo = 1;
function(){
    console.log(foo);
    var foo = 2;
    console.log(foo);
}
```
答案：输出`undefined `和 `2`。上面代码相当于：
```js
var foo = 1;
function(){
    var foo;
    console.log(foo); //undefined
    foo = 2;
    console.log(foo); // 2;   
}
```
函数声明与变量声明会被`JavaScript`引擎隐式地提升到当前作用域的顶部，但是只提升名称不会提升赋值部分。
### 33、用`js`实现随机选取`10–100`之间的`10`个数字，存入一个数组，并排序。
```js
var iArray = []; 
function getRandom (istart, iend) {
        var iChoice = iend - istart  + 1;
        return Math.floor( Math.random()  *  iChoice + istart);
}
//Math.random()就是获取0-1之间的随机数（永远获取不到1）
for (var i=0; i < 10; i++) {
	var result= getRandom(10,100);
    iArray.push(result);
}
iArray.sort();
```
### 34、把两个数组合并，并删除第二个元素。
```js
var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var cArray = array1.concat(bArray);
cArray.splice(1,1);
```
### 35、怎样添加、移除、移动、复制、创建和查找节点（原生JS，实在基础，没细写每一步）
1. 创建新节点
	```js
	createDocumentFragment()    //创建一个DOM片段
	createElement()   			//创建一个具体的元素
	createTextNode()   			//创建一个文本节点
	```
2. 添加、移除、替换、插入
	```js
	appendChild()      //添加
	removeChild()      //移除
	replaceChild()     //替换
	insertBefore()     //插入
	```
3. 查找
	```js
	getElementsByTagName()  //通过标签名称
	getElementsByName()     //通过元素的Name属性的值
	getElementById()        //通过元素Id，唯一性
	```
### 36、有这样一个`URL`：`http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e`，请写一段`JS`程序提取`URL`中的各个`GET`参数(参数名和参数个数不确定)，将其按`key-value`形式返回到一个`json`结构中，如`{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}`。
```js
function serilizeUrl(url) {
	var result = {};
	url = url.split("?")[1];
	var map = url.split("&");
	for(var i = 0, len = map.length; i < len; i++) {
		result[map[i].split("=")[0]] = map[i].split("=")[1];
	}
	return result;
}
```
### 37、正则表达式构造函数`var reg=new RegExp(“xxx”)`与正则表达字面量`var reg=//`有什么不同？匹配邮箱的正则表达式？
答案：当使用`RegExp()`构造函数的时候，不仅需要转义引号（即`\`”表示”），并且还需要双反斜杠（即`\\`表示一个`\`）。使用正则表达字面量的效率更高。 
邮箱的正则匹配：
```js
var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
```
看下面代码，给出输出结果。
```js
for (var i=1; i <= 3; i++) {
  setTimeout(function () {
      console.log(i);    
  },0);  
};
```
答案：4 4 4。
原因：`Javascript`事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出`1 2 3`？
```js
for (var i=1 ;i <= 3 ; i++) {
   setTimeout( (function (a) {  //改成立即执行函数
       console.log(a);    
   }) (i) , 0 );  
};
1 //输出
2
3
```
### 38、写一个`function`，清除字符串前后的空格。（兼容所有浏览器）
使用自带接口`trim()`，考虑兼容性：
```js
if (!String.prototype.trim) { 
	 String.prototype.trim = function() { 
		 return this.replace(/^\s+/, "").replace(/\s+$/,"");
		 //\s匹配空白字符：回车、换行、制表符tab空格
	} 
} 
// test the function 
var str = " \t\n test string ".trim(); 
alert(str == "test string"); // alerts "true"
```
### 39、`Javascript`中`callee`和`caller`的作用？
`arguments.callee`：获得当前函数的引用
`caller`是返回一个对函数的引用，该函数调用了当前函数；
`callee`是返回正在被执行的`function`函数，也就是所指定的`function`对象的正文。
那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？（使用`callee`完成）
```js
var result=[];
function fn(n){  //典型的斐波那契数列
   if(n==1){
        return 1;
   }else if(n==2){
           return 1;
   }else{
        if(result[n]){
                return result[n];
        }else{
                //argument.callee()表示fn()
                result[n]=arguments.callee(n-1)+arguments.callee(n-2);
                return result[n];
        }
   }
}
```
