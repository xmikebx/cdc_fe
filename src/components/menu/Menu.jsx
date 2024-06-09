import React, { useState, useEffect } from "react";
import UseAnimation from "react-useanimations";
import radioButton from "react-useanimations/lib/menu2";

import "./Menu.css";

const Menu = () => {
  const [navmenu, setNavMenu] = useState(false);

  console.log(`nav menu state ${navmenu}`);
  console.log(navmenu);

  return (
    <div className={`menu ${navmenu ? "open" : "closed"}`}>
      <div className="hamburger">
        <UseAnimation
          reverse={navmenu}
          onClick={() => {
            setNavMenu(!navmenu);
          }}
          size={40}
          wrapperStyle={{ marginTop: "2px", padding: 10 }}
          animation={radioButton}
        />
      </div>

      <div id="menulinks" className="montserrat-regular">
        <ul className="navitems">
          <li>About</li>
          <li>Contact</li>
          <li>Links</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
