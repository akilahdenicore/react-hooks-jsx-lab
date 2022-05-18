import React from "react";
import { name, city } from "../data/data.js";

//could return <div> id #home
//-inside div, one child <h1> element style attribute color "firebrick"
//-------->content "Name is a Web Developer from City"
//use imported name and city variables inside JSX elements
function Home() {     
  // update the JSX being returned!
  return ( <div id="#home">
            <h1 style={{ color : "firebrick" }}>
              {name} is a Web Developer from {city}
            </h1>
       </div>
  );
}

export default Home;
