import React from "react";
// import Typical from "react-typical";
import TypeAnimation from "react-type-animation";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100062864088951">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/moira-yang-84922922a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/marche0606/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCvmE5H65yUj-GkePPr0Qu4Q">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/MoiraDust">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Moira</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <TypeAnimation
                  repeat={Infinity}
                  cursor={true}
                  sequence={[
                    "Ethusiastic Developer 😼",
                    1000,
                    "Front End Developer 👩‍💻",
                    1000,
                    "MERN Developer 🥸",
                    1000,
                    "Backend Developer 💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-details-tagline">
                {" "}
                You can download my CV if you are intrested.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Yi_Yang.pdf" download="Yi_Yang_(Moira).pdf">
              <button className="btn highlighted-btn">Download My CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
