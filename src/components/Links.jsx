import React from "react";
import "./Links.css";
export default function Links() {
  return (
    <div className="links">
      <div>
        <a href="https://www.linkedin.com/in/benchamkha-ayman-14aaa4292/" className="btn" >
          <button className="btn-linkedin">LinkedIn</button>
        </a>
      </div>
      {/* <div>
        <a href="" className="btn" >
          <button className="btn-instagram">Instagram</button>
        </a>
      </div> */}
      <div>
        <a href="https://github.com/chigivera" className="btn" >
          <button className="btn-github">GitHub</button>
        </a>
      </div>
      <div>
        <a href="https://next-blog-14.vercel.app/" className="btn" >
          <button className="btn-discord">Projects</button>
        </a>
      </div>
      {/* <div>
        <a href="" className="btn" >
          <button className="btn-reddit">Reddit</button>
        </a>
      </div> */}
      <div>
        <a href="https://docs.google.com/document/d/1cd-GuUFIYhFYWvQ5Iwe2NjUV4prgmTKg_7X_rk7BQO0/edit?usp=sharing" className="btn" >
          <button className="btn-youtube">Resume</button>
        </a>
      </div>
    </div>
  );
}
