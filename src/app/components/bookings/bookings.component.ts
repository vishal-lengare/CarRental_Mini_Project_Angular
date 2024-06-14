import { Component, OnInit } from '@angular/core';
import { Booking, Car } from 'src/app/models/cars';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {


  isSidePanalVisible: boolean = false;
  carList: Car[] = [];
  localKeyName: string = 'rentalCar';
  bookingObj: Booking = new Booking();
  bookingList: Booking[] = [];

  constructor(){}

  ngOnInit(): void {

    const localData = localStorage.getItem(this.localKeyName);
    if (localData != null){
      this.carList = JSON.parse(localData);
    }

    const localBookingData = localStorage.getItem('rentalBooking');
    if (localBookingData != null){
      this.bookingList = JSON.parse(localBookingData);
    }

  }
 
  onReset(){
    this.bookingObj = new Booking();
  }

  onBookingSave(){
    if (this.bookingObj.bookingId == 0) {
      
      const carData = this.carList.find(m=>m.carId == this.bookingObj.carId);
      if (carData != undefined) {
        this.bookingObj.carName = carData?.carName;
      }
      this.bookingList.unshift(this.bookingObj);
      localStorage.setItem('rentalBooking',JSON.stringify(this.bookingList))
    }
    this.onReset();
  }

}
