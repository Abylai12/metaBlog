import React from "react";
import Loader from "./loader";

const Skeleton = () => {
  return (
    <div
      className="max-m-[1220px] h-[600px] bg-gray-200
       relative rounded-xl"
    >
      <div className="p-10 rounded-xl w-[598px] h-[252px] bg-gray-300  absolute left-3 bottom-3">
        <button className="rounded-md max-w-[61px] h-[32px] px-2 py-1"></button>
        <p className="mt-4 mb-6 h-[80px] overflow-hidden "></p>
        <div className="font-normal text-base"></div>
      </div>
      <div className="absolute h-[600px] translate-y-1/2 translate-x-2/4 left-1/2 right-1/2">
        <Loader />
      </div>
    </div>
  );
};

export default Skeleton;
