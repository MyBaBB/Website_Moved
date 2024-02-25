// eslint-disable-next-line no-unused-vars
import React from "react";
import NewMe from "./NewMe.png";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="container">
        <a href="https://mybabb.github.io/Franken-Timer/">
          <p className="title">👉FrankenTimer👈</p>
        </a>
        <p className="introduction">Franken-Timer needed Elbow Room</p>
        <br />

        <a href="https://mybabb.com">
          <img
            src={NewMe}
            alt="newMe"
            width="100"
            height="100"
            className="NewMe"
          />
        </a>
        <a href="https://mybabb.github.io/Franken-Timer/">
          <div className=" justify-center items-center flex">
            <p className="introMyBaBB border border-black rounded-lg p-2 w-fit bg-gradient-to-b from-blue-400 to-blue-800 ">
              Look Right Here
            </p>
          </div>
        </a>
        <p className=" text-white text-center text-[12px]">
          (&quot;Mom&quot; Push-Button!)
        </p>

        <div className="copyright text-amber-900">
          <p>
            <span>
              &lt;&lt;&lt;&copy;MyBaBB <em>8-2013</em>&gt;&gt;&gt;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
