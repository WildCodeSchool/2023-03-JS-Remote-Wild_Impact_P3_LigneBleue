import React, { useState, useEffect } from "react";
import Icons from "../../components/Icons";
import LineAnimation from "../../components/LineAnimation";
import Picture from "../../assets/picture.png";
import Arrived from "../../assets/arrived.png";

function Advancement() {
  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations`)
      .then((res) => res.json())
      .then((form) => setCategorie(form))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" bg-champagne pb-40">
      <div className="  flex">
        <div className=" min-w-[30%]">
          <h1 className=" text-blue text-[3rem] max-[700px]:text-lg font-bold">Votre Parcours</h1>
          <img
            src={Picture}
            alt="img"
            className=" w-28 h-30 pt-8 pl-8 opacity-80 max-[700px]:hidden"
          />
          <p className="pl-8 pb-4 text-xl font-bold opacity-25 ">
            Cliquer sur une catégorie pour connaitre le détail de votre
            avancement.
          </p>
          <img
            src={Arrived}
            alt="Ligne_d_arrivee"
            className=" h-72 ml-24 mt-24 rotate-div animate-spin-2s max-[700px]:hidden"
          />
        </div>
        <div className="flex pl-8 pt-2">
          <div className="pt-6 max-[700px]:hidden">
            <LineAnimation />
          </div>
          <div className="absolute grid grid-cols-6 ">
            {categorie.map((formation, index) => (
              <div
                key={formation.id}
                className={` ${
                  index === 0 || index === 6 ? "col-start-1 col-end-2" : ""
                }
                ${index === 5 || index === 11 ? "col-start-6 col-end-6" : ""}${
                  index === 1 || index === 7 ? "col-start-3 col-end-4" : ""
                } ${index === 2 || index === 8 ? "col-start-5" : ""} ${
                  index === 3 || index === 9 ? "col-start-2 col-end-3" : ""
                } ${index === 4 || index === 10 ? "col-start-4" : ""}`}
              >
                <div className=" max-[700px]:h-8 max-[700px]:w-8 h-36 w-36 px-3 py-3 mx-2 active:col-span-2 bg-white shadow-xl  rounded-lg transition hover:rotate-2 hover:scale-150 focus:outline-none focus:ring hover:bg-blue_light  active:font-bold  ">
                  <h3 className="text-center pt-2">{formation.title}</h3>
                  <div className="flex justify-center">
                    <Icons icon={formation.icon} />
                  </div>
                </div>
                <p className=" text-center">2/3</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advancement;
