import styled from "styled-components";

export const MainCards = styled.div`
  margin: 50px;
  overflow: hidden;
  @media screen and (max-width: 760px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 390px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const CardWrapper = styled.div`
  display: block;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 190px 275px 100px;
  grid-template-areas: "images" "texts" "stats";
  border-radius: 28px;
  background-color: white;
  box-shadow: 5px 5px 15px black;
  text-align: center;
  @media screen and (max-width: 440px) {
    grid-template-rows: 190px 290px 100px;
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: 190px 310px 100px;
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: 280px;
    grid-template-rows: 190px 310px 100px;
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: 250px;
    grid-template-rows: 190px 310px 100px;
  }
  @media screen and (max-width: 340px) {
    grid-template-columns: 220px;
    grid-template-rows: 190px 310px 100px;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: 200px;
    grid-template-rows: 190px 310px 100px;
  }
  @media screen and (max-width: 300px) {
    grid-template-columns: 150px;
    grid-template-rows: 190px 310px 100px;
  }
`;

export const Cardimage = styled.div`
  grid-area: images;
  background: url(${({ backgrounds }) => backgrounds});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    z-index: 1;
    grid-row: 1/4;
    border-radius: 10px;
    background-size: cover;
  }
`;

export const Cardtext = styled.div`
  grid-area: texts;
  margin-top: 10px;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const ParaCard = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  height: 140px;
  @media screen and (max-width: 390px) {
    overflow: auto;
    height: 140px;
  }
`;

export const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(255, 7, 110);
`;

export const CStat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  color: white;
`;

export const AchorTag = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: white;
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2px;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Lefts = styled.h3`
  margin: 0px;
  font-size: 22px;
  text-transform: uppercase;
  @media screen and (max-width: 440px) {
    margin-top: 2px;
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 2px;
    font-size: 14px;
  }
`;

export const HeadingText = styled.h1`
  height: 38px;
  font-size: 1.5vw;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    font-size: 2vw;
  }
  @media screen and (max-width: 690px) {
    font-size: 2.5vw;
  }
  @media screen and (max-width: 530px) {
    font-size: 4vw;
  }
`;

export const CButton = styled.button`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  text-transform: uppercase;
  background: rgb(255, 7, 110);
  outline: none;
  border: none;

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2px;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2px;
  }
`;
