import React from "react";
import "./TopRecruiters.css";
import RecCard from "./RecCard";

const TopRecruiters = () => {
  return (
    <section>
      <div className="container-rec">
        <div className="main-div">
          <div className="sub-div sub-div-1">
            <div className="btn-cont" style={{ margin: "1rem " }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Top Employers</p>
                <button
                  style={{
                    borderRadius: "20px",
                    color: "white",
                    padding: "5px 20px",
                  }}
                >
                  View All
                </button>
              </div>
            </div>

            <div className="rec-card-container">
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
              <RecCard />
            </div>
          </div>
          <div className="sub-div sub-div-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OdHVcIUM_Jw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
