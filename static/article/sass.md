# sass

---

## 变量

sass使用$符号来标识变量

### 变量声明

例如

```css
$highlight-color:#F90;
nav{
color:$highlight-color;
}
```

变量也可以在css规则块内定义使用,例如

```css
nav{
    $width:100px;
    width:$width;
}
```

## 嵌套CSS规则

sass对于嵌套的元素可以在css规则块内嵌套规则块。例如

```css
#div{
    div{
        div{

        }
    }
}
```

### 伪类和选择器

在块内使用:hover等伪类需要使用&来代替选择器本身
在规则块内部或外部都可以使用子元素选择器和同层组合选择器:

`> + ~`

`>`用于选择直接子元素

`+`用于选择同层紧跟着的元素

`~`用于选择同层之后的所有指定元素

### 嵌套属性

```css
nav{
    boder:{
        style:solid;
        width:1px;
        color:#ccc;
    }
}
```

## 导入sass文件

与css的@import规则不同，sass的@import会在生成css文件时就把相关文件导入进来，同时，sass的@import并不需要指明被导入文件的全名，可以省略后缀

### 默认变量值

与css的!important刚好相反，!default用于变量，如果变量被声明赋值了，那就用声明值，否则使用默认值

### 嵌套导入

嵌套@import导入，只在这个规则块内有效

## 静默注释

使用js类似的注释方式 //等

## 混合器

对于大段的重用样式代码，可以使用混合器@mixin，例如

```css
@mixin mix1{
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
div {
    @include mix1;
}
```

### 传参

```css
@mixin li($z){
    color:$z;
}
a{
    @inlcude li(red)
}
可以不按顺序写参数，使用键值对形式，但是不能漏掉
也可以使用默认参数值
@mixin li($z,$a:$z){
    color:$z,
    background-color:$a
}
@include li(red)
```

## 继承

使用@extend可以使一个选择器可以继承为另一个选择器定义的所有样式，值得注意的是，不要用后代选择器去继承