import React, { useEffect, useState } from "react";
import Icons from "../components/Icons";

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
      <div>
        {formations.slice(0, 9).map((formation) => (
          <div
            key={formation.id}
            className="flex-auto grid-cols-4 grid-rows-4 bg-light_blue px-2 py-2 my-6 mx-6"
          >
            <h3 className="text-2xl">{formation.title}</h3>
            <div>
              <Icons icon={formation.icon} />
            </div>
          </div>
        ))}
      </div>
      <div>
        {formations.slice(9, 12).map((formation) => (
          <div
            key={formation.id}
            className="flex-auto grid-cols-4 grid-rows-4 bg-yellow px-2 py-2 my-6 mx-6"
          >
            <h3 className="text-2xl">{formation.title}</h3>
            <div>
              <Icons icon={formation.icon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
