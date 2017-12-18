# react-router 4.0

---

## 简介
RR4 本次采用单代码仓库模型架构（monorepo），这意味者这个仓库里面有若干相互独立的包，分别是：

* react-router React Router 核心
* react-router-dom 用于 DOM 绑定的 React Router
* react-router-native 用于 React Native 的 React Router
* react-router-redux React Router 和 Redux 的集成
* react-router-config 静态路由配置的小助手

## 引入

react-router 和 react-router-dom相比，react-router-dom比react-router多出了`<Link>`,`<BrowserRouter>`这样的DOM组件。所以，只需引入react-router-dom

```
npm install react-router-dom --save

```

## 组件

### `<BrowserRouter>`

一个使用了HTML5 history API的高阶路由组件，保证UI界面和URL保持同步

#### 属性

* basename:string
  * 为所有位置添加一个基准URL
* getUserConfirmation:func
  * 导航到此页面执行的函数，默认使用window.confirm
    * ```javascript
      const getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message)
        callback(allowTransition)
      }
      <BrowserRouter getUserConfirmation={getConfirmation('Are you sure?', yourCallBack)} />
      ```
* forceRefresh:bool
  * 当浏览器不支持HTML5的history API时，强制刷新页面
* keyLength:number
  * 设置它里面路由的location.key的长度。默认是6(key的作用：点击同一个链接时，每次该路由下的location.key都会改变，可以通过key的变化来刷新页面)
* childern:node
  * 渲染唯一子元素

### `<HashRouter>`

Hash history不支持location.key和location.state,只是用来支持旧版浏览器

### `<Route>`

它的基本职责就是当页面的访问地址与Route上的path匹配时，就渲染出对应的UI界面

并且自带三个render method和三个props

分别为

* component
* render
* children

* match
* location
* history

#### 属性

* component
  * 只有当访问地址和路由匹配时，一个component才会被渲染，此时组件接受route props(match location history)
* render:func
  * 此方法适用于内联渲染，不会产生重复装载问题
* childern:func
* path:string
  * 任何可以被path-to-regexp解析的有效URL路径
* exact:bool
  * 如果为true，path为/1的路由将不可以匹配/1/2
* strict:bool
  * 如果为true，path为/1/将不能匹配/1，但是可以匹配/1/2

### `<Link>`

为应用提供声明式，无障碍导航

#### 属性

* to:string
  * 跳转到指定路径
* to:object
  * 携带参数跳转到指定路径
  * ```javascript
    <Link to={{
            pathname: '/course',
            search: '?sort=name',
            state: { price: 18 }
    }} />
    ```
* replace:bool
  * 如果为true，点击链接后将使用新地址替换掉上次访问的地址。

### `<NavLink>`

与`<Link>`相似，可以设置导航激活时的样式

#### 属性

* activeClassName:string
  * 导航被激活时应用的样式名，默认为active
* activeStyle:obj
  * 直接设置样式
* exact:bool
  * 若为true，只有当访问地址严格匹配时激活样式才会应用
* strict:bool
  * 若为true，只有访问地址后缀斜杠严格匹配时激活样式才会应用
* isActive:func
  * 决定导航是否激活，或者在导航激活的时候做点别的事，它不能决定对应页面是否可以渲染

### `<Switch>`

只渲染出第一个与当前地址匹配的`<Route>`或`<Redirect>`

### `<Redirect>`

将导航到一个新地址，并且在访问历史信息里覆盖

#### 属性

* to:string
  * 重定向的URL字符串
* to:object
  * 重定向的location对象
* push:bool
  * 若为true，重定向操作会把新地址加入到访问历史记录里面，并且无法回退到前面的页面
* from:string
  * 需要匹配的将要重定向的路径
### `withRouter`

可以用来进行页面跳转

例如（在组件中）
```javascript
this.props.history.push('/main')
withRouter(this);
```

### `<Prompt>`

当用户离开页面前，做出一些提示

#### 属性

* message:string
  * 设置提示信息
* message:func
  * 当用户离开界面，设置的回调函数
  * ```
    <Prompt message={location => (`Are you sue you want to go to ${location.pathname}?`)} />
* when:bool
  * 是否启用Prompt

## 对象和方法

### history

history 以多种能够行驶实现了对会话（session）历史的管理。

我们会经常使用以下术语：

history 对象通常具有以下属性和方法：

* length: number 浏览历史堆栈中的条目数
* action: string 路由跳转到当前页面执行的动作，分为 PUSH, REPLACE, POP
* location: object 当前访问地址信息组成的对象，具有如下属性：
* pathname: string URL路径
* search: string URL中的查询字符串
* hash: string URL的 hash 片段
* state: string 例如执行 push(path, state) 操作时，location 的 state 将被提供到堆栈信息里，state 只有在 browser 和 memory history 有效。
* push(path, [state]) 在历史堆栈信息里加入一个新条目。
* replace(path, [state]) 在历史堆栈信息里替换掉当前的条目
* go(n) 将 history 堆栈中的指针向前移动 n。
* goBack() 等同于 go(-1)
* goForward 等同于 go(1)
* block(prompt) 阻止跳转

history 对象是可变的，因为建议从 <Route> 的 prop 里来获取 location，而不是从 history.location 直接获取。这样可以保证 React 在生命周期中的钩子函数正常执行

### location

location 是指你当前的位置，将要去的位置，或是之前所在的位置

```javascript
{
  key: 'sdfad1'
  pathname: '/about',
  search: '?name=minooo'
  hash: '#sdfas',
  state: {
    price: 123
  }
}
```

在以下情境中可以获取 location 对象

* Route component 中，以 this.props.location 获取
* Route render 中，以 ({location}) => () 方式获取
* Route children 中，以 ({location}) => () 方式获取
* withRouter 中，以 this.props.location 的方式获取

location 对象不会发生改变，因此可以在生命周期的回调函数中使用 location 对象来查看当前页面的访问地址是否发生改变。

```javascript
componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // 已经跳转了！
  }
}
```

可以在不同情境中使用 location：

<Link to={location} />
<NaviveLink to={location} />
<Redirect to={location />
history.push(location)
history.replace(location)

### match

match 对象包含了 <Route path> 如何与 URL 匹配的信息，具有以下属性：

* params: object 路径参数，通过解析 URL 中的动态部分获得键值对
* isExact: bool 为 true 时，整个 URL 都需要匹配
* path: string 用来匹配的路径模式，用于创建嵌套的 <Route>
* url: string URL 匹配的部分，用于嵌套的 <Link>

在以下情境中可以获取 match 对象

* 在 Route component 中，以 this.props.match获取
* 在 Route render 中，以 ({match}) => () 方式获取
* 在 Route children 中，以 ({match}) => () 方式获取
* 在 withRouter 中，以 this.props.match的方式获取
matchPath 的返回值
当一个 Route 没有 path 时，它会匹配一切路径。
