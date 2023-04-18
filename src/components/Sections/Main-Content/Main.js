import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./MainStyle.css";
import Jobs from "./Jobs";
import Industries from "./Industries";
import TechnoPark from "./TechnoPark";
import Location from "./Location";

const Main = () => {
  const [activeItem, setActiveItem] = useState("#link1");

  const handleItemClick = (eventKey) => {
    setActiveItem(eventKey);
  };

  return (
    <section
      className="m-5 d-flex flex-column flex-md-row justify-content-between"
      style={{ width: "100%" }}
    >
      <div className="job" style={{ flex: "70%" }}>
        <div className="list">
          <ListGroup
            variant="flush"
            key="xl"
            horizontal="xl"
            style={{
              width: "100%",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <ListGroup.Item
              action
              href="#link1"
              onClick={() => handleItemClick("#link1")}
              style={{
                border: "none",
                borderRadius: "4px",
                backgroundColor: activeItem === "#link1" ? "#28a745" : "",
                color: activeItem === "#link1" ? "#fff" : "",
                borderRight: "1px solid #ced4da",
              }}
            >
              LATEST JOBS
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#link2"
              onClick={() => handleItemClick("#link2")}
              style={{
                border: "none",
                borderRadius: "4px",
                backgroundColor: activeItem === "#link2" ? "#28a745" : "",
                color: activeItem === "#link2" ? "#fff" : "",
                borderRight: "1px solid #ced4da",
              }}
            >
              INDUSTRIES
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#link3"
              onClick={() => handleItemClick("#link3")}
              style={{
                border: "none",
                borderRadius: "4px",
                backgroundColor: activeItem === "#link3" ? "#28a745" : "",
                color: activeItem === "#link3" ? "#fff" : "",
                borderRight: "1px solid #ced4da",
              }}
            >
              TECHNOLOGY PARKS
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="#link4"
              onClick={() => handleItemClick("#link4")}
              style={{
                border: "none",
                borderRadius: "4px",
                backgroundColor: activeItem === "#link4" ? "#28a745" : "",
                color: activeItem === "#link4" ? "#fff" : "",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              LOCATION
            </ListGroup.Item>
          </ListGroup>
        </div>
        {activeItem === "#link1" && <Jobs />}
        {activeItem === "#link2" && <Industries />}
        {activeItem === "#link3" && <TechnoPark />}
        {activeItem === "#link4" && <Location />}
      </div>
      <div
        className="ad"
        style={{ flex: "30%", margin: "5rem", marginTop: "5rem" }}
      >
        <img src="kkk" alt="advertisement"></img>
      </div>
    </section>
  );
};

export default Main;
