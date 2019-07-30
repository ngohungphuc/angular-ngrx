import { Component, OnInit } from '@angular/core';
import * as CarActions from './car.actions';
import { AppState } from './car.state';
import { Store } from '@ngrx/store';
import { Car } from './../../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const car = new Car();
    car.brand = 'Volvo';
    car.model = 'FX-16';
    this.store.dispatch(
      new CarActions.AddCar(car)
    );
  }

}
