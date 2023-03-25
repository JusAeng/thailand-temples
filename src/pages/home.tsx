import React, { useEffect, useState } from "react";
import map_pic from "@/assets/pics/thailand-map.png";
import giant_pic from "@/assets/pics/giant.png";
import temple_pic from "@/assets/pics/temple.png";

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
    <div className="min-h-[100vh] bg-ocean grid place-items-center max-md:block">
      <div className="h-[823px] w-[1300px] bg-ocean grid grid-cols-2 max-md:block max-md:w-[380px] max-md:h-[660px] max-md:m-auto">
        <section className="bg-ocean max-md:hidden">
          <img
            src={map_pic}
            alt=""
            className="mx-auto scale-[0.95] w-[100%] h-[823px]"
          />
        </section>
        <section className="flex justify-center bg-ocean max-md:h-[100vh]">
          <ProvinceContext.Provider value={{ province, setProvince }}>
            {!province ? (
              <div className="scale-90 max-md:scale-x-[0.7] max-md:scale-y-[0.75]">
                <div className="w-[500px] mb-[55px] pl-[10px]">
                  <h1 className="text-7xl font-bold text-white mb-[20px] flex gap-[30px] items-end">
                    Temples
                    <img src={giant_pic} alt="" />
                  </h1>
                  <h1 className="text-7xl font-bold text-white flex gap-[35px]">
                    <img src={temple_pic} alt="" />
                    in Thailand
                  </h1>
                </div>
                <ProvinceSelector />
              </div>
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
