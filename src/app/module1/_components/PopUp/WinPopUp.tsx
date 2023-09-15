import { useAppDispatch } from '@/utils/reduxToolkit/hook'
import { resetGameLevel, setGameLevel, setGameResult } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React from 'react'

const WinPopUp = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  w-1/2 h-[60%] mx-auto my-auto ">
          <div className="bg-white w-full h-full rounded-lg shadow-md p-6">
          <div className='h-[70%]'>
                    <img className='h-[60%]'/>
            </div>
            <p className="mb-4 text-center text-black text-2xl font-bold font-['Roboto'] leading-7 tracking-wid">Great! You've Completed the level. 🙂</p>
            <div className="flex justify-center">
              <button
                  onClick={()=>{
                    dispatch(setGameResult({result:"reset"}));
                }}
                className="mx-4 py-3 px-7 bg-amber-400 rounded-xl justify-center items-center gap-1.5 inline-flex text-white text-lg font-bold font-['Roboto'] leading-7"
              >
                Redo Task
              </button>
              <button
                onClick={()=>{
                  dispatch(setGameLevel());
                }}
                className="mx-4 py-3 px-7 bg-indigo-600 rounded-xl justify-center items-center gap-1.5 inline-flex text-white text-lg font-bold font-['Roboto'] leading-7"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
  )
}

export default WinPopUp