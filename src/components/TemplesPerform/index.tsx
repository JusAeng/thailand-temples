import React from "react";
import "./index.scss";

const TemplesPerform = () => {
  return (
    <div className="performs-container">
      <section className="action">
        <div className="h-[60px]">
          <button className="font-semibold">Back</button>
        </div>
        <button className="bg-white rounded-[8px] h-[30px] w-[80%]">CSV</button>
      </section>
      <section className="perform">
        <div className="h-[60px] text-center">
          <h2 className="font-bold text-3xl">Ratchaburi</h2>
        </div>
        <div className="flex mb-[10px]">
          <input type="text" className="w-full h-[30px] rounded-[6px]" />
        </div>
        <span className="text-sm">624 results</span>
        <div className="grid grid-cols-2">
          <section>
            <ul className="pl-[20px] style-list">
              <li>wat</li>
              <li>dee</li>
              <li>kub</li>
              <li>na</li>
              <li>hee</li>
            </ul>
          </section>
          <section className="bg-yellow">2</section>
        </div>
      </section>
    </div>
  );
};

export default TemplesPerform;
