import React from "react";
import { Link } from "react-router-dom";

function AccueilAdmin() {
  return (
    <div className="bg-champagne text-blue font-bold flex flex-col justify-center items-center h-96 m-8 rounded-xl gap-10">
      <p className="text-3xl">BIENVENUE SUR VOTRE ESPACE ADMINISTRATEUR</p>
      <Link to="/admin/tuto">
        <button
          type="button"
          className="bg-blue rounded-xl text-white h-24 w-60"
        >
          Administrer les tutoriels
        </button>
      </Link>
    </div>
  );
}

export default AccueilAdmin;
