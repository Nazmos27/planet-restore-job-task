import Image from "next/image";
import React from "react";
import banner from "../assets/hero.png";
import TemperatureCard from "./ui/TemperatureCard";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="min-h-[350px] w-[300px] border-gray-400 border-2">
        <div className="flex justify-between items-center">
          <p>Recent Disaster</p>
          <button className="border-b-2">View all</button>
        </div>
      </div>
      <Image src={banner} height={300} width={600} alt="hero"></Image>
      <TemperatureCard/>
    </div>
  );
};

export default Banner;
