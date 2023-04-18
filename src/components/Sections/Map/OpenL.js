// import React, { useEffect, useRef } from "react";
// import Map from "ol/Map.js";
// import OSM from "ol/source/OSM.js";
// import TileLayer from "ol/layer/Tile.js";
// import View from "ol/View.js";
// import XYZ from "ol/source/XYZ";

// const OpenL = () => {
//   const mapElement = useRef();
//   const BaseMap = new TileLayer({
//     source: new XYZ({
//       url: 
//       'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     }),
    
//   });
//   useEffect(() => {
//     const map = new Map({
//       target: mapElement.current,
//       layers: [
//         BaseMap,
//         // new TileLayer({
//         //   source: new OSM(),
//         // }),
//       ],
//       view: new View({
//         center: [0, 0],
//         zoom: 2,
//       }),
//     });
//   }, []);
//   return (
//     <div style={{ width: "100vw", height: "100vh" }} ref={mapElement}></div>
//   );
// };

// export default OpenL;
