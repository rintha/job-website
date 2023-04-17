import React from "react";
import { Card, Button } from "react-bootstrap";

const CourseCard = () => {
  return (
    <div className="">
    <div className="card m-2 " style={{width: "18rem",background:"none",border:"0"}}>
      <div className="bg-primary mb-3 p-2">Graphic Designing</div>
      <div className="mb-3">This course teach you how to use Adobe Illustrator, Photoshop and Corel DRAW to create stunning images and collages that can ..</div>
      <div style={{borderRadius:"0",width:"8rem"}}className="btn btn-outline-primary text-success">More Info</div>
    </div>
    </div>
  );
};

export default CourseCard;
