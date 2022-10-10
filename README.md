# Vue脚手架配置代理

## 方法一
### 在vue.config.js中添加如下配置：
```JavaScript
    devServer: {
        proxy:"http://localhost:xxxx
    }
```    
说明：
1. 优点：配置简单，请求资源时直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）

## 方法二
### 编写vue.confnig.js配置具体代理规则：
```JavaScript
    module.exports = {
        devServer: {
            proxy: {
                '/api1': {  //匹配所有以'/api'开头的请求路径
                    target: 'http://localhost:xxxx',  // 代理目标的基础路径
                    changeOrigin: true,
                    pathRewriter: {'^/api1':''}
                },
                '/api2': {
                    target: 'http://localhost:xxxx',
                    changeOrigin: true,
                    pathRewriter: {'^/api2':''}
                }
            }
        }
    }
/*
    changOrigin设置为true时，服务器收到的请求头中的host为：localhost:xxxx
    changOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
    默认为true
*/    
```
