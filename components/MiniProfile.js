import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className=" w-16 h-16 rounded-full border p-[2px] "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBhXu13iFCVqcfn_NW2PZCma0lR_HOWsiRQ&usqp=CAU"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">pouryourlove</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
}
