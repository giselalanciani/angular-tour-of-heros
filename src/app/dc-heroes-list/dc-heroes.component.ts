import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dc-heroes',
  templateUrl: './dc-heroes.component.html',
  styleUrls: ['./dc-heroes.component.scss']
})
export class DcHeroesComponent {
  dc$: Observable<Hero[]>;

  constructor(public heroService: HeroService){
    this.dc$ = this.heroService.getDCHeroes()

  }
}
