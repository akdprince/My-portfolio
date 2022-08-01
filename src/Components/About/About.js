import React from "react";
import "./About.css";
import aboutImg from "../../img/Aboutme.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Data-driven, focused, and experienced IT Specialist with keen interests in web development in
              JavaScript React framework.
              A responsible and detail-oriented IT professional, innovative optimized solution seeker.
              </p>
              <p className="about__text p__color">
              Excited
              to be at the development phase of my new career as a web developer. With 1 Years of experience
              in React JS & completed 3 projects.
              </p>
              {/* <p className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p> */}
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/11VEbqpHdu2msoexYGCrR1SjaoAWYYsCh/view?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="https://www.linkedin.com/in/anik-kumar-das-967462149/">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="/" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
