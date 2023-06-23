import React from "react";
import img from "../assets/Tutoriel.jpg";

function Tutoriel() {
  return (
    <div>
      <h1 className="p-4 flex justify-center">Nom du tutoriel</h1>

      <div className="bg-champagne rounded-tr-3xl rounded-tl-3xl flex justify-center flex-col m-4">
        <h2 className="p-4 flex justify-center">Objectif du tutoriel</h2>
        <img
          className="p-4 object-center object-contain h-300 w-96"
          src={img}
          alt=""
        />
        <p className="text-center p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus
          molestiae nostrum ullam aut laboriosam corrupti maiores nemo eius
          asperiores! Maxime sit, corrupti necessitatibus sequi laboriosam nemo
          nam illum animi?
        </p>
        <div className="bg-white rounded-tr-3xl rounded-tl-3xl flex justify-center m-12>">
          <h2>Validez votre tuto</h2>
        </div>
      </div>
    </div>
  );
}

export default Tutoriel;
