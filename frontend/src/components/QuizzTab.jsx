import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";
import quizzModel from "../models/QuizzModel";

function QuizzTab({ quizzId, tutorialId }) {
  const [quizz, setQuizz] = useState(quizzModel);

  const handleQuizz = (event, questIndex, answerIndex) => {
    if (event.target.name === "title") {
      setQuizz((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }

    if (event.target.name.includes("questions")) {
      const prevState = { ...quizz };
      prevState.questions[questIndex].content = event.target.value;
      setQuizz(prevState);
    }

    if (event.target.name.includes("answers")) {
      const prevState = { ...quizz };
      prevState.questions[questIndex].answers[answerIndex].answers =
        event.target.value;
      if (answerIndex === 0) {
        prevState.questions[questIndex].answers[answerIndex].status = 1;
      }
      setQuizz(prevState);
    }
  };

  const getQuizz = async (id) => {
    try {
      const oneQuizz = await connexion.get(`/quizz/${id || quizzId}`);
      setQuizz(oneQuizz);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (quizzId) {
      getQuizz();
    } else {
      setQuizz(quizzModel);
    }
  }, [quizzId]);

  const checkAnswersValidity = () => {
    return quizz.questions.every((quest) => {
      return quest.answers.every((answer) => answer.answers !== "");
    });
  };

  const postQuizz = async () => {
    try {
      const newQuizz = await connexion.post(`/quizz`, {
        ...quizz,
        tutorialId,
      });
      getQuizz(newQuizz.id);
    } catch (error) {
      console.error(error);
    }
  };

  const manageQuizz = (event) => {
    event.preventDefault();
    if (checkAnswersValidity()) {
      if (quizz.id) {
        console.info("Should update the quizz");
      } else {
        postQuizz();
        console.info("Should insert a quizz");
      }
    } else {
      // Ajoute un message Users
    }
  };

  return (
    <div>
      {quizz && (
        <form onSubmit={manageQuizz}>
          <label className="text-lg text-gray-500 ">
            Titre du quizz
            <input
              type="text"
              className="mr-4 py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
              placeholder="Titre du quizz"
              value={quizz.title}
              name="title"
              onChange={(event) => handleQuizz(event)}
              required
            />
          </label>
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
                      name={`questions_${index}`}
                      onChange={(event) => handleQuizz(event, index)}
                      required
                    />
                  </label>
                </summary>
                <div className="w-full mb-6 pb-4 mt-4">
                  <div className="flex flex-col">
                    {quest.answers.map((answer, jindex) => (
                      <label className="text-lg text-gray-500">
                        Réponse {jindex + 1} {jindex === 0 && "correcte"}
                        <input
                          type="text"
                          className="mr-4 block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-200"
                          name={`answers_${index}_${jindex}`}
                          value={answer.answers}
                          onChange={(event) =>
                            handleQuizz(event, index, jindex)
                          }
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          {quizz.id ? (
            <button type="submit">Modifier</button>
          ) : (
            <button type="submit">Ajouter</button>
          )}
        </form>
      )}
    </div>
  );
}

export default QuizzTab;
