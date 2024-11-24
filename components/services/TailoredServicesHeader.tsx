'use client';

import React, { useState } from 'react';
import HeaderCard from "../card/HeaderCard";

const TailoredServices = ({ setType }: { setType: (type: string) => void }) => {
  const [activeType, setActiveType] = useState<string | null>(null); // Track active type

  const handleClick = (type: string) => {
    setActiveType(type); // Set the active type
    setType(type); // Call parent callback
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr] gap-4 lg:gap-y-4 p-1 text-center">
      {/* Empty Column for LG */}
      <div className="hidden lg:block"></div>

      {/* LIGHT, PRO, PREMIUM and MIX AND MATCH for SMALL screens */}
      <div className="lg:hidden flex flex-col space-y-4">
        <div className="bg-accent text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">LIGHT</h2>
          <p className="text-sm bg-accent text-white rounded-md px-2 py-1">MIX AND MATCH UP TO 5 MODULES</p>
        </div>
        <div className="bg-primary text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row  items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">PRO</h2>
          <p className="text-sm bg-accent text-white rounded-md px-2 py-1">MIX AND MATCH UP TO 10 MODULES</p>
        </div>
        <div className="bg-destructive text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row  items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">PREMIUM</h2>
          <p className="text-sm bg-accent text-white rounded-md px-2 py-1">ALL MODULES</p>
        </div>
      </div>

      {/* LIGHT, PRO, PREMIUM on LG Screens */}
      <div className=" lg:block bg-accent hidden text-white rounded-lg shadow-md p-4  sm:flex items-center justify-center ">
        <h2 className="font-bold text-lg">LIGHT</h2>
      </div>
      <div className=" lg:block bg-primary hidden text-white rounded-lg shadow-md p-4  sm:flex items-center justify-center ">
        <h2 className="font-bold text-lg">PRO</h2>
      </div>
      <div className=" lg:block bg-destructive hidden text-white rounded-lg shadow-md p-4  sm:flex items-center justify-center ">
        <h2 className="font-bold text-lg">PREMIUM</h2>
      </div>

      {/* Header Card Column for START-UP, MICRO, SME */}
      <div className="lg:row-span-1 lg:col-span-1 flex flex-col justify-between bg-background rounded-lg lg:mt-2 gapy-2 lg:h-full">
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg ${
            activeType === 'startup' ? 'shadow-primary shadow-lg text-destructive ' : 'shadow-lg shadow-neutral-700 '
          }`}
          onClick={() => handleClick('startup')}
        >
          <HeaderCard type="startup" />
        </div>
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg py-2 ${
            activeType === 'micro' ? 'shadow-primary shadow-lg text-destructive ' : 'shadow-lg shadow-neutral-700'
          }`}
          onClick={() => handleClick('micro')}
        >
          <HeaderCard type="micro" />
        </div>
        <div
          className={`flex-1 hover:cursor-pointer rounded-lg py-2 ${
            activeType === 'sme' ? 'shadow-primary shadow-lg text-destructive ' : 'shadow-lg shadow-neutral-700'
          }`}
          onClick={() => handleClick('sme')}
        >
          <HeaderCard type="sme" />
        </div>
      </div>

      {/* MIX AND MATCH Columns for LG */}
      <div className="hidden bg-accent text-white rounded-lg shadow-md p-4 lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">MIX AND MATCH UP TO 5 MODULES</h2>
      </div>
      <div className="hidden bg-primary text-white rounded-lg shadow-md p-4 lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">MIX AND MATCH UP TO 10 MODULES</h2>
      </div>
      <div className="hidden bg-destructive text-white rounded-lg shadow-md p-4 lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">ALL MODULES</h2>
      </div>
    </div>
  );
};

export default TailoredServices;
