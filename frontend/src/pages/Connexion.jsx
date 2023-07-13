import React, { useState } from "react";
import connexion from "../services/connexion";

function Connexion() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const handleAuth = (event) => {
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/connexion", auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center flex-col p-4">
      <div className="p-4 flex justify-center">
        <h1>Me connecter pour accéder à mon parcours</h1>
      </div>
      <div className="flex justify-center">
        <form
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(event) => login(event)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 flex justify-center"
              htmlFor="username"
            >
              E-mail ou nom d'utilisateur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={auth.email}
              type="email"
              name="email"
              required
              placeholder="E-mail ou nom d'utilisateur"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(event) => handleAuth(event)}
            />
          </div>
          <div className="mb-6">
            <label
              className="flex justify-center block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="shadow border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={auth.password}
              onChange={(event) => handleAuth(event)}
              placeholder="******************"
              required
            />
          </div>
          <div className="flex flex-col">
            <button
              className="bg-blue opacity-80 text-white rounded-full m-2 p-1"
              type="submit"
            >
              Continuer
            </button>
            <button
              className=" text-blue text-sm underline underline-offset-1 rounded-full m-2"
              type="submit"
            >
              Mot de passe oublié ?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
