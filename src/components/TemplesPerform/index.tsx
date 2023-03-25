import { ProvinceContext } from "@/contexts/ProvinceContext";
import React, { useRef, useState, useContext } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import "./index.scss";

interface TemplePerformProp {
  list: string[];
}

const TemplesPerform: React.FC<TemplePerformProp> = ({ list }) => {
  const [temples, setTemples] = useState(list);
  const { province, setProvince } = useContext(ProvinceContext);

  const halfLength = Math.ceil(temples.length / 2);

  const firstPart = temples.slice(0, halfLength);
  const secondPart = temples.slice(halfLength);

  const textSearchRef = useRef<HTMLInputElement>(null);

  const searching = () => {
    let temp: string[] = [];
    console.log("you search!");
    let textSearch = "";
    if (textSearchRef.current != null) {
      textSearch = textSearchRef.current.value;
    }

    list.forEach((ele) => {
      if (ele.includes(textSearch)) {
        temp.push(ele);
      }
    });
    setTemples(temp);
  };

  return (
    <div className="performs-container max-md:pt-[20px]">
      <section className="action">
        <div className="h-[60px]">
          <button
            className="font-semibold flex flex-row items-center"
            onClick={() => setProvince("")}
          >
            <BsArrowLeftShort size={25} />
            Back
          </button>
        </div>
        <button className="bg-white rounded-[8px] h-[30px] w-[80%] flex flex-row items-center justify-center gap-[3px] text-sm">
          <HiDownload size={20} />
          CSV
        </button>
      </section>
      <section className="perform">
        <div className="h-[60px] text-center">
          <h2 className="font-bold text-3xl">{province}</h2>
        </div>
        <div className="flex mb-[10px]">
          <input
            type="text"
            onChange={() => searching()}
            ref={textSearchRef}
            className="w-full h-[30px] rounded-[6px] text-center"
            placeholder="search..."
          />
        </div>
        <span className="text-sm mb-[5px]">{temples.length} results</span>
        <div className="grid grid-cols-2 min-h-[680px] h-[70vh] bg-lightocean overflow-auto rounded-lg py-[10px] mt-[5px] max-md:h-[80vh]">
          <section>
            <ul>
              {firstPart.map((wat, idx) => {
                return <li key={idx}>{wat}</li>;
              })}
            </ul>
          </section>
          <section>
            <ul>
              {secondPart.map((wat, idx) => {
                return <li key={idx}>{wat}</li>;
              })}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default TemplesPerform;
