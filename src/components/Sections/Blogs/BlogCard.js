import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = ({ src }) => {
  return (
    <a href="/" style={{ textDecoration: "none" }}>
       {/* <Card className="bg-dark text-white">
      <Card.Img variant="top" src={src} alt="Card image cap" />
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{`Last updated ${date} ago`}</p>
      </div>
    </Card> */}
    </a>
  );
};

export default BlogCard;
