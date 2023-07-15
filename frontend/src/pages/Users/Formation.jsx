import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Icons from "../../components/Icons";
import connexion from "../../services/connexion";
import Footerbis from "../../components/Footerbis";

function TutorialsList() {
  const [list, SetList] = useState([]);
  const { fid } = useParams();

  const getTutorialsList = async () => {
    try {
      const TutoList = await connexion.get(`/formations/${fid}`);
      SetList(TutoList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTutorialsList();
  }, []);

  return (
    <>
      <section>
        <div className="py-5 pr-4 pl-4 mb-1">
          <div className="bg-champagne grid grid-cols-3 max-sm:grid max-sm:grid-cols-2 place-items-center rounded-3xl">
            {list.map((tutorial) => (
              <div
                key={tutorial.id}
                className="formations flex flex-col justify-center items-center bg-brown_light px-3 py-3 my-10 mx-10 w-52 h-40 max-sm:w-36 max-sm:h-30"
              >
                <Link to={`/formations/${fid}/tutoriel/${tutorial.id}`}>
                  <h3 className="text-2xl text-center max-sm:text-sm pt-2">
                    {tutorial.name}
                  </h3>
                  <div className="flex justify-center">
                    <Icons icon={tutorial.icon} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footerbis />
    </>
  );
}

export default TutorialsList;
