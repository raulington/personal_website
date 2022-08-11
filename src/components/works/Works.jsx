import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/Battleship.png",
      title: "Rust Battleship",
      desc:
        "I constructed a game of battleship with Rust that runs on the command line. I developed structure of the game, how the game initializes, and the way game visuals are outputted",
      img:
        "./assets/battle.png",
    },
    {
      id: "2",
      icon: "./assets/Star.png",
      title: "Stellar Classification",
      desc:
        "I trained a random forest classifier and evaluated the accuracy of the model. The program was able to classify stars and recognize a stellar object type based on stellar characteristics. Made with Jupyter Notebook.",
      img:
        "./assets/stellar.png",
    },
    {
      id: "3",
      icon: "./assets/paint.png",
      title: "Artsi",
      desc:
        "I made website that acts as an entry point into the creation of drawings by providing lesson videos and drawing spaces that allows users to follow along. Currently constructed the basic design layout of the website and drawing spaces. Made with Javascript, React, and CSS.",
      img:
        "./assets/artsi.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}