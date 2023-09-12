import React from 'react';
import scene4 from '@/assets/tour/scene4.png';
import scene4left from '@/assets/tour/scene4left.png';
import scene4right from '@/assets/tour/scene4right.png';

const ConversationTour = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='flex h-screen w-screen'>
        <img src={scene4left?.src} alt="img" className='h-full w-[25%]' />
        <img src={scene4.src} alt="img" className={`h-full w-[50%]`} />
        <img src={scene4right?.src} alt="img" className='h-full w-[25%]' />
      </div>
      <div className='flex bg-[#000000B8] w-full h-[28%] z-9 absolute bottom-0'>
        <div className='flex flex-col items-center justify-center flex-shrink-0 h-full w-[75%] text-left pl-16'>
          <p className='text-white font-poppins text-md font-normal leading-normal text-left'>
            In her first destination, Rhea finds herself in a world filled with floating islands filled with cool gadgets. There she met a wise mentor who told her that she could create her own advanced gadgets.
          </p>
          <p className='mt-2 text-white text-left font-poppins text-md font-normal leading-normal'>
            The wise mentor gave Rhea a robot named Gizmo which would assist her in collecting all the components. He explained that Gizmo would follow her instructions and explore various parts of this world to gather the necessary items for her inventory. All Rhea needed to do was provide accurate instructions to Gizmo.
          </p>
        </div>
        <div className='flex items-center justify-center w-full'>
          <button className='bg-[#FAD12B] rounded-md h-[30%] px-20 text-white font-poppins text-2xl font-semibold tracking-[0.011px]'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConversationTour;
