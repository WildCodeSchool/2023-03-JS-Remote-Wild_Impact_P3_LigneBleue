import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";

function QuizzTab({ tutorialId }) {
  const [quizz, setQuizz] = useState();

  const handleQuizz = (name, value) => {
    setQuizz({ ...quizz, [name]: value });
  };

  // const updateQuizzState = (id) => {
  //   if (id === "") {
  //     setQuizzId(quizzModel);
  //   } else {
  //     setQuizzId(quizz.find((art) => art.id === +id));
  //   }
  // };

  const getQuizz = async () => {
    try {
      const oneQuizz = await connexion.get(`/quizz/${tutorialId}`);
      setQuizz(oneQuizz);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuizz();
  }, []);

  return (
    <div>
      {quizz && (
        <>
          <h3>{quizz.title}</h3>
          {quizz.questions.length > 0 &&
            quizz.questions.map((quest, index) => (
              <details className="w-full mb-6 pb-4 mt-4">
                <summary className="flex">
                  <label className="text-lg text-gray-500 ">
                    Question {index + 1}
                    <input
                      type="text"
                      className="mr-4 py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
                      placeholder="Nom de la Question"
                      value={quest.content}
                      name="questions"
                      onChange={(event) =>
                        handleQuizz(event.target.name, event.target.value)
                      }
                      required
                    />
                  </label>
                </summary>
                <div className="w-full mb-6 pb-4 mt-4">
                  <div className="flex flex-col">
                    {quest.answers.map((answer, jindex) => (
                      <label className="text-lg text-gray-500">
                        Réponses {jindex + 1}
                        <input
                          type="text"
                          className="mr-4 block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
                          required
                          value={answer.answers}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </details>
            ))}
        </>
      )}
    </div>
  );
}

export default QuizzTab;
