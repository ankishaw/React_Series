import React from "react";

function Card({username = "Hello"}) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.pexels.com/photos/27164053/pexels-photo-27164053/free-photo-of-a-cup-of-coffee-sits-on-top-of-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Lorem ipsum dolor
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;
