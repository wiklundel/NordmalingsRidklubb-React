import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidemenu from "./Sidemenu";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const headerShadow = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", headerShadow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", headerShadow);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
        <div className="topMobile">
          <img
            src="/bilder/Logga.png"
            alt="Logga Nordmalings Ridklubb"
            className="logo"
          />
          <button
            className="btn"
            onClick={toggleMenu}
            aria-label="Hantera sidomeny"
          >
            <iconify-icon
              icon={
                isMenuActive ? "ph:caret-double-left-light" : "ph:list-light"
              }
            ></iconify-icon>
          </button>
        </div>
        <Sidemenu isActive={isMenuActive} />
        <ul className="nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/BorjaRida"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Ridskola
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Kalender"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Kalender
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Tavling"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Tävling
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/OmOss"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Om Oss
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Kontakt"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>

        <div className="socialIcons">
          <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
          <NavLink to="https://www.instagram.com/nordmalingsridklubb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <iconify-icon icon="ph:instagram-logo-light"></iconify-icon>
          </NavLink>
          <NavLink to="https://www.facebook.com/nordmalingsridklubb">
            <iconify-icon icon="ph:facebook-logo-light"></iconify-icon>
          </NavLink>
          <iconify-icon icon="ph:line-vertical-light"></iconify-icon>
          <iconify-icon icon="ph:magnifying-glass-light"></iconify-icon>
        </div>
      </div>
    </header>
  );
}

export default Header;
