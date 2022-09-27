import React from "react";
import Links from "./Links";

function About(probs) {
  if(probs.bio){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{probs.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={probs.github} linkedin={probs.linkedin} />
    </div>
  );
}
else{
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

    </div>
  )
}
}

export default About;
