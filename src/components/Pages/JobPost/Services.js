import React from "react";

const Services = () => {
  return (
    <div
      className="justify-content-center align-items-center mt-5"
      style={{ width: "100%", height: "200px" }}
    >
      <div className="d-flex  flex-wrap">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <h4>Job Advertising</h4>
          <hr />
          <p>
            Collaborate with us and get connected to more than 100K+ highly
            engaged potential candidates.
          </p>
        </div>
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <h4>Social Recruiting</h4>
          <hr />
          <p>
            Our Networks can help you proactively search for potential
            candidates and encourage them to apply to your Job Vacancies.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h4>News & Events</h4>
          <hr />
          <p>
            we help you share your company's latest news and events with the
            right audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
