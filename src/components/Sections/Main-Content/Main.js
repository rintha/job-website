import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import JobCard from "./JobCard";

const Main = () => {
  return (
    <section className="m-5 "style={{ width: "60rem" }}>
      <div >
          <ListGroup key="xl" horizontal="xl">
            <ListGroup.Item action href="#link1">
              LATEST JOBS
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              INDUSTRIES
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              TECHNOLOGY PARKS
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              LOCATION
            </ListGroup.Item>
          </ListGroup>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
      </div>
      <div className="mt-3 text-center"><Button variant="success">view more</Button></div>
    </section>
  );
};

export default Main;
