import React from "react";
import BlogCard from "./BlogCard";
import blo from "../../../assets/10.png"

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
        <div style={{  alignItems: "center" }}>
          <h2>Blog</h2>
          <hr/>
        </div>
        <div className="d-flex justify-content-center " style={{paddingLeft:"10%" }}>
          <div className="m-3">
            <BlogCard
              src="https://blog.technoparkjobs.com/blogging/get_featured_image/11"
              description="Active Directory is a crucial component of any organization, and profe Read more..."
            />
          </div>
          <div className="m-3">
            <BlogCard
              src={blo}
              description="Active Directory is a crucial component of any organization, and profe Read more..."
            />
          </div>
          <div className="m-3">
            <BlogCard
              src="https://blog.technoparkjobs.com/blogging/get_featured_image/8"
              description="Active Directory is a crucial component of any organization, and profe Read more..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
