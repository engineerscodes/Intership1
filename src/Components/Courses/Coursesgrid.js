import React, { useState } from "react";
import { Teamgrids } from "./CoursesGridStyle";
import Cards from "./Card";
import { DisplayListEvent, DisplayH1 } from "./CoursesGridStyle";
//import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";
import { CourseData as data } from "./CourseData";
//import CModal from "./CustomeModal";
import Modal from "react-modal";
import { useEffect } from "react";
import "./modal.css";
import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");
const CourseGrid = () => {
  const history = useHistory();
  function courseenroll(cost, name) {
    history.push({ pathname: "/Course/Payment", state: [cost, name] });
  }
  const [modalOpen, setmodal] = useState(false);
  const [modalIndex, setmodalIndex] = useState(0);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      maxWidth: "80%",
      minHeight: "70vh",
      transform: "translate(-50%, -40%)",
      padding: "0",
    },
    overlay: {
      zIndex: 1000,
    },
  };

  function SetSateModel(open, index) {
    setmodal(open);
    setmodalIndex(index);
  }

  return (
    <>
      <DisplayListEvent>
        <div style={{ height: "50px" }}></div>
      </DisplayListEvent>
      <DisplayListEvent>
        <DisplayH1 style={{ paddingBottom: "50px" }}> COURSES </DisplayH1>
      </DisplayListEvent>

      <DisplayListEvent>
        <Teamgrids>
          {data.map((data, index) => (
            <Cards
              key={index}
              cardText={data.about}
              cardTitles={data.Name.toUpperCase()}
              image={data.ImgUrl}
              info={data.info}
              cost={data.cost}
              modalstate={() => SetSateModel(true, index)}
            />
          ))}
        </Teamgrids>
      </DisplayListEvent>

      <DisplayListEvent>
        <Modal isOpen={modalOpen} style={customStyles}>
          <div id="modalcon">
            <div id="modalheader">
              <div>
                <h1>{data[modalIndex].Name.toUpperCase()}</h1>
              </div>
              <div>
                <button onClick={() => setmodal(false)}> x</button>
              </div>
            </div>
            <div id="modalbody">
              <div id="modalimg">
                <div>
                  <img src={data[modalIndex].ImgUrl.default} alt="img" />
                </div>
                <div>
                  <button style={{ cursor: "unset" }}>PAY </button>
                  <button
                    onClick={() => {
                      courseenroll(
                        data[modalIndex].cost,
                        data[modalIndex].Name
                      );
                    }}
                  >
                    {data[modalIndex].cost}
                  </button>
                </div>
              </div>
              <div>
                <p>{data[modalIndex].metadata}</p>
              </div>
            </div>
          </div>
        </Modal>
      </DisplayListEvent>
      <DisplayListEvent>
        <div style={{ height: "100px" }}></div>
      </DisplayListEvent>
    </>
  );
};
export default CourseGrid;
