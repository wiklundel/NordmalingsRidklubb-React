import React from "react";

function BorjaRida() {
    return (
        <div className="wrapper">
            <section>
                <div className="container">
                    <h2>Börja Rida</h2>
                    <div className="ellipseText">
                        <div>
                            <h2>01</h2>
                            <p>
                                Registrera dig på Hippocrates med vår företagskod{" "}
                                <span>NRK</span>, du som registrerar dig måste
                                vara över 18 år.
                            </p>
                        </div>
                        <div>
                            <h2>02</h2>
                            <p>
                                Maila{" "}
                                <a href="mailto:styrelsen@nordmalingsrk.se">
                                    styrelsen@nordmalingsrk.se
                                </a>{" "}
                                och meddela att du (eller ditt barn) vill stå i
                                kö till ridskolan, ange även om det gäller
                                nybörjargrupp eller en person med tidigare
                                ridvana.
                            </p>
                        </div>
                        <div>
                            <h2>03</h2>
                            <p>
                                Loggar in för att godkänna vårt
                                abonnemangsavtal samt våra policys. I
                                elevportalen kan du se dina fakturor,
                                ridgrupper, avanmäla dig från din ridlektion, se
                                nyhetsbrev mm.
                            </p>
                        </div>
                    </div>
                    <div className="registrera">
                        <a href="https://elevportal.hippocrates.se/">
                            Registrera dig på Hippocrates här
                        </a>
                    </div>
                    <div className="bakgrundText">
                        <p>
                            Vid frågor, maila{" "}
                            <a href="mailto:styrelsen@nordmalingsrk.se">
                                styrelsen@nordmalingsrk.se
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BorjaRida;