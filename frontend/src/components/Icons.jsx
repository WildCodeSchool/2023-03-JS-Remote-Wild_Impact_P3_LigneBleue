import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FcPhoneAndroid,
  FcFeedback,
  FcCollaboration,
  FcLock,
  FcQuestions,
  FcSearch,
  FcPlus,
  FcCursor,
  FcHome,
} from "react-icons/fc";
import { IoDiceOutline } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";
import { FaInternetExplorer } from "react-icons/fa";

function Icons({ icon }) {
  const iconMapping = {
    lignebleue: FcCursor,
    utiliser: FcPhoneAndroid,
    divertir: IoDiceOutline,
    internet: FaInternetExplorer,
    vie: FcHome,
    email: FcFeedback,
    communiquer: FcCollaboration,
    securite: FcLock,
    deplacer: TbMap2,
    aider: FcQuestions,
    rechercher: FcSearch,
    plusloin: FcPlus,
  };

  const IconComponent = iconMapping[icon] || null;

  return <div>{IconComponent && <IconComponent />}</div>;
}

export default Icons;
