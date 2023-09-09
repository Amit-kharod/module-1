import React from "react";
import Heading from "../Heading";
import audio from "../../../../assets/audio.svg";
import play from "../../../../assets/play.svg";
import docSpeak from "../../../../assets/doc speak.svg";
import Image from "next/image";

type Props = {};

const ActivityTask = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Activity Task"
        extraClass="px-8"
        icon="GiHamburgerMenu"
      />
      <div className="relative flex h-full w-full -translate-y-5 items-center justify-center p-8">
        <div className="flex flex-col gap-5 font-OpenSans">
          <span className="text-sm font-light">
            Gizmo arrives at the compound and notices the drone hovering in the
            air, positioned a short distance away.
          </span>
          <span className="text-sm font-bold">
            Assist Gizmo to reach the drone.
          </span>
        </div>
        <div className="absolute bottom-0 right-5 flex gap-5">
          <Image
            src={docSpeak.src}
            alt="audio"
            width={13}
            height={13}
            className="cursor-pointer"
          />
          <Image
            src={audio.src}
            alt="audio"
            width={13}
            height={13}
            className="cursor-pointer"
          />
          <Image
            src={play.src}
            alt="audio"
            width={13}
            height={13}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityTask;
