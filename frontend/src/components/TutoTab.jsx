import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";

function TutoTab() {
  const [formations, setFormations] = useState([]);
  const [tutos, setTutos] = useState([]);
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
      setTutos(mytutos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTutos();
  }, [formationId]);

  return (
    <div>
      <div className="flex flex-row justify-around">
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
            {tutos.map((tuto) => (
              <option value={tuto.id}>{tuto.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TutoTab;
