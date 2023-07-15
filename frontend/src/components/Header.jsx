import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_lb.png";

function Header() {
  return (
    <>
      <div className="pt-2">
        <div className="flex  flex-row items-center justify-between pb-2 ">
          <div className="w-16 h-26 ml-3  min-[600px]:w-20 min-[600px]:h-30 min-[600px]:pt-2">
            <Link to="/">
              <img src={logo} alt="Logo_la ligne Bleue" />
            </Link>
          </div>
          <div>
            <h1 className=" text-2xl font-bold mt-6 pl-4 text-blue">
              LA LIGNE BLEUE
            </h1>
            <h6 className="text-xs pr-8">
              Rendre visibles les invisibles du numérique
            </h6>
          </div>
        </div>
        <hr className="border-t-2 border-blue mr-6 ml-6  max-[600px]:hidden" />
      </div>
      <div className="font-bold text-blue text-center text-xl p-6">
        VOTRE ESPACE DE FORMATION AUX OUTILS NUMERIQUES
      </div>
    </>
  );
}

export default Header;
