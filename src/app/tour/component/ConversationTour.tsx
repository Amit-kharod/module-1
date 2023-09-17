"use client"
import React, { useState , Suspense} from 'react';
import scene4 from '@/assets/tour/scene4.png';
import scene4left from '@/assets/tour/scene4left.png';
import scene4right from '@/assets/tour/scene4right.png';
import {useRouter} from 'next/navigation';

const ConversationTour = () => {
  const [conversationCount, setConversationCount] = useState(1);
  const router = useRouter();
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='flex h-screen w-screen'>
        <img src={scene4left?.src} alt="img" className='h-full w-[25%]' />
        <img src={scene4.src} alt="img" className={`h-full w-[50%]`} />
        <img src={scene4right?.src} alt="img" className='h-full w-[25%]' />
        {/* First Conversation */}
        {conversationCount <= 3 && <div className='absolute flex justify-between mx-8 mt-5'>
          <div className='bg-white rounded-2xl p-7 w-[40%] h-fit'>
            <p className='text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              You can take Gizmo with you, and he'll help you gather all the components for your inventory. Just remember to give Gizmo the correct instructions, and he'll take care of the rest!"
            </p>
          </div>
          <div className='bg-white rounded-2xl p-7 ml-auto w-[30%] h-fit'>
            <p className='text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              Sounds like so much fun! I'd absolutely love to do that
            </p>
          </div>
        </div>}
        {/* Second conversation */}
        {(conversationCount === 2 || conversationCount === 3) && <div className='absolute flex justify-between top-[25%] mx-8'>
          <div className='bg-white rounded-2xl p-7 w-[40%] h-fit bottom-0'>
            <p className='h-fit text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              I notice you're really impressed by these awesome high-tech gadgets. You have the ability to create similar gadgets yourself. To achieve that, you just need to start learning about the technology right from the beginning.
            </p>
          </div>
          <div className='bg-white rounded-2xl p-7 ml-auto w-[30%] h-fit'>
            <p className='text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              “I'm so excited to give it a go!”
            </p>
          </div>
        </div>}

        {/* 3rd conversation */}
        {conversationCount === 3 && <div className='absolute flex justify-between top-[50%] mx-8'>
          <div className='bg-white rounded-2xl p-7 w-[40%] h-fit bottom-0'>
            <p className='h-fit text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              To begin, gather the special parts for your first device. You'll need to explore the various landscapes in this world to find them. Once you have all the components, you can
            </p>
          </div>
          <div className='bg-white rounded-2xl p-7 ml-auto w-[30%] h-fit'>
            <p className='text-black font-inter text-base font-normal leading-normal tracking-tighter'>
              “Thank you so much for your help! Let's go Gizmo"
            </p>
          </div>
        </div>}
      </div>
      <div className='flex bg-[#000000B8] w-full h-[28%] z-9 absolute bottom-0'>
        <div className='flex flex-col items-center justify-center flex-shrink-0 h-full w-[75%] text-left pl-16'>
          <p className='text-white font-poppins text-md font-normal leading-normal text-left'>
            In her first destination, Rhea finds herself in a world filled with floating islands filled with cool gadgets. There she met a wise mentor who told her that she could create her own advanced gadgets.
          </p>
          <p className='mt-4 text-white text-left font-poppins text-md font-normal leading-normal'>
            The wise mentor gave Rhea a robot named Gizmo which would assist her in collecting all the components. He explained that Gizmo would follow her instructions and explore various parts of this world to gather the necessary items for her inventory. All Rhea needed to do was provide accurate instructions to Gizmo.
          </p>
        </div>
        <div className='flex items-center justify-center w-full'>
          <button className='bg-[#FAD12B] rounded-md h-[30%] px-20 text-white font-poppins text-2xl font-semibold tracking-[0.011px]'
            onClick={() => { 
              if(conversationCount <=2){
                setConversationCount(conversationCount + 1)
              }else{
                router.push('/module1');
              }
              }}
              >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConversationTour;
