import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import TutorialsCard from "../../components/TutorialsCard";

function TutorialsList() {
  const [List, SetList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/formations/${id}`)
      .then((res) => res.json())
      .then((data) => SetList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* <div>{List}</div> */}
      <section>
        <div className="pt-10 pr-4 pl-4">
          <div className="bg-champagne grid grid-cols-3 rounded-tr-3xl rounded-tl-3xl">
            {List.map((tutorial) => (
              <div
                key={tutorial.id}
                className="formations bg-light_blue px-3 py-3 my-10 mx-10"
              >
                <h3 className="text-2xl text-center pt-2">{tutorial.name}</h3>
                <div className="flex justify-center" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TutorialsList;
