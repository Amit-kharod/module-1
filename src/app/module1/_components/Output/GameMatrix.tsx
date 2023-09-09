"use client";
import React, { useEffect, useRef, useState } from 'react';
import dogImage from '../../../../assets/dog.svg';
import { useAppSelector,useAppDispatch } from '@/utils/reduxToolkit/hook';
import { setBlockIndex, setPlayState } from '@/utils/reduxToolkit/slice/2dGameSlice';

const GameMatrix = () => {
  const rowCount = 6;
  const colCount = 6;
  const initialDogPosition = [4, 3]; // Initial position of the dog
  const [dogPosition, setDogPosition] = useState(initialDogPosition);
  const [directionIndex, setDirectionIndex] = useState(0);
  const dispatch = useAppDispatch();
  const directionIndexRef = useRef(directionIndex);
  const dogPositionRef = useRef(dogPosition);
  //Check game is on play state or not
  const isGamePlay = useAppSelector((state) => state.game.play);
  const lastFilledIndex = useAppSelector((state)=>state.game.lastIndex);
  const directionArray = useAppSelector((state) => state.game.blocks);

  const moveDog = (direction:any) => {
    // Define how the dog moves based on the direction
    const [row, col] = dogPositionRef.current;
    switch (direction) {
      case 'up':
        if (row > 1) dogPositionRef.current = ([row - 1, col]);
        break;
      case 'down':
        if (row < rowCount) dogPositionRef.current= ([row + 1, col]);
        break;
      case 'left':
        if (col > 1) dogPositionRef.current = ([row, col - 1]);
        break;
      case 'right':
        if (col < colCount) dogPositionRef.current = ([row, col + 1]);
        break;
      default:
        break;
    }
    setDogPosition(dogPositionRef.current);
    dispatch(setBlockIndex());
  };

  useEffect(() => {
    console.log("Play button click ",isGamePlay);
    console.log("Direction Array - ",directionArray);
    if(isGamePlay){
        const timer = setInterval(() => {
            // Move the dog based on the current direction
            if (directionIndexRef.current < lastFilledIndex && directionArray[directionIndexRef.current]) {
              moveDog(directionArray[directionIndexRef.current].direction);
              directionIndexRef.current++; 
            } else {
              // If all directions have been executed, stop the timer
              clearInterval(timer);
              dispatch(setPlayState({playState:false}));
            }
          }, 1000);
      
          return () => {
            // Clean up the timer when the component unmounts or changes 
            clearInterval(timer);
          };
    }
  }, [isGamePlay,directionArray]);

  const generateMatrix = () => {
    const matrix = [];
    for (let row = 1; row <= rowCount; row++) {
      const rowCells = [];
      for (let col = 1; col <= colCount; col++) {
        const cellValue = row * colCount + col + 1;
        if (row === dogPosition[0] && col === dogPosition[1]) {
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FCD731] border border-gray-500 h-14 w-14"
            >
              <img src={dogImage.src} alt="dog" className="h-full w-full" />
            </div>
          );
        } else {
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FCD731] border border-gray-500 h-14 w-14"
            ></div>
          );
        }
      }
      matrix.push(
        <div key={row} className="flex justify-center">
          {rowCells}
        </div>
      );
    }
    return matrix;
  };

  return (
    <div className="container mx-auto mt-4 mb-4">
      {generateMatrix()}
    </div>
  );
};

export default GameMatrix;
