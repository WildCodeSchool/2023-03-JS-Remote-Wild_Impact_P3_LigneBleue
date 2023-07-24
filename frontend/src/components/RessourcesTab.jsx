// import React, { useEffect } from "react";
import connexion from "../services/connexion";

function RessourceTab() {
  // const handleTutorial = (name, value) => {
  //   setTutorialsId({ ...tutorialsId, [name]: value });
  // };

  // const getAllFormations = async () => {
  //   try {
  //     const AllFormations = await connexion.get(`/formations`);
  //     setFormations(AllFormations);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllFormations();
  // }, []);

  // const getTutos = async () => {
  //   try {
  //     const mytutos = await connexion.get(
  //       `/formations/${formationId.id}/tutorials`
  //     );
  //     setTutorials(mytutos);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getTutos();
  // }, [formationId]);

  return (
    <div>
      <div>
        {/* <form>
          <div className="relative z-0 w-full mb- group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Nom de la ressource"
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
        </form> */}
      </div>
    </div>
  );
}

export default RessourceTab;
