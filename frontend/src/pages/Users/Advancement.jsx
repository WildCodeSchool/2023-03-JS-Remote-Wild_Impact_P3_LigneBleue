import React, { useState, useEffect } from "react";
import Icons from "../../components/Icons";
import Picture from "../../assets/picture.png";
import connexion from "../../services/connexion";

function Advancement() {
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
    <section className=" bg-champagne pb-4">
      <h1 className=" text-blue text-[6rem] font-bold">Votre Parcours</h1>
      <p className="pl-8 text-2xl font-bold opacity-25 ">
        Cliquer sur une catégorie pour connaitre le détail de votre avancement{" "}
      </p>
      <div className="flex">
        <div className="max-[750  px]:hidden">
          <img
            src={Picture}
            alt="crumbs"
            className="w-[60rem] h-[60rem] pt-20 opacity-25"
          />
        </div>
        <div className="grid grid-cols-5">
          {ProgressionCategories.map((formation, index) => (
            <div
              key={formation.id}
              className={` ${index === 0 ? "col-start-3 col-end-4" : ""} ${
                index === 1 ? "col-start-2 col-end-3" : ""
              } ${index === 2 ? "col-start-4 col-end-5" : ""} ${
                index === 3 || index === 6 || index === 9
                  ? "col-start-1 col-end-2"
                  : ""
              } ${
                index === 4 || index === 7 || index === 10 ? "col-start-3" : ""
              } ${
                index === 5 || index === 8 || index === 11 ? "col-start-5" : ""
              }`}
            >
              <div className=" bg-light_blue h-40 w-30 px-3 py-3 my-10 mx-10 rounded-lg  ">
                <h3 className="text-2xl text-center pt-2">{formation.title}</h3>
                <div className="flex justify-center">
                  <Icons icon={formation.icon} />
                </div>
              </div>
              <p className=" text-center">2/3</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advancement;
