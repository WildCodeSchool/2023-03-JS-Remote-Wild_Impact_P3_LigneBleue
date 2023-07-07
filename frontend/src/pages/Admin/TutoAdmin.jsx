import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Select, Option } from "@material-tailwind/react";
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
      <AdminTabs color="purple" />
      <div className="flex flex-col items-center w-80 gap-6">
        <Select size="md" label="Choisissez une formation">
          {formations.map((formation) => (
            <Option key={formation.id} value={formation.id}>
              {formation.title}
            </Option>
          ))}
        </Select>
        <Select size="md" label="Choisissez un tutoriel">
          {tutos.map((tuto) => (
            <Option key={tuto.id} value={tuto.id}>
              {tuto.name}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
}

export default TutoAdmin;
