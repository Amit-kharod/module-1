import React, { Dispatch, SetStateAction } from 'react';
import scene1 from '@/assets/tour/scene1.png';
import scene1left from '@/assets/tour/scene1Left.png';
import scene1right from '@/assets/tour/scene1Right.png';
import ellipse from '@/assets/tour/ellipse.png';
import { tourConfig } from "@/utils/tourConstant/tourCons";

type Props = {
  tourPart: number;
  setTourPart: Dispatch<SetStateAction<number>>;
}
const SceneTour = ({ tourPart, setTourPart }: Props) => {
  const { leftImg, centerImg, rightImg, storyDesc, buttonDesc, isNextButton,noOfImg } = tourConfig[tourPart - 1];
  console.log("-------- ", { leftImg, centerImg, rightImg, storyDesc, buttonDesc, isNextButton })
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='flex h-screen w-screen'>
        {leftImg && <img src={leftImg?.src} alt="img" className='h-full w-[25%]' />}
        <img src={centerImg.src} alt="img" className={`h-full ${noOfImg===1 ? 'w-screen':'w-[50%]'}`}
          onClick={()=>{setTourPart(tourPart+1)}} /> 
       { buttonDesc && <div className='h-[11%] w-[28%] absolute z-9 ml-[55%] mt-[15%] bg-[#FFF] rounded-2xl flex items-center justify-center'>
          <h1 className='text-black text-center font-inter text-md font-normal leading-normal tracking-[0.197px] '>
            {buttonDesc}
          </h1>
        </div>}
        {rightImg && <img src={rightImg?.src} alt="img" className='h-full w-[25%]' />}
      </div>
      <div className='bg-[#000000B8] w-full h-[25%] z-9 absolute bottom-0 flex justify-center items-center'>
        <p className='text-white text-center font-poppins text-lg font-normal leading-normal w-[70%]'>
          {storyDesc}
        </p>
      </div>
    </div>
  );
};

export default SceneTour;
