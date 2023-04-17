import React from "react";
import "./Companies.css";

const CompanyCard = () => {
  return (
    <div className="container">
      <div
        className="text-center "
        style={{
          border: "solid 1px #c0bebe",
          padding: "25px",
          margin: "10px 5px",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="cmpny-logo">
          <a href="https://technoparkjobs.com/companies/2base-technologies-pvt-ltd-20220711155817">
            <img
              style={{
                maxWidth: "100",
                minHeight: "175px",
                verticalAlign: "middle",
              }}
              src="https://technoparkjobs.com/getfile/companyLogo/eA2npSRy7WuXCZ9DM65kcLHYmBwVQs.jpg"
              alt="employerlogo"
            />
          </a>
        </div>
        <h4>
          <a
            href="https://technoparkjobs.com/companies/2base-technologies-pvt-ltd-20220711155817"
            style={{ textDecoration: "none", color: "black" }}
          >
            2Base Technologies Pvt. L ...{" "}
          </a>
        </h4>
        <h6>
          <a
            href="https://www.2basetechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#24b24c" }}
          >
            https://www.2basetechnologies.com
          </a>
        </h6>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            background: "#1f7acf",
            padding: "7px",
            margin: "25px 0",
            display: "block",
          }}
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
