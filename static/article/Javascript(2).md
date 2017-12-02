# Javascript(2)

---

## 作用域

当代码在一个环境中执行时，会创建变量对象的一个作用域链，可以保证对执行环境有权访问的所有变量和函数的有序访问，在作用域链的前端，始终都是当前执行代码所在环境的变量对象。如果查找不到某个变量，则逐级向上查找，直到找到第一个变量。

js没有块级作用域只有函数级作用域

## 垃圾收集

* 标记清除:对于进入函数作用域的变量会被标记为进入环境，而当执行完函数后，变量会被标记为离开环境，js会自动收集处理这些变量（一定时间间隔处理一次，循环执行）

* 引用计数：指的是跟踪每个值被引用的次数，多一次引用就加一，引用被覆盖就减一，知道减为零，会被收集

由于有标记清除机制，所以函数作用域的变量会自动处理，而全局的变量需要我们手动处理，比如给不用的变量赋值为null。

## 引用类型

### Object

创建Object实例有两种方法

```javascript
var p = new Object(); p.name = "bin";
var p = {name:"bin"};
```

object实例访问属性有两种方法

```javascript
p.name
p["name"]
```

### Array

#### 创建数组

```javascript
var arr = new Array() //参数为数字则是定义长度，其他数据类型，则是定义项
var arr = [1,2,3]
```

#### 检测数组

* 使用instance操作符，但是对于多框架的情况下，有多个Array构造函数，所以不可靠
* Array.isArray(val)，比较适合

#### 转换方法

* toString()会返回数组每一项以字符串形式拼接而成的以逗号分隔的字符串
* valueof()还是会返回数组
* join()方法，可是使数组转化成，以参数分隔的字符串，如果没有参数，或者参数使undefined，那么将用逗号分隔

#### 栈方法

LIFO

* push():用于将任意参数添加到数组末尾，返回新数组长度
* pop():删除数组最后一项，返回删除项

#### 队列方法

FIFO

* unshift():将任意多项添加到数组前面，返回新数组长度
* shift():删除数组第一项，返回删除项

#### 重排序方法

* reverse()用于将数组倒置
* sort()可以使数组升序排列，不过它调用的是数组每项的toString()方法，所以数字比较是编码值，导致不准确，可以传递一个参数
    ```javascript
    funtion(value1,value2){
        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
    对于纯数字比较，可以使用
    function(value1,value2){
        return value1 - value2;
    }
    ```

#### 操作方法

* contact()方法:接受项或者数组，拼接在数组后面，返回新数组。如果不传参数，则返回数组的一个副本
* slice():用于截取数组，接受两个参数，从第一个参数的索引开始，到第二个参数索引结束（不包括），如果不传第二个参数，会一直截取到最后一项
* splice():接受三个及以上参数，第一个为起始索引，第二个为删除数目，第三个及以上为插入项。（改变原数组）

#### 位置方法

* indexOf():接受两参数，第一个是查找项，第二个（可选）是开始查找的位置，没找到则返回-1
* lastIndexOf():反向查找，接受两参数，第一个是查找项，第二个（可选）是开始查找的位置，没找到则返回-1

#### 迭代方法

以下每个方法都接受两个参数，一个是处理函数，另一个（可选，是作用域this）。另外处理函数都可以接受三个参数，第一个是数组项，第二个是该项的索引，第三个是原数组

```javascript
every():对数组每一项运行指定函数，如果每一项都返回true，则返回true

some():对数组每一项运行制定函数，如果有一项返回true，则返回true

filter():对数组每一项运行指定函数，返回该函数返回true的项，组成的数组

forEach():对数组每一项执行指定函数，没有返回值

map():对数组每一项运行制定函数，返回函数返回结果组成的数组
```

#### 归并方法

* reduce和reduceRight，都接受两个参数，一个是每一项上调用的函数，另一个是起始值。函数接受四个参数，依此是
  * 前一个值
  * 当前值
  * 项的索引
  * 数组对象

