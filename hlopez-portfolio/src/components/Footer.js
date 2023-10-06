import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2023 Hector Lopez Lopez</p>
    </div>
  );
}

export default Footer;