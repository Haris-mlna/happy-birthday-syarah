import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bebeHome from "../assets/images/my bebe beautiful number 2.jpg";
import Particless from "./component/Particless";

function Result() {
  const score = localStorage.getItem("result");
  const [scoreWord, setScoreWord] = useState("");

  useEffect(() => {
    if (score < 4) {
      setScoreWord("You are not my baby ");
    } else if (score < 8) {
      setScoreWord('You are maybe my baby')
    } else if (score < 10) {
      setScoreWord(`I Love You Bebe`)
    }
  }, []);

  return (
    <div className="result">
      <Particless/>
      <header className="home-header">
        <img src={bebeHome} alt="BebeTantik" className="bebeHome" />
        <div className="triangle"></div>
        <div className="layout"></div>
        <h1>
          Happy Birthday
          <br />
          <span>Syarah Dzakiyah</span>
          <br />
          <span className="wish">{score}/10</span>
          <br />
          <span className="wish">"{scoreWord}"</span>
          <br />
        </h1>
      </header>
    </div>
  );
}

export default Result;
