import React, { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/Shiv_Mahto.pdf";
import Info from "./Info";
const About = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Experienced full-stack developer with a passion for creating
            captivating user experiences and delivering end-to-end solutions. I
            excel in both frontend and backend technologies, utilizing my skills
            in HTML, CSS, JavaScript, React Js, Node Js, Express Js, and Socket
            IO. My commitment to innovation and problem-solving drives me to
            bring your ideas to life. Explore my portfolio and let's turn your
            vision into reality together <br /><br/>
            <span className="services__button yoyo"  onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </p>

          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">
                {/* Your Title */}
                About Me
              </h3>
              
              <p className="services__modal-description">
                I am a Computer Science graduate, skilled and versatile programmer proficient in an array
                of programming languages, such as C/C++, JavaScript, Java, and
                Python. My portfolio showcases expertise in both front-end and
                back-end development, where I specialize in crafting captivating
                user experiences with HTML, CSS, and React Js, while also
                building robust server-side applications using Node Js, Express
                Js, and Socket IO. Alongside my technical proficiency, I possess
                a rich set of soft skills, including effective communication,
                seamless teamwork, and creative problem-solving abilities. I
                pride myself on adaptability, ensuring I can tackle any
                challenge thrown my way with efficiency and precision. With a
                positive attitude, strong work ethic, and excellent time
                management, I deliver exceptional results that exceed
                expectations. Fluent in both English and Hindi, I am excited to
                collaborate on projects that push the boundaries of innovation
                and leave a lasting impact. Let's bring your ideas to life
                together!
              </p>
            </div>
          </div>

          <a download="" href={CV} className="button button--flex">
            Downoad CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
