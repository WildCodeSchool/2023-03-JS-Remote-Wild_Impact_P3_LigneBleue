import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Icons from "../../components/Icons";
import connexion from "../../services/connexion";
import Footerbis from "../../components/Footerbis";
import NoContent from "../../components/NoContent";
import check from "../../assets/images/check.png";
import "./Formation.css";

function TutoProgress() {
  const [list, setList] = useState([]);
  const { fid } = useParams();

  const getTutorialsList = async () => {
    try {
      const tutoList = await connexion.get(`/formations/${fid}`);
      setList(tutoList);
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
            {list.length > 0 &&
              list.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="formation flex flex-col justify-center items-center bg-brown_light px-3 py-3 my-10 mx-10 max-sm:w-36 max-sm:h-30 w-52 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <Link to={`/formations/${fid}/tutoriel/${tutorial.id}`}>
                    <h3 className="text-xl max-sm:text-sm text-center">
                      {tutorial.name}
                    </h3>
                    <div className="flex justify-center">
                      <Icons icon={tutorial.icon} />
                    </div>
                  </Link>
                  <span className="w-10 h-10 ml-32">
                    <img src={check} alt="check" />
                  </span>
                </div>
              ))}
            {list.length === 0 && <NoContent />}
          </div>
        </div>
      </section>
      <Footerbis />
    </>
  );
}

export default TutoProgress;
