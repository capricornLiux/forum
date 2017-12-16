### 单页应用的问题
* 浏览器渲染html, seo不友好, 抓取引擎不会执行js, 抓取到空白的html
* 等待时间较长, 首页白屏问题

### 解决方案
* react-dom是React专门为web端开发的渲染工具, 在客户端使用react-dom的render方法渲染组件; 在服务端, react-dom/server提供我们将react组件渲染成html的方法