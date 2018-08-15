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

    const red = {
        init: function() {
            red.bind();
        },
        bind: function() {
            var year = 1990, num =0;
            //year是你输入的值 num 用来统计输出的次数
            for(var i = 0 ;; i++) {
                //判断输出次数是不是小于五次
                if(num < 5) {
                    //判断润年
                    if ((year + i) % 4 == 0) && ((year + i) % 100 != 0 ||(year + i) % 400 == 0) {
                        console.log(year + i);
                        //是润年输出次数加一
                        num = num + 1;
                    }    
                }
            }
        }
    }
    red.init();
