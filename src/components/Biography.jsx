import React from "react";
import "./Biography.css";
import { SiWebpack } from "react-icons/si";
import { AiOutlineGitlab } from "react-icons/ai";
import { GiVideoConference } from "react-icons/gi";
export default function Biography() {
  return (
    <div className="biography">
      <h1>Ayman Benchamkha</h1>
      <h2>biography</h2>
      <p>
        a tech enthusiast and a digital artist who's trying to make it in the
        business and have his own dream team gather someday
      </p>
      <div className="box">
        <div className="skill">
          <div className="overlay"></div>
          <h4>Web devloppement</h4>
          <SiWebpack />
          <p>Full stack web devloppement with react and nodejs</p>
        </div>
        <div className="skill">
        <div className="overlay"></div>

          <h4>Graphic design</h4>
          <AiOutlineGitlab />
          <p>Freelance digital art and graphic design for clothing brand</p>
        </div>
        <div className="skill">
        <div className="overlay"></div>

          <h4>video editing</h4>
          <GiVideoConference />
          <p>Video editing sfx and vfx short format</p>
        </div>
      </div>
    </div>
  );
}
