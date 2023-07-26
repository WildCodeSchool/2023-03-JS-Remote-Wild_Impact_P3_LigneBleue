import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import "./AllFormations.css";
import connexion from "../services/connexion";
import SearchBar from "./SearchBar";

function AllFormations() {
  const [formations, setFormations] = useState([]);
  const getAllFormations = async () => {
    try {
      const Formations = await connexion.get(`/formations`);
      setFormations(Formations);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFormations();
  }, []);

  return (
    <div className="py-5 mb-1 px-4">
      <div className="bg-champagne rounded-3xl">
        <div className="font-bold text-blue text-center text-xl p-6">
          VOTRE ESPACE DE FORMATION AUX OUTILS NUMERIQUES
        </div>
        <section>
          <div className="relative z-0 py-5 px-4 mb-1">
            <div className="relative z-20 bg-champagne grid grid-cols-3 max-sm:grid max-sm:grid-cols-1 place-items-center ">
              <Link to="/info">
                <button
                  type="button"
                  className="max-sm:order max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:ring-4 focus:outline-none focus:ring-red-200"
                >
                  <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <h3 className="text-center">Plus d'informations</h3>
                  </div>
                </button>
              </Link>
              <SearchBar />
              <Link to="/aide">
                <button
                  type="button"
                  className="max-sm:order-2 max-sm:m-2 w-56 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-200"
                >
                  <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <h3 className="text-center">Se faire aider</h3>
                  </div>
                </button>
              </Link>
            </div>

            <div className="relative z-10 ">
              <div className="bg-champagne grid grid-cols-3 max-sm:grid max-sm:grid-cols-2 place-items-center rounded-br-3xl rounded-bl-3xl">
                {formations.slice(0, 9).map((formation) => (
                  <div
                    key={formation.id}
                    className="formations flex flex-col justify-center items-center bg-light_blue px-3 py-3 my-10 mx-10 max-sm:w-36 max-sm:h-30 w-52 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    <Link to={`/formations/${formation.id}`}>
                      <h3 className="titleformation text-xl max-sm:text-sm text-center">
                        {formation.title}
                      </h3>
                      <div className="icons flex justify-center">
                        <Icons icon={formation.icon} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllFormations;
