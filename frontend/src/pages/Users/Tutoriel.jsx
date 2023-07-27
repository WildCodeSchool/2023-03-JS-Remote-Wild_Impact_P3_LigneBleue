import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import connexion from "../../services/connexion";
import quizzModel from "../../models/QuizzModel";
import ressourceModel from "../../models/RessourceModel";
import Footerbis from "../../components/Footerbis";

function Tutoriel() {
  const [openQuizz, setOpenQuizz] = useState(false);
  const [openRessource, setOpenRessource] = useState(false);
  const [quizz, setQuizz] = useState(quizzModel);
  const [tuto, setTuto] = useState([]);
  const [ressources, setRessources] = useState(ressourceModel);
  const { tid } = useParams();

  const getTutorials = async () => {
    try {
      const tutos = await connexion.get(`/tutorials/${tid}`);
      setTuto(tutos);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuizz = async () => {
    try {
      const QuizzList = await connexion.get(`/quizz/${tid}`);
      setQuizz(QuizzList);
    } catch (error) {
      console.error(error);
    }
  };

  const getRessources = async () => {
    try {
      const ressourcesList = await connexion.get(
        `/tutorials/${tid}/ressources`
      );
      setRessources(ressourcesList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuizz();
    getTutorials();
    getRessources();
  }, []);

  return (
    <>
      <section>
        <div className="">
          <h1 className="p-4 flex justify-center text-4xl text-blue">
            {tuto.name}
          </h1>
          <div className="flex flex-col items-center bg-champagne rounded-3xl m-4">
            <h2 className="p-4">{tuto.target}</h2>
            <img
              className="rounded-3xl p-4 h-300 w-96"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                tuto.src
              }`}
              alt=""
            />
            <p className="p-8 text-center">{tuto.explanation}</p>
          </div>
        </div>
      </section>
      <section>
        <div className={openQuizz ? "open" : null}>
          <div className="text-center mb-4 bg-champagne mx-4 rounded-3xl">
            <button
              type="button"
              className="text-center"
              onClick={() => setOpenQuizz(!openQuizz)}
            >
              <h2 className="text-center text-2xl text-blue font-bold mt-10">
                {quizz.title}
              </h2>
              <p className="text-center text-xl text-blue m-4">
                (Une seule réponse valide par question)
              </p>
            </button>

            {openQuizz &&
              quizz.questions.length > 0 &&
              quizz.questions.map((quest) => (
                <details className="mt-10 cursor-cell">
                  <summary className="flex">
                    <p className="text-lg ml-10 ">{quest.content}</p>
                  </summary>
                  <div className="my-4 ">
                    {quest.answers.map((answer) => (
                      <div className="w-full flex flex-row justify-between">
                        <label key={answer.id} className=" text-gray-500">

                          {answer.answers}
                          <input
                            type="checkbox"
                            className="text-center"
                            value={answer.answers}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
          </div>
        </div>
      </section>
      <section>
        <div className={openRessource ? "open" : null}>
          <div className="text-center mb-4 bg-champagne mx-4 rounded-3xl">
            <button
              type="button"
              className="text-center"
              onClick={() => setOpenRessource(!openRessource)}
            >
              <h2 className="text-center text-2xl text-blue font-bold my-10">
                Ressources
              </h2>
            </button>
            {openRessource &&
              ressources.length > 0 &&
              ressources.map((ress) => (
                <div key={ress.id} className="flex flex-col items-center">
                  <h2>{ress.name}</h2>
                  <ReactPlayer url={ress.content} controls playing muted />
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footerbis />
    </>
  );
}

export default Tutoriel;
