import React from "react";
import "./CareerCard.css";

const CareerCard = () => {
  return (
    <>
      <div
        className="d-flex m-3 ms-5 align-items-center"
        
      >
        <div
          className="card p-4 me-3"
          style={{
            width: "20rem",
            border: "none",
            borderRadius: 0,
            margin: "10px",
          }}
        >
          <div className="align-items-center">
            <img
              className="mb-4"
              style={{ width: "8rem", height: "5rem" }}
              src="https://technoparkjobs.com/frontend/images/services/e-lerning.png"
              alt=""
            />
          </div>
          <h4
            style={{
              color: "green",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            E-LEARNING
          </h4>
          <p style={{ fontSize: "13px" }}>
            Learn new trending skills with Course Xpress for getting a Better
            Job!
          </p>
          <div
            className="bg-success text-white p-3"
            style={{ display: "block" }}
          >
            JOIN NOW
          </div>
        </div>
        <div
          className="card p-4 me-3"
          style={{
            width: "20rem",
            border: "none",
            borderRadius: 0,
            margin: "10px",
          }}
        >
          <div className="align-items-center">
            <img
              className="mb-4"
              style={{ width: "8rem", height: "5rem" }}
              src="https://technoparkjobs.com/frontend/images/services/e-lerning.png"
              alt=""
            />
          </div>
          <h4
            style={{
              color: "green",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            BLOG
          </h4>
          <p style={{ fontSize: "13px" }}>
            Our blog will assist you in locating better job market trends,
            interview patterns..
          </p>
          <div
            className="bg-success text-white p-3"
            style={{ display: "block" }}
          >
            LET'S READ
          </div>
        </div>
        <div
          className="card p-4"
          style={{
            width: "20rem",
            border: "none",
            borderRadius: 0,
            margin: "10px",
          }}
        >
          <div className="align-items-center">
            <img
              className="mb-4"
              style={{ width: "8rem", height: "5rem" }}
              src="https://technoparkjobs.com/frontend/images/services/e-lerning.png"
              alt=""
            />
          </div>
          <h4
            style={{
              color: "green",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            POST A JOB
          </h4>
          <p style={{ fontSize: "13px" }}>
            Get a quick and Hassle-free Job Posting experience.
          </p>
          <div
            className="bg-success text-white p-3"
            style={{ display: "block" }}
          >
            JOIN NOW
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
