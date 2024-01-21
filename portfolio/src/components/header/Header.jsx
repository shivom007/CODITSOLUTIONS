import React, { useState } from "react";
import "./header.css";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [active, setActive] = useState("#home");
  
  return (
    <header className="header">
      <nav className="nav ">
        <a href="/portfolio" className="nav__logo">
          Shiv
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={
                  active === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActive("#about")}
                className={
                  active === "#about" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActive("#skills")}
                className={
                  active === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActive("#portfolio")}
                className={
                  active === "#portfolio" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-briefcase-alt nav__icon"></i> Portfolio
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" onClick={() => setActive("#contact")}
                className={
                  active === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
