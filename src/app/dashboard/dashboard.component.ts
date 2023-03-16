import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  heroes$: Observable<Hero[]>;
  heroes: Hero[] = [];

  constructor(public heroService: HeroService) {
    this.heroes$ = this.heroService.getTopHeroes();
  }
}
