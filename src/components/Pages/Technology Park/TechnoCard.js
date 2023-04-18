import React from "react";
import "./Technology.css";

const TechnoCard = ({src,title,des,add}) => {
  return (
    <div className="container mb-4">
      <div
        className="card p-3"
        style={{
          background: "#f0f5f4",
          width: "45rem",
          marginTop: "4rem",
          border: "0px",
          borderRadius: "0px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        }}
      >
        <div className="row img-md-cover d-flex align-items-center">
          <div className="col-12 col-md-12 col-lg-6 text-lg-left">
            <h5>
              <b>{title}</b>
            </h5>
            <p style={{ fontSize: "14px" }}>
             {des}
            </p>
            <div
              className="address"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              <h6 style={{ lineHeight: ".5rem" }}>ADDRESS</h6>
              <p
                className="text-muted"
                style={{ fontSize: "14px", lineHeight: "1rem" }}
              >
                {add}
              </p>
            </div>
            <div className="email">
              <h4 style={{ fontSize: "14px" }}>EMAIL ADDRESS</h4>
              <p
                className="text-muted"
                style={{
                  fontSize: "14px",
                  lineHeight: "0rem",
                }}
              >
                Not Available
              </p>
            </div>
          </div>
          <div className="img col-12 col-md-12 col-lg-6">
            <img
              src={src}
              alt="cyberpark"
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
          <div className="mt-3">
            <p className="text-muted" style={{ fontSize: "14px" }}>
              Last Updated <span> · </span>18 May 2019
            </p>
          </div>
          <div className="social ">
            <button className="btn btn-outline-success">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnoCard;
