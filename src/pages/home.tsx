import React from "react";
import map_pic from "@/assets/pics/thailand-map.png";
import { ProvinceSelector } from "@/sections/homepage";

const HomePage = () => {
  return (
    <div className="h-[100vh] bg-ocean grid place-items-center">
      <div className="h-[90%] w-[80%] bg-white grid grid-cols-2">
        <section className="bg-ocean">
          <img src={map_pic} alt="" className="mx-auto" />
        </section>
        <section className="flex items-center justify-center bg-ocean">
          <ProvinceSelector />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
