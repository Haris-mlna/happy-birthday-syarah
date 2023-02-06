import React from "react";
import { Link } from "react-router-dom";

function Questioner() {
  return (
    <div className="questioner">
      <h1>Questioner</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/result'>
      <button>Result</button>
      </Link>
    </div>
  );
}

export default Questioner;