### Date类型

日期实例使用Date()构造函数来实例化

参数是毫秒数，不传入参数，创建的对象是当前时间的对象。

有两个方法可以转化日期为毫秒数

* Date.parse()接受字符串参数(实际上直接传递给Date构造函数字符串，也会调用Date.parse()方法)
  * 月/日/年，如11/21/2017
  * 英文月名 日,年
  * 英文星期 英文月 日 年 时:分:秒 时区
  * YYYY-MM-DDTHH:mm:ss.sssZ
* Date.UTC():参数为年份、基于0的月份、月中的哪一天、小时数、分钟、秒、毫秒数。只有年月是必须的其余省略，都会被设为0(Date()构造函数也接受UTC格式的参数，它是基于本地时区的)
  * Date.UTC(2017,10,24,17,20,20,100) //2017-11-24 17:20:20

Date.now()方法返回的是调用这个方法的日期和时间的毫秒数

Date的实例同样有toString()、toLocaleString()、valueOf()方法，可以直接比较两个时间的大小，因为valueOf()会把实例转化为毫秒数

常用实例方法

```js
getTime():获取毫秒数

getFullYear():获取四位数年份

getMonth():获取基于0的月份

getDate():返回日期月份中的天数

getDay():返回日期中的星期几

getHours():基于0的小时数

getMinutes():基于0的分钟数

getSeconds():返回日期中的秒数

getMilliseconds():返回日期中的毫秒数
```

### RegExp类型

#### 创建

* 字面量：var expression = /pattern/flags
  * pattern为任意正则表达式
  * flags为标志，包括：
    * g(global)：全局模式
    * i(case-insensitive)：不区分大小写
    * m(multiline)：多行模式
