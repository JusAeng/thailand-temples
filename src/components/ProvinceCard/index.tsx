import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

interface ProvinceCardProp {
  name: string;
  pic?: string;
}

const ProvinceCard: React.FC<ProvinceCardProp> = ({ name, pic }) => {
  const navigate = useNavigate();
  return (
    <div
      className="province-card"
      onClick={() => {
        navigate("/temples");
      }}
    >
      {name}
    </div>
  );
};

export default ProvinceCard;
