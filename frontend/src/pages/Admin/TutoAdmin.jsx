import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import AdminTabs from "../../components/AdminTabs";

function TutoAdmin() {
  const [formations, setFormations] = useState([]);
  const [tutos, setTutos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations`)
      .then((res) => res.json())
      .then((data) => setFormations(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/tutos`)
      .then((res) => res.json())
      .then((data) => setTutos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>TutoAdmin</div>
      <AdminTabs />
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez une formation
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Choisissez une formation</option>
            {formations.map((formation) => (
              <option value={formation.id}>{formation.title}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center w-80 gap-6">
          <label htmlFor="underline_select" className="sr-only">
            Choisissez une formation
          </label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected>Choisissez un tuto</option>
            {tutos.map((tuto) => (
              <option value={tuto.id}>{tuto.title}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default TutoAdmin;
