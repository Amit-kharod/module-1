import React from "react";
import logo from "./logo 3 (1) 3.svg";
import Image from "next/image";
import avatar from "./Gamified User Avatar.svg";
import stars from "./Stars.svg";

type Props = {};

const NavbarMain = (props: Props) => {
  return (
    <div className="flex h-[10vh] w-full items-center bg-Erie-Black">
      <div className="grid w-full grid-cols-3">
        {/* logo */}
        <div className="flex max-h-full w-full items-center px-10 ">
          <Image src={logo} alt="logo" width={44} height={40} />
        </div>
        {/* progessbar */}
        <div>RL</div>
        {/* menu */}
        <div className="flex w-full items-center justify-end px-10 ">
          <div className="flex gap-[45px]">
            <Image src={stars} alt="stars" width={68} height={51} />
            <Image src={avatar} alt="avatar" width={52} height={52} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
