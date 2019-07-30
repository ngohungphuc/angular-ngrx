import { Action } from '@ngrx/store';
import { Car } from './../../models/car.model';

export const ADD_CAR       = '[CAR] Add';
export const ADD_CAR_FAIL    = '[CAR] Fail';

export class AddCar implements Action {
    readonly type = ADD_CAR;

    constructor(public payload: Car) {}
}

export class AddCarFail implements Action {
    readonly type = ADD_CAR_FAIL;

    constructor(public payload: string) {}
}

export type Actions = AddCar | AddCarFail;
