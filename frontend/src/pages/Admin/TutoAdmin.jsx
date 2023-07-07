import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
      <AdminTabs color="purple" />
      <div className="flex flex-col items-center w-80 gap-6">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Choissisez une formation
          </InputLabel>
          <Select size="md" label="Choisissez une formation">
            {formations.map((formation) => (
              <MenuItem key={formation.id} value={formation.id}>
                {formation.title}
              </MenuItem>
            ))}
          </Select>
          <InputLabel id="demo-simple-select-label">
            Choissisez un tutoriel
          </InputLabel>
          <Select size="md" label="Choisissez un tutoriel">
            {tutos.map((tuto) => (
              <MenuItem key={tuto.id} value={tuto.id}>
                {tuto.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default TutoAdmin;
