import React from "react";
import { useEffect, useState } from "react";

function Api() {
  const [podaci, setPodaci] = useState([]);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((disney) => setPodaci(disney.data));
  }, []);
  return (
    <div>
      <div className="App">
        <h1>Disney cartoons</h1>
        {podaci.map((pod) => (
          <div key={crypto.randomUUID()}>
            <p>Naziv: {pod.count}</p>
            <p>Total pages: {pod.totalPages}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Api;
