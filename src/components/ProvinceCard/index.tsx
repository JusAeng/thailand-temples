import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

interface ProvinceCardProp {
  name: string;
  color?: string;
  small?: string;
}

const ProvinceCard: React.FC<ProvinceCardProp> = ({ name, color, small }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div
        className={"card" + ` ${small}`}
        onClick={() => {
          navigate("/temples");
        }}
      >
        {name}
      </div>
      <div className={"card-highligh" + ` ${color}`}></div>
    </div>
  );
};

export default ProvinceCard;
