import React, { useEffect, useState } from "react";
import map_pic from "@/assets/pics/thailand-map.png";
import { ProvinceSelector } from "@/sections/homepage";
import TemplesPerform from "@/components/TemplesPerform";
import { ProvinceContext } from "@/contexts/ProvinceContext";
import { getTemples } from "@/api";

type MyDict = {
  [key: string]: string[];
  Ratchaburi: string[];
  Lamphun: string[];
  Lampang: string[];
  Lopburi: string[];
};

const HomePage = () => {
  const [province, setProvince] = useState("");
  const [dict, setDict] = useState<MyDict>({
    Ratchaburi: [],
    Lamphun: [],
    Lampang: [],
    Lopburi: [],
  });
  // console.log(dict);

  useEffect(() => {
    const handleResponse = (response: string[], p: string) => {
      let temp = p.charAt(0).toUpperCase() + p.slice(1);
      setDict((prev) => ({ ...prev, [temp]: response }));
    };
    let book = ["ratchaburi", "lamphun", "lampang", "lopburi"];
    book.forEach((b) => {
      getTemples(b, handleResponse);
    });
  }, []);
  return (
    <div className="h-[100vh] bg-ocean grid place-items-center">
      <div className="h-[90%] w-[1300px] bg-ocean grid grid-cols-2">
        <section className="bg-ocean">
          <img
            src={map_pic}
            alt=""
            className="mx-auto scale-[0.95] w-[100%] h-full"
          />
        </section>
        <section className="flex items-center justify-center bg-ocean">
          <ProvinceContext.Provider value={{ province, setProvince }}>
            {!province ? (
              <ProvinceSelector />
            ) : (
              <TemplesPerform list={dict[province]} />
            )}
          </ProvinceContext.Provider>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
