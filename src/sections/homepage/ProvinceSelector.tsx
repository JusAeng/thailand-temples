import React from "react";
import ProvinceCard from "@/components/ProvinceCard";

const ProvinceSelector = () => {
  return (
    <div className="flex flex-col gap-[25px]">
      <ProvinceCard name="Ratchaburi" color="red" />
      <ProvinceCard name="Lamphun" color="yellow" />
      <ProvinceCard name="Lampang" color="blue" />
      <ProvinceCard name="Lopburi" color="purple" />
    </div>
  );
};

export default ProvinceSelector;
