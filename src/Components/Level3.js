import React, { useState } from "react";

import "./Level3.css";

const MarbleCollector = () => {
  const [collected, setCollected] = useState(0);

  const handleMarbleClick = (event) => {
    const marbleId = event.target.id;
    const marbleElement = document.getElementById(marbleId);
    marbleElement.style.display = "none";
    setCollected((prevCount) => prevCount + 1);
  };

  return (
    <div className="marble-collector">
      <h1>Find the Marbles</h1>
      <p>Click on the marbles to collect them</p>
      <p>Marbles collected: {collected}</p>
      <div className="marble-image-container">
       
        <img src="/images/marble.png" className="marble" id="marble-1" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-2" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-3" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-4" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-5" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-6" alt="no img" onClick={handleMarbleClick} />
        <img src="/images/marble.png" className="marble" id="marble-7" alt="no img" onClick={handleMarbleClick} />
      </div>
    </div>
  );
};

export default MarbleCollector;
