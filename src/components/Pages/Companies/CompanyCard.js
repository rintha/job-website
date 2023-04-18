import React from "react";
import "./Companies.css";

const CompanyCard = ({ src, companylink, companytitle }) => {
  return (
    <div className="main">
      <div className="company-list">
        <div className="cmpny-logo">
          <a href="https://technoparkjobs.com/companies/2base-technologies-pvt-ltd-20220711155817">
            <img src={src} alt="employerlogo" />
          </a>
        </div>
        <h4>
          <a href="https://technoparkjobs.com/companies/2base-technologies-pvt-ltd-20220711155817">
            {companytitle}
          </a>
        </h4>
        <h6>
          <a
            href="https://www.2basetechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {companylink}
          </a>
        </h6>
        <a
          href="https://technoparkjobs.com/companies/2base-technologies-pvt-ltd-20220711155817"
          className="view-details"
        >
          View Details
        </a>
      </div>
    
    </div>
  );
};

export default CompanyCard;
