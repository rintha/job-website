import React from "react";
import { Card, Badge, CardImg, ProgressBar } from "react-bootstrap";
import "./CandidateCard.css";

const CandidateCard = ({src,name,title}) => {
  return (
    <div className="carousel-card"> 
      <Card style={{ width: "13rem", height: "auto", margin: "2px" }}>
        <Card.Header className="text-center">
          <Badge className="m-2" pill bg="dark">
            Score 90%
          </Badge>
          <Badge pill bg="dark">
            Skills 90%
          </Badge>
        </Card.Header>
        <Card.Body className="text-center">
          <CardImg src={src}></CardImg>
          <h5>{name}</h5>
          <Card.Text style={{ lineHeight: ".5" }}>
            <p>{title}</p>
            <p>
              <small>India</small>
            </p>
          </Card.Text>
          <div className="text-center">
            <ul
              className="d-flex text-center"
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "15px",
                marginBottom: "0",
              }}
            >
              <li style={{ marginRight: "10px" }}>25</li>
              <li style={{ marginRight: "10px" }}>50</li>
              <li style={{ marginRight: "10px" }}>75</li>
              <li>100</li>
            </ul>
            <ProgressBar className="animated-progress" style={{ margin: "0" }}>
              <ProgressBar now={90} key={1} />
            </ProgressBar>
            <ul
              className="d-flex text-center"
              style={{ listStyle: "none", paddingLeft: 0 }}
            >
              <li style={{ marginRight: "5px" }}>Poor</li>
              <li style={{ marginRight: "5px" }}>Fair</li>
              <li style={{ marginRight: "5px" }}>Good</li>
              <li>Excellent</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CandidateCard;
