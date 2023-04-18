import React from "react";
import { Button } from "react-bootstrap";

const TechnoMore = () => {
  return (
    <section>
      <div className="main ">
        <div className="row">
          <div
            className="col-md-6 align-items-center "
            style={{ borderRight: "5px solid green" }}
          >
            <div className="text "
            style={{paddingTop:"30%",paddingLeft:"15px",textAlign: "justify"}}>
              <h2>
                Discover how{" "}
                <span className="text-success">TECHNOPARKJOBS.COM</span>{" "}
                <br></br>can help you find &amp; Hire talented people.
              </h2>
              <div className="section_title_line_medium-new pb_30"></div>

              <p>
                We have a one-stop solution for your Hiring needs. We are aiming
                to bridge the gap between Employers &amp; Jobseekers. Start
                Hiring now with a
                <strong>
                  <span> 365-day free trial Recruiter account </span>
                </strong>
                on India&#039;s most trusted Job Site.
              </p>
              <Button variant="success">Free Recruiter Account</Button>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url('https://technoparkjobs.com/frontend/images/man.jpg')`,
              backgroundAttachment: "fixed",
              backgroundSize: "fit",
              backgroundPosition: "right",
              width: "50%",
              height: "580px",
            }}
            className="img"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TechnoMore;
