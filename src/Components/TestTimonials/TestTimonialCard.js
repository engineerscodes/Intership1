import React from "react";
import Carousel from "react-elastic-carousel";
import "./TestTimonialStyle.css";
import { TestimonialData as Data } from "./TestData";
function TestTimonialCardComponent() {
  return (
    <>
      <Carousel breakPoints={breakPoints} className="TestMon">
        {Data.map((data, index) => (
          <TsMainCard
            image={data.image.default}
            key={index}
            testimony={data.testimony}
            author={data.author}
          />
        ))}
      </Carousel>
    </>
  );
}

const TsMainCard = (props) => (
  <>
    <div className="TsConatiner">
      <div className="TS1">
        <img
          className="ImageTsCard"
          src={props.image}
          alt="Images"
          width="147px"
          height="220px"
        />
      </div>

      <div className="TS2">
        <p>
          {props.testimony} <span>{props.author}</span>
        </p>
      </div>
    </div>
  </>
);

// Styles

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 2000, itemsToShow: 1 },
];

export default TestTimonialCardComponent;
