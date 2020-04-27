import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {EventService} from './shared/event.service';

/*
Les Resolver d'Angular permettent d'attendre le retour d'un observable avant d'initialiser /
mettre à jour un composant après une mise à jour de l'url. Le Resolver est une classe que l'on associe à la route du composant.
Leur utilisation classique est la récupération de données.
 */
@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);
  }


}
