import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import TutorialsCard from "../../components/TutorialsCard";

function TutorialsList() {
  const [List, setList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations/${id}`)
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>{List}</div>
      {/* <section>
        <div className="flex flex-row">
          {tutorials.map((tutorial) => (
            <TutorialsCard tutorial={tutorial} />
          ))}
        </div>
      </section> */}
    </>
  );
}

export default TutorialsList;
