import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];

    const marvel = [
      { id: 1, name: 'Hulk' },
      { id: 3, name: 'AntMan' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Black Panter' },
      { id: 7, name: 'Captain America' },
    ];

    const dc = [
      { id: 1, name: 'Shazam' },
      { id: 3, name: 'Wonderwoman' },
      { id: 4, name: 'Bathman' },
      { id: 5, name: 'Flash' },
    ];
    return {
      heroes,
      marvel,
      dc,
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
