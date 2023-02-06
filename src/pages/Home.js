import React from "react";
import { Link } from "react-router-dom";

import bebeHome from "../assets/images/my bebe beautiful number 2.jpg";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={bebeHome} alt="BebeTantik" className="bebeHome" />
        <div className="triangle"></div>
        <div className="layout"></div>
        <h1>
          Happy Birthday
          <br />
          <span>Syarah Dzakiyah</span>
          <br />
          <span className="wish">"Wish You All The Best"</span>
          <br />
        </h1>
        <button className="special-btn">Questioner Section</button>
      </header>
    </div>
  );
}

export default Home;
