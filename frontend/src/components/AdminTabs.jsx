import { useState, useEffect } from "react";
import TutoTab from "./TutoTab";
import QuizzTab from "./QuizzTab";
import RessourcesTab from "./RessourcesTab";
import connexion from "../services/connexion";

const tutorialModel = {
  id: null,
  name: "",
  icon: "",
  target: "",
  explanation: "",
  src: "",
  alt: "",
  creation_date: null,
  image_id: null,
  quizz_id: null,
  formation_id: null,
};

const quizzModel = {
  id: null,
  questions_1: "",
  response_1_1: "",
  response_1_2: "",
  response_1_3: "",
  response_1_4: "",
  questions_2: "",
  response_2_1: "",
  response_2_2: "",
  response_2_3: "",
  response_2_4: "",
  questions_3: "",
  response_3_1: "",
  response_3_2: "",
  response_3_3: "",
  response_3_4: "",
  questions_4: "",
  response_4_1: "",
  response_4_2: "",
  response_4_3: "",
  response_4_4: "",
};
function AdminTabs() {
  const [openTab, setOpenTab] = useState(1);
  const [formations, setFormations] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [formationId, setFormationId] = useState();
  const [selectedTutorial, setSelectedTutorial] = useState(tutorialModel);

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

  useEffect(() => {
    getTutos();
  }, [formationId]);

  return (
    <div className="flex flex-wrap">
      <div className="flex flex-row justify-around mb-10">
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez une formation
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez un tuto
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 1
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Tutoriels
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 2
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Quizz
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 3
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Ressources
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <TutoTab
                  selectedTutorial={selectedTutorial}
                  handleTutorial={handleTutorial}
                />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <QuizzTab tutorialId={selectedTutorial.id} />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <RessourcesTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTabs;
