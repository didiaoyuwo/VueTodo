# VueTodo

> 仿照Vue官网上的Todo示例做的一个小demo
> 
> 官网VueTodo: [https://cn.vuejs.org/v2/examples/todomvc.html](https://cn.vuejs.org/v2/examples/todomvc.html)

# Build Setup

运行环境

*   node.js

克隆远程库

```
git clone https://github.com/didiaoyuwo/vueTodo.git
```

进入项目目录vueTodo后，安装依赖

```
npm install
```

安装依赖,启动服务

```
npm run dev
```
    
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
    
```
    │ .babelrc            babel配置
    │ .editorconfig       编辑器配置
    │ .eslintignore       eslint忽略
    │ .eslintrc.js        eslintrc配置
    │ .gitignore          git上传忽略
    │ .postcssrc.js
    │ index.html          打包模板
    │ package.json
    │ README.md
    │ LICENSE
    │
    ├─build
    │
    ├─config
    │
    ├─src
    │   ├─main.js         项目入口
    │   ├─App.vue         根组件
    │   │
    │   ├─assets          
    │   ├─directives      Vue指令
    │   │     
    │   ├─components         
    │   │  └─vueTodo.vue  主组件      
    │   ├─style         
    │   │  └─VueTodo.scss 样式
    │   ├─lib
    │   │
    │   ├─router          路由
    │   
    ├─test   
    │
    └─static              静态文件
```    
