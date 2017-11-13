# Javascript

## 本笔记基于javascript高级程序设计第三版，加上自身实践经验攥写

* [1.语法示例](#1)

## 一、Javascript简介

js最早用于填写域的验证

### js的含义不只局限于`ECMA-262`所规定的，一个完整的js组成如下

* 核心(ECMAScript)
* 文档对象模型(DOM)
* 浏览器对象模型(BOM)

### 1.ECMAScript

ECMAScript与web浏览器没有依赖关系,不包含输入和输出定义。`ECMA-262`定义的只是这门语言的基础，Web浏览器只是ECMAScript实现可能的宿主环境之一。宿主环境还可以提供该语言的扩展，如DOM等

#### ECMA-262主要规定了一下组成部分

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

### 1. \<script>元素

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
在文档开始处没有发现文档类型生命，则所有浏览器都会默认开启混杂模式

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

#### 语句

js中的语句以一个分号结尾，虽然分号不是必须的，但是最好要加上，避免不必要的错误

### 2.关键字、保留字

不能用作标识符

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

#### Undefined

对于声明但未初始化的变量，会自动赋予一个`undefined`值，除了可以使用`typeof`，没有其他用处（也可以使用`delete`，但是严格模式下会报错）

对于未声明的变量使用`typeof`，同样会返回`undefined`

#### Null

`null`表示一个空对象指针，所以`typeof`会返回`object`

对于定义的变量在将来准备用于保存对象，可以将变量赋值为`null`，由于`undefined`派生自`null`所以

```javascript
undefined == null //true
```

### Boolean

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
