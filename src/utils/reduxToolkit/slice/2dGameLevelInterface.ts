
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
    totalBattery?:number
}



