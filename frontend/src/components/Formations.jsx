import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import "./Formations.css";
import connexion from "../services/connexion";

function Formations() {
  const [formations, setFormations] = useState([]);
  const getAllFormations = async () => {
    try {
      const AllFormations = await connexion.get(`/formations`);
      setFormations(AllFormations);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFormations();
  }, []);

  return (
    <section>
      <div className="py-5 pr-4 pl-4 mb-1">
        {" "}
        <div className="bg-champagne grid grid-cols-3 place-items-center rounded-tr-3xl rounded-tl-3xl">
          {formations.slice(9, 12).map((formation) => (
            <div
              key={formation.id}
              className="formations bg-light_blue px-3 py-3 my-10 mx-10 w-52 h-40"
            >
              <h3 className="text-xl text-center pt-2">{formation.title}</h3>
              <div className="flex justify-center">
                <Icons icon={formation.icon} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-champagne grid grid-cols-3 max-sm:grid max-sm:grid-cols-2 place-items-center rounded-br-3xl rounded-bl-3xl">
            {formations.slice(0, 9).map((formation) => (
              <div
                key={formation.id}
                className="formations flex flex-col justify-center items-center bg-light_blue px-3 py-3 my-10 mx-10 max-sm:w-36 max-sm:h-30 w-52 h-40"
              >
                <h3 className="titleformation text-xl max-sm:text-sm text-center">
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
