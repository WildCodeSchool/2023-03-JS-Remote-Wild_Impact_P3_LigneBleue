import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FcPhoneAndroid,
  FcFeedback,
  FcCollaboration,
  FcLock,
  FcCursor,
  FcHome,
  FcMusic,
  FcVideoFile,
} from "react-icons/fc";

import { IoDiceOutline } from "react-icons/io5";

import { IoLogoGameControllerB } from "react-icons/io";

import { TbMap2 } from "react-icons/tb";

import {
  FaInternetExplorer,
  FaSms,
  FaPhotoVideo,
  FaBook,
} from "react-icons/fa";

import { ImQrcode } from "react-icons/im";

import { MdTouchApp } from "react-icons/md";

import { BiSolidPhoneCall, BiSolidContact } from "react-icons/bi";

import { BsFacebook, BsInstagram, BsTiktok, BsShareFill } from "react-icons/bs";

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
    telephone: FcPhoneAndroid,
    qrcode: ImQrcode,
    tactile: MdTouchApp,
    telephoner: BiSolidPhoneCall,
    sms: FaSms,
    contact: BiSolidContact,
    media: FaPhotoVideo,
    musique: FcMusic,
    videos: FcVideoFile,
    jouer: IoLogoGameControllerB,
    facebook: BsFacebook,
    instagram: BsInstagram,
    tiktok: BsTiktok,
    lexicologie: FaBook,
    partager: BsShareFill,
  };

  const IconComponent = iconMapping[icon] || null;

  return <div>{IconComponent && <IconComponent size={40} />}</div>;
}

export default Icons;
