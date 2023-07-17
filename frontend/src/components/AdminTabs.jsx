import React, { useState } from "react";
import TutoTab from "./TutoTab";
import QuizzTab from "./QuizzTab";
import RessourcesTab from "./RessourcesTab";

function AdminTabs() {
  const [openTab, setOpenTab] = useState(1);

  const handleNext = () => {
    setOpenTab(openTab + 1);
  };

  const handlePrevious = () => {
    return openTab > 1 ? setOpenTab(openTab - 1) : setOpenTab(openTab);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 1
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Tutoriels
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 2
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Quizz
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                openTab === 3
                  ? `text-white bg-gradient-to-br from-red-200 via-red-300 to-yellowbutton-200`
                  : `text-gray-500 bg-white`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Ressources
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p>coucou</p>
                <TutoTab />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>Coucou</p>
                <QuizzTab />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>coucou</p>
                <RessourcesTab />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-4">
          <button
            type="button"
            className="w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 mr-4 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
            onClick={handleNext}
          >
            <div className="w-full relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center">Suivant</h3>
            </div>
          </button>
          <button
            type="button"
            className="w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ring-2 ml-4 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
            onClick={handlePrevious}
          >
            <div className="w-full relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              <h3 className="text-center">Précédent</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminTabs;
