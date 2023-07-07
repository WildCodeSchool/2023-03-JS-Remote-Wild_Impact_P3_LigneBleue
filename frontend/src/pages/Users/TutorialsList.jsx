import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Icons from "../../components/Icons";
import connexion from "../../services/connexion";


function TutorialsList() {
  const [list, SetList] = useState([]);
  const { id } = useParams();
  const getTutorialsList = async () => {
    try {
      const TutoList = await connexion.get(`/formations/${id}`);
      SetList(TutoList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      getTutorialsList();
  }, []);


  return (
      <section>
        <div className="pt-10 pr-4 pl-4">
          {" "}
          <div className="bg-champagne grid grid-cols-3 rounded-tr-3xl rounded-tl-3xl">
            {list.map((tutorial) => (
              <div
                key={tutorial.id}
                className="formations bg-light_blue px-3 py-3 my-10 mx-10"
              >
                <h3 className="text-2xl text-center pt-2">{tutorial.name}</h3>
                <div className="flex justify-center">
                  <Icons icon={tutorial.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

export default TutorialsList;
