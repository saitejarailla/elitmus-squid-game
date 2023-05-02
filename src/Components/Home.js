import React from "react";
import "./Home.css";
import titleImg from "./images/title.png";
import playerImg from "./images/player.png";
import level1Img from "./images/level.png";
import level2Img from "./images/level2.png";
import level3Img from "./images/level3.png";
import downArrowsImg from "./images/downarrows.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home(props) {
  const navigate = useNavigate();

  const [audio] = useState(new Audio("./music/bg.mp3"));

  useEffect(() => {
    audio
      .play()
      .then(() => console.log("Audio played home successfully"))
      .catch((error) => console.error("Error playing audio:", error));
  }, []);
  const handleInteraction = () => {
    audio.pause();
  };

  let home = () => {
    navigate("");
  };
  let level1 = () => {
    navigate("/level1");
    handleInteraction();
  };
  let level2 = () => {
    navigate("/level2");
    handleInteraction();
  };
  let level3 = () => {
    navigate("/level3");
    handleInteraction();
  };
  return (
    <div className="App">
      {/* <img
        src={playerImg}
        width="80%"
        id="doll"
        className={props.currentLevel === 4 ? "kickOut" : ""}
        alt="no img"
      /> */}
      <img src={titleImg} width="70%" className="title" alt="no img" />
      <img
        src={playerImg}
        width="5%"
        alt="no img"
        className={
          props.currentLevel === 1
            ? "player1"
            : `${
                props.currentLevel === 2
                  ? "player1 moveToLevel2"
                  : `${
                      props.currentLevel === 3
                        ? "player2 moveToLevel3"
                        : `${
                            props.currentLevel === 4
                              ? "player3 moveToLevelTreasure"
                              : " "
                          }`
                    }`
              }`
        }
        onClick={
          props.currentLevel === 1
            ? level1
            : props.currentLevel === 2
            ? level2
            : props.currentLevel === 3
            ? level3
            : home
        }
      />
      <div
        className="level one"
        style={{
          visibility: `${props.currentLevel === 1 ? "visible" : "hidden"}`,
        }}
      >
        <p>
          <span>LEVEL 1</span>
        </p>
        <img src={downArrowsImg} width="30%" className="arrows" alt="no img" />
      </div>
      <div
        className="level two"
        style={{
          visibility: `${props.currentLevel === 2 ? "visible" : "hidden"}`,
        }}
      >
        <p>
          <span></span>
        </p>
        <img src={downArrowsImg} width="30%" className="arrows" alt="no img" />
      </div>
      <div
        className="level three"
        style={{
          visibility: `${props.currentLevel === 3 ? "visible" : "hidden"}`,
        }}
      >
        <p>
          <span>LEVEL 3</span>
        </p>
        <img src={downArrowsImg} width="30%" className="arrows" alt="no img" />
      </div>
      <img src={level1Img} className="L1" onClick={level1} alt="no img" />
      <img
        src={level2Img}
        className="L2"
        onClick={props.currentLevel === 2 ? level2 : home}
        alt="no img"
      />
      <img
        src={level3Img}
        className="L3"
        onClick={props.currentLevel === 3 ? level3 : home}
        alt="no img"
      />
      <img src='/images/money.gif' className={` ${props.currentLevel === 4? "success": "d-none "}` } width={"100%"} alt="no img" />
    </div>
  );
}

export default Home;
