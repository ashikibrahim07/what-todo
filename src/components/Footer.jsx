import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="gradient-text">
        Copyright © <span className="brand">What Todo!?.&nbsp;</span>
        {new Date().getFullYear()} All Rights Reserved. <br />
        <p className="gradient-text">
          Checked off by{" "}
          <a
            href="https://ashik-ibrahim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Ashik Ibrahim.
          </a>{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
