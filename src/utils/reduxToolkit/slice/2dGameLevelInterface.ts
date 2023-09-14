export interface CollectBattery {
    red: number,
    yellow: number,
    green: number,
    battery: number,
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
    batteryPosition?:[number,number,string][],
    obstaclePosition?:[number,number,string][],
    obstacleImage?: string,
    batteryImage?:string[],
    collectedBattery?:CollectBattery
}



