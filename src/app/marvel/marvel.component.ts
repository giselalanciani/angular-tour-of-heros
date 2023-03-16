import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss'],
})
export class MarvelComponent {
  marvel$: Observable<Hero[]>;

  // constructor(private heroService: HeroService) {}
  constructor(public heroService: HeroService) {
    this.marvel$ = this.heroService.getMarvelHeroes();
    // }
    // ngOnInit(): void {
    //   this.getMarvelHeroes();
    // }

    // getMarvelHeroes(): void {
    //   this.heroService.getMarvelHeroes().subscribe((marvel) => (this.marvel = marvel));
    // }
  }
}
