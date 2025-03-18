import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main className="bakgrundStartsida">
      <div className="wrapper">
        <div className="container">
          <div className="block1Startsida">
            <p title="det här är en slogan">
              {" "}
              den lilla klubben med det stora hjärtat
            </p>
            <h1>Nordmalings Ridklubb</h1>
            <div className="buttonStartsida">
              <NavLink to="/BorjaRida"> Börja Rida </NavLink>
              <NavLink to="/VaraHastar"> Våra Hästar </NavLink>
              <NavLink to="/Kontakt"> Välkommen Hit </NavLink>
              <NavLink to="/Kalender"> Ridhusschema </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
