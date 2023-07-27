import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";
import LineAnimation from "../../components/LineAnimation";
import Picture from "../../assets/picture.png";
import Arrived from "../../assets/arrived.png";
import connexion from "../../services/connexion";
import Footerbis from "../../components/Footerbis";
import check from "../../assets/check.png";

function Progress() {
  const [ProgressionCategories, setProgressionCategories] = useState([]);

  const getCategorieProgression = async () => {
    try {
      const Categorie = await connexion.get(`/formations`);
      setProgressionCategories(Categorie);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategorieProgression();
  }, []);

  return (
    <>
      <section className=" min-[800px]:h-[56rem] max-[400px]:h-[50rem] bg-champagne pb-40 mx-4 mb-6 rounded-3xl">
        <div className="  flex max-[400px]:flex-col max-[820px]:flex-col">
          <div className="min-w-[30%]">
            <h1 className=" text-blue text-[3rem] max-[700px]:text-lg font-bold pl-6 min-[800px]:pl-0.5">
              Votre Parcours
            </h1>
            <img
              src={Picture}
              alt="img"
              className=" w-28 h-30 pt-8 pl-8 opacity-80 max-[700px]:hidden "
            />
            <p className=" max-[400px]:text-xs pl-8 pb-4 text-xl font-bold opacity-25">
              Cliquer sur une catégorie pour connaitre le détail de votre
              avancement.
            </p>
            <img
              src={Arrived}
              alt="Ligne_d_arrivee"
              className=" max-[820px]:hidden h-72 ml-24 mt-24 rotate-div animate-spin-2s max-[700px]:hidden"
            />
          </div>
          <div className="flex pl-8 pt-2 min-[800px]:pl-0.5">
            <div className="pt-6 max-[700px]:hidden min-[800px]:pt-0.5">
              <LineAnimation />
            </div>
            <div className="max-[400px]:gap-8 max-[400px]:grid-cols-2 max-[400px]:grid-rows-6 absolute grid grid-cols-6 ">
              {ProgressionCategories.map((formation, index) => (
                <Link to={`/parcours/progression/${formation.id}`}>
                <div
                  key={formation.id}
                  className={` ${
                    index === 0 || index === 6
                      ? "min-[800px]:col-start-1 min-[800px]:col-end-2 n"
                      : ""
                  }
                ${
                  index === 5 || index === 11
                    ? "min-[800px]:col-start-6 min-[800px]:col-end-6"
                    : ""
                }${
                    index === 1 || index === 7
                      ? "min-[800px]:col-start-3 min-[800px]:col-end-4"
                      : ""
                  } ${
                    index === 2 || index === 8 ? "min-[800px]:col-start-5" : ""
                  } ${
                    index === 3 || index === 9
                      ? "min-[800px]:col-start-2 min-[800px]:col-end-3"
                      : ""
                  } ${
                    index === 4 || index === 10 ? "min-[800px]:col-start-4" : ""
                  }`}
                >
                  <div className=" min-[800px]:h-36 min-[800px]:w-28  max-[400px]:hover:scale-110 max-[400px]:gap-10 max-[400px]:h-28 max-[400px]:w-28 max-[400px]:text-xs  h-36 w-36 px-3 py-3 mx-2 active:col-span-2 bg-white shadow-xl  rounded-lg transition hover:rotate-2 hover:scale-150 focus:outline-none focus:ring hover:bg-blue_light  active:font-bold  ">
                    <h3 className="text-center pt-2">{formation.title}</h3>
                    <div className="flex justify-center">
                      <Icons icon={formation.icon} />
                    </div>
                    <p className=" max-[400px]:hidden text-center">2/3</p>
                  </div>
                  <p className="  max-[400px]:hidden text-center">2/3</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footerbis />
    </>
  );
}

export default Progress;
