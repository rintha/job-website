import React from "react";
import fbg from "../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url(${fbg}) center center / cover no-repeat`,
          padding: "200px",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div
        className="text-center"
        style={{
          padding: "10px",
          backgroundColor: "#011b30",
          color: "#858585",
        }}
      >
        All rights reserved @ 2023{" "}
        <span className="text-white">TPHRC PVT LTD</span>
      </div>
    </div>
  );
};

export default Footer;
