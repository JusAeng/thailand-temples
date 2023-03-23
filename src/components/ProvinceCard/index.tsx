import React from "react";
import "./index.scss";

interface ProvinceCardProp {
  name: string;
  pic?: string;
}

const ProvinceCard: React.FC<ProvinceCardProp> = ({ name, pic }) => {
  return (
    <div className="w-[500px] h-[100px] bg-slate-100 grid place-items-center rounded-xl">
      {name}
    </div>
  );
};

export default ProvinceCard;
