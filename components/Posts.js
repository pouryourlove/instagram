import React from "react";
import Post from "./Post";

const data = [
  {
    id: "123",
    username: "pouryourlove",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Garbo_in_Inspiration.jpg",
    img: "http://image.cine21.com/resize/cine21/dvd/2005/1010/M0050070__[W578-].JPG",
    caption: "this is good",
  },
  {
    id: "123",
    username: "pouryourlove",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Garbo_in_Inspiration.jpg",
    img: "http://image.cine21.com/resize/cine21/dvd/2005/1010/M0050070__[W578-].JPG",
    caption: "this is good",
  },
];
export default function posts() {
  return (
    <div>
      {data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
