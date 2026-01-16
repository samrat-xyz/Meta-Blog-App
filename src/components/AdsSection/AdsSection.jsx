import React from "react";

export default function AdsSection() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-11/12 mx-auto  h-[200px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center shadow-md text-accent">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest ">Advertisement</p>
          <p className="text-lg font-semibold">You can place ads</p>
          <p className="text-sm ">750 × 100</p>
        </div>
      </div>
    </div>
  );
}
