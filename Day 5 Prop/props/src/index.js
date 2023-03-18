import React from "react";
import ReactDOM from "react-dom";
import imgtech from "./img/frontend_technologies.png";
import "./index.css";
import { Usercards } from "./usercard";

const root = document.getElementById("root");

const Imgtech = () => {
  return (
    <div>
      <img src={imgtech} />
    </div>
  );
};

const Sub = () => {
  return (
    <section className="mainsection">
      <Usercards />
      <h1 className="head">SUBSCRIBE</h1>
      <p className="info">
        Sign Up with your email adress to recive news and update
      </p>
      <form className="submission">
        <div className="takinginfo">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
        </div>
        <button type="submit" className="submitbtn">
          Subscribe
        </button>
      </form>
    </section>
  );
};
ReactDOM.render(<Sub />, root);
