import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";

const quizzModel = {
  id: null,
  title: "",
  question: "",
  response: "",
};
function QuizzTab() {
  // const [quizz, setQuizz] = useState([]);
  // const [quizzId, setQuizzId] = useState(quizzModel);

  return (
    <div>
      <div className="relative z-0 w-full mb-6 group pb-4 mt-4">
        <div className="flex">
          <input
            type="url"
            className="mr-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder="Nom de la Question"
            required
          />
        </div>

        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute  text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75  top-0.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Question
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group pb-4 mt-4">
        <div className="flex flex-col">
          <input
            type="url"
            className="mr-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder="1er choix de réponse"
            required
          />
          <input
            type="url"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder="2ème choix de réponse"
            required
          />
          <input
            type="url"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder="3ème choix de réponse"
            required
          />
          <input
            type="url"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
            placeholder="4ème choix de réponse"
            required
          />
        </div>

        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute  text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75  top-0.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Réponses
        </label>
      </div>
    </div>
  );
}

export default QuizzTab;
