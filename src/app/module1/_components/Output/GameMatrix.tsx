"use client";
import React, { useEffect, useRef, useState } from 'react';
import dogImage from '../../../../assets/dog.svg';
import redLED from '../../../../assets/redLED.svg';
import greenLED from '../../../../assets/greenLED.svg';
import yellowLED from '../../../../assets/yellowLED.svg';
import rain from '../../../../assets/rain.svg';
import brick from '../../../../assets/brick.svg';
import electric from '../../../../assets/electric.svg';
import { useAppSelector,useAppDispatch } from '@/utils/reduxToolkit/hook';
import { setBlockIndex, setPlayState } from '@/utils/reduxToolkit/slice/2dGameSlice';
import { checkBatteryPosition, checkObstaclePosition, gameLevelsConfig } from '@/utils/constants/gameLevelConfig';
import NotRight from '../PopUp/NotRight';

const GameMatrix = () => {
  const rowCount = 6;
  const colCount = 6;
  const initialDogPosition = [4, 3]; // Initial position of the dog
  const [dogPosition, setDogPosition] = useState(initialDogPosition);
  const [directionIndex, setDirectionIndex] = useState(0);
  const showPopupRef = useRef(false);
  const dispatch = useAppDispatch();
  const directionIndexRef = useRef(directionIndex);
  const dogPositionRef = useRef(dogPosition);
  //Check game is on play state or not
  const isGamePlay = useAppSelector((state) => state.game.play);
  //Check the last index filled in workspace empty box.
  const lastFilledIndex = useAppSelector((state)=>state.game.lastIndex);
  //Directions filled in workspace empty box.
  const directionArray = useAppSelector((state) => state.game.blocks);
  const currentGameLevel = useAppSelector((state)=>state.gameLevel.gameLevel);
  const {batteryPosition,obstaclePosition,dogStartPosition} = gameLevelsConfig[currentGameLevel];
  //FilterBatteryPosition
  const [filterBatteryPosition,setFilterBatteryPosition] = useState(batteryPosition);
  const filterBatteryPositionRef = useRef(batteryPosition);
  const moveDog = (direction:any) => {
    // Define how the dog moves based on the direction
    const [row, col] = dogPositionRef.current;
    switch (direction) {
      case 'up':
        if (row > 1) {
          if(checkObstaclePosition(row-1,col,obstaclePosition)){
            alert("You lose");
            return;
          }
          dogPositionRef.current = ([row - 1, col])
          if(filterBatteryPositionRef.current){
           const newFilterPosition =  checkBatteryPosition(row-1,col,filterBatteryPositionRef.current);
           setFilterBatteryPosition(newFilterPosition);
           filterBatteryPositionRef.current = newFilterPosition;
          } 
        }else{
          alert('You lose');
        }
        break;
      case 'down':
        if (row < rowCount) {
          if(checkObstaclePosition(row+1,col,obstaclePosition)){
            alert("You lose");
            return;
          }
          dogPositionRef.current= ([row + 1, col])
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row+1,col,filterBatteryPositionRef.current);
            setFilterBatteryPosition(newFilterPosition);
            filterBatteryPositionRef.current = newFilterPosition;
           } 
        }else{
          alert('You lose');
        }
        break;
      case 'left':
        if (col > 1){ 
          if(checkObstaclePosition(row,col-1,obstaclePosition)){
            alert("You lose");
            return;
          }
          dogPositionRef.current = ([row, col - 1])
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row,col-1,filterBatteryPositionRef.current);
            setFilterBatteryPosition(newFilterPosition);
            filterBatteryPositionRef.current = newFilterPosition;
           } 
        }else{
          alert('You lose');
        }
        break;
      case 'right':
        if (col < colCount) {
          if(checkObstaclePosition(row,col+1,obstaclePosition)){
            alert("You lose");
            return;
          }
          dogPositionRef.current = ([row, col + 1]);
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row,col+1,filterBatteryPositionRef.current);
            setFilterBatteryPosition(newFilterPosition);
            filterBatteryPositionRef.current = newFilterPosition;
           } 
        }else{
          alert('You lose');
        }
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
              className="bg-[#FFC700] border border-gray-500 h-14 w-14"
            >
              <img src={dogImage.src} alt="dog" className="h-full w-full" />
            </div>
          );
        } 
        else if(obstaclePosition?.some((position) => position[0] === row && position[1] === col)){
          const matchingPosition = obstaclePosition.find(
            (position) => position[0] === row && position[1] === col
          );
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FFC700] border border-gray-500 h-14 w-14"
            >
               {matchingPosition && matchingPosition[2] === "electric" && <img src={electric.src} alt="electric" className="h-full w-full" />}
             {matchingPosition && matchingPosition[2] === "rain" && <img src={rain.src} alt="rain" className="h-full w-full" />}
            { matchingPosition && matchingPosition[2] === "brick" && <img src={brick.src} alt="brick" className="h-full w-full" />}
            </div>
          );
        }
        else if(filterBatteryPosition?.some((position) => position[0] === row && position[1] === col))
        {
          const matchingPosition = filterBatteryPosition.find(
            (position) => position[0] === row && position[1] === col
          );
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FFC700] border border-gray-500 h-14 w-14"
            >
             {matchingPosition && matchingPosition[2] === "red" && <img src={redLED.src} alt="red" className="h-full w-full py-1" />}
             {matchingPosition && matchingPosition[2] === "green" && <img src={greenLED.src} alt="green" className="h-full w-full py-2" />}
            { matchingPosition && matchingPosition[2] === "yellow" && <img src={yellowLED.src} alt="yellow" className="h-full w-full py-2" />}
            </div>
          );
        }
        else {
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FFC700] border border-gray-500 h-14 w-14"
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
