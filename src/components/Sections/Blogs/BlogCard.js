import React from "react";
import { Card } from "react-bootstrap";

const BlogCard = () => {
  return (
    <div>
      <a href="/" className="text-decoration-none">
        <Card style={{ width: "18rem" }} border="none" text="dark">
          <Card.Img
            variant="top"
            src="https://blog.technoparkjobs.com/blogging/get_featured_image/11"
            alt="Card image cap"
          />
          <Card.ImgOverlay>
            <div>
              {" "}
              <p>
                Active Directory is a crucial component of any organization, and
                profe{" "}
                <a
                  className="blog_readmore_link"

                  href="https://blog.technoparkjobs.com/blogs/windows-systems-engineer-interview-questions-and-answers"
                >
                  Read more...
                </a>
              </p>
            </div>
          </Card.ImgOverlay>
        </Card>
      </a>
    </div>
  );
};

export default BlogCard;
