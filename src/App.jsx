// eslint-disable-next-line no-unused-vars
import React from "react";
import NewMe from "./NewMe.png";
import "./App.css";
import { ImPointRight } from "react-icons/im";
import { ImPointLeft } from "react-icons/im";
import Copyright from "./components.jsx/Copyright";

const App = () => {
  return (
    <div>
      <div className="container">
        <a href="https://mybabb.github.io/Franken-Timer/">
          <p className="title">
            <span className="inline-block text-green-500 font-extrabold mb-[-4px]">
              <ImPointRight size={30} />
            </span>
            &nbsp;<span className="frank ">Franken Timer</span>&nbsp;
            <span className="inline-block text-green-500 font-extrabold mb-[-4px]">
              <ImPointLeft size={30} />
            </span>
          </p>
          <hr className="frankHr" />
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
        
      </div>
      <Copyright />
    </div>
  );
};

export default App;
