import React from "react";
import { image } from "../data/data";



//return <div> element: id #about
//---->inside div: <h2> with content "About me"
//                 <p> element with any content
//                  <img> element with src attribute set to imported image variable, 
//                          alt attribute: "I made this"

function About() {
  return (
        <div id="#about">
          <h2>About Me</h2>
          <p>I Made This</p>
          <img src={image} alt="I made this"/>
        </div>
  );
}

export default About;
