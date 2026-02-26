import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';

// 前端运行入口：
// 1) 加载全局样式。
// 2) 把根组件 <App /> 挂载到 public/index.html 的 #root。
// 3) 保留性能上报入口（按需启用）。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果你要统计性能指标，可传入一个函数（如 reportWebVitals(console.log)）
// 来打印结果，或上报到你的埋点/分析系统。
reportWebVitals();
