import { ProvinceContext } from "@/contexts/ProvinceContext";
import React, { useContext } from "react";
import "./index.scss";

interface ProvinceCardProp {
  name: string;
  color?: string;
  small?: string;
}

const ProvinceCard: React.FC<ProvinceCardProp> = ({ name, color, small }) => {
  const { province, setProvince } = useContext(ProvinceContext);
  return (
    <div className="relative">
      <div className={"card" + ` ${small}`} onClick={() => setProvince(name)}>
        {name}
      </div>
      <div className={"card-highligh" + ` ${color}`}></div>
    </div>
  );
};

export default ProvinceCard;
