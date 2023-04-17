import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import JobCard from "./JobCard";

const Main = () => {
  return (
    <section className="m-5 " style={{ width: "60rem" }}>
      <div>
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
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/tC6ZbpvfcGxeh97d4TFzSEaD3mnBXJ.jpg" />
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/SCzA5H3nQxYkvyrhjZw7seafMB6K9d.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/EyTGbnUAtvCpeQXRBJ2z4mLHdYhcFk.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" />
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/TxNC3B8G2HWMVKy6eAu7JPtD9UEbzm.jpg" />
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/tC6ZbpvfcGxeh97d4TFzSEaD3mnBXJ.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/SrGeC9J8vHpdLhV7AyBju3U26YzTtf.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/7mFGxhRadMw4UeT6kXWc8ZBSur2bLA.jpg" />
      </div>
      <div className="mt-3 text-center">
        <Button variant="success">view more</Button>
      </div>
    </section>
  );
};

export default Main;
