# vue3-vdwb(vite-dev-webpack-build)-boilerplate
[Vue3+Vite4开发]()
[Vue3+Webpack构建生产]()
```
 为了防止某些引入的组件或者代码库，在构建过程中暴露出无法编译的错误或者异常，保险起见还是以Webpack的工具链作为构建工具。Vite则是作为体验快速开发，快速热更新的工具。
```

## 提示
```
可以在vue和js文件中使用 process.env。并且，无论是在vite或者webpack的开发模式下，还是生产模式
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

### Customize configuration
See [Vue-cli Configuration Reference](https://cli.vuejs.org/zh/config/).

See [Vite Configuration Reference](https://vitejs.bootcss.com/config/).

See [Pinia Reference](https://pinia.vuejs.org/zh/).
