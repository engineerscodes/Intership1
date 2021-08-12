import React from "react";
import {
  Card,
  Cardimage,
  CardStats,
  Cardtext,
  ParaCard,
  CardWrapper,
  CStat,
  AchorTag,
  Lefts,
  HeadingText,
  CButton,
} from "./CardStyle";
import { useHistory } from "react-router-dom";
const Cards = (props) => {
  const history = useHistory()
  function courseenroll(cost,name) 
  {
    history.push({ pathname: "/Course/Payment", state: [cost, name] });
  }

  return (
    <CardWrapper>
      <Card>
        <Cardimage backgrounds={props.image.default}></Cardimage>
        <Cardtext>
          <HeadingText>{props.cardTitles}</HeadingText>
          <h3>{props.info}</h3>
          <ParaCard>{props.cardText}</ParaCard>
        </Cardtext>

        <CardStats>
          <CStat>
            <AchorTag target="_blank" onClick={props.modalstate}>
              VIEW
            </AchorTag>
            <Lefts>SEAT Left </Lefts>
          </CStat>

          <CStat>
            <CButton
              onClick={() => {
                courseenroll(props.cost, props.cardTitles);
              }}
            >
              ENROLL
            </CButton>
            <Lefts>{1}</Lefts>
          </CStat>
        </CardStats>
      </Card>
    </CardWrapper>
  );
};

export default Cards;
