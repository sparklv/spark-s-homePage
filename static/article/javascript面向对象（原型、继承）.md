# javascript面向对象（原型、继承）

---

这段时间再找工作，以前学习的js基础记忆有些模糊，特别是继承这块，几种继承方法的实现、以及优缺点总是记不住，恰好现在比较有时间，就来全面的整理一下js面向对象方面的知识

ECMA-262将对象定义为无序属性的集合，属性可以包含基本值、对象、函数。

而一般的OOP具有类的概念，通过类可以创建多个具有相同属性和方法的对象。js则不同，它没有类的概念，所以它的对象也和其他语言不同

## 一、创建对象

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

## 二、继承

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