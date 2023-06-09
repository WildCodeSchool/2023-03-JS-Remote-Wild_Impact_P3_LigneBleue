import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";

function TutoTab() {
  const [formations, setFormations] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [formationId, setFormationId] = useState();

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

  const getTutos = async () => {
    try {
      const mytutos = await connexion.get(
        `/formations/${formationId}/tutorials`
      );
      setTutorials(mytutos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTutos();
  }, [formationId]);

  return (
    <div>
      <div className="flex flex-row justify-around mb-10">
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez une formation
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={(event) => setFormationId(event.target.value)}
          >
            <option selected>Choisissez une formation</option>
            {formations.map((formation) => (
              <option value={formation.id}>{formation.title}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez un tuto
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Choisissez un tuto</option>
            {tutorials.map((tutorial) => (
              <option value={tutorial.id}>{tutorial.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Nom du tutoriel"
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom du tutorial
            </label>
          </div>
          <div className="flex flex-col items-center w-80 gap-6">
            <label htmlFor="underline_select" className="sr-only">
              Icône
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>icone</option>

              <option>bla</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Objectifs du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Explication du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Lien de l'image"
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image 1
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Lien de l'image"
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image 2
            </label>
          </div>
          <button
            type="button"
            className="w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:ring-4 focus:outline-none focus:ring-red-200"
          >
            <div className="w-full relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center">Publier</h3>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default TutoTab;
