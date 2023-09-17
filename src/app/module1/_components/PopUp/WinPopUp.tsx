"use client";
import { useAppDispatch, useAppSelector } from '@/utils/reduxToolkit/hook'
import { winStarInterface } from '@/utils/reduxToolkit/slice/2dGameLevelInterface';
import { resetGameLevel, setGameLevel, setGameResult } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React from 'react';
// import zerostar from '@/assets/popup/zerostar.webp';
// import onestar from '@/assets/popup/onestar.webp';
// import twostar from '@/assets/popup/twostar.webp';
// import threestar from '@/assets/popup/threestar.webp';
type Props = {
  winStar: winStarInterface[],
  lastIndex: number;
}
const WinPopUp = ({ winStar, lastIndex }: Props) => {
  const dispatch = useAppDispatch();
  const collectBattery = useAppSelector((state) => state.batteryCollection.collectedBatteryNumber);
  { console.log("winStar- ", winStar) }
  console.log("LastIndex- ,collectBattery",lastIndex,collectBattery)
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  w-1/2 h-[60%] mx-auto my-auto ">
      <div className="bg-white w-full h-full rounded-lg shadow-md p-6">
        <div className='h-[70%] flex justify-center items-center'>
          {
            ((lastIndex <= winStar[0].steps) && (winStar[0].battery === collectBattery) ? (
              <img className='h-[60%]' alt="3star" src={''} />
            ) : (
              (lastIndex <= winStar[1].steps ) && (winStar[1].battery === collectBattery) ? (
                <img className='h-[60%]' alt="2 star" src={''} />
              ): (
                (lastIndex <= winStar[2].steps) && (winStar[2].battery === collectBattery) ?(
                  <img className='h-[60%]' alt="1 star" src={''} />
                ):(
                  <img className='h-[60%]' alt="0 star" src={''} />
                )
              )
             ))
          }

        </div>
        <p className="mb-4 text-center text-black text-2xl font-bold font-['Roboto'] leading-7 tracking-wid">Great! You've Completed the level. 🙂</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              dispatch(setGameResult({ result: "reset" }));
            }}
            className="mx-4 py-3 px-7 bg-amber-400 rounded-xl justify-center items-center gap-1.5 inline-flex text-white text-lg font-bold font-['Roboto'] leading-7"
          >
            Redo Task
          </button>
          <button
            onClick={() => {
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