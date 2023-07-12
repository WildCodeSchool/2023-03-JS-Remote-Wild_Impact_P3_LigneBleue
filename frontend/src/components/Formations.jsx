import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="bg-champagne grid grid-cols-3 place-items-center rounded-tr-3xl rounded-tl-3xl">
          <Link to="/info">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <h3 className="text-xl text-center pt-2">
                  Plus d'informations
                </h3>
              </div>
            </button>
          </Link>
          <div className="bg-champagne grid grid-cols-3 place-items-center rounded-tr-3xl rounded-tl-3xl">
            <Link to="/aide">
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <h3 className="text-xl text-center pt-2">Se faire aider</h3>
                </div>
              </button>
            </Link>
          </div>
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
