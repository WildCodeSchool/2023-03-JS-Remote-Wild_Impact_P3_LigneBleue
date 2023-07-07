import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/userIcon.png";

function Footer() {
  return (
    <div className="flex flex-row  items-center justify-center  p-4 bg-yellow rounded-tr-full rounded-tl-full">
      <img className="w-14 h-14 items-center " src={userIcon} alt="User icon" />
      <Link to="/connexion">
        <button
          type="button"
          className="text-xl pl-6 w-auto text-center  text-blue font-bold"
        >
          Accéder à mon parcours
        </button>
      </Link>
    </div>
  );
}

export default Footer;
