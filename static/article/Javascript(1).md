# Javascript(1)

---

## 虽然已经看过两遍红宝书了，但是时间隔得有点多，加上工作后，没时间去看，最重要的是没有一个笔记来记录，以至于每次都要去翻书，效率比较低。正逢我第一次失业，趁有时间，韬光养晦，就写个笔记吧———2017-10-25

## 一、Javascript简介

js最早用于填写域的验证

### js的含义不只局限于`ECMA-262`所规定的，一个完整的js组成如下

* 核心(ECMAScript)
* 文档对象模型(DOM)
* 浏览器对象模型(BOM)

### 1.ECMAScript

ECMAScript与web浏览器没有依赖关系,不包含输入和输出定义。`ECMA-262`定义的只是这门语言的基础，Web浏览器只是ECMAScript实现可能的宿主环境之一。宿主环境还可以提供该语言的扩展，如DOM等

ECMA-262主要规定了一下组成部分

* 语法
* 类型
* 语句
* 关键字
* 保留字
* 操作符
* 对象

### 2.文档对象类型(DOM)

是针对XML但经过扩展用于HTML的应用程序编程接口,DOM把整个页面映射为一个多层节点结构。XML和HTML页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据

* DOM1级由两个模块组成：DOM核心(DOM Core)和DOM HTML
  * DOM核心规定是如何映射基于XML的文档结构，以便简化对文档中任一部分的访问和操作
  * DOM HTML模块则在DOM核心的基础上加以拓展，添加了针对HTML的对象和方法
* DOM2级引入更多的新模块
  * DOM视图
  * DOM事件
  * DOM样式
  * DOM遍历和范围
* DOM3级进一步扩展DOM，引入了以统一方式加载和保存文档的方法

### 3.浏览器对象模型(BOM)

可以使用BOM控制浏览器显示的页面以外的部分。

1. 弹出新浏览器窗口的功能
1. 移动、缩放和关闭浏览器窗口的功能
1. 提供浏览器详情信息的navigator对象
1. 提供浏览器所加载页面的详情信息的location对象
1. 提供用户显示器分辨率详情信息的screen对象
1. 对cookies的支持
1. 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象

## 二、HTML中使用js

### 1. `<script>`元素

#### 有以下6个属性

* `async`：表示立即下载脚本，与页面其他操作异步执行，如果有多个，不能保证按顺序执行（只对外部脚本文件有效）
* `defer`：表示脚本延迟到文档完全被解析和显示之后再执行（只对外部脚本文件有效），如果有多个按标准来说会按顺序执行，但实际上并不一定是这样
* `src`：表示包含要执行代码的外部文件
* `type`：表示编写代码使用的脚本语言的内容类型（MIME）

#### 使用方式

1. 直接嵌入

    使用时只需指定`type`属性，在解释器对`script`元素内部的所有代码求值完毕以前，页面中的其余内容都不会被浏览器加载或显示

1. 包含外部`javascript`

    使用src属性引入外部js文件，如果没有`async`和`defer`属性，那么js会按顺序解析

1. 对于不支持`script`或者禁用`script`的浏览器需要使用`noscript`标签，在标签内写入文字，会展现在界面上

注意：`script`标签的位置最好放在body结束标签之前，如果放在`head`标签内，则会影响页面加载速度

#### 外部文件的优点

1. 可维护性
1. 可缓存
1. 适应未来

### 2.文档模式

`IE5.5`引入了文档模式的概念，主要通过文档类型（doctype）的切换实现。最初的两种文档模式是：`混杂模式（quirks mode）`、`标准模式（standards mode）`

混杂模式会让IE的行为与IE5相同，标准模式则会更接近标准行为
在文档开始处没有发现文档类型声明，则所有浏览器都会默认开启混杂模式

## 三、基本概念

### 1. 语法

js中一切都区分大小写

#### 标识符

是指`变量`、`函数`、`属性的名字`、`函数的参数`

