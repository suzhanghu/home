import React from "react";
import bloglist from "../../editable-stuff/blog";

// 博客详情页：根据路由参数 id 渲染文章。
// 注意：这里使用的是旧版 react-router 的 match 传参风格。
const BlogPost = ({ match }) => {
  const { id } = match.params;
  const post = bloglist[id];

  return (
    <div className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;
