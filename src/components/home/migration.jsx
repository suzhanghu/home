import React from 'react';
import Nav from "react-bootstrap/Nav";

// 兼容层组件：用于模拟旧版 Bootstrap 组件 API。
export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}

// 对 react-bootstrap 的 Nav.Link 做一层包装，统一结构和 class 使用。
export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