* 第一个字符必须是`字母`、`下划线`、`美元符号`
* 其他字符可以是`字母`、`下划线`、`美元符号`、`数字`
* ECMAScript标识符建议使用驼峰大小写格式

#### 注释

* 单行注释：以`//`开头
* 块级注释：以 `/*` 开头，以 `*/`结尾，其他行可以选择用星号开头，单纯是为了提高注释的可读性

#### 严格模式

使用`"use strict"`可以开启严格模式

ECMAScript3中的一些不确定的行为将会得到处理，对某些不安全的错误也会抛出错误

#### js语句

js中的语句以一个分号结尾，虽然分号不是必须的，但是最好要加上，避免不必要的错误

### 2.关键字、保留字

不能用作标识符

```javascript
 `break`  `do`  `instanceof`  `typeof`  `case`  `else`  `new`  `var`

 `catch`  `finally`  `return`  `void`  `continue`   `for`   `switch`   `while`

 `debugger*`   `function`  `this`  `with`  `default`   `if`   `throw`

 `delete`   `in`   `try`  `abstract`  `enum`  `int`  `short`

 `boolean`  `export`  `interface`  `static`  `byte`  `extends`  `long`  `super`

 `char`   `final`   `native`   `synchronized`  `class`   `float`   `package`  `throws`

 `const`   `goto`   `private`   `transient`  `debugger`  `implements`  `protected`

 `volatile`  `double`   `import`   `public`  `class`   `enum`   `extends`   `super`

 `const`   `export`   `import`  `implements`   `package`   `public`

 `interface`   `private`   `static`  `let`   `protected`   `yield`
```

以上包含所有保留字和关键字（包括严格模式）

### 3.变量

`ECMAScript`的变量是松散类型，定义变量时要使用`var`操作符

`var`操作符定义的变量将成为定义该变量的作用域的局部变量（如果在函数中，会在函数结束后销毁）

如果在函数中定义变量不使用`var`操作符，那么将创建一个全局变量（在严格模式中会报错）

也可以使用一条语句定义多个变量，如

```javascript
var m=1,n=2,b=3;
```

### 4.数据类型

#### typeof操作符

* undefined --"undefined"
* boolean -- "boolean"
* string -- "string"
* number -- "number"
* null object -- "object"
* function -- "function"

如果要详细验证对象的种类（Array，object等），可以使用instanceof操作符。
例如

```js
let arr = [1,2,3]
arr instanceof Array //true
```

#### Undefined

对于声明但未初始化的变量，会自动赋予一个`undefined`值，除了可以使用`typeof`，没有其他用处（也可以使用`delete`，但是严格模式下会报错）

对于未声明的变量使用`typeof`，同样会返回`undefined`

#### Null

`null`表示一个空对象指针，所以`typeof`会返回`object`

对于定义的变量在将来准备用于保存对象，可以将变量赋值为`null`，由于`undefined`派生自`null`所以

```javascript
undefined == null //true
```

#### Boolean

只有两个字面值`true`和`false`（区分大小写）

`ECMAScript`中所有类型都有与`boolean`值等价的转换值，可以使用`Boolean()`函数进行转换，转换规则如下

* 转换为`true`的
  * String--非空字符串
  * Number--任何非零数字值（包括无穷）
  * Object--任何对象
  * Undefined--n/a（没有）

* 转换为`false`的
  * String--""(空字符串)
  * Number--0或NaN
  * Object--null
  * Undefined--undefined

#### Number类型

字面量可以是十进制、八进制（0开头，严格模式无效）、十六进制（0x开头）

在进行算术计算时，所有八进制、十六进制表示的数值都将最终被转换成十进制数值

* 浮点类型
  * 由于浮点类型占用的内存空间是整数的两倍。所以，如果小数点后没有数字，或者是零，则会转换为证书
  * 对于很大或者很小的数，js会自动使用科学计数法，使用E或者e表示
  * 由于js是基于IEEE754数值的浮点计算，0.1+0.2等会产生错误，所以尽量转化为整数计算
