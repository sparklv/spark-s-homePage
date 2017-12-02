# Javascript(3)

---

## BOM

### window对象

BOM对象的核心是window，他表示浏览器的一个实例。在浏览器中，window对象既是通过JS访问浏览器的一个接口，又是ECMA规定的Global对象，所以在网页中定义的任何一个对象、变量和函数。都以window作为Global对象。

#### 与全局定义变量的不同

与全局变量不同的是，在window对象上定义的变量可以使用delete删除，而全局变量不可以。

另外，尝试访问未定义的变量会抛出错误，而使用window访问，可以知道某个变量是否存在。

#### 窗口及框架

如果页面中包含框架，则每个框架都有自己的window对象，并且保存在frames集合中。在frames集合中，可以通过数值索引（从左至右，从上至下）或者框架名称来访问相应的window对象，每个对象都有一个name属性，其中包含框架的名称

最好使用top.frames[1]或者top.frames['name']来访问框架，而不是window.frames[1]或者window.frames['name']，因为在一个子框架之中想要访问其他框架，使用自身的window对象是访问不到的。

parent对象是访问当前框架的直接上层框架。

self属性始终指向window。

以上所有的属性都可通过window访问，即window.top window.parent。

另外，除非最高层框架是通过window.open()打开的，否则其window对象的name属性不会包含任何值。

#### 窗口大小

由于各个浏览器标准不同，无法获取准确的浏览器大小，但是可以获取视口大小

* innerWidth,innerHeight:可以获取视口大小，但是IE8及以下不支持

* document.documentElement.clientWidth,document.documentElement.clientHeight:也可以获取视口大小，但是混杂模式下不可用

* document.body.clientWidth,document.body.clientHeight:可以获取，但是是包含滚动内容的

#### 导航和打开窗口

window.open()方法既可以导航到一个特定的URL，也可以打开一个新的窗口。这个方法可以接受4个参数:

* 要加载的URL

* 窗口目标：如果传递了这个参数，则会在指定名称窗口或框架中加载第一个参数指定的URL，也可以是`"_self","_parent","_top","_blank"`

* 一个特性字符串：逗号分隔的字符串，属性名值间是=号。例如top,left,width,height,toolbar,scrollbars

* 表示新页面是否取代浏览器历史记录中当前加载页面的布尔值

这个方法可以返回一个指向新窗口的引用。

通过closed属性可以检测窗口是否关闭。

调用close()方法，可以关闭新打开的窗口。

对于top.close()可以使新窗口自己关闭自己，但是对于浏览器主窗口则不会关闭。

通过新窗口的window.opener可以指向调用window.open()的窗口或框架。如果将opener设置为null，即表示在单独的进程中运行新标签页，不需要彼此通信。一旦切断，将没有办法恢复

#### 超时调用和间歇调用

* 超时调用：使用setTimeout(function,time)
  * 注意：经过time毫秒后并不一定会立即执行，因为js是一个单线程解释器，因此一定时间内只能执行一段代码，所以过time毫秒后，会将function添加到任务队列中，如果不是空的，则会在前面的代码执行完后执行
  * 使用clearTimeout()可以取消
* 间歇调用：使用setInterval(function,time)
  * 同超时调用
  * clearInterval

最好使用超时调用模拟间歇调用。因为后一个间歇调用可能会在前一个间歇调用结束前启动，例如

```javascript
function fun(){
    setTimeout(fun,500);
}
setTimeout(fun,500);
```

#### 系统对话框

## ^_^未完待续，敬请期待！