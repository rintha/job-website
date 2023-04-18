import React from "react";
import tpbg from "../../../assets/tp-bg.jpg";
import "./Technology.css";

const TechImg = () => {
  return (
    <div
      fluid
      style={{
        position: "relative",
        height: "300px",
        backgroundImage: `url(${tpbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "#fff",
          fontSize: "20px",
        }}
      >
        TECHNOLOGY PARKS{" "}
      </p>
      <div className="para">
        <p
          className="para-text"
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "#fff",
            fontSize: "14px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Technology Parks are the models for capitalization on knowledge in
          national and regional development are the effective means of transfer
          of technology construction and attraction of companies with high added
          value.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default TechImg;
