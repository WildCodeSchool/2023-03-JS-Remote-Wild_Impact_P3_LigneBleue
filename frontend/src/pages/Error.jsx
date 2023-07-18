import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.gif";

function Error() {
  return (
    <div className="relative z-20 flex flex-col justify-center py-5 pr-4 mb-1 mx-4 rounded-3xl text-center text-secondary font-sans bg-champagne">
      <p className="text-6xl">Erreur 404</p>
      <p className="text-5xl mb-5">Cette page est introuvable...</p>
      <img src={error} alt="Error 404" className="mx-auto" />
      <div className="flex justify-center">
        <Link to="/">
          <button
            type="button"
            className="w-56 overflow-hidden rounded-lg group bg-gradient-to-br ring-2 mt-7 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-200"
          >
            <div className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center text-2xl">Retourner à l'accueil</h3>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
