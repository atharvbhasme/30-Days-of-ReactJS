import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const rootelement = document.getElementById("root");
const firstname = "Atharv";
const lastname = "Bhasme";
const country = "India";
const gender = "male";
const email = "atharvbhasme@gmail.com";
const phone = "7249860989";


function Display() {
  return (
    <div className="App">
      <h1>{firstname + " " + lastname}</h1>
      <h3>{country}</h3>
      <h3>{gender}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
    </div>
  );
}

ReactDOM.render(<Display />, rootelement);
