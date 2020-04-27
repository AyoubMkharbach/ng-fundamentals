import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase}}</h2>
      <div>Date: {{event?.date | date:'shortDate'}}</div>
      <div [ngStyle]="getStartTimeClass()" [ngSwitch]="event.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late start)</span>
          <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: {{event?.price | currency: 'USD'}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
          Online URL: {{event?.onlineUrl}}
      </div>
  </div>
  `,
  styles: [`
    .thumbnail{
        min-height: 250px;
    }
    .pad-left{
        margin-left: 10px;
    }
    .well div{
        color: #bbb;
    }
   `]
})
export class EventThumbnailComponent {

  @Input() event: IEvent;
  // @Output() eventClick = new EventEmitter();

  /*
  <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
   */
  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
    /*
    .green{ color: #003300 !important;}
    .bold{ font-weight: bold; }
    // Method 2 : with ngClass
    if(this.event && this.event.time === '8:00 am')
      return 'green bold';
    return '';

    // Method 3 : with ngClass
    const isEarly = this.event && this.event.time === '8:00 am';
    return {green: isEarly, bold: isEarly};

    // Method 4 : with ngClass
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
     */
  }
}
