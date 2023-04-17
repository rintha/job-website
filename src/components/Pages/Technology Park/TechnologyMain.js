import React from "react";
import TechSearch from "./TechSearch";
import TechnoCard from "./TechnoCard";

const TechnologyMain = () => {
  return (
    <div >
    <section  className="container">
      <TechSearch />
      <div >
        {" "}
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
        <TechnoCard />
      </div>
    </section>
    </div>
  );
};

export default TechnologyMain;
