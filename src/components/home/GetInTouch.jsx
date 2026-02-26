import React from "react";

// 页脚联系区块，包含 mailto 邮件链接。
const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
