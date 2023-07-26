import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoBreadcrumbs from "../assets/logoBreadcrumbs.png";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink = `/${crumb}`;
      return (
        <div
          className=" after:content-['>'] after:mx-2 last:after:hidden"
          // eslint-disable-next-line react/no-array-index-key
          key={`${crumb}_${index}`}
        >
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div className="flex flex-row mt-10 max-sm:mt-12">
      <img src={logoBreadcrumbs} alt="crumbs" className="w-6 h-6 ml-2" />
      {location.pathname === "/" ? (
        <div>Accueil</div>
      ) : (
        <>
          <div className="mr-2">
            <Link to="/">Accueil</Link>
          </div>
          <p className="mr-2">{">"}</p>
          {crumbs}
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
