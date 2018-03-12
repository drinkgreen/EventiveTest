//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {
  data: any;
  getApiUrl: string = "https://api.eventive.org/event_buckets/5a1ceb2a1883f10014df39d6/events?api_key=7457e8abb36c1a9cb250ddb1af093889";
  
  constructor(public http: Http) {
    console.log('EventService');
    this.getPosts();
  }

  getPosts() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.getApiUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;//JSON.parse(data);
        resolve(this.data);
      });
    });

    // return this.http.get(this.getApiUrl)
    // .do((res: Response) => console.log(res.json()))
    // .map((res : Response) => res.json());
    // // .catch((error: any) => {
    // //   console.log(error);
    // //   return ErrorObservable.create(error.statusText);
    // // });
  }

}
