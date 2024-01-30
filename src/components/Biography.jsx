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
      <p  className="bio">
      A data enthusiast and web development aficionado, I bring a unique blend of technical prowess and creative finesse. Armed with a Bachelor's degree in Computer Science and Mathematics, my academic journey signifies a readiness to tackle complex challenges.

My professional journey revolves around the realms of data analysis and web development, where I thrive in transforming raw data into meaningful insights and crafting seamless digital experiences. Proficient in office tools like Word and Excel, I bridge the gap between technical depth and practical application.

Beyond the code, my skill set extends to graphic design and video editing, allowing me to breathe life into visuals and communicate compelling narratives. My mission is to venture into the professional arena and make a lasting impact with competence, diligence, and a collaborative spirit.

Eager to contribute to innovative projects, I am not merely seeking a career but an opportunity to shape the future of technology and design. Ready to unleash my potential, I am here to be a catalyst for positive change in every project I undertake.
      </p>
  <div className="box">
        <div className="skill card1">
          <div className="overlay"></div>
          <h4>Web devloppement </h4>
          <SiWebpack />
          <p>Full stack web devloppement using laravel, nextjs and django frameworks</p>
        </div>
        <div className="skill card2">
        <div className="overlay"></div>

          <h4>Graphic design</h4>
          <AiOutlineGitlab />
          <p>Freelance digital art and graphic design for clothing brand</p>
        </div>
        <div className="skill card3">
        <div className="overlay"></div>
          <h4>Video Editing</h4>
          <GiVideoConference />
          <p>Video editing sfx and vfx short format</p>
        </div>
      </div>
      <div className="box">
        <div className="skill card4">
        <div className="overlay"></div>
          <h4>Data Analysis</h4>
          <GiVideoConference />
          <p>Data analysis using python, machine learning and data visualization tools</p>
        </div>

      </div>
    </div>
  );
}