* 构造函数：var expression = new RegExp("pattern,"flags")

注意：元字符需要转义：(),[],{},\,^,$,|,?,*,+,.（构造函数模式则需要双重转义）

#### 实例属性

```javascript
global：是否设置了g标志

ignoreCasw：是否设置了i标志

lastIndex：表示开始搜索下一个匹配项的字符位置

multiline：是否设置了m标志

source：正则表达式的字符串表示（按字面量形式）
```

#### 实例方法

* exec()：接受一个参数，即应用模式的字符串。返回一个数组，数组第一项是与整个模式匹配的字符串，其他项则是与模式捕获组匹配的字符串。另外，这个数组有两个属性
  * input：表示应用正则表达式的字符串
  * index：表示匹配项在字符串中的位置
  * 如果模式有g标志，那么再次使用exec方法会从上次匹配位置开始
* test()：接受字符串参数，如果模式与参数匹配，返回true，否则返回false。

### Function类型

ECMAScript函数实际上是对象，因此每个函数都是函数Function类型的实例，都有属性和方法，因此函数名实际上也是一个指向函数对象的指针，不会与函数绑定。（这也就是为什么没有重载）

#### 定义函数的方法

```js
//函数声明
function name(){

}
//函数表达式
var fun = function(){

}
//函数实例
var fun = new Function('param1','param2','statement')
```

函数声明和函数表达式的唯一差别就是，函数声明会提前，使其在任何代码之前可以使用。

#### 函数内部属性

在函数内部有arguments和this两个特殊的对象

arguments对象是是一个类数组，数组项是函数的参数

arguments对象还有一个callee属性，它指向拥有这个arguments对象的函数。

this引用的就是函数执行的环境对象

另外，还有一个函数对象的属性，这个属性保存着调用当前函数的引用，如果是在全局作用域中调用，它的值是null

例如：arguments.callee.caller

#### 函数属性和方法

* 每个函数都有两个属性
  * prototype：原型对象
  * length：希望接受命名参数的个数
* 每个函数都包含两个非继承而来的方法，都是用于在特定作用域调用函数
  * apply()：第一个参数是作用域。第二个参数是参数数组
  * call()： 第一个参数是作用域。后面的参数是一一列举出来的

另外，ECMAScript 5还定义了一个方法：bind()，他接收一个参数，即作用域对象

这个方法将创建一个函数的实例，并不直接执行

### 基本包装类型

这种类型是指在基本类型值调用方法和属性，经历了以下过程：

1. 创建相应构造函数的实例
1. 在实例上调用指定的方法
1. 销毁实例

所以与引用类型相比，基本类型的包装类型，生命周期短。

也可以显式的调用Boolean、Number、String来创建包装类型的对象。但是应该尽量避免使用这种方法。

一是，很难与引用类型值区分。二是，typeof操作符验证基本包装类型实例会返回object。

下面介绍不同的基本包装类型实例包含的方法

#### Boolean

重写了toString方法，返回"true","false".也重写了valueOf方法，返回true,false

#### Number

同样重写了toString和valueOf方法

另外还有

* toFixed()方法：指定小数点后位数，如果少于原数字，则会舍入
* toExponential()方法：返回指数表示法，同样接受一个参数，同样为指定小数位数
* toPrecisions()方法：参数为所有数字位数（不包含指数部分）

#### String

String类型每个实例都有一个length属性，表示字符串中包含多少字符（双字节字符也是一个），该类型提供了很多方法

* 字符方法:两个方法都接受一个参数，即基于0的位置
  * charAt():返回该位置字符
  * charCodeAt():返回该位置字符编码
* 字符串操作方法
  * concat():用于将一个或多个字符串拼接起来，返回新的字符串
  * slice():接受两个参数，一个是字符串的开始位置，二是最后一个字符串最后一个字符的后面位置
  * substr():接受两个参数，一个是字符串的开始位置，二是返回的字符个数
  * substring():接受两个参数，一个是字符串的开始位置，二是最后一个字符串最后一个字符的后面位置

对于负数，slice()方法，会将负数与字符串长度相加，substr()将负的第一个参数加上字符串长度，负的第二个参数转化为0，substring()会把所有负参数转化为0

* 字符串位置方法：都接受两个参数，一是给定字符串，二是开始位置
  * indexof():正向
  * lastIndexOf():反向
* trim():创建字符串副本，删除前置和后缀空格
* 字符串大小写转换
  * toLowerCase():转换为小写
  * toLocaleLowerCase():特定地区的实现
  * toUpperCase():转换为大写
  * toLocaleUpperCase():特定地区的实现
* 字符串匹配模式
  * match():接受一个参数，即正则表达式或者RegExp对象，返回一个数组，第一项是匹配字符串，之后为捕获组匹配的字符串
  * search():接受参数同上，返回第一个匹配项的索引，没有匹配项返回-1
  * replace():接受两个参数，第一个参数同上或者是字符串（不会被转换为正则表达式），第二个参数可以是一个字符串，或者函数
    * 只有一个匹配项的情况下，会传递三个参数，模式的匹配项、模式匹配项的位置、原始字符串
    * 在有多个捕获组的情况下，第二到n个参数为捕获组匹配项，最后两个参数仍为模式匹配项和原始字符串
  * split():可以基于指定的分隔符将一个字符串分割成多个字符串，并将结果放置到一个数组中，第一个参数为字符串或者正则表达式，也可接受第二个参数，指定数组的大小。这样，返回的数组不会超过指定大小
* localeCompare():用于比较两个字符串，返回正数、0、负数
* fromCharCode():接收多个字符编码，返回字符串
  * 例如 String.fromCharCode(101,102,103)

### 单体内置对象

单体内置对象的定义是，由ECMAScript实现提供的，不依赖于宿主环境对象，这些对象在ECMAScript程序执行之前就已经存在了。例如Object、Array、String

ECMA-262还定义了两个单体内置对象Global和Math

* Global对象：在全局作用域定义的函数和属性都是Global对象的属性
  * URI编码方法
    * encodeURI():可以对URI进行编码，不会对本身属于URI的特殊字符进行编码
    * encodeURIComponent():会对它发现的任何非标准字符编码
  *解码方法对应的是:
    * decodeURI()
    * decodeURIComponent()
  * eval():JS解析器，接受一个参数，即要执行的js代码字符串
  * window对象：web浏览器是将全局对象作为window对象的一部分加以实现的，因此在全局作用域中声明的所有变量和函数，就都成了window对象的属性

* Math对象：保存着数学公式和信息
  * Math.PI等
  * min(),max():可以用来挑选出参数中的最大最小值
    * 如果要找出数组中的最大最小值可以使用
      ```javascript
      var max = Math.max.apply(Math,values)
      ```
* 舍入方法
  * Math.ceil():执行向上舍入
  * Math.floor():执行向下舍入
  * Math.round():执行标准舍入
* random():返回大于等于0小于1的一个随机数。
  * 从某个整数范围内随机选择一个值
    ```javascript
    值 = Math.floor(Math.random()*可能值的总数+第一个可能的值)
    ```
* 其他方法：如Math.abs()

## 深入理解对象

### 属性类型

ECMA-262在定义只有内部采用的特性时，描述了属性的各种特征。这些特性时为了实现JS引擎用的。所以JS中不能直接访问。为了表示特性是内部值，将他们放在两对方括号中。

1.数据属性

```javascript
[[Configurable]]：表示能否通过delete删除属性从而重新定义属性，
                  能否修改属性的特性，或者能否把属性修改为访问器属性，直接定义的属性默认为true

[[Enumerable]]：表示能否通过for in循环返回属性，直接定义的属性默认为true

[[Writable]]：表示能否修改属性的值，直接定义的属性默认为true

[[Value]]：包含这个属性的数据值，默认为undefined
```

要修改属性的默认特性，必须使用Object.defineProperty()方法，这个方法接受三个参数，属性所在对象、属性的名字、描述符对象

在调用defineProperty方法直接定义一个属性，在没有指定Configurable、Enumerable、Writable的情况下，都会默认等于false

2.访问器属性

```javascript
[[Configurable]]：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，
                  或者能否把属性修改为数据属性，直接定义的属性默认为true

[[Enumerable]]：表示能否通过for in循环返回属性，直接定义的属性默认为true

[[Get]]：在读取属性时调用，默认值为undefined

[[Set]]：在写入属性时调用，默认值为undefined
```

访问器属性不能直接定义，必须使用Object.defineProperty()来定义

在属性前加上下划线是一种常用标记符号，用于表示只能通过对象方法访问的属性

#### 定义多个属性

使用Object.defineProperties()方法，接受两个参数，第一个是对象，第二个是由属性和属性特性对象组成的对象

#### 读取属性的特性

Object.getOwnPropertyDescriptot()，接受两个参数，一个是对象，另一个是属性名称

### 一、创建对象

1.工厂模式

```javascript
function Sup(a){
    var o = new Object();
    o.name = a;
    o.fun = function(){}
    return o;
}
var x = Sup('spark');
```

问题：没有解决对象识别问题（不知道构造函数是谁）

2.构造函数模式

```javascript
function Sup(a){
    this.name = a;
    this.fun = function(){}
}
var x = new Sup('bin');
x.constructor == Sup //true
x instanceof Sup //true
x instanceof Object //true
```

优点：解决了对象识别问题

问题：所有实例应该公用一个方法，不需要创建不同的方法

3.原型模式

每个函数在创建的时候会有一个prototype属性，这个属性是一个指针，指向原型对象，这个对象会有一个construct属性，值为这个函数。在实例化对象后，对象会共用prototype这个对象里的属性和方法

```javascript
function Sup(){}
Sup.prototype.constructor == Sup; //true
Sup.prototype.name = 'spark';
x = new Sup();
x.name //'spark';
```

或者可以重写对象

```javascript
function Sup(){}
Sup.prototype = {
    name:'spark'
}
```

注意可以追加prototype属性（例如 `Sup.prototype.age = 20`），但是如果重写，prototype会失去constructor属性（可以手动赋值），更重要的是，重写会切断实例和构造函数的关系，实例的constructor属性会一直指向重写前的构造函数。

```js
function Sup(){}
var x = new Sup()
Sup.prototype = {
    name:'spark'
}
x.name //undefined
```

优点：解决了函数重复创建的问题

缺点：无法初始化传递参数，更改共用的引用类型值会影响到所有实例

4.组合创建模式

组合创建模式就是结合构造函数模式和原型模式的优点
例如：

```javascript
function Sup(a){
    this.name = a
}
Sup.prototype.fun = function(){}
var x = new Sup('spark')
```

5.动态原型模式

构造函数写一块，原型写一块，感觉很乱，动态原型模式就是解决这个问题的
例如

```javascript
function Sup(){
    this.name = 'spark';
    Sup.prototype.fun = function(){}
}
var x = new Sup();
```

注意不要重写prototype，因为重写会切断实例和构造函数的关联

6.寄生构造函数模式

类似于工厂模式

```javascript
function Sup(){
    var o = new Object();
    o.name = 'spark';
    return o
}
var x = new Sup()
```

在想为构造函数添加新的方法，而不污染构造函数的情况下可以使用这种方法，例如

```javascript
function Sup(){
    var v = new Array();
    v.push.apply(v,arguments);
    v.fun = function(){
        return this.join('-');
    }
    return v
}
var c = new Sup('a','b','c');
c.fun() //'a-b-c'
```

7.稳妥构造函数模式

稳妥构造，即不使用this和new

```javascript
function Sup(){
    var o = new Object();
    o.fun =function(){
        console.log('spark')
    }
    return o
}
var x = Sup()
x.fun() //'spark'
```

### 二、继承

JS的继承主要依靠原型链来实现的

1.原型链

主要是利用原型让一个引用类型继承另一个引用类型的属性和方法，具体做法，就是让一个构造函数的prototype等于另一个构造函数的实例，例如

```javascript
function Sup(){}
Sup.prototype.fun = function(){
    console.log('spark')
}
function Sub(){}
Sub.prototype = new Sup()
var x = new Sub();
x.fun //'spark'
x.constructor == Sup //true
```

这样可以一直继承下去也就形成一个类似链状的原型链

缺点：与原型模式构造相同，引用类型值会共用

2.借用构造函数

即在子构造函数内部调用超类型构造函数

例如

```javascript
function Sup(a,b,c){
    this.arr = [a,b,c];
    this.fun = function(){}
}
function Sub(){
    Sup.call(this,1,2,3);
}
var x = new Sup()
x.arr // [1,2,3]
```

解决了共用问题

缺点：和构造函数的缺点相同，构造函数内的方法不可复用，而且在超类型构造函数的原型定义的方法也无法继承

3.组合继承

综上两种方法，组合继承结合了优点避免了缺点

例如：

```javascript
function Sup(){
    this.name = 'spark'
}
Sup.fun = function(){}
function Sub(){
    Sup.call(this)
}
Sub.prototype = new Sup()
var x = new Sub();
```

组合继承同样存在缺点：他调用了两次超类型的构造函数

* new Sup()
* Sup.call(this)

解决方法可以使用寄生组合式继承

4.寄生组合式继承

举个栗子：

```javascript
function object(o){
    function F(){}
    F.prototype = o;
    return new  F();
}
function inherit(sub,sup){
    var prototype = object(sup.prototype)
    prototype.constructor = sub
    sub.prototype = prototype
}
function Sup(a,b,c){
    this.arr = [a,b,c];
}
Sup.prototype.fun = function(){}
function Sub(){
    Sup.call(this,1,2,3);
}
inherit(Sub,Sup)
var x = new Sub();
```

只调用了一遍超类型构造函数Sup

寄生组合式继承是最理想的继承方式

## 函数表达式

### 闭包

闭包是指有权访问另一函数作用域中的变量的函数。

在一个函数内部定义的函数会将包含函数（外部函数）的活动对象添加到它的作用域链中。在外部函数执行完毕后，内部函数还由于还存在引用外部函数变量的情况，活动对象不会销毁，直到内部函数执行完毕。

关于闭包for循环，只需要记住，闭包只能取得包含函数中任何变量的最后一个值。而且，闭包具有保存当前词法作用域的功能，所以以下例子就不难看懂了

```javascript
function bi(){
var arr = []
for(var i = 0;i<10;i++){
    arr[i] = function(){
        console.log(i)
    }
}
return arr;
}

arr = bi();
arr[0](); //10

function bi(){
var arr = []
for(let i = 0;i<10;i++){
    arr[i] = function(){
    console.log(i)
    }
}
return arr;
}
arr = bi();
arr[0]() //0
```

js中没有块级作用域，所以for循环中定义的变量不是私有的，其中的闭包会引用最后一个值。而使用了let，有了块级作用域，原闭包被另一个闭包包住了（产生10个闭包），原闭包所能引用的也只有一个值，所以会输出0。

### 关于this

每个函数在被调用时都会自动取得两个特殊变量，this和arguments，内部函数在搜索这两个变量时，只会搜索到其活动对象为止，因此永远不会直接访问外部函数中的这两个变量。

这样可以解释下面的例子

```javascript
var name = "window"
var obj = {
    name:'spark',
    getName:function(){
        var fun = function(){
            return this.name;
        }
        return fun
    }
}
var step1 = obj.getName()
step1() //"window"

var name = "window"
var obj = {
    name:'spark',
    getName:function(){
        var that = this;
        var fun = function(){
            return that.name;
        }
        return fun
    }
}
var step1 = obj.getName()
step1() //"spark"

var name = "window"
var obj = {
    name:'spark',
    getName:function(){
        var fun = function(){
            return this.name;
        }
        return fun
    }
}
var obj2 = {
    name:"obj2",
    get2:obj.getName()
}
obj2.get2()//obj2
```

### 内存泄漏

闭包会引起内存泄漏，当一个函数的另一个函数引用了外部函数的变量。那么，根据引用计数机制，变量至少是1。即使闭包没有运行，垃圾也无法回收，导致内存泄漏。

解决方法就是对于用完的变量等使用null清空

### 模仿块级作用域

使用

```javascript
(function(){
    //some variable and method
}())

//原理

function x(){}() //error

var x = function(){};
x() //run
```

### 私有变量

私有变量：任何函数中定义的变量都是私有变量。

特权方法：能访问私有变量的方法。

```javascript
function Person(name){
    this.getName = function(){
        return name;
    }
}

var x = new Person('spark');
x.getName()//'spark'
```

上述方法有构造函数的缺点，就是没创建一个实例就创建一个相同的方法

#### 静态私有变量

```javascript
(function(){
    var name = 'spark'
    Person = function(){

    }
    Person.prototype.getName = function(){
        return name
    }
}())

var x = new Person();
x.getName() //'spark'
```

由于没有var声明，所以Person是全局的。但是这种方法又有一个缺点，就是所有实例共享一个name属性。

#### 模块模式

是为单例创建私有变量和特权方法，所谓单例就是只有一个实例的对象。

例如

```javascript
var app = function(){
    var components = new Array();
    components.push(new BaseComponent());
    return {
        getComponents:function(){
            return components.length
        },
        registerComponents:function(obj){
            if(typeof obj == 'object'){
                components.push(obj)
            }
        }
    }
}()
```

非常适用于，管理应用程序级的信息。

#### 增强模块模式

```javascript
var app = function(){
    var components = new Array();
    components.push(new BaseComponent());
    var object = new Object();
    object.getComponents = function(){
            return components.length
        };
    return object

}()
```