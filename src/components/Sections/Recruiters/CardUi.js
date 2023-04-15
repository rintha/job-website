import React from "react";
import ImageUi from "./ImageUi";

const CardUi = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
        <div className="col-md-2">
          <ImageUi />
        </div>
      </div>
    </div>
  );
};

export default CardUi;
