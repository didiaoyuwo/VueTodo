# VueTodo

> 仿照Vue官网上的Todo示例做的一个小demo
> 
> 官网VueTodo: [https://cn.vuejs.org/v2/examples/todomvc.html](https://cn.vuejs.org/v2/examples/todomvc.html)

# Build Setup

运行环境

*   node.js

克隆远程库

    git clone <span class="hljs-string">https:</span><span class="hljs-comment">//github.com/didiaoyuwo/vueTodo.git</span>
    `</pre>

    进入项目目录vueTodo后，安装依赖

    <pre>`npm <span class="hljs-keyword">install</span>
    `</pre>

    安装依赖,启动服务

    <pre>`npm <span class="hljs-command">run</span> dev
    `</pre>

    打开浏览器，访问 [http://localhost:8080](http://localhost:8080)

    # 效果展示

*   刚开始

    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/start.png?raw=true)

*   添加数据

    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/add.gif?raw=true)

*   删除数据
    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/delete.gif?raw=true)
*   全选
    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/selectall.gif?raw=true)
*   修改数据
    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/edit.gif?raw=true)
*   清空已完成数据
    ![Image text](https://github.com/didiaoyuwo/Project-gif/blob/master/vueTodo/clear.gif?raw=true)

    # 目录

    <pre>`│  <span class="hljs-class">.babelrc</span>             babel配置
    │  <span class="hljs-class">.editorconfig</span>        编辑器配置
    │  <span class="hljs-class">.eslintignore</span>        eslint忽略
    │  <span class="hljs-class">.eslintrc</span><span class="hljs-class">.js</span>         eslintrc配置
    │  <span class="hljs-class">.gitignore</span>           git上传忽略
    │  <span class="hljs-class">.postcssrc</span><span class="hljs-class">.js</span>
    │  index<span class="hljs-class">.html</span>           打包模板
    │  package<span class="hljs-class">.json</span>
    │  README<span class="hljs-class">.md</span>
    │  LICENSE
    │
    ├─build
    │
    ├─config
    │
    ├─src
    │   │  main<span class="hljs-class">.js</span>        项目入口
    │   │  App<span class="hljs-class">.vue</span>        根组件
    │   │
    │   ├─assets          
    │   ├─directives      Vue指令
    │   │     
    │   ├─components         
    │   │  └─vueTodo<span class="hljs-class">.vue</span>  主组件      
    │   ├─style         
    │   │  └─vueTodo<span class="hljs-class">.scss</span> 样式
    │   ├─lib
    │   │
    │   ├─router          路由
    │   
    ├─test   
    │
    └─static              静态文件
    