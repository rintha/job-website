import React from "react";
import jobbg from "../../../assets/jobs_bg.jpg";

const HeaderImgIn = () => {
  return (
    <div
      fluid
      style={{
        position: "relative",
        height: "200px",
        backgroundImage: `url(${jobbg})`,
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
        INTERNATIONAL JOBS
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
            "linear-gradient(0deg, rgba(10, 10, 10, 0.58), rgba(37, 34, 34, 0.72))",
        }}
      />
    </div>
  );
};

export default HeaderImgIn;
