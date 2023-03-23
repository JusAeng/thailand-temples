import React from "react";
import map_pic from "@/assets/pics/thailand-map-poster.png";
import { ProvinceSelector } from "@/sections/homepage";

const HomePage = () => {
  return (
    <div className="h-[100vh] bg-slate-300 grid place-items-center">
      <div className="h-[90%] w-[80%] bg-white grid grid-cols-2">
        <section>
          <img src={map_pic} alt="" className="mx-auto" />
        </section>
        <section>
          <ProvinceSelector />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
