import { Component, OnInit } from '@angular/core';

import { ApodService } from '../api/apod.service';

import { Injectable } from '@angular/core';

import { NgApodConfig } from '../../../config/ng-apod.config';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApodService {

//   constructor(private ngApodConfig: NgApodConfig) { }

//   getApod(): string {
//     return this.ngApodConfig.key;
//   }

// }

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  ngOnInit() {
    // console.log(this.apodService.getApod());
    this.apodService.getApod().subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}