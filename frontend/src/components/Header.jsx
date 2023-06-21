import React from "react";
import logo from "../assets/logo_lb.png";

function Header() {
  return (
    <div className=" bg-yellow h-28 pt-2">
      <div className="flex  flex-row items-center justify-between bg-yellow pb-2 ">
        <div className="w-16 h-26 ml-3">
          <img src={logo} alt="Logo_la ligne Bleue" />
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
      <hr className="border-t-2 border-blue mr-6 ml-6  min-[600px]:hidden" />
    </div>
  );
}

export default Header;