* 数值范围
  * ECMAScript将最大值和最小值保存在`Number.MAX_VALUE`和`Number.MIN_VALUE`中
  * 超过数值范围ECMAScript会用Infinity和-Infinity表示，可以用isFinite()检测是否有穷（`Number.NEGATIVE_INFINITY`和`Number.POSITIVE_INFINITY`同样可以表示正负无穷）
* NaN(not a number):在ECMAScript中，任何涉及NaN的操作都会返回NaN，并且NaN不跟任何值相等，包括他本身，使用isNaN()可以检测，它会将参数转化为数字，对于不能转化成数值的参数，会返回true。
* 数值转换
  * Number():可以将任何值转化为数字，对于无法转换的会返回NaN,具体规则如下：
    * true和false会被转化为1、0
    * null会被转化为0
    * undefined会被转化为NaN
    * 如果是字符串
      * 除了数字还有其他数据类型会返回NaN（不包括小数点）
      * 空字符串返回0
  * parseInt():会寻找第一个非空格字符，如果不是数字，返回NaN。如果是数字，继续解析，直到解析到一个非数字后者结尾。接受第二个参数作为转化进制规则，忽略前导零
  * parseFloat():会寻找第一个非空字符，如果不是浮点数字字符，返回NaN。如果是浮点数字字符，继续解析（仅有第一个小数点有效）。不接受第二个参数，忽略前导零

#### String

用于表示由多个16位Unicode字符组成的字符序列，可以用单引号\'和双引号表示\"

* 字符字面量（即转义序列），例如\n，\t，\r，\unnnn（一个字符）等等
* 字符串一旦创建，值就不能改变，要改变则会销毁原来的字符串
* 除了null和undefined，其它都有一个tostring()方法，可以接受第二个参数用于传递转换基数
* String()转型函数弥补了toString()方法无法转换null和undefined的缺陷

#### Object

创建对象（如果不给构造函数传递参数，则构造函数的括号可以省略）

```javascript
var o = new Object
```

### 操作符

#### 一元操作符

前增、后增、前减、后减（副作用）

注意：操作数是变量，不能是数字常量

规则：

* 对包含数字的字符串，先转换为数字，再执行加减操作
* 对不包含数字的字符串，返回NaN
* 布尔值会被转化为0或1
* 用于浮点数时，执行加减操作，但是要注意，浮点数计算问题，尽量转化为整数
* 用于对象时，先valueOf再toString()

#### 一元加减操作符

用于正负表示

* 用于非数值时，会转化为数值，与Number()转型函数表现相同

#### 布尔操作符

* 逻辑非 !
  * 与Boolean转换后的逻辑相反
* 逻辑与 &&（短路操作）
  * 如果第一个操作数是对象，返回第二个操作数
  * 第二个操作数是对象，则只有第一个操作的求值为true时，才会返回对象
  * 如果两个操作数都是对象，则返回第二个操作数
  * 如果有一个操作数是null、NaN、undefined，返回null、NaN、undefined
* 逻辑或 || （短路操作）
  * 如果第一个操作数是对象，则返回第一个操作数
  * 如果第一个操作数是false，返回第二个操作数
  * 如果两个操作数都是对象，则返回第一个操作数
  * 如果两个操作数都是null、NaN、undefined，返回null、NaN、undefined

#### 乘性操作符

* 乘法
  * 如果有一个操作数是NaN，返回NaN
  * 如果Infinity与0相乘，结果是NaN
  * 如果Infinity与非0相乘，结果是Infinity和-Infinity，取决于有符号操作数的符号
  * 如果是Infinity与Infinity相乘，结果是Infinity

* 除法
  * 如果有一个操作数是NaN，则结果是NaN
  * 如果是Infinity被Infinity除，结果是NaN
  * 如果是0被0除，结果是NaN
  * 如果是非0的有限数被0除，结果是Infinity或者-Infinity
  * 如果是Infinity被任何非零数值除则结果是Infinity或-Infinity

