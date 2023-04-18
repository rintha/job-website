import React from "react";
import TechSearch from "./TechSearch";
import TechnoCard from "./TechnoCard";

const TechnologyMain = () => {
  return (
    <div>
      <section className="container">
        <TechSearch />
        <div>
          {" "}
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/3mhedDEXKrUfM7bLpaPAu96CJYntzc.jpg"
            title="CyberPark-Kozhikode"
            add="Chief Executive Officer, Cyberpark Kozhikode (A Govt. of Kerala Undertaking) 28/1650D, Park Centre, KSITIL Special Economic Zone, Nellikkode PO, Kozhikode-673 016, Kerala."
            des="Cyberpark, Kozhikode has been envisioned and conceptualized as a major IT hub catering to the northern part of Ke."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/xc92KDZdM8SXpE4Tr7wzYnQWPRvy5H.jpg"
            title="INFOPARK-KOCHI"
            add="Park Office, Athulya, Kakkanad, Kochi - 682 042 India"
            des="Infopark located at Kochi, is the new IT Park being developed by the Government of Kerala. To set up this project."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/F62Yew4SyphPJDQVsNX8bAj5TLvctG.jpg"
            title="INFOPARK-KORATTY"
            add="Chembakam Block Infopark Thrissur, Nalukettu Road, Koratty - 680 308"
            des="INDEEVARAM the new State of the art IT Building is being developed as part of the Second phase expa.."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/hFpBMAX2LRs4amPSNEk3rJ6wZDHxn5.jpg"
            title="MUTHOOT TECHNOPOLIS-ERNAKULAM"
            add="Muthoot Towers, M.G Road, Cochin-682035"
            des="Muthoot Technopolis is a state of the art IT Park and offers the most advanced facilities available in the countr."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/LNb8cUjRQGufY6ZwvAm5s3TDpJXhat.jpg"
            title="PUNE IT PARK"
            add="Vansum Industries, Pune IT Park, 34, Aundh Road, Bhau Patil Marg, Bopodi, Pune 411 020 Maharashtra INDIA"
            des="Every man needs a special environment that imparts tranquility to the spirit and stimulant to mind. Keeping this .."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/H6PeX4G3TyBuSpdvYbWnCRwKQzFc8k.jpg"
            title="SIPCOT IT PARK-CHENNAI"
            add="State Industries Promotion Corporation of Tamil Nadu Ltd (SIPCOT) 19-A, Rukmani Lakshmipathy Road, Egmore, Chennai - 600 008."
            des="To give main thrust to area development activities, the organization involves in the formation of industrial comp..

            "
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/v4GYPXM9WxrRUZdcaADS8ps5TuywFL.jpg"
            title="SMARTCITY-KOCHI"
            add="SmartCity Kochi Infrastructure Pvt Ltd, Kochi, Kerala, India. P.O. Box 682 303"
            des="SmartCity Kochi is an integrated business township promoted by Dubai Holding, a Global Investment Management Company based in the United Arab Emirates and the Government of Kerala. Creati.."
          />
          <TechnoCard
            src="https://technoparkjobs.com/getfile/technologyPark/7aRkn9pLEsShWG482UbxVTvuQBZArf.jpg"
            title="TECHNOCITY-THIRUVANANTHAPURA "
            add="thiruvananthapuram"
            des="Technocity is a technology park an under construction integrated township in Thiruvananthapuram, Kerala, India de.."
          />
        </div>
      </section>
    </div>
  );
};

export default TechnologyMain;
