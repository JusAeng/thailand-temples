import React from "react";
import map_pic from "@/assets/pics/thailand-map.jpg";

const HomePage = () => {
  return (
    <div className="h-[100vh] bg-slate-300 grid place-items-center">
      <div className="h-4/5 w-4/5 bg-white grid grid-cols-2">
        <section>
          <img src={map_pic} className="w-full h-full object-contain" />
        </section>
        <section>2</section>
      </div>
    </div>
  );
};

export default HomePage;
