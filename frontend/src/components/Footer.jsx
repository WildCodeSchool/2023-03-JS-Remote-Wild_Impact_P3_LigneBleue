import React from "react";
import userIcon from "../assets/userIcon.png";

function Footer() {
  return (
    <div className="flex flex-row  items-center justify-center  p-4 bg-yellow rounded-tr-full rounded-tl-full">
      <img className="w-14 h-14 items-center " src={userIcon} alt="User icon" />
      <div className="text-xl pl-6 w-auto text-center  text-blue font-bold">
        Accéder à mon parcours
      </div>
    </div>
  );
}

export default Footer;
