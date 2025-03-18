import React from "react";
import { NavLink } from "react-router-dom";

function Sidemenu({ isActive }) {
    return (
        <div className={`sidemenu ${isActive ? "active" : ""}`}>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="ph:house-light"></iconify-icon>
                        <span className="navItem">Hem</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/BorjaRida" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="ph:horse-light"></iconify-icon>
                        <span className="navItem">Ridskola</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Kalender" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="ph:calendar-blank-light"></iconify-icon>
                        <span className="navItem">Kalender</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Tavling" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="ion:ribbon-outline"></iconify-icon>
                        <span className="navItem">Tävling</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/OmOss" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="system-uicons:info-circle"></iconify-icon>
                        <span className="navItem">Om Oss</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Kontakt" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <iconify-icon icon="ph:chat-light"></iconify-icon>
                        <span className="navItem">Kontakt</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidemenu;