import React from "react";
import "./style/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          alt="unilogo"
          className="footer-left-img"
          src={require("../images/unilogo.png")}
        ></img>
      </div>

      <div className="footer-middle">
        <div className="footer-middle-contact">Contact Us</div>
        <div className="footer-middle-num">+7(777)-777-77-77</div>
        <div className="footer-middle-social">
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/aitu2020info"><img
            alt="send"
            className="footer-middle-send"
            src={require("../images/send.png")}
          ></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/astana_it_university/"><img
            alt="instagram"
            className="footer-middle-instagram"
            src={require("../images/instagram.png")}
          ></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/astanaituniversity/"><img
            alt="facebook"
            className="footer-middle-facebook"
            src={require("../images/facebook.png")}
          ></img></a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-feedback">Leave Your Feedback</div>
        <div className="footer-right-text">
            <div className="footer-right-text-content"><img
            alt="send2"
            className="footer-right-send2"
            src={require("../images/send2.png")}
          ></img>Join our Telegram chat and leave your feedback.</div>
            <div className="footer-right-text-content"><img
            alt="like"
            className="footer-right-like"
            src={require("../images/like.png")}
          ></img>Go to the Google Forms and help us to make course better.</div>
        </div>
      </div>
    </div>
  );
};
