import React, { useState } from "react";
import connexion from "../services/connexion";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/signup", user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center flex-col p-4">
      <div className="p-4 flex justify-center">
        <h1>M'inscrire pour accéder à mon parcours</h1>
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
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={user.email}
              type="email"
              name="email"
              placeholder="E-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={(event) => handleUser(event)}
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
              value={user.password}
              onChange={(event) => handleUser(event)}
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
