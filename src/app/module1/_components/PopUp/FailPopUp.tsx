import { useAppDispatch } from '@/utils/reduxToolkit/hook'
import { resetGameLevel, setGameLevel, setGameResult } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React from 'react'

const FailPopUp = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  w-1/2 h-[60%] mx-auto my-auto ">
          <div className="bg-white w-full h-full rounded-lg shadow-md p-6">
          <div className='h-[70%]'>
                    <img className='h-[60%]'/>
            </div>
            <p className="h-[14%] mb-4 text-center text-black text-2xl font-bold font-['Roboto'] leading-7 tracking-wid">That's not quite right 😔</p>
            <div className="flex justify-center">
              <button
                onClick={()=>{
                  dispatch(setGameResult({result:"reset"}));
                }}
                className="text-white text-xl px-6 py-3 font-bold font-['Roboto'] leading-7  bg-indigo-600 rounded-xl items-center gap-1.5 inline-flex"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
  )
}

export default FailPopUp;