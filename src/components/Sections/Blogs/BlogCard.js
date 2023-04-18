import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css"

const BlogCard = ({ src, description }) => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <Card className="text-white" style={{borderRadius:"0",}}>
        <Card.Img variant="top" src={src} alt="Card image cap" />
        <div className="card-img-overlay d-flex align-items-end">
          <p className="card-text bg-dark-transparent">{description}</p>
        </div>
      </Card>
    </a>
  );
};

export default BlogCard;
