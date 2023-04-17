import React from "react";
import "./Companies.css";
import CompanyCard from "./CompanyCard";

const CompanyMain = () => {
  return (
    <>
      <div>
        <div className="d-flex text-center m-5" style={{ width: "60%" }}>
          <input
            style={{ width: "50em", height: "2em" }}
            type="text"
            size="lg"
            placeholder="Company Name"
            className="mb-2 me-2"
          />
          <br />
          <button style={{ width: "10em", height: "2em" }} variant="success">
            Search
          </button>
        </div>
        <div className="container ">
          <div className="d-flex">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
          <div className="d-flex">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyMain;
