import { Component, OnInit } from '@angular/core';
//1. Import ActivatedRoute
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

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

  apod: Apod;

  constructor(
    private apodService: ApodService,
    //2. Inject ActivatedRoute into the constructor
    private router: ActivatedRoute) { }

  ngOnInit() {
        //3. Subscribe to parameterized route
        this.router.params.subscribe((params) => {
          this.getApod(params['date']);
    // this.getApod();
    // console.log(this.apodService.getApod());
    // this.apodService.getApod().subscribe(
    //   (response: any) => {
    //     console.log(response);
  });
}

  // getApod(): void {
    // added after updted apod.service.ts with date infor in getApod//
    // let date = new Date().toISOString().slice(0.10);

    // this.apodService.getApod(date).subscribe(
    //   (response: any) => {
    //     this.apod = response;
      //4. Replace the current date with an updated method signature
  getApod(date:string): void{

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;

        //5. Log the results to the JS console
        console.log(response);
      }
    );
  }

}