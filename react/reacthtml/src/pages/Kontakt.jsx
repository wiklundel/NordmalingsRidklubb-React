import React from "react";

function Kontakt() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Tack för meddelandet!");
  };

  return (
    <section className="wrapper">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="blockRow">
          <section className="hittaHit">
            <h3>Nordmalings Ridklubb</h3>
            <div>
              <iconify-icon icon="ph:map-pin-light"></iconify-icon>
              <p>
                Torsbäcken 14 <br /> 91491 Nordmaling
              </p>
            </div>
            <div>
              <iconify-icon icon="ph:phone-light"></iconify-icon>
              <p>076-004 70 04</p>
            </div>
            <div>
              <iconify-icon icon="ph:envelope-simple-open-light"></iconify-icon>
              <p>styrelsen@nordmalingsrk.se</p>
            </div>
            <img src="bilder/Karta.png" alt="Nordmalings Ridklubb på karta" />
          </section>

          <div className="verticalLine3"></div>

          <section className="centerForm">
            <form onSubmit={handleSubmit}>
              <div className="formMargin">
                <h3>Kontakta Oss</h3>
                <div>
                  <label htmlFor="f-lname"></label>
                  <input
                    type="text"
                    id="f-lname"
                    name="f-lname"
                    placeholder="För- och efternamn"
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="tel"></label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Telefonnummer"
                    required
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mailadress"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="message"></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Meddelande"
                    required
                  ></textarea>
                </div>

                <input type="submit" id="submit" />
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
