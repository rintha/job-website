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
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/tC6ZbpvfcGxeh97d4TFzSEaD3mnBXJ.jpg" 
        title="Magento Developer" company="Penguin IT Academy" place="Kochi"/>
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/SCzA5H3nQxYkvyrhjZw7seafMB6K9d.jpg" 
        title="E-Mail Marketing Expert" company="RSGP PVT Ltd" place="Kochi"/>
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/EyTGbnUAtvCpeQXRBJ2z4mLHdYhcFk.jpg"
        title="Business Developemt Manager" company="Aspire" place="Kochi" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg"
         title="Python Developer" company="Juniour" place="Kochi" />
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/TxNC3B8G2HWMVKy6eAu7JPtD9UEbzm.jpg"
         title="Magento Developer" company="Yarab Technologies" place="Kochi" />
        <JobCard src="//technoparkjobs.com/getfile/companyLogo/tC6ZbpvfcGxeh97d4TFzSEaD3mnBXJ.jpg" 
        title="E-Mail Marketing Expert" company="Penguin IT Academy" place="Kochi"/>
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/SrGeC9J8vHpdLhV7AyBju3U26YzTtf.jpg" 
        title="Business Developemt Manager" company="IQMatrix" place="Kochi"/>
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" 
         title="Python Developer" company="Juniour" place="Kochi" />
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" 
         title="Python Developer" company="Juniour" place="Kochi"/>
        <JobCard src="https://technoparkjobs.com/getfile/companyLogo/7mFGxhRadMw4UeT6kXWc8ZBSur2bLA.jpg" 
         title="Python Developer" company="APPSTEAM" place="Kochi"/>
      </div>
      <div className="mt-3 text-center">
        <Button variant="success">view more</Button>
      </div>
    </section>
  );
};

export default Main;
