import React from "react";
import userIcon from "../assets/userIcon.png";

function Footerbis() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex justify-center items-center h-20 w-72  bg-yellow rounded-tr-full ">
        <img className="w-10 h-10" src={userIcon} alt="User icon" />
        <div className="text-base text-blue font-bold ">Acceuil</div>
      </div>
      <div className="flex justify-center items-center h-20 w-72  bg-yellow rounded-tl-full">
        <img className="w-10 h-10" src={userIcon} alt="User icon" />
        <div className="flex text-base text-center  text-blue font-bold">
          Accéder à mon parcours
        </div>
      </div>
    </div>
  );
}

export default Footerbis;
