import React, { useState, useEffect } from "react";
import TutorialsCard from "../../components/TutorialsCard";

function TutorialsList() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations`)
      .then((res) => res.json())
      .then((tuto) => setTutorials(tuto))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>Coucou</div>
      <section>
        <div className="flex flex-row">
          {tutorials.map((tutorial) => (
            <TutorialsCard tutorial={tutorial} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TutorialsList;
