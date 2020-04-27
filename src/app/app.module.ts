import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventListResolver,
  CreateSessionComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import {NavBarComponent} from './nav/navbar.component';
import {TOASTR_TOKEN, CollapsibleWellComponent, Toastr, SimpleModalComponent, JQ_TOKEN, ModalTriggerDirective} from './common';
import {RouterModule, PreloadAllModules} from '@angular/router';
import { appRoutes } from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionListComponent} from './events/event-details/session-list.component';
import {HttpClientModule} from '@angular/common/http';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];
// declare let toastr: any

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventResolver,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyValue
    },
    VoterService,

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyValue(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
