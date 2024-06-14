import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit{

  carObj: Car = new Car();
  carList: Car[] = [];
  localKeyName: string = 'rentalCar';
  isSidePanalVisible: boolean = false;
  constructor(){}

  ngOnInit(): void {

    const localData = localStorage.getItem(this.localKeyName);
    if (localData != null){
      this.carList = JSON.parse(localData);
    }
  }

  onSaveCar(){
    // debugger
    if (this.carObj.carId == 0) {
      this.carObj.carId = this.carList.length + 1;
      this.carList.unshift(this.carObj);
      localStorage.setItem(this.localKeyName, JSON.stringify(this.carList));
      this.onResetCar();
    }
  }

  onResetCar(){
    this.carObj = new Car();
  }

}
