import React, { useEffect } from "react";
import connexion from "../services/connexion";

function TutoTab({
  setTutorials,
  tutorialsId,
  setTutorialsId,
  setFormations,
  formationId,
}) {
  const handleTutorial = (name, value) => {
    setTutorialsId({ ...tutorialsId, [name]: value });
  };

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
        `/formations/${formationId.id}/tutorials`
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
      <div>
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Nom du tutoriel"
              value={tutorialsId.name}
              name="name"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom du tutorial
            </label>
          </div>
          <div className="flex flex-col items-center w-80 gap-6 pb-4">
            <label htmlFor="underline_select" className="sr-only">
              Icône
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option>icone</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5 pb-4">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Objectifs du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              value={tutorialsId.target}
              name="target"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5 pb-4">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Explication du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              value={tutorialsId.explanation}
              name="explanation"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group pb-4">
            <div className="flex">
              <input
                type="url"
                className="mr-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder="Nom de l'image"
                value={tutorialsId.alt}
                name="alt"
                onChange={(event) =>
                  handleTutorial(event.target.name, event.target.value)
                }
                required
              />
              <input
                type="url"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder="Lien de l'image"
                value={tutorialsId.src}
                name="src"
                onChange={(event) =>
                  handleTutorial(event.target.name, event.target.value)
                }
                required
              />
            </div>

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TutoTab;
