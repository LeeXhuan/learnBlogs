# 文档目录
* [Cmder安装笔记](https://github.com/LeeXhuan/LearnMarkDown/blob/master/cmder.md) 
* 1. [ Git 中 SSH key 生成步骤](https://github.com/LeeXhuan/LearnMarkDown/blob/master/git-sshkey.md)
* 2. [HTML和CSS面试题](https://github.com/LeeXhuan/LearnMarkDown/blob/master/html-css.md)
* 3. [JavaScript基础面试题](https://github.com/LeeXhuan/LearnMarkDown/blob/master/javascript-basics.md)
* 4. [jquery优缺点](https://github.com/LeeXhuan/LearnMarkDown/blob/master/jquery-merit-and-demerit.md)
* 5. [nvm相关文档](https://github.com/LeeXhuan/LearnMarkDown/blob/master/nvm.md )
* 6. [sass的安装和使用](https://github.com/LeeXhuan/LearnMarkDown/blob/master/sass-installation-and-use.md)
* 7. [sublime编译器emmet支持jsx补全设置](https://github.com/LeeXhuan/LearnMarkDown/blob/master/sublime-emmet-jsx-set.md)

LearnMarkDown 
==================
>最高阶标题使用：`======`

LearnMarkDown
------------------
>第二阶标题使用：`---------`

H1-H6标题
------------------
># H1
> > H1用：`# name`(#标题名称) 
>## H2
> > H2用：`## name`  
>### H3
> > H3用：`### name`  
>#### H4
> > H4用：`#### name`  
>##### H5
> > H5用：`##### name`  
>###### H6
> > H6用：`###### name`

## 关于列表

>1. 这是第一行列表项。

>4. 这是第二行列表项。

> 使用`*  `、`+  `、 `-  `完成对于列表的标识，或者用阿拉伯数字+英文句点（`1.  `）。

> 列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。
要让列表看起来更漂亮，你可以把内容用固定的缩进整理好

> 给出一些例子代码：
*   Red
*   Green
*   Blue
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

code展示（面向对象编程）：
```javascript
    const count = {
        init: function() {
            count.bind();
        },
        bind: function() {
            var year = 1990, count =0;
            //year是你输入的值 count 用来统计输出的次数
            for(var i = 0 ;count < 5; i++) {
                //判断输出次数是不是小于五次
                //判断润年
                if ((year + i) % 4 == 0) && ((year + i) % 100 != 0 || (year + i) % 400 == 0) {
                    console.log(year + i);
                    //是润年输出次数加一
                    count++;
                }
            }
        }
    }
    count.init();
```
