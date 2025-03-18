import React, { useState, useEffect } from "react";

function VaraHastar() {
  const [Ponies, setPonies] = useState([
    {
      id: 1,
      src: "bilder/Tiffaney.png",
      alt: "Ponnyn Tiffaney",
      name: "Tiffaney",
    },
    {
      id: 2,
      src: "bilder/Columbia.png",
      alt: "Ponnyn Columbia",
      name: "Columbia",
    },
    {
      id: 3,
      src: "bilder/Charlie.png",
      alt: "Ponnyn Charlie",
      name: "Charlie",
    },
    {
      id: 4,
      src: "bilder/Blackie.png",
      alt: "Ponnyn Blackie",
      name: "Blackie",
    },
    { id: 5, src: "bilder/Emiley.png", alt: "Ponnyn Emiley", name: "Emiley" },
    {
      id: 6,
      src: "bilder/Sarah(Zally).png",
      alt: "Ponnyn Sarah(Zally)",
      name: "Sarah(Zally)",
    },
  ]);

  const [Horses, setHorses] = useState([
    { id: 7, src: "bilder/Enzo.png", alt: "Hästen Enzo", name: "Enzo" },
    { id: 8, src: "bilder/Ebbe.png", alt: "Hästen Ebbe", name: "Ebbe" },
  ]);

  const [seenHorse, setSeenHorse] = useState(null);

  useEffect(() => {
    shuffleImages();
  }, []);

  const shuffleImages = () => {
    setPonies((prevPonies) => [...prevPonies].sort(() => Math.random() - 0.5));
    setHorses((prevHorses) => [...prevHorses].sort(() => Math.random() - 0.5));
  };

  return (
    <section className="wrapper">
      <div className="container">
        <h2>Våra Hästar</h2>
        <div className="hastar">
          <div>
            <h3>Ponnys</h3>
            <div className="hastbilder">
              {Ponies.map((horse, index) => (
                <div key={horse.id} onClick={() => setSeenHorse(horse)}>
                  <img src={horse.src} alt={horse.alt} />
                  <p>{horse.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Storhästar</h3>
            <div className="hastbilder">
              {Horses.map((horse, index) => (
                <div key={horse.id} onClick={() => setSeenHorse(horse)}>
                  <img src={horse.src} alt={horse.alt} />
                  <p>{horse.name}</p>
                </div>
              ))}
            </div>
          </div>
          {seenHorse && (
            <>
              <div
                className="overlay hastbilder"
                onClick={() => setSeenHorse(null)}
              >
                <div
                  key={seenHorse.id}
                  className="pop"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={seenHorse.src} alt={seenHorse.alt} />
                  <p>{seenHorse.name}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default VaraHastar;
