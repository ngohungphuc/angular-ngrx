import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CarActions from './car.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CarEffects {
    @Effect()
    carAdd = this.actions$.pipe(
        ofType(CarActions.ADD_CAR),
        switchMap((carData: CarActions.AddCar) => {
            console.log('true');
            return this.http.post('http://myapi.com/api', { brand: carData.payload.brand, model: carData.payload.model }).pipe(map(resData => {
                localStorage.setItem('test', 'asdasdasd');
            }),
                catchError(errorRes => {
                    console.log(errorRes);
                    const errorMessage = 'An unknown error occurred!';
                    if (!errorRes.error || !errorRes.error.error) {
                        return of(new CarActions.AddCarFail(errorMessage));
                    }

                    console.log(errorRes.error.error.message);
                    return of(new CarActions.AddCarFail(errorRes.error.error.message));
                }));
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient) { }
}