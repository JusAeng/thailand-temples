import React from "react";
import ProvinceCard from "@/components/ProvinceCard";

const ProvinceSelector = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <ProvinceCard name="ratchaburi" />
      <ProvinceCard name="ratchaburi" />
      <ProvinceCard name="ratchaburi" />
      <ProvinceCard name="ratchaburi" />
    </div>
  );
};

export default ProvinceSelector;
