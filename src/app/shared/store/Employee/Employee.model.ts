export interface EmployeeModel {
    firstname: string,
    lastname: string,
    lookingforwork: boolean;
    level: number;
}

export enum Level {
    junior = 1, mid = 2, senior = 3
}

export const LevelOptions = [{ id: Level.junior, name: 'junior' }, { id: Level.mid, name: 'mid' }, { id: 3, name: 'senior' }];
