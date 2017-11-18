# webpack+babel常见问题

---

学习`webpack`打包的时候，在babel上踩了几个坑，领导又要兼容IE，所以在这里写一下吧

## 1.首先是在使用`babel-loader`的时候，需要配置，如果没有配置的情况下，IE会报 语法错误的报错，所以需要配置一下

第一种配置方法是直接在webpack.config.js中写出来

```javascript
{
  test:/\.js$/,
    use:{
      loader:'babel-loader',
        options:{
          presets:['env']
        }
      },
  include:path.resolve(__dirname,'src')
},
```

第二种配置方法是在项目根目录下新建一个配置文件.babelrc

![这里写图片描述](http://img.blog.csdn.net/20171010154020483?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3Bhcmtsdg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)  

配置如下

```javascript
{
  "presets": [
    "latest",
    "react",
    "stage-2"
  ],
  "plugins": []
}
```

## 2.babel-polyfill

Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API ，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。Babel 默认不转码的 API 非常多，详细清单可以查看 definitions.js 文件

所以需要安装polyfill

```js
npm install -save-dev babel-polyfill
```

接下来有三种引入方式

1. 在webpack配置文件中引入

    ```javascript
    module.exports = { entry: ['babel-polyfill', './app/js'] }
    ```

1. 在入口js文件中引用

    ```javascript
    import "babel-polyfill"
    ```

1. 同是js文件中引用

    ```javascript
    require("babel-polyfill");
    ```

## 3.babel会编译会包含node_modules

node_module中有大量的js文件，编译的时候会很慢，所以应该排除这个文件夹，有两种解决方法

1. 只包含要编译的文件夹

    ```javascript
    include: path.resolve(__dirname,'src')
    ```

1. 排除node_modules

    ```javascript
    exclude:/node_modules/
    ```
