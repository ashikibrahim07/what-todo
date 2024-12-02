import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="gradient-text">
        Copyright © <span className="brand">What Todo!?.&nbsp;</span>{" "}
        {new Date().getFullYear()} All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
