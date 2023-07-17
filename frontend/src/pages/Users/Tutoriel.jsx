import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../services/connexion";

function Tutoriel() {
  const [open, setOpen] = useState(false);
  const [quizz, setQuizz] = useState([]);
  const [title, setTitle] = useState([]);
  const [tuto, setTuto] = useState([]);
  const { tid } = useParams();

  // Changer pour la route tutoriel
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
      setTitle(QuizzList.title);
      setQuizz(QuizzList.questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuizz();
    getTutorials();
  }, []);

  return (
    <>
      <section>
        <div className="">
          <h1 className="p-4 flex justify-center">{tuto.name}</h1>
          <div className="flex flex-col items-center bg-champagne rounded-3xl m-4">
            <h2 className="p-4">{tuto.target}</h2>
            <img className="rounded-3xl p-4 h-300 w-96" src={tuto.src} alt="" />
            <p className="p-8 text-center">{tuto.explanation}</p>
          </div>
        </div>
      </section>
      <section>
        <div className={open ? "open" : null}>
          <button
            type="button"
            className="questions"
            onClick={() => setOpen(!open)}
          >
            <h2>{title}</h2>
          </button>
          {open && (
            <div className="answers" id="reponses">
              <section>
                <fieldset>
                  <div>
                    {quizz.map((el) => (
                      <div key={el.content}>
                        <h2>{el.content}</h2>
                        {/* <input type="radio" name="" value="" />
                        <label htmlFor="">{el.content}</label> */}
                      </div>
                    ))}
                  </div>
                </fieldset>
              </section>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Tutoriel;
