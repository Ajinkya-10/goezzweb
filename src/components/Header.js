import React from "react";
import style from "../style/header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <div className={style.customContainer}>
        <nav class="navbar navbar-expand-md navbar-light p-0">
          <a href="index.html" className={`navbar-brand ${style.navbarBrand}`}>
            <img className="logo" src="/images/mainLogo.svg" alt="click here" />
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav links align-items-center">
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  <img src="/images/home_icon.svg" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className={`navbar-nav ml-auto align-items-center`}>
              <li class="nav-item">
                <a
                  href="#"
                  className={`nav-link ${style.navLink}`}
                  style={{ fontWeight: "500", fontSize: "1.1em" }}
                >
                  Log In
                </a>
              </li>
              <li className={`nav-item ${style.startedBtn}`}>
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Get Started
                </a>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${style.navLink}`} href="#">
                  <i
                    className={`fas fa-question-circle ${style.questionIcon}`}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
