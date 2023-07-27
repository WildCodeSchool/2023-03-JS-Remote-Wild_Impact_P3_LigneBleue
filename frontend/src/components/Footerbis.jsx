import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.png";

function Footerbis() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex items-center justify-center h-20 w-72 bg-yellow rounded-tr-full max-sm:w-40 max-sm:grid max-sm:grid-cols-2">
        <div className="max-sm:pr-3 pr-3 flex justify-center max-sm:justify-self-end">
          <img className="w-10" src={userIcon} alt="User icon" />
        </div>
        <div className="pt-3">
          <Link to="/">
            <div className="text-base text-blue font-bold max-sm:text-xs max-sm:justify-self-start">
              Accueil
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 w-72  bg-yellow rounded-tl-full max-sm:w-40 max-sm:grid max-sm:grid-cols-2">
        <div className="max-sm:pt-3 pr-3">
          <img className="w-10" src={userIcon} alt="User icon" />
        </div>
        <div className="pt-2">
          <Link to="/connexion">
            <div className="flex text-base text-center text-blue font-bold max-sm:text-xs w-32">
              Accéder à mon parcours
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footerbis;
