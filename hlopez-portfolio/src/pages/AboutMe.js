import React from "react";
import txIMG from "../assets/TexasImg.jpg";
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about">
      <div className="info">
        <h2> Located in Texas</h2>
        <img class="txImg" src={txIMG} />
      </div>
    </div>
  );
}

export default AboutMe;