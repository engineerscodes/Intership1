import React from "react";
import {
  AboutContainer,
  AboutHolder,
  TextF,
  TopLine,
  TopHeading,
  Subtitle,
  ImgHolder,
  TextF2,
} from "./AboutStyled";
import Img from '../../Assets/sm-1.jpg';

const About = () => {
  return (
    <>
      <AboutContainer id="home">
        <AboutHolder>
          <TextF>
            <ImgHolder src={Img} alt="Banner"  />
          </TextF>
          <TextF2>
            <TopLine>Edul4ol </TopLine>
            <TopHeading>Teaching with multimedia learning content</TopHeading>
            <Subtitle>
              This platform enables the users to learn new things by allowing
              them to buy the courses from a list of many available courses at a
              very low price. All the courses are well designed and they have
              adequate content to make you understand the respective topic well.
            </Subtitle>
          </TextF2>
        </AboutHolder>
      </AboutContainer>
    </>
  );
}

export default About;
