import { Action } from '@ngrx/store';
import * as CarActions from './car.actions';
import { Car } from 'src/models/car.model';

const initialState: Car = {
   brand: '',
   model: ''
};

export function carReducer(state: Car[] = [initialState], action: CarActions.Actions) {

    switch (action.type) {
        case CarActions.ADD_CAR:
            return [...state, action.payload];
        case CarActions.ADD_CAR_FAIL:
            return {
                ...state,
                carError: action.payload,
            };
        default:
            return state;
    }
}