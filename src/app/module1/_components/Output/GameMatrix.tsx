"use client";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import dogImage from '../../../../assets/dog.svg';
import { useAppSelector,useAppDispatch } from '@/utils/reduxToolkit/hook';
import { resetGameLevel, setBlockIndex, setDropZone, setGameResult, setPlayState } from '@/utils/reduxToolkit/slice/2dGameSlice';
import { checkBatteryPosition, checkObstaclePosition, gameLevelsConfig } from '@/utils/constants/gameLevelConfig';
import { resetBatteryCollection, setBatteryCollection } from '@/utils/reduxToolkit/slice/batteryCollectionSlice';
import { setGameLevel } from '@/utils/reduxToolkit/slice/2dGameSlice';
interface Props{
  gameLevel:number, 
}
const GameMatrix = ({gameLevel}:Props) => {
  const rowCount = 6;
  const colCount = 6;
  const currentGameLevel = useAppSelector((state)=>state.game.gameLevel);
  const {batteryPosition,obstaclePosition,dogStartPosition,dogEndPosition} = gameLevelsConfig[currentGameLevel];
  const [dogPosition, setDogPosition] = useState(dogStartPosition);
  const [directionIndex, setDirectionIndex] = useState(0);
  const dispatch = useAppDispatch();
  const directionIndexRef = useRef(directionIndex);
  const dogPositionRef = useRef(dogPosition);
  //Check game is on play state or not
  const isGamePlay = useAppSelector((state) => state.game.play);
  //Check the last index filled in workspace empty box.
  const lastFilledIndex = useAppSelector((state)=>state.game.lastIndex);
  //Directions filled in workspace empty box.
  const directionArray = useAppSelector((state) => state.game.blocks);
  const gameResult = useAppSelector((state)=>state.game.result);
  //FilterBatteryPosition
  const [filterBatteryPosition,setFilterBatteryPosition] = useState(batteryPosition);
  const filterBatteryPositionRef = useRef(batteryPosition);

  const resetActivity =()=>{
    //Drop Box will reset
    dispatch(setDropZone());
    dispatch(resetGameLevel());
    dispatch(resetBatteryCollection());
    setDogPosition(dogStartPosition);
    setDirectionIndex(0);
    directionIndexRef.current =directionIndex;
    setFilterBatteryPosition(batteryPosition);
    dogPositionRef.current = dogStartPosition;
    filterBatteryPositionRef.current = batteryPosition;
  }
  useEffect(()=>{
    resetActivity();
  },[currentGameLevel]);

  useEffect(()=>{
    if(gameResult === "reset"){
     resetActivity();
    }
  },[gameResult]);
  
  const moveDog = (direction:any,timer:NodeJS.Timeout) => {
    // Define how the dog moves based on the direction
    const [row, col] = dogPositionRef.current;
    switch (direction) {
      case 'up':
        if (row > 1) {
          if(checkObstaclePosition(row-1,col,obstaclePosition)){
            dispatch(setGameResult({result:"fail"}));
            clearInterval(timer);
            return;
          }
          dogPositionRef.current = ([row - 1, col]);
          if(filterBatteryPositionRef.current){
           const newFilterPosition =  checkBatteryPosition(row-1,col,filterBatteryPositionRef.current,dispatch);
           if(newFilterPosition.length === filterBatteryPositionRef.current.length - 1){
            dispatch(setBatteryCollection());
           }
           filterBatteryPositionRef.current = newFilterPosition;
           setFilterBatteryPosition(newFilterPosition);
          } 
        }else{
          dispatch(setGameResult({result:"fail"}));
          clearInterval(timer);
        }
        break;
      case 'down':
        if (row < rowCount) {
          if(checkObstaclePosition(row+1,col,obstaclePosition)){
            dispatch(setGameResult({result:"fail"}));
            clearInterval(timer);
            return;
          }
          dogPositionRef.current= ([row + 1, col])
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row+1,col,filterBatteryPositionRef.current,dispatch);
            if(newFilterPosition.length === filterBatteryPositionRef.current.length - 1){
              dispatch(setBatteryCollection());
             }
             filterBatteryPositionRef.current = newFilterPosition;
             setFilterBatteryPosition(newFilterPosition);
           } 
        }else{
          dispatch(setGameResult({result:"fail"}));
          clearInterval(timer);
        }
        break;
      case 'left':
        if (col > 1){ 
          if(checkObstaclePosition(row,col-1,obstaclePosition)){
            dispatch(setGameResult({result:"fail"}));
            clearInterval(timer);
            return;
          }
          dogPositionRef.current = ([row, col - 1])
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row,col-1,filterBatteryPositionRef.current,dispatch);
            console.log("Length- ",newFilterPosition.length , filterBatteryPositionRef.current.length)
            if(newFilterPosition.length === filterBatteryPositionRef.current.length - 1){
              dispatch(setBatteryCollection());
              console.log("Enter- ")
             }
             filterBatteryPositionRef.current = newFilterPosition;
             setFilterBatteryPosition(newFilterPosition);
           } 
        }else{
          dispatch(setGameResult({result:"fail"}));
          clearInterval(timer);
        }
        break;
      case 'right':
        if (col < colCount) {
          if(checkObstaclePosition(row,col+1,obstaclePosition)){
            dispatch(setGameResult({result:"fail"}));
            clearInterval(timer);
            return;
          }
          dogPositionRef.current = ([row, col + 1]);
          if(filterBatteryPositionRef.current){
            const newFilterPosition =  checkBatteryPosition(row,col+1,filterBatteryPositionRef.current,dispatch);
            if(newFilterPosition.length === filterBatteryPositionRef.current.length - 1){
              dispatch(setBatteryCollection());
             }
            filterBatteryPositionRef.current = newFilterPosition;
            setFilterBatteryPosition(newFilterPosition);
           } 
        }else{
          dispatch(setGameResult({result:"fail"}));
          clearInterval(timer);
        }
        break;
      default:
        break;
    }
    setDogPosition(dogPositionRef.current);
    dispatch(setBlockIndex());
    if(dogPositionRef.current[0] === dogEndPosition[0] && dogPositionRef.current[1] === dogEndPosition[1]){
      dispatch(setGameResult({result:"win"}))
      clearInterval(timer);
      return;
    }
  };

  useEffect(() => {
    if(isGamePlay){
        const timer = setInterval(() => {
            // Move the dog based on the current direction
            if (directionIndexRef.current < lastFilledIndex && directionArray[directionIndexRef.current]) {
              moveDog(directionArray[directionIndexRef.current].direction,timer);
              directionIndexRef.current++; 
            } else {
              // If all directions have been executed, stop the timer
              clearInterval(timer);
              dispatch(setGameResult({result:"fail"}))
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
              <img src={dogImage.src} alt="dog" className="object-cover h-full w-full" />
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
               {matchingPosition && <img src={matchingPosition[2].src} alt="obstacle" className="object-cover h-full w-full" />}
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
             {matchingPosition && <img src={matchingPosition[2].src} alt="red" className="object-cover h-full w-full" />}
            </div>
          );
        }
        else if(row === dogEndPosition[0] && col === dogEndPosition[1])
        {
          rowCells.push(
            <div
              key={cellValue}
              className="bg-[#FFC700] border border-gray-500 h-14 w-14"
            >
              <img src={dogEndPosition[2].src} alt="dog" className="object-cover h-full w-full" />
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
