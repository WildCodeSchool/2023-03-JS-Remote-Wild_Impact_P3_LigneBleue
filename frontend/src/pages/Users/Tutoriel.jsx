import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../../services/connexion";
import img from "../../assets/Tutoriel.jpg";

function Tutoriel() {
  const [open, setOpen] = useState(false);
  const [quizz, setQuizz] = useState([]);
  const [title, setTitle] = useState([]);
  const { tid } = useParams();

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
  }, []);

  return (
    <>
      <section>
        <div className="">
          <h1 className="p-4 flex justify-center">Nom du tutoriel</h1>
          <div className="flex flex-col items-center bg-champagne rounded-3xl m-4">
            <h2 className="p-4">Objectif du tutoriel</h2>
            <img className="rounded-3xl p-4 h-300 w-96" src={img} alt="" />
            <p className="p-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              possimus molestiae nostrum ullam aut laboriosam corrupti maiores
              nemo eius asperiores! Maxime sit, corrupti necessitatibus sequi
              laboriosam nemo nam illum animi?
            </p>
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
                        <input type="radio" name="" value="" />
                        <label htmlFor="">{el.content}</label>
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
