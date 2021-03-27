import { Component, OnInit } from '@angular/core';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-iam-here',
  templateUrl: './iam-here.component.html',
  styleUrls: ['./iam-here.component.scss']
})
export class IAmHereComponent implements OnInit {

  location;

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        console.log({position});
        this.location = [ position.coords.longitude,position.coords.latitude];
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
