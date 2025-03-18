import React from "react";

function OmOss() {
    return (
        <main>
            <div className="heroOmOss">
                <h2>Om Oss</h2>
            </div>
            <div className="container">
                <section className="textrutor">
                    <div className="blockColumn">
                        <h4>Vår Historia</h4>
                        <p>
                            Nordmalings Ridklubb grundades 1978 på Torsbäcken 14 i Nordmaling och är en av Västerbottens äldsta ridklubbar. Med hjälp av ideella krafter byggdes ridskolan upp, och med tiden tillkom ridhuset, som idag är en av våra största tillgångar. Anläggningen ger oss möjlighet att rida och samlas året runt, även under norrländska vintrar.
                        </p>
                        <p>
                            Klubben drivs fortfarande ideellt och bärs upp av det stora engagemanget hos våra medlemmar. Styrelsen stöttar det frivilliga arbetet, som kräver både tid och insatser för att driva och utveckla verksamheten. Tillsammans skapar vi en plats för ridning, gemenskap och lärande för alla åldrar.
                        </p>
                    </div>

                    <div className="blockColumn">
                        <h3 className="Värdegrunder">Våra Värdegrunder</h3>
                        <p>
                            Med hästens välbefinnande i centrum präglas vår verksamhet av glädje, kunskap, engagemang och gemenskap! Vi strävar efter att utveckla det ideella engagemanget som är basen för vår verksamhet. Vi respekterar varandra och visar respekt för fattade beslut och regler. Vi stöttar varandra i med och motgång. Vi bidrar till en positiv stämning där alla känner sig välkomna.
                        </p>
                        <p>
                            Vi erbjuder aktiviteter så att alla oavsett kön, ålder, etnicitet, funktionsnedsättning eller ambitionsnivå kan rida hos oss. Vi vill främja en sund livsstil och är avståndstagande från dopning och droger. När någon glömmer bort vår hästpolicy eller vår gemensamma värdegrund, hjälps vi åt att påminna varandra.
                        </p>
                    </div>
                </section>
                <div className="horisontellLinje1"></div>
                <section className="blockColumn">
                    <h4>Styrelsen</h4>
                    <div className="textrutorStyrelsen">
                        <div>
                            <h3>Ordförande</h3>
                            <p>Desirée Westerlund</p>
                            <div className="block2">
                                <iconify-icon icon="ph:envelope-simple-open-light"></iconify-icon>
                                <a href="mailto:styrelsen@nordmalingsrk.se">styrelsen@nordmalingsrk.se</a>
                            </div>
                        </div>
                        <div>
                            <h3>Kassör</h3>
                            <p>Kristina Björklund</p>
                            <div className="block2">
                                <iconify-icon icon="ph:envelope-simple-open-light"></iconify-icon>
                                <a href="mailto:faktura@nordmalingsrk.se">faktura@nordmalingsrk.se</a>
                            </div>
                        </div>
                        <div>
                            <h3>Ledamot</h3>
                            <p>Jenny Johansson</p>
                            <p>Amanda Falkstjerna</p>
                            <p>Mats-Olof Adolfsson</p>
                        </div>
                    </div>
                </section>
                <div className="horisontellLinje1"></div>
                <section className="blockColumn">
                    <h4>Ungdomsstyrelsen</h4>
                    <div className="textrutor" id="blockUS">
                        <p>
                            Alla medlemmar som är under 26 år är automatiskt medlemmar i ungdomssektionen, vilket representeras av en styrelse som väljs på Ungdomssektionens egna årsmöte. Sektionen anordnar aktiviteter som övernattning, ponnyridning och luciashow, anpassat för klubbens yngre medlemmar.
                        </p>
                        <img src="bilder/USbild.png" alt="Ridande luciatåg av ungdomssektionen" />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default OmOss;