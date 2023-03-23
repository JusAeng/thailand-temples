import React from "react";
import ProvinceCard from "@/components/ProvinceCard";

const Sidebar = () => {
  return (
    <div className="w-fit flex flex-col gap-[10px] h-[100vh]">
      <ProvinceCard name="eiei" small="small" />
      <ProvinceCard name="eiei" small="small" />
      <ProvinceCard name="eiei" small="small" />
      <ProvinceCard name="eiei" small="small" />
    </div>
  );
};

export default Sidebar;
