import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
          </nav> //nav elements have 2 child elements 
                            //<a> with href set to #home, context text set to "Home</a>
 );                           //<a>element w/href attribute set to #about, text content set to "About</a>
}

export default NavBar;
