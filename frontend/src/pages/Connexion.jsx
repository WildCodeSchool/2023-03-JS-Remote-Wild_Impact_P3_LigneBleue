import React from "react";

function Connexion() {
  return (
    <div className="flex justify-center flex-col p-4">
      <div className="p-4 flex justify-center">
        <h1>Me connecter pour accéder à mon parcours</h1>
      </div>
      <div className="flex justify-center">
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 flex justify-center"
              for="username"
            >
              E-mail ou nom d'utilisateur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="E-mail ou nom d'utilisateur"
            />
          </div>
          <div className="mb-6">
            <label
              className="flex justify-center block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Mot de passe
            </label>
            <input
              className="shadow border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex flex-col">
            <button className="bg-blue opacity-80 text-gray-light rounded-full m-2 p-1">
              Continuer
            </button>
            <button className=" text-blue text-sm underline underline-offset-1 rounded-full m-2">
              Mot de passe oublié ?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
