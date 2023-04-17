import React from "react";
import "./Technology.css";

const TechSearch = () => {
  return (
    <div className="container mb-4">
      <div className=" m-2 company-search-area">
        <form id="technologyParkSearch" className="row">
          <div className="col-12 col-md-4 mb-1 mb-md-0">
            <select id="technologyPark" name="technologyPark">
              <option value="" selected>
                Select Technology Parks
              </option>
              <option value="6">CyberPark-Kozhikode</option>
              <option value="4">Infopark-Kochi</option>
              <option value="5">Infopark-koratty</option>
              <option value="7">Muthoot Technopolis-Ernakulam</option>
              <option value="10">Pune IT Park</option>
              <option value="9">SIPCOT IT Park-Chennai</option>
              <option value="11">SmartCity-Kochi</option>
              <option value="3">Technocity-Thiruvananthapuram</option>
              <option value="2">Technopark-Kollam</option>
              <option value="1">Technopark-Thiruvananthapuram</option>
              <option value="8">TIDEL Park-Chennai</option>
            </select>
            <span
              className="hidden error"
              id="technologyParkError"
              style={{ color: " #e73d4a" }}
            ></span>
          </div>
          <div className="col-12 col-md-3 mb-2 mb-md-0">
            <select id="country" name="country">
              <option value="" selected>
                Select Country
              </option>
              <option value="103">India</option>
            </select>
          </div>

          <div className="col-12 col-md-2">
            <button
              type="button"
              className="search_park  w-100"
              id="search"
              name="search"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechSearch;
