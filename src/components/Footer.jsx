import React from "react";
import Container from "react-bootstrap/Container";

// 全站页脚容器。
// 通过 children 让 App 注入联系方式等内容。
const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
      </Container>
    </footer>
  );
};

export default Footer;
