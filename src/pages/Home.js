import React from "react";
import { Link } from "react-router-dom";

import Particless from "./component/Particless";
import bebeHome from "../assets/images/my bebe beautiful number 2.jpg";

function Home() {
  return (
    <div className="home">
      <Particless/>
      <div>
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
          <Link to="/questioner">
            <button className="special-btn">Questioner Section</button>
          </Link>
        </header>
      </div>
    </div>
  );
}

export default Home;
