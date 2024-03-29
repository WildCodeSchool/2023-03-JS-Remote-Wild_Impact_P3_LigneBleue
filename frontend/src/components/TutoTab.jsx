import React, { useState } from "react";
import * as Icons from "react-icons/fc";

function TutoTab({ selectedTutorial, handleTutorial, manageTutorial }) {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");

  const iconNames = Object.keys(Icons);

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return <Icon />;
  };

  return (
    <div>
      <div>
        <form onSubmit={manageTutorial}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
              placeholder="Nom du tutoriel"
              value={selectedTutorial.name}
              name="name"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75  top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom du tutorial
            </label>
          </div>
          <div className="flex flex-col items-center w-80 gap-6 pb-4">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="bg-beige text-center"
            >
              <p className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer">
                Choisissez votre icône
              </p>
            </button>
            {open &&
              iconNames.map((iconName) => (
                <button
                  type="button"
                  className="flex flex-row"
                  key={iconName}
                  value={icon}
                  onClick={() => setIcon(iconName)}
                >
                  {getIcon(iconName)}
                  {iconName}
                </button>
              ))}
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5 pb-4">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Objectifs du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              value={selectedTutorial.target}
              name="target"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group mt-5 pb-4">
            <label
              htmlFor="objectifs"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Explication du tutoriel
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0"
              placeholder="Ecrivez les objectifs"
              value={selectedTutorial.explanation}
              name="explanation"
              onChange={(event) =>
                handleTutorial(event.target.name, event.target.value)
              }
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group pb-4">
            <div className="flex">
              <input
                type="url"
                className="mr-4 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder="Nom de l'image"
                value={selectedTutorial.alt}
                name="alt"
                onChange={(event) =>
                  handleTutorial(event.target.name, event.target.value)
                }
                required
              />
              <input
                type="url"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder="Lien de l'image"
                value={selectedTutorial.src}
                name="src"
                onChange={(event) =>
                  handleTutorial(event.target.name, event.target.value)
                }
                required
              />
            </div>

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
          <div className="flex justify-center">
            {selectedTutorial.id ? (
              <button
                type="submit"
                className=" text-white font-semibold w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ml-4 ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
              >
                Modifier
              </button>
            ) : (
              <button
                type="submit"
                className=" text-white font-semibold w-40 flex items-center justify-center overflow-hidden rounded-lg group bg-gradient-to-br ml-4 ring-2 ring-red-200 from-red-200 via-red-300 to-yellowbutton-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellowbutton-200 focus:outline-none focus:ring-red-200"
              >
                Ajouter
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TutoTab;
