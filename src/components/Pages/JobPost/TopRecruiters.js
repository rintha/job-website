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
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/TxNC3B8G2HWMVKy6eAu7JPtD9UEbzm.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/7mFGxhRadMw4UeT6kXWc8ZBSur2bLA.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/P49LQhYzEMrZaVtARd2eSB3xTKycuN.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/jd6uPSN5wDcJzHrFRaBy2XkTGQbVmp.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/uExvtyzfwpYc37ZV8BQbHD5mRJ9Cj2.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/27ayNwz8U49jtsGRPpZM5FuAkcXBhr.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/KtS9VJPaBMvpzWLUhCw54QAmrG8Hkx.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/M5HrECusLNBWVfxZhvAGS2DwtFeTPp.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/aCzjUV7mSEshMGfQ3BNJYpT9deWRxk.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/63wGkEsTYzKxDVAjRcBZafLW2Nmryb.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/PwFAHhZ8zeaduc6jJ93CMtWUkSR27r.jpg" />
              <RecCard src="https://employer.technoparkjobs.com/getfile/companyLogo/cfXPkubQFDW8YdMLNAKews6R4GZaTS.jpg" />
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
