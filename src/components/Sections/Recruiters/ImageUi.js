import React from "react";

const ImageUi = ({src}) => {
  return (
    <div className="m-2">
      <a href="https://technoparkjobs.com/companies/companies/83">
      <img
       src={src}
        alt=""
        style={{ width: "127px", height: "72px", border: "1px solid #ccc", borderRadius:"2px" }}
        />
      </a>
    </div>
  );
};

export default ImageUi;
