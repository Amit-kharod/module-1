"use client";
import { useAppDispatch, useAppSelector } from '@/utils/reduxToolkit/hook'
import { winStarInterface } from '@/utils/reduxToolkit/slice/2dGameLevelInterface';
import { resetGameLevel, setGameLevel, setGameResult } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React from 'react';
import onestar from '@/assets/popup/onestar.png';
import twostar from '@/assets/popup/twostar.png';
import threestar from '@/assets/popup/threestar.png';
import popupbg from '@/assets/popup/popupbackup.png';
import dogimg from '@/assets/dog.svg';

type Props = {
  winStar: winStarInterface[],
  lastIndex: number;
}
const WinPopUp = ({ winStar, lastIndex }: Props) => {
  const dispatch = useAppDispatch();
  const collectBattery = useAppSelector((state) => state.batteryCollection.collectedBatteryNumber);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  w-1/2 h-[70%] mx-auto my-auto ">
      <div className="absolute bg-white w-full h-fit rounded-lg shadow-md p-6">
        <div className='flex justify-center'>
        <img src={dogimg.src} className='w-1/5' alt="dog"/>
        </div>
        <div className='h-full flex justify-center items-center my-5'>
          {
            ((lastIndex <= winStar[0].steps) && (winStar[0].battery === collectBattery) ? (
              <img className='h-20' alt="3star" src={threestar.src}  />
            ) : (
              (lastIndex <= winStar[1].steps ) && (winStar[1].battery === collectBattery) ? (
                <img className='h-20' alt="2 star" src={twostar.src} />
              ): (
                (lastIndex <= winStar[2].steps) && (winStar[2].battery === collectBattery) ?(
                  <img className='h-20' alt="1 star" src={onestar.src} />
                ):(
                  <img className='h-20' alt="0 star" src={''} />
                )
              )
             ))
          }

        </div>
        <p className="mb-5 text-center text-black text-xl font-roboto leading-7 tracking-wid">Great! You've Completed the level. 🙂</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              dispatch(setGameResult({ result: "reset" }));
            }}
            className={`mx-4 py-3 px-7 bg-amber-400 rounded-xl justify-center items-center font-roboto gap-1.5 inline-flex text-white text-lg leading-7`}
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