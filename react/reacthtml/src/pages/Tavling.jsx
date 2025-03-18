import React from "react";

function Tavling() {
    return (
        <section className="wrapper">
            <div className="container">
                <h2>Tävling</h2>
                <div className="blockRow">
                    <section className="blockColumn">
                        <video controls>
                            <source src="Claudius_Vännäs_1.25m.mp4" type="video/mp4" />
                        </video>
                        <p id="videotext">Elvira Wiklund - Claudius, 1.30m</p>
                    </section>
                    <div className="verticalLine3"></div>
                    <section className="blockColumn">
                        <div>
                            <h3>Tävla för NRK</h3>
                            <p>
                                Tävlingssektionen är en samverkande kraft framåt för att främja
                                gemenskap och samhörighet bland ridskoleryttare och privata ekipage.
                                Samt ökar förutsättningarna för träning och tävling, på och för
                                Nordmalings Ridklubb.
                            </p>
                            <div>
                                <p>
                                    <span>Licens (standard)</span> - Ryttare eller målsman, vid
                                    underårig ryttare, är med och arrangerar våra tävlingar.
                                </p>
                                <p>
                                    <span>Licens (distans)</span> - Löses av ryttare som bor minst 10
                                    mil ifrån ridklubben, det är då möjligt att betala 1500kr och
                                    därmed betala sig fri från arbete.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Kommande tävlingar</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Vecka</th>
                                        <th>Inriktning</th>
                                        <th>Storhäst/Ponny</th>
                                    </tr>
                                    <tr>
                                        <td>v.6</td>
                                        <td>Hoppning</td>
                                        <td>Storhäst & Ponny</td>
                                    </tr>
                                    <tr>
                                        <td>v.17</td>
                                        <td>Dressyr</td>
                                        <td>Ponny</td>
                                    </tr>
                                    <tr>
                                        <td>v.22</td>
                                        <td>Färlttävlan</td>
                                        <td>Storhäst</td>
                                    </tr>
                                    <tr>
                                        <td>v.35</td>
                                        <td>Sommarhoppet - klubbtävling</td>
                                        <td>Storhäst & Ponny</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Tavling;