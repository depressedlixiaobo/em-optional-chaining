

```js
安装 npm i em-optional-chaining
```
>  该函数库主要用于 在 es7 中 ?. 链式操作符 取代方案。vscode 不支持 ?. 的语法高亮，以及 无法去除 ternimal中的question 报错。 本函数库 压缩 大小 0.2KB 

## 使用方法
```js
   import { _get } from 'em-optional-chaining'

   let myobj = { a:{ b:{ c:{d:'123'} }} }

   console.log(_get(myobj,'a.b'))  // { c:{d:'123'} }

   console.log(_get(myobj,'a.b.c.d'))  //'123'

   console.log(_get(myobj,'a.b.x'))  // null

   console.log(_get(null,'a.b'))  // null

   
``` 

