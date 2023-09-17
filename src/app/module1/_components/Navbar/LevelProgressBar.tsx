"use client"
import { useAppDispatch } from '@/utils/reduxToolkit/hook';
import { setGameLevel, setGivenGameLevel } from '@/utils/reduxToolkit/slice/2dGameSlice';
import React, { useState } from 'react';
type Props = {
  maxLevel: number;
}
const LevelProgressBar = ({ maxLevel }: Props) => {
  const [startActivity, setStartActivity] = useState(1);
  const dispatch = useAppDispatch();

  const showNextActivities = () => {
    if (startActivity + 5 <= 15) {
      setStartActivity((prev) => prev + 5);
    }
  };

  const showPreviousActivities = () => {
    if (startActivity - 5 >= 1) {
      setStartActivity((prev) => prev - 5);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={showPreviousActivities}
        disabled={startActivity === 1}
        className={`px-3 py-1 rounded-full  text-white text-xl  ${startActivity === 1 ? ' cursor-not-allowed' : ''
          }`}
      >
        &lt;
      </button>
      <div className="flex items-center space-x-4 relative">
        {Array.from({ length: 5 }, (_, index) => (
          <React.Fragment key={startActivity + index}>
            {index !== 0 && (
              <div
                className="h-1 w-8 bg-Lavender"
                style={{ transform: 'translateX(50%)' }}
              ></div>
            )}
            {((startActivity + index) <= maxLevel + 1) ?
              <div className={`rounded-full flex items-center bg-[#FFC700] text-black cursor-pointer`}
              onClick={()=>{
               //Go to given level.
               dispatch(setGivenGameLevel({gameLevel:startActivity+index-1}))
              }}>
                <div className={`${(startActivity + index) <= maxLevel + 1 ? 'bg-yellow-200' : ''}font-bold font-['Roboto'] rounded-full h-8 w-8 flex items-center justify-center border-2 border-Lavender`}>
                  {startActivity + index}
                </div>
              </div>
              :
              <div className={`rounded-full flex items-center text-white`}>
                <div className={`${(startActivity + index) <= maxLevel + 1 ? 'bg-yellow-200' : ''}font-bold font-['Roboto'] rounded-full h-8 w-8 flex items-center justify-center border-2 border-Lavender`}>
                  {startActivity + index}
                </div>
              </div>
            }
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={showNextActivities}
        disabled={startActivity + 5 > 15}
        className={`px-3 py-1 rounded-full text-white text-xl ${startActivity + 5 > 15 ? ' cursor-not-allowed' : ' '
          }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default LevelProgressBar;
