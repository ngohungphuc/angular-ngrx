import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CarActions from './car/car.actions';
import { AppState } from './car/car.state';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  car = new Car();
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.car.brand = 'qwerty';
    this.car.model = '123123';
    this.store.dispatch(new CarActions.AddCar(this.car));
  }
}
