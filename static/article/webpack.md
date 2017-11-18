# webpack 2.0

---

## 核心概念

### entry

入口起点告诉webpack从哪里开始，并根据依赖关系图确定需要打包的内容，可以将应用程序的入口起点认为是根上下文或app第一个启动文件

* 单个入口语法

```javascript
entry:'./path/to/file.js'
```

* 对象语法

```javascript
entry:{
    app:'./src/app.js',
    vendors:'./src/vendors.js'
}
```

* 多页面应用程序

```javascript
new htmlWebpackPlugin({
    filename:"index.html",
    template:__dirname+"/index.html",
    inject:"head",
    title:'webpack is awesome',
    chunks:['main']
})
利用chunks分配不同js到不同html
```

### output

将所有资源归拢在一起后，要告诉webpack在哪里打包应用程序。即使可以存在多个入口起点，但是只指定一个输出配置

* filename 用于输出文件的文件名
* path  目标输出目录的绝对路径

如果配置创建了多个单独的chunk，则应该使用占位符来确保每个文件具有唯一的名字。
占位符可以是[name] [chunkhash] [hash]
使用publicPath可以指定http路径

### loader

webpack把每个文件都作为模块处理，webpack自身只理解javascript

loader可以将文件从不同的语言转换为javascript(为此，首先安装相对应的loader)

#### 使用loader有三种使用方式

* 配置：在webpack.config.js文件中指定loader。

```javascript
module: {
    rules: [
        {
        test: /\.css$/,
        use: [
            { loader: 'style-loader' },
            {
            loader: 'css-loader',
            options: {
            modules: true
                }
            }
        ]
    }
]
}
```

* 内联：可以在import语句或任何等效于import的方式中指定loader。使用！将资源中的loader分开
* CLI：例如

webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

### 对于使用file-loader时，加载图片，在打包编译之后，index.html中img的src地址并没有替换的情况

```html
使用以下写法
<img src="${require('./assets/erha.jpg')}">
```

### plugins

plugins常用于在打包模块的compilation和chunk生命周期执行操作和自定义功能

### 热更新

```javascript
npm install webpack-dev-server --save-dev
webpack.config.js

const webpack = require('webpack')  
devServer:{
    contentBase:__dirname+'/dist'
}
plugins:[
    new webpack.HotModuleReplacementPlugin()
]

package.json

script:{
    "dev":"webpack-dev-server --open"
}
```