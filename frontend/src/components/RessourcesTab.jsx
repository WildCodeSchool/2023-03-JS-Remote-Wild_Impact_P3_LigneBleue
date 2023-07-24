import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";
import ressourceModel from "../models/RessourceModel";

function RessourceTab({ tutorialId }) {
  const [ressource, setRessource] = useState(ressourceModel);

  const getRessources = async () => {
    try {
      const ressourceByTuto = await connexion.get(
        `/tutorials/${tutorialId}/ressources`
      );
      setRessource(ressourceByTuto[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tutorialId) {
      getRessources();
    }
  }, [tutorialId]);

  return (
    <div>
      <div>
        <form>
          <label className="text-lg text-gray-500 ">
            Nom de la ressource
            <input
              type="text"
              className="mr-4 py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
              placeholder="Nom de la ressource"
              value={ressource.name}
              name="name"
              // onChange={(event) => handleQuizz(event)}
              required
            />
          </label>
          <label className="text-lg text-gray-500 ">
            Contenu
            <input
              type="text"
              className="mr-4 py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
              placeholder="Contenu"
              value={ressource.content}
              name="content"
              // onChange={(event) => handleQuizz(event)}
              required
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default RessourceTab;
