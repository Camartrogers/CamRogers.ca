import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import Title from "./Title";
import Back from "./Back";
import Nav from "./Nav";

function Header() {
  const location = useLocation();

  const [flash, setFlash] = useState("hide");
  useEffect(() => {
    //function to change hide/show class
    function hideShow() {
      if (flash == "hide") {
        setFlash("show");
      }
      if (flash == "show") {
        setFlash("hide");
      }
    }

    //Run hide/show every second
    const interval = setInterval(() => {
      hideShow();
    }, 1000);
    return () => clearInterval(interval);
  }, [flash]);

  return (
    <header>
      <div>
        <Link to="/home">
          <h1>
            <Title />
            <span id="underscore" className={flash}>
              _
            </span>
          </h1>
        </Link>
        {/* <p className="header-career">Front-End Web Developer</p> */}
        {location.pathname == "/home" ? <Nav /> : <Back />}
      </div>
    </header>
  );
}

export default Header;
