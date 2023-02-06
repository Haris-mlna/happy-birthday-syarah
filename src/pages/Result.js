import React from "react";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <h1>Result</h1>
        <Link to='/'>
            <button>
                HOME
            </button>
        </Link>
    </div>
  );
}

export default Result;
