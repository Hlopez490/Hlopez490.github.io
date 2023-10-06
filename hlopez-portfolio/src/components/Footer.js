import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
          <Link href="https://www.linkedin.com/in/hectorll/" target="_blank" >
              <LinkedInIcon/>
          </Link>
          <Link href="https://github.com/Hlopez490" target="_blank" >
              <GitHubIcon/>
          </Link>
      </div>
      <p> &copy; 2023 Hector Lopez Lopez</p>
    </div>
  );
}

export default Footer;