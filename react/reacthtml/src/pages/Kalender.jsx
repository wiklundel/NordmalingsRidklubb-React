import React from 'react';

function Kalender() {
    return (
        <section className='wrapper'>
            <div className="container">
                <h2>Kalender</h2>
                <div className="blockRow">
                    <div>
                        <h3>Ridhus</h3>
                        <br />
                        <br />
                        <h3>Ridskola</h3>
                    </div>
                    <div className="verticalLine3"></div>
                    <img 
                        className="imgKalender" 
                        src="bilder/Kalender.png" 
                        alt="Kalender för ridhus respektive ridskola"
                    />
                </div>
            </div>
        </section>
    );
}
export default Kalender;