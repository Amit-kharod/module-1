export interface CollectBattery {
    totalCollect:number,
    totalBattery:number,
};
export interface gameLevelsInterface {
    level: number,
    activityTaskDescription : string,
    activityTaskDestination : string,
    workSpaceBlock : number,
    dogStartPosition: [number,number],
    dogEndPosition:[number,number,any],
    batteryPosition?:[number,number,any][],
    obstaclePosition?:[number,number,any][],
    obstacleImage?: string,
    batteryImage?:string[],
    collectedBattery?:CollectBattery
}



