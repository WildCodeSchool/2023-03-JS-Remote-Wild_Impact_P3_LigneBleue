import React from "react";
import userIcon from "../assets/userIcon.png";

function Footer() {
  return (
    <div className="flex flex-row justify-center items-center m-4 p-4 bg-yellow rounded-tr-3xl rounded-tl-3xl">
      <img className="w-14 h-14 " src={userIcon} alt="User icon" />
      <h3 className="text-center  text-blue font-bold">
        Accéder à mon parcours
      </h3>
    </div>
  );
}

export default Footer;
