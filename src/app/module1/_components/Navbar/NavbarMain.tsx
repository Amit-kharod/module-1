import React from "react";
import logo from "./logo 3 (1) 3.svg";
import Image from "next/image";
import avatar from "./Gamified User Avatar.svg";
import stars from "./Stars.svg";
import LevelProgressBar from "./LevelProgressBar";

type Props = {
  maxLevel:number
};

const NavbarMain = ({maxLevel}: Props) => {
  return (
    <div className="flex h-[10vh] items-center bg-Erie-Black">
      <div className="w-full flex justify-between items-center px-10">
        {/* Left Side */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={44} height={40} />
        </div>
        
        {/* Center */}
        <div className="flex justify-center">
          <LevelProgressBar maxLevel={maxLevel}/>
        </div>
        
        {/* Right Side */}
        <div className="flex gap-[45px] items-center">
          <Image src={stars} alt="stars" width={68} height={51} />
          <Image src={avatar} alt="avatar" width={52} height={52} />
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
