import React from "react";
import nocontent from "../assets/nocontent.jpg";

function NoContent() {
  return (
    <>
      <p className="text-blue font-bold text-center text-6xl">
        Pas encore de contenu
      </p>
      <img src={nocontent} alt="no content" />
    </>
  );
}

export default NoContent;
