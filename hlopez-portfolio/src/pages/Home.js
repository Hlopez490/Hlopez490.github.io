import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import meIMG from "../assets/Me.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img class="meImg" src={meIMG} />
        <h2> Hi, I'm Hector</h2>
        <div className="prompt">
          <p>Software Engineer with a passion for change</p>
          <Link href="https://www.linkedin.com/in/hectorll/" target="_blank" >
              <LinkedInIcon/>
          </Link>
          <Link href="https://github.com/Hlopez490" target="_blank" >
              <GitHubIcon/>
          </Link>
          <Link href="mailto:hlopezlopez490@gmail.com" target="_blank" >
              <EmailIcon/>
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="skill-list">
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
          <li className="item">
            <h2>FameWorks</h2>
            <span>React, SKlearn, Pandas, Numpy, MatplotLib </span>
          </li>
          <li className="item">
            <h2>Certifications</h2>
            <span>QVERA Level 1 Engineer, AWS Cloud Practicioner</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;