import React from "react";
import "./style.css";
import Discord from "../../assets/image/discord.png";
import Twitter from "../../assets/image/twitter.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="col-md-12 text-center mb-3">
        <span className="mr-5">
          <a
            href="https://twitter.com/dicedegens"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter" className="twitter-icon" />
          </a>
        </span>
        <span>
          <a
            href="https://discord.gg/Ym9VETwz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="Discord" className="discord-icon" />
          </a>
        </span>
      </div>
    </div>
  );
}
