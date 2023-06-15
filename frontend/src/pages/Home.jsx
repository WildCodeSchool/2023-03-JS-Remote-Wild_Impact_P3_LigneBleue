import React, { useEffect, useState } from "react";

function Home() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations`)
      .then((res) => res.json())
      .then((form) => setFormations(form))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section>
      <div className="flex flex-row">
        {formations.map((formation) => (
          <>
            <h3>{formation.title}</h3>
            <img
              key={formation.id}
              src={formation.icon}
              alt="icon de la formation"
            />
          </>
        ))}
      </div>
    </section>
  );
}

export default Home;
