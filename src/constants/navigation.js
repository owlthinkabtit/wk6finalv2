import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import { IoSearchOutline } from 'react-icons/io5';


export const navigation = [
    {
      label: "TV Shows",
      href: 'tv',
      icon: <PiTelevisionDuotone />
    },
    {
      label: "Movies",
      href: "movie",
      icon: <TbMovie />
    }
  ]
  
  export const mobileNavigation = [
    {
      label: "Home",
      href: "/",
      icon: <MdHomeFilled />
    },
    ...navigation, 
    {
      label: "search",
      href: "/search",
      icon: <IoSearchOutline />
    }
  ]