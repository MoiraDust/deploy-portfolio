import React, { useState } from "react";
import TypeAnimation from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mail.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelMessage = (e) => {
    setMessage(e.target.value);
  };
  //   console.log(name);
  //   console.log(email);
  //   console.log(message);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      //   console.log(data);
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              repeat={Infinity}
              cursor={true}
              sequence={["Cet In Touch 📨", 1000]}
            />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>My Contact Details</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            {/* <input type="text" onChange={handelName} value={name} /> */}
            <input type="text" value="Yi Yang (Moira)" readOnly={true} />

            <label htmlFor="email">Email</label>
            {/* <input type="email" onChange={handelEmail} value={email} /> */}
            <input
              type="email"
              value="moira.study.email@gmail.com"
              readOnly={true}
            />

            <label htmlFor="email">Phone Number</label>
            {/* <input type="email" onChange={handelEmail} value={email} /> */}
            <input type="text" value="0478141899" readOnly={true} />

            {/* <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handelMessage} value={message} /> */}

            {/* <div className="send-btn">
              <button type="submit">
                SEND <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="no connection" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div> */}
          </form>
        </div>
        <div className="back-to-home">
          <button onClick={() => ScrollService.scrollHandler.scrollToHome()}>
            Back Home⬆️
          </button>
        </div>
      </div>
    </div>
  );
}
