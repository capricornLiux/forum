import React from 'react';
// jsx最后编译的时候会使用React.createElement, 所以必须在这里引入

import ReactDOM from 'react-dom';

import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

// 消除新版本警告
ReactDOM.hydrate(<App />, document.getElementById('root'));
