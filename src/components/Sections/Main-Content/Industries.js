import React from "react";
import "./MainStyle.css";
import { Button } from "react-bootstrap";

const Industries = () => {
  return (
    <>
      <div className="industry-list">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="list_ind">
                <a
                  href="https://technoparkjobs.com/search/job/4163636f756e74696e67202f2046696e616e6365"
                  data-industry-id="1"
                >
                  Accounting / Finance
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_ind">
                <a
                  href="https://technoparkjobs.com/search/job/4164766572746973696e67202f205052202f204d522f204576656e74204d616e6167656d656e74"
                  data-industry-id="2"
                >
                  Advertising / PR / MR/ Event Management
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_ind">
                <a
                  href="https://technoparkjobs.com/search/job/4167726963756c74757265202f204461697279"
                  data-industry-id="3"
                >
                  Agriculture / Dairy
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_ind">
                <a
                  href="https://technoparkjobs.com/search/job/416e696d6174696f6e202f2047616d696e67"
                  data-industry-id="4"
                >
                  Animation / Gaming
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="list_ind">
                <a
                  href="https://technoparkjobs.com/search/job/417263686974656374757265202f20496e746572696f722044657369676e"
                  data-industry-id="5"
                >
                  Architecture / Interior Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-end">
        <Button variant="outline-success">view more</Button>
      </div>
    </>
  );
};

export default Industries;
