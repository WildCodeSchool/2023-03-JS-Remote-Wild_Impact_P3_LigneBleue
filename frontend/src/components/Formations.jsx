import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import "./Formations.css";

function Formations() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations`)
      .then((res) => res.json())
      .then((form) => setFormations(form))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section>
      <div className="pt-10 pr-4 pl-4">
        {" "}
        <div className="bg-champagne grid grid-cols-3 rounded-tr-3xl rounded-tl-3xl">
          {formations.slice(9, 12).map((formation) => (
            <div
              key={formation.id}
              className="formations bg-light_blue px-3 py-3 my-10 mx-10"
            >
              <h3 className="text-2xl text-center pt-2">{formation.title}</h3>
              <div className="flex justify-center">
                <Icons icon={formation.icon} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-champagne grid grid-cols-3 rounded-br-3xl rounded-bl-3xl">
            {formations.slice(0, 9).map((formation) => (
              <div
                key={formation.id}
                className="formations bg-light_blue px-3 py-3 my-10 mx-10"
              >
                <h3 className="titleformation text-2xl text-center">
                  {formation.title}
                </h3>
                <div className="icons flex justify-center">
                  <Icons icon={formation.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formations;