* 求模
  * 如果被除数是无穷大值，除数是有穷大，返回NaN
  * 如果被除数是有穷大值，除数是0，则返回NaN
  * 如果无穷除无穷结果是NaN
  * 如果被除数是有穷值，除数是无穷大值，结果是被除数
  * 如果被除数是0，结果是0

#### 加性操作符

* 加法
  * 如果有一个操作数是NaN，则结果是NaN
  * 如果是Infinity + Infinity，返回Infinity
  * 如果是-Infinity + -Infinity,返回-Infinity
  * 如果是Infinity + -Infinity，返回的是NaN
  * 如果有一个操作数是字符串，则转换为字符串拼接起来
  * 对于undefined和null，分别调用String()转换函数进行转换
* 减法
  * 与加法类似
  * 不同的是对于null undefined，将调用Number()转型函数

#### 关系操作符

* < > <= >=
  * 如果两个数都是数值，则执行数值比较
  * 如果两个操作数都是字符串，则比较字符串的字符编码值
  * 如果一个操作数是数值，则将一个操作数转化为数值
  * 如果操作数是布尔值，则转化为数值
  * NaN与任何值比较都是NaN

#### 相等操作符

* 相等和不想等
  * 如果有一个操作数是布尔值，则转化为数值
  * 如果一个操作数是字符串一个操作数是数值，则将字符串转化为数值
  * null == undefined //true
  * null和undefined不会转换成其他任何值
  * 只要有一个是NaN，返回false
* 全等和不全等
  * 不会转换操作数

#### 条件操作符

* `boolean_expression ? true_value : false_value`

#### 赋值操作符

* 除了使用等号赋值以外，可以有 x += 10 的简写方式

#### 逗号操作符

* 用于声明多个变量

### 语句

#### if语句

```javascript
if(condition) statement1 else statement2
```

如果condition的结果不是布尔值，会调用Boolean()转型函数

#### do-while语句

```javascript
do{statement}while(expression)
```

#### while语句

```javascript
while(expression) statement
```

#### for语句

```javascript
for(initialization;expression;post-loop-expression) statement
```

#### for-in语句

可用来枚举对象的属性

```javascript
for(var property in expression) statement
```

var不是必须，但是保证是局部变量要带上

#### break和continue

用在循环中，控制循环，break是跳出整个循环，而continue是跳出本次循环

#### label

可以在代码中设置标签，多用于循环嵌套结构，与break和continue联用

```javascript
lable:for(){
  for(){
    break label;
  }
}
```

#### with

将代码作用域设置到一个特定的对象中

```javascript
with (expression) statement
```

#### switch

如果expression等于case那么执行后面的表达式

```javascript
switch(expression){
  case expression or value: statement
    break;
  case expression or value: statement
    break;
  case expression or value: statement
    break;
  default: statement
}
```

break代表跳出switch不会执行下一种情况，如果需要执行所有符合的代码，可以不用break

### 函数

函数使用`return`返回值，`return`后的语句不会被执行，如果没有返回值，返回`undefined`(`return后可以没有值`)

js中函数是没有重载的，即使参数数量和类型不同，后面定义的同名函数会替代前面的函数

可以使用arguments这个类数组来访问参数，它的值和对应的命名参数保持一致(必须是传入的参数)。所以，对arguments数组中的一项赋值，会同步更新命名参数，对于没有传入的参数，则会自动赋值undefined。

另外，函数参数是按值传递的，引用类型则是传递的指针，例如

```js
  obj1 = {
    name:'aaa'
  }
  (funtion(obj1){
    obj1 = new Object();
    obj1.name = 'bbb'
  })(obj1)
  obj1.name //aaa
```

如果是按引用传递的话，obj1.name应该变为bbb，但是最后还是aaa说明是按值传递。

注意：在严格模式下，对arguments中其中一项赋值会无效，重写arguments在严格模式下会导致语法错误