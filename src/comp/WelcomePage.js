import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "./Link";
import "./style/welcomepage.css";
import Learn from "../images/learn.svg";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <Header />
      <iframe className="video" src="https://www.youtube.com/embed/uYnuf2xTOm8?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=uYnuf2xTOm8"></iframe>
      <div className="content">
        <div className="content-left">
          <div className="content-left-header">Research Methods & Tools</div>
          <div className="content-left-text">
            Designed for university students, this AITU Edu course provides an
            information about methods and tools of research.
          </div>
          <Link href="/course">
            <button className="content-left-btn">Go to the course</button>
          </Link>
        </div>
        <div className="content-right">
          <img src={require("../images/aitu.png")}></img>
          
        </div>
      </div>

      <div className="content-learn">
        <div className="learn-content">
          <div className="learn-content-left">
            <img className="learn-content-img" src={Learn}></img>
          </div>
          <div className="learn-content-right">
            <div className="learn-content-right-header">What You’ll Learn</div>
            <div className="learn-content-right-text">
              Research Methods & Tools will teach you how to think beyond the
              spreadsheet, and effectively use data to tackle your business
              decisions, becoming a stronger manager. By the end of the course,
              you should understand how to create a data-driven framework for
              your organization or yourself; develop hypotheses and insights
              from visualization; identify data mistakes or missing components;
              and, speak the language of data science across themes such as
              forecasting, linear regressions, and machine learning to better
              lead your team to long-term success.
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="instructor">
        <div className="instructor-header">Your instructor</div>

        <div className="instructor-content">
          <div className="instructor-content-left">
            <div className="instructor-content-left-text">
              “Believe in yourself, dream and you will achieve everything in
              your life! Don't worry about what you didn’t know. Worry about
              what you want to know".
            </div>
            <div className="instructor-name">Abitova Gulnara Askerovna</div>
            <div className="instructor-job">
              Associate Professor at Astana IT University
            </div>
          </div>
          <div className="instructor-content-right">
            <img
              className="instructor-photo"
              src={require("../images/instructor-photo.png")}
            ></img>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-left">
          <div className="about-left-header">Education</div>
          <div className="about-left-text">
            <ul>
              <li>
                Master's Degree - Cybernetics of Metallurgical Processes,
                National University of Science and Technology "MISiS", Moscow,
                Russia;
              </li>
              <li>
                Postgraduate studies - Candidate of Technical Sciences, Research
                Institute "Institute of Metallurgy and Enrichment" of the
                Ministry of Education and Science of the Republic of Kazakhstan,
                Almaty, Kazakhstan.
              </li>
              <li>
                Doctorate - Ph.D in Automation and Control, L.N. L.N. Gumilyov,
                (Astana, Kazakhstan - Binghamton, USA).
              </li>
              <li>
                Scientific internship – State University of New York, Computer
                and Electrical Engineering Department (Binghamton, NY, USA).
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <div className="about-left-header">Scientific Achievements</div>
          <div className="about-left-text">
            <ul>
              <li>
                Winner and Fellow of the International Scholarship Programs
                "Bolashak" for conducting scientific research as part of a
                foreign internship in the USA (SUNY, NY, USA) (2011-2012).
              </li>
              <li>
                Permanent Member of the IEOM Scientific Society (USA): Founded
                President of the IEOM Society of Kazakhstan (from 2014 to the
                present).
              </li>
              <li>
                Scholarship holder and Guest Lecturer for the Erasmus + Teaching
                Mobility Program and Training at the School of Science and
                Technology of Savonia University of Applied Science (Kuopio,
                Finland) (2017).
              </li>
              <li>
                Chairman and member of the Working Group of the Ministry of
                Education and Science of the Republic of Kazakhstan on the
                development of a new Law of the Republic of Kazakhstan "On
                Science" (2011).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
