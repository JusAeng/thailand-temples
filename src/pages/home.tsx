import React, { useState, createContext } from "react";
import map_pic from "@/assets/pics/thailand-map.png";
import { ProvinceSelector } from "@/sections/homepage";
import TemplesPerform from "@/components/TemplesPerform";
import { ProvinceContext } from "@/contexts/ProvinceContext";

const HomePage = () => {
  const [province, setProvince] = useState("");

  const tempList = [
    "วัดพระเจดีย์ซาวหลัง",
    "วัดพระแก้วดอนเต้าสุชาดาราม",
    "วัดบุญวาทย์วิหาร",
    "วัดจองคำ",
    "วัดเกาะคา",
    "วัดดอยน้อย",
    "วัดท่าผา",
    "วัดน้ำล้อม",
    "วัดม่วงน้อย",
    "วัดม่อนศรีบุญโยง",
    "วัดศิลา",
    "วัดสันทุ่งแฮ่ม",
    "วัดหนองหล่าย",
    "วัดท่าช้าง",
    "วัดนางแตน",
    "วัดนาเวียง",
    "วัดบ้านใหม่",
    "วัดศาลาบัวบก",
    "วัดศาลาเม็ง",
    "วัดศาลาหม้อ",
    "วัดพระเจดีย์ซาวหลัง",
    "วัดพระแก้วดอนเต้าสุชาดาราม",
    "วัดบุญวาทย์วิหาร",
    "วัดจองคำ",
    "วัดเกาะคา",
    "วัดดอยน้อย",
    "วัดท่าผา",
    "วัดน้ำล้อม",
    "วัดม่วงน้อย",
    "วัดม่อนศรีบุญโยง",
    "วัดศิลา",
    "วัดสันทุ่งแฮ่ม",
    "วัดหนองหล่าย",
    "วัดท่าช้าง",
    "วัดนางแตน",
    "วัดนาเวียง",
    "วัดบ้านใหม่",
    "วัดศาลาบัวบก",
    "วัดศาลาเม็ง",
    "วัดศาลาหม้อ",
    "วัดพระเจดีย์ซาวหลัง",
    "วัดพระแก้วดอนเต้าสุชาดาราม",
    "วัดบุญวาทย์วิหาร",
    "วัดจองคำ",
    "วัดเกาะคา",
    "วัดดอยน้อย",
    "วัดท่าผา",
    "วัดน้ำล้อม",
    "วัดม่วงน้อย",
    "วัดม่อนศรีบุญโยง",
    "วัดศิลา",
    "วัดสันทุ่งแฮ่ม",
    "วัดหนองหล่าย",
    "วัดท่าช้าง",
    "วัดนางแตน",
    "วัดนาเวียง",
    "วัดบ้านใหม่",
    "วัดศาลาบัวบก",
    "วัดศาลาเม็ง",
    "วัดศาลาหม้อ",
    "วัดพระเจดีย์ซาวหลัง",
    "วัดพระแก้วดอนเต้าสุชาดาราม",
    "วัดบุญวาทย์วิหาร",
    "วัดจองคำ",
    "วัดเกาะคา",
    "วัดดอยน้อย",
    "วัดท่าผา",
    "วัดน้ำล้อม",
    "วัดม่วงน้อย",
    "วัดม่อนศรีบุญโยง",
    "วัดศิลา",
    "วัดสันทุ่งแฮ่ม",
    "วัดหนองหล่าย",
    "วัดท่าช้าง",
    "วัดนางแตน",
    "วัดนาเวียง",
    "วัดบ้านใหม่",
    "วัดศาลาบัวบก",
    "วัดศาลาเม็ง",
    "วัดศาลาหม้อ",
  ];
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
              <TemplesPerform list={tempList} />
            )}
          </ProvinceContext.Provider>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
