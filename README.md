# vue3-vdwb(vite-dev-webpack-build)-boilerplate

### [Vue3+Vite4 开发配置](vite.config.js)
### [Vue3+Webpack 构建配置](vue.config.js)
### [Vite指定的入口文件](index.html)
### [Webpack指定的入口文件](./public/index.html)
```
 为了防止某些引入的组件或者代码库，在构建过程中暴露出无法编译的错误或者异常，保险起见还是以Webpack的工具链作为构建工具。
 Vite则是作为体验快速开发，快速热更新的工具。
```

### Webpack
```
开发模式 :npm run webpack:dev
构建产物 :npm run webpack:build
Webpack构建产物已经默认放置到了webpack-builds文件夹下
```

### Vite
```
开发模式 :npm run vite:dev
构建产物 :npm run vite:build
预览Vite的构建产物 :npm run vite:preview
Vite构建产物已经默认放置到了vite-builds文件夹下
```

### 补充
```
可以在vue和js文件中使用 process.env。并且，无论是在vite或者webpack的开发模式下，还是生产模式
```


### 相关工具链的文档
 [Vue API Reference](https://vuejs.org/api/).

 [Vue-Router API Reference](https://router.vuejs.org/api/).

 [Vue-cli Configuration Reference](https://cli.vuejs.org/zh/config/).

 [Vite Configuration Reference](https://vitejs.bootcss.com/config/).

 [Pinia Reference](https://pinia.vuejs.org/zh/).
