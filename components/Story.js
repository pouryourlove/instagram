import React from "react";

export default function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src="https://ae01.alicdn.com/kf/HTB1sO2tJKuSBuNjSszixh6q8pXaw.jpeg"
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
