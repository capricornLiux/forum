const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry').default;
const fs = require('fs');
const path = require('path');
// console.log(serverEntry);

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

const app = express();

app.use('/public', express.static(path.join(__dirname, '../dist')));

// 浏览器发出的任何请求, 都返回服务端渲染的代码
app.get('*', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry);
    const replaceStr = template.replace('<app></app>', appString)
    res.send(replaceStr);
});

app.listen(3333, ()=>{
    console.log('app listen at 3333 port');
})