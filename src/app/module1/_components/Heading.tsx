import React from "react";
import { BsTerminal } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  icon?: string;
  headingName: string;
  extraClass?: string;
};

const Heading = ({ icon, headingName, extraClass }: Props) => {
  let reactIcon = null;
  if (icon === "BsTerminal") {
    reactIcon = <BsTerminal className="h-5 w-5" />;
  } else if (icon === "GiHamburgerMenu") {
    reactIcon = <GiHamburgerMenu className="h-5 w-5" />;
  }

  return (
    <div
      className={`flex h-10 w-full items-center gap-2 bg-Lavender ${extraClass}`}
    >
      {icon && <span>{reactIcon}</span>}
      <span className="text-sm font-semibold">{headingName}</span>
    </div>
  );
};

export default Heading;
