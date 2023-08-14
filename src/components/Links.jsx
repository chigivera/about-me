import React from "react";
import "./Links.css";
export default function Links() {
  return (
    <div className="links">
      <div>
        <a href="linkedin-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-linkedin">LinkedIn</button>
        </a>
      </div>
      <div>
        <a href="instagram-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-instagram">Instagram</button>
        </a>
      </div>
      <div>
        <a href="github-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-github">GitHub</button>
        </a>
      </div>
      <div>
        <a href="discord-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-discord">Discord</button>
        </a>
      </div>
      <div>
        <a href="reddit-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-reddit">Reddit</button>
        </a>
      </div>
      <div>
        <a href="youtube-url" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-youtube">YouTube</button>
        </a>
      </div>
    </div>
  );
}
