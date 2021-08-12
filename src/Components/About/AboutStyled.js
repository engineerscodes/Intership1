import styled from "styled-components";
import { Link } from "react-router-dom";


export const AboutContainer = styled.div`
  color: #d3d3d3;
  background: rgb(1, 6, 6);
`;
export const AboutHolder = styled.div`
  display: flex;
  height: 850px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    height: 900px;
  }
`;

export const ExternalLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  color: black;
`;

export const TextF = styled.div`
  margin-top: 50px;
  max-height: 420px;
  max-width: 520px;
  padding-left: 20px;
  @media screen and (max-width: 1120px) {
    max-width: 450px !important;
  }
  @media screen and (max-width: 1000px) {
    max-width: 400px !important;
  }
  @media screen and (max-width: 960px) {
    max-width: 520px !important;
    position: relative;
    top: -40px;
  }
`;
export const TextF2 = styled.div`
  margin-top: 50px;
  max-height: 420px;
  max-width: 520px;
  padding-left: 25px;
  @media screen and (max-width: 1120px) {
    max-width: 450px !important;
  }
  @media screen and (max-width: 100px) {
    max-width: 400px !important;
  }
  @media screen and (max-width: 960px) {
    max-width: 520px !important;
    position: relative;
    top: -40px;
  }
`;

export const TopLine = styled.p`
  font-size: 20px;
  line-height: 16px;
  font-weight: bolder;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: rgb(1, 191, 113);
`;

export const TopHeading = styled.h1`
  text-transform: uppercase;
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: rgb(247, 248, 250);
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(255, 255, 255);
`;

export const ImgHolder = styled.img`
  width: 100%;
  max-height: 350px;
  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;