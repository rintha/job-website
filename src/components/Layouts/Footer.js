import React from "react";
import fbg from "../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "auto",
        color: "whitesmoke",
      }}
    >
      <div
        style={{
          background: `linear-gradient(0deg, #000000d1, #054a84), 
              url(${fbg}) center center / cover no-repeat`,
          padding: "50px 0",
        }}
      >
        <div
          className="text-center container"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "left", flexBasis: "25%" }}>
              <p style={{ fontSize: "18px" }}>Quick Links</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "14px" }}>About Us</li>
                <li style={{ fontSize: "14px" }}>Help Centre</li>
                <li style={{ fontSize: "14px" }}>Contact Us</li>
                <li style={{ fontSize: "14px" }}>Authorized Institutes</li>
                <li style={{ fontSize: "14px" }}>Blog</li>
                <li style={{ fontSize: "14px" }}>Post a Job</li>
              </ul>
            </div>
            <div style={{ textAlign: "left", flexBasis: "25%" }}>
              <p style={{ fontSize: "18px" }}>Legal</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "14px" }}>Terms & Conditions</li>
                <li style={{ fontSize: "14px" }}>Fraud Alert</li>
                <li style={{ fontSize: "14px" }}>Security Advice</li>
                <li style={{ fontSize: "14px" }}>Privacy Policy</li>
                <li style={{ fontSize: "14px" }}>Cookies Policy</li>
              </ul>
            </div>
            <div style={{ textAlign: "left", flexBasis: "25%" }}>
              <p style={{ fontSize: "18px" }}>Work With Us</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "14px" }}>Advertise With Us</li>
                <li style={{ fontSize: "14px" }}>Report a Bug</li>
              </ul>
            </div>
            <div style={{ textAlign: "left", flexBasis: "25%" }}>
              <p style={{ fontSize: "18px" }}>Follow Us</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: "14px" }}>
                  <i>hy</i>
                </li>
                <li style={{ fontSize: "14px" }}>
                  <img
                    src="https://technoparkjobs.com/frontend/images/nasscom-member.png"
                    alt="logo"
                    style={{ maxWidth: "100px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-muted text-center"
        style={{
          padding: "1.6em",
          backgroundColor: "#011b30",
          fontSize: "14px",
        }}
      >
        All rights reserved @ 2023{" "}
        <span style={{ fontSize: "15px" }} className="text-white">
          TPHRC PVT LTD
        </span>
      </div>
    </div>
  );
};

export default Footer;
