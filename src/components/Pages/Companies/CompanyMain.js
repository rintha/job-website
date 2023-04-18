import React from "react";
import "./Companies.css";
import CompanyCard from "./CompanyCard";

const CompanyMain = () => {
  return (
    <>
      <div>
        <div className="d-flex text-center m-5" style={{ width: "80%" }}  >
          <input
            style={{ width: "100%", height: "2em",marginLeft:"25%" }}
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
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/eA2npSRy7WuXCZ9DM65kcLHYmBwVQs.jpg"
              companytitle="2Base Technologies Pvt. L ..."
              companylink="https://www.2basetechnologies.com"
            />
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/zVTS5wDJmdQbAaepskBF7uP2ZrYxNL.jpg"
              companytitle="4TUNE FACTORY"
              companylink="https://4tunefactory.in"
            />
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/GZQfNKaDwjCW476vk9FxBdUyMnsYbh.jpg"
              companytitle="Aatoon Solutions LLP"
              companylink="http://www.aatoon.com"
            />
          </div>
          <div className="d-flex">
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/8ZnukRfQTJFXA5HBLUP2MCVexK6rDW.jpg"
              companytitle="A &amp; A Infotech Solutions "
              companylink="http://www.aainfotechsolutions.com"
            />
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/zvamXxDRteCZbS39FfP46HpMAuBdhk.jpg"
              companytitle="A2zalphabetsolutionz"
              companylink="http://www.a2zalphabetsolutionz.com"
            />
            <CompanyCard
              src="https://technoparkjobs.com/getfile/companyLogo/m5NAwj8SVJutMsHaxpz6UfnF3YELKr.jpg"
              companytitle="AABASOFT TECHNOLOGIES PVT ..."
              companylink="http://www.aabasoft.com"
            />
          </div>
        </div>
        <div class="load-more " id="loadMoreDiv">
          <a href="link">
            <br />
            Load more
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanyMain;
