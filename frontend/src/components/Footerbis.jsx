import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.png";

function Footerbis() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex items-center h-20 w-72 pl-16 bg-yellow rounded-tr-full max-sm:w-36">
        <div className="pr-3">
          <img className="w-10 min-sm:h-10" src={userIcon} alt="User icon" />
        </div>
        <div className="pt-3">
          <Link to="/">
            <div className="text-base text-center min-sm:pb-3 text-blue font-bold min-sm:text-sm">
              Accueil
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 w-72  bg-yellow rounded-tl-full max-sm:w-36">
        <div className="max-sm:pt-3 pr-3">
          <img className="w-10 min-sm:h-10" src={userIcon} alt="User icon" />
        </div>
        <div className="pt-2">
          <Link to="/connexion">
            <div className="flex text-base text-center min-sm:pb-3 text-blue font-bold min-sm:text-sm w-32">
              Accéder à mon parcours
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footerbis;
