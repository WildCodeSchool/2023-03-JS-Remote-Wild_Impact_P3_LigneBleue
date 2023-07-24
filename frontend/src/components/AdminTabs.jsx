import { useState, useEffect } from "react";
import TutoTab from "./TutoTab";
import QuizzTab from "./QuizzTab";
import RessourcesTab from "./RessourcesTab";
import connexion from "../services/connexion";

const tutorialModel = {
  name: "",
  icon: "",
  target: "",
  explanation: "",
  src: "",
  alt: "",
};

function AdminTabs() {
  const [openTab, setOpenTab] = useState(1);
  const [formations, setFormations] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [formationId, setFormationId] = useState();
  const [selectedTutorial, setSelectedTutorial] = useState(tutorialModel);

  const handleNext = () => {
    setOpenTab(openTab + 1);
  };

  const handlePrevious = () => {
    return openTab > 1 ? setOpenTab(openTab - 1) : setOpenTab(openTab);
  };

  const handleTab = (index) => {
    if (selectedTutorial.id) {
      setOpenTab(index);
    } else {
      console.info("Message user, should have an identified tuto");
    }
  };

  const selectOneTutorials = (id) => {
    if (id === "") {
      setSelectedTutorial(tutorialModel);
    } else {
      setSelectedTutorial(tutorials.find((art) => art.id === +id));
    }
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

  const handleTutorial = (name, value) => {
    setSelectedTutorial({ ...selectedTutorial, [name]: value });
  };

  const getTutos = async () => {
    if (formationId !== "") {
      try {
        const mytutos = await connexion.get(
          `/formations/${formationId}/tutorials`
        );
        setTutorials(mytutos);
      } catch (error) {
        console.error(error);
      }
    } else {
      setTutorials([]);
    }
  };

  const postTutorial = async () => {
    if (formationId) {
      try {
        const newtutos = await connexion.post(`/tutorials`, {
          ...selectedTutorial,
          formation_id: formationId,
        });
        getTutos();
        setSelectedTutorial(newtutos);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.info("Vous devez choisir une catégorie de formation");
    }
  };

  const manageTutorial = (event) => {
    event.preventDefault();
    if (selectedTutorial.id) {
      console.info("Should update the tuto");
    } else {
      postTutorial();
    }
  };

  useEffect(() => {
    getTutos();
  }, [formationId]);

  return (
    <div className="flex flex-wrap justify-center pt-4 bg-white rounded-xl">
      <div className="flex flex-row mb-10">
        <div className="flex flex-col w-80">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez une formation
          </label>
          <select
            id="underline_select"
            className="flex justify-center py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            onChange={(event) => setFormationId(event.target.value)}
            name="id"
            value={formationId}
          >
            <option value="">Choisissez une formation</option>
            {formations.map((formation) => (
              <option key={formation.id} value={formation.id}>
                {formation.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center w-80">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez un tuto
          </label>
          <select
            id="underline_select"
            className="flex justify-center py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            onChange={(event) => selectOneTutorials(event.target.value)}
            value={selectedTutorial.id}
          >
            <option>Choisissez un tuto</option>
            {tutorials.map((tutorial) => (
              <option key={tutorial.id} value={tutorial.id}>
                {tutorial.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 px-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button
              type="button"
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 1
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={() => {
                handleTab(1);
              }}
              data-toggle="tab"
              role="tablist"
            >
              Tutoriels
            </button>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button
              type="button"
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 2
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={() => {
                handleTab(2);
              }}
              data-toggle="tab"
              role="tablist"
            >
              Quizz
            </button>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button
              type="button"
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 3
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={() => {
                handleTab(3);
              }}
              data-toggle="tab"
              role="tablist"
            >
              Ressources
            </button>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <TutoTab
                  selectedTutorial={selectedTutorial}
                  handleTutorial={handleTutorial}
                  manageTutorial={manageTutorial}
                />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <QuizzTab
                  quizzId={selectedTutorial.quizz_id}
                  tutorialId={selectedTutorial.id}
                />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <RessourcesTab />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-4">
          <button
            type="button"
            className="w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 mr-4 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
            onClick={handlePrevious}
          >
            <div className="w-full relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center">Précédent</h3>
            </div>
          </button>
          <button
            type="button"
            className="w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ml-4 ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
            onClick={handleNext}
          >
            <div className="w-full relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center">Suivant</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTabs;
