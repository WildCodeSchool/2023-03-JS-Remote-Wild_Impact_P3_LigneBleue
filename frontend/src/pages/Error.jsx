import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="text-center text-secondary font-sans text-6xl">
      Erreur 404 Cette page est introuvable...
      <img
        src="https://media.discordapp.net/attachments/1081687214460780575/1126793717735489607/77620-404-website-error-animation.gif?width=572&height=572"
        alt="Error 404"
        className="mx-auto"
      />
      <Link
        to="/"
        className="bg-gradient-to-r from-blue h-10 w-40 text-yellow font-semibold py-2 px-4 mr-5 rounded shadow"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Error;
