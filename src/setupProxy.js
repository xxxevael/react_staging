// 低版本 http-proxy-middleware的初始化 
// const proxy = require('http-proxy-middleware')
//高版本http-proxy-middleware的初始化 
const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports= function(app){
  app.use(
    proxy('/api1',{ //遇见api1前缀的请求，就会触发该代理配置
      target:"http://localhost:5000",//请求转发给谁
      changeOrigin:true, //控制服务器收到的请求头中Host字段的值
      pathRewrite:{"^/api1":""} //重写请求路径（必须）
    })
  )
}