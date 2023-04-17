import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section
      className="text-center"
      style={{
        height: "500px",
      }}
    >
      <div
        className="m-5 text-center container"
        style={{
          paddingTop: "50px",
        }}
      >
        <div>
          <h2>Blog</h2>
          <hr />
        </div>
        <div className="d-flex justify-content-center">
          <div className="m-3">
            <BlogCard src="https://blog.technoparkjobs.com/blogging/get_featured_image/11" />
          </div>
          <div className="m-3">
            <BlogCard src="https://blog.technoparkjobs.com/blogging/get_featured_image/10" />
          </div>
          <div className="m-3">
            <BlogCard src="https://blog.technoparkjobs.com/blogging/get_featured_image/8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
