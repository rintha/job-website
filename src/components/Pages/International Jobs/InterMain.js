import React from "react";
import "./International.css"

const InterMain = () => {
  return (
    <div>
      <div className="col-md-9 job-browse-international">
        <p style={{ fontSize: "14px" }} className="heading">
          Jobs by Location
        </p>
        <div className="section_title_line_medium"></div>

        <ul className="countrylistitem">
          <li className="col-md-3">
            <a href="https://technoparkjobs.com/search/job/international/496e646961">
              <img
                src="https://technoparkjobs.com/frontend/images/flags/India.png"
                alt=""
              />
              <h6>India</h6>
              <p>View Jobs</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InterMain;
