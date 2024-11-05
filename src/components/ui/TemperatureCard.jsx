import { Language } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import sunnyCloudy from "../../assets/Mask group.svg";

const TemperatureCard = () => {
  return (
    <div className="text-white bg-gray-500 h-64 w-64 flex flex-col items-center justify-center py-7">
      <div>
        <Language /> Dhaka, Bangladesh
      </div>
      <p>Change of : 32% to 37%</p>
      {/* <div className=''>
            <div className='bg-blue-700 rounded-l-full h-36 w-36 flex items-center'>
            <div className='bg-white rounded-full h-32 w-32 mx-auto my-auto'></div>
            </div>
        </div> */}
      <div className="">
        <div class="w-[138px] h-[138px] border-4 border-[#635BFF] rounded-full border-r-transparent  flex justify-center items-center ">
          <div className="bg-white rounded-full h-32 w-32 z-10 text-center flex justify-center items-center text-[#635BFF]">
            <p className="text-5xl">32&deg;</p>
          </div>
        </div>
        <div className="relative -top-16 left-20 z-10">
          {" "}
          <Image
            src={sunnyCloudy}
            height={80}
            width={80}
            alt="sunny-cloudy"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
