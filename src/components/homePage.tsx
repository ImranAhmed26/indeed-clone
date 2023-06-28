import React from "react";

const name = ["John", "Jane",6];

name.push("mike");
name.push(2);

let newArray: string[]
newArray = ['pike']
newArray = ['pike']

newArray.push('mike')



console.log('name', name)

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] ">
      <div className="h-60 w-80 rounded-lg bg-white/80 p-3 text-gray-700 cursor-default">
        <div className="text-2xl font-bold cursor-default">Home Page</div>
        <div className="text-xl font-semibold "></div>
      </div>
    </div>
  );
};

export default HomePage;
