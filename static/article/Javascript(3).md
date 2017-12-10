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

* alert():只接受一个字符串展现给用户
* confirm():只接受一个字符串用于展现给用户，返回一个布尔值
* prompt():接受两个字符串，一个是展示的字符串，二是输入文本域的默认值
* print():打印对话框

### location对象

location是一个特别的对象，它既是window对象的属性，也是document对象的属性

#### 属性

* hash：hash值
* host：服务器名和端口号
* hostname：服务器名
* href：完整URL
* pathname：目录或文件名
* port：端口号
* protocol：协议
* search：查询字符串

#### 位置操作

* assign()方法：改变浏览器位置，同样直接改变属性值亦可
* replace()方法：不会在浏览器历史记录中生成新的记录，因此无法后退返回
* reload()方法：重新加载当前显示的页面，如果不传递任何参数，并且页面没有改变，那么将从缓存中重新加载。如果传递一个true。那么，会从服务器中加载。

### navigator

用于检测显示网页的浏览器类型

在ie中检测插件使用new ActiveXObject('name')

其他浏览器可以使用navigator.plugins(返回一个数组，数组的对象有name等属性)

### history

这个对象保存着用户上网的历史记录。

方法：

* history.go(前进或退后页数的数字)
* history.back():退后一页
* history.forward():前进一页

## DOM1

### 节点层次

可以将任何HTML,XML文档描绘成一个由多层节点构成的结构。

文档节点是每个文档的根节点，文档节点只有一个根节点,即`<html>`元素，也称为文档元素，任何文档只能有一个文档元素（包括XML）

JS中所有节点类型都继承自Node类型，因此所有节点都共享着相同的基本属性和方法。

#### 类型

```javascript
Node.ELEMENT_NODE(1)
Node.ATTRIBUTE_NODE(2)
Node.TEXT_NODE(3)
Node.CDATA_SECTION_NODE(4)
Node.ENTITY_REFERENCE_NODE(5)
Node.ENTITY_NODE(6)
Node.PROCESSING_INSTRUCTION_NODE(7)
Node.COMMENT_NODE(8)
Node.DOCUMENT_NODE(9)
Node.DOCUMENT_TYPE_NODE(10)
Node.DOCUMENT_FRAGMENT_NODE(11)
Node.NOTATION_NODE(12)
```

可以使用nodeType属性获取类型，最好和数字比较，因为IE不兼容（没有公开node类型的构造函数）

#### nodeName和nodeValue

对于元素节点，nodeName为标签名，nodeValue是null

#### 节点关系

childNodes属性：保存着一个nodeList对象，是一个类数组对象，用于保存一组有序的节点。可以使用[]或item()访问

parentNode属性：指向文档树的父节点

previousSibling属性：前一个同辈节点，第一个节点为null

nextSibling属性：下一个同辈节点，最后一个为null

firstChild属性：指向第一个子节点，相当于childNodes[0]

lastChild属性：指向最后一个子节点，相当于childNodes[childNodes.length - 1]

hasChildNodeS()方法：在节点包含一个或着多个子节点的情况下返回true。

ownerDocument属性：指向文档节点。

#### 操作节点

* appendChild()：用于向childNodes结尾添加一个节点
* insertBefore()：接受两个参数，一是插入的节点，二是参照节点
* replaceChild()：接受两个参数，一个是插入的节点，二是被替换节点。返回替换节点
* removeChild()：接受一个参数，即被删除节点
  * 注意，一个文档不能有多个相同的节点，appendChild已存在节点，会变成移动节点
* cloneNode()：用于复制节点，如果参数是true会复制子节点
* normalize()：用于处理文本节点（不含文本和相邻文本节点）

#### Document类型

JS通过Document类型表示文档，document对象是HTMLDocument得一个实例，表示整个HTML页面。而且document对象是window对象得一个属性，因此可以将其作为全局对象来访问

* nodeType:9
* nodeName:#document
* nodeValue:null
* parentNode:null
* ownerDocument:null

子节点可能是一个DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction或Comment

##### 文档子节点

document属性

* documentElment属性：代表文档元素
* body属性：指向body元素
* doctype属性：代表DocumentType类型，即`<!DOCTYPE>`（注意兼容性）

##### 文档信息

document属性

* title属性：代表title元素之间的文本
* URL属性：包含页面完整的URL链接
* domain属性：包含页面的域名
* referrer属性：保存着链接到当前页面的那个页面的URL，没有的话为null

以上属性只有domain可以重置，但是不能随意设置，如p2p.wrox.com只能重置为wrow.com，而且不能逆向。当domain相同，框架间就可以通信

##### 查找元素

* getElementById()方法：接受一个参数即要取得元素的id（区分大小写），但是ie8及以下不区分大小写。而且ie7及以下有一个怪癖，即name特性与给定id匹配的表单元素，也会被返回。

* getElementsByTagName()方法：接受一个参数，即要取得元素的标签名，返回的是包含0个或多个元素的NodeList。要想取得文档所有元素，可以传入"*"。
  * item()方法可以访问nodelist中的项。当然，使用[]也可以访问
  * namedItem()方法可以通过name特性取得nodeList集合中的项同样可以使用[]传入字符串访问name特性项
* getElementsByName()方法：可以获取所有name特性的元素。

##### 特殊集合

* document.anchors:包含文档中所有带name特性的a元素
* document.forms:包含文档中所有的form元素
* document.images:包含文档中所有的img元素
* document.link:包含文档中所有带href特性的a元素

###### 文档写入

* write():接受一个字符串参数，即要写入到输出流中的文本。
* writeln():接受一个字符串参数，即将要写入到输出流中的文本，在字符串末尾添加一个换行符(\n)。
* open()和close()可以用于打开和关闭网页的输出流

#### Element类型

* nodeType:1
* nodeName:标签名
* nodeValue:null
* parentNode:Document或者Element
* 子节点可能是Element,Text,Comment,ProcessingInstruction,CDATASection或EntityReference

也可以使用tagName属性获取标签名，返回的可能是一个大写的标签名字符串

##### HTML元素

所有HTML元素都由HTMLElement类型表示，不是直接通过这个类型也是通过这个类型更具体的子类型来表示。HTMLElement直接继承自Element并添加了一些属性，每个HTML元素都包含以下特性：

* id
* title
* lang
* dir
* className

##### 操作特性

* getAttribute():接受一个字符串参数即特性名，返回特性值（包括自定义特性），形式为字符串
* setAttribute():接受两个参数，一个是特性名，二是特性值（IE7兼容性有问题，尽量使用属性来设置特性）
* removeAttribute():接受一个参数即要删除的特性（IE8之前不支持）

##### attributes特性

## ^_^未完待续，敬请期待！