import { useAppDispatch } from '@/utils/reduxToolkit/hook'
import { resetGameLevel, setGameLevel, setGameResult } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React from 'react'
import failgif from '@/assets/popup/failgif.gif';

const FailPopUp = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  w-1/2 h-[70%] mx-auto my-auto ">
          <div className="bg-white w-full h-fit rounded-lg shadow-md p-6">
          <div className='flex justify-center'>
              <img src={failgif.src} className='w-1/2' alt="dog"/>
        </div>
            <p className="h-[14%] mb-6 text-center text-black text-2xl  font-roboto  leading-7 tracking-wid">That's not quite right 😔</p>
            <div className="flex justify-center">
              <button
                onClick={()=>{
                  dispatch(setGameResult({result:"reset"}));
                }}
                className="text-white text-xl px-6 py-3  font-roboto  leading-7  bg-indigo-600 rounded-xl items-center gap-1.5 inline-flex"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
  )
}

export default FailPopUp;