import React from "react";
import img from "../assets/Tutoriel.jpg";

function Tutoriel() {
  return (
    <div className="">
      <h1 className="p-4 flex justify-center">Nom du tutoriel</h1>
      <div className="flex flex-col items-center bg-champagne rounded-3xl m-4">
        <h2 className="p-4">Objectif du tutoriel</h2>
        <img className="rounded-3xl p-4 h-300 w-96" src={img} alt="" />
        <p className="p-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus
          molestiae nostrum ullam aut laboriosam corrupti maiores nemo eius
          asperiores! Maxime sit, corrupti necessitatibus sequi laboriosam nemo
          nam illum animi?
        </p>
        <div className="bg-white rounded-3xl m-8 p-4 flex>">
          <div>
            <h2 className="text-center">Validez votre tuto</h2>
          </div>
          <h3 className="pt-4">Question 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            adipisci consectetur dolor ipsa totam perspiciatis at ea. Adipisci,
            nam eos itaque officia, ipsa vitae dicta tempora eius magni ducimus
            quo.
          </p>
          <h3 className="pt-4">Question 2</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            adipisci consectetur dolor ipsa totam perspiciatis at ea. Adipisci,
            nam eos itaque officia, ipsa vitae dicta tempora eius magni ducimus
            quo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tutoriel;
