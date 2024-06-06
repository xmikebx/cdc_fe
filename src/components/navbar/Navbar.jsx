import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-left">
        <h className="montserrat-light logotxtleft">CDC</h>
        <img
          className="treelogo"
          src="src\assets\cdctree_logo.png"
          alt="chloe davis counselling logo"
        />
      </div>
      <div className="logo-right">
        <h className="montserrat-regular logotxtright">
          Chloe Davis Counselling
        </h>
        <h className="patrick-hand-regular logotxtrightsmall">
          A Supportive Journey to Change
        </h>
      </div>
      <div id="navlinks" className="montserrat-regular">
        <ul className="navitems">
          <li>About</li>
          <li>Contact</li>
          <li>Links</li>
        </ul>
      </div>
      <div id="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
