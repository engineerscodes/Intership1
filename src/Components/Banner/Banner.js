
import React from "react"

import ImgLink from "../../Assets/banner.jpg"

import { BannerContainer ,BannerImg,BannerText} from "./BannerStyle";

const  Banner =()=>{
  
    return (
      <>
        <BannerContainer >
          <BannerText>
              <h1>Learn Anything Here .....</h1>
              <h3>Zero to Hero</h3>

          </BannerText>
          <BannerImg src={ImgLink} alt="Banner" />
        </BannerContainer>
      </>
    );

}


export default Banner;
