import React from "react";
import { Data } from "./Topdata";
import './TopCSS.css'
const TopCat =()=>{
    return (
      <>
        <div className="ContainerEVENTGRID" id="event">
          <div className="EventH1">{"Top categories".toUpperCase()}</div>
          <div className="GRIDS">
            {Data.map((data, index) => (
              <div key={index}>
                <img
                  className="ImageEvents"
                  src={data.imageUrl.default}
                  alt="TOP CAT"
                />
                <div id="topcatspan">{data.info.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );



}

export default TopCat;