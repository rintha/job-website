import React from "react";
import compbg from "../../../assets/a-z-banner.jpg";


const CompanyImg = () => {
  return (
    <div
      fluid
      style={{
        position: "relative",
        height: "200px",
        backgroundImage: `url(${compbg})`,
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
        A-Z COMPANY LIST
      </p>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(0deg, rgba(10, 10, 10, 0.72), rgba(37, 34, 34, 0.91))",
        }}
      />
    </div>
  );
};

export default CompanyImg;
