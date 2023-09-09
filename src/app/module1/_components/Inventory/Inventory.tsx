import React from "react";
import Heading from "../Heading";

type Props = {};

const Inventory = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Inventory"
        extraClass="flex items-center justify-center"
      />
      <div className="w-full h-full overflow-y-auto">
        <div className="mx-2 my-4 bg-black h-full">

        </div>
      </div>
    </div>
  );
};

export default Inventory;
