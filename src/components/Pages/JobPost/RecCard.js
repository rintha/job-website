import React from "react";
import { Card } from "react-bootstrap";

const RecCard = ({src}) => {
  return (
    <div className="m-2">
      <Card style={{ width: "8rem", height: "6rem", borderRadius: 0 }}>
        <Card.Img
          style={{ width: "6rem", height: "3rem" }}
          variant="top"
          src={src}
        />
        <Card.Body style={{ padding: "5px", textAlign: "center" }}>
          <hr style={{ margin: "5px 0" }} />
          <p style={{ fontSize: "12px", margin: "5px 0" }}>Active Job (14)</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecCard;
