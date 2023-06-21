import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoBreadcrumbs from "../assets/logoBreadcrumbs.png";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="flex  flex-row mt-1">
      <img src={logoBreadcrumbs} alt=" " className="w-6 h-6 ml-2" />
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;
