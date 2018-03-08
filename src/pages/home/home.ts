import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventList = [];

  constructor(public navCtrl: NavController, public eventService : EventServiceProvider) {
    this.getPosts();
  }

  getPosts() {
    this.eventService.getPosts().then(data => {
      this.eventList = data;
    })
  }
}