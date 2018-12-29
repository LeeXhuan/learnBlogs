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
