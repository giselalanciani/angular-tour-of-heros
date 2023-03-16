import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-marvel-detail',
  templateUrl: './marvel-detail.component.html',
  styleUrls: ['./marvel-detail.component.scss'],
})
export class MarvelDetailComponent implements OnInit, OnDestroy {
  public marvelHero!: Hero;
  private marvelHero$: Observable<Hero>;
  private marvelHeroSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.marvelHero$ = this.heroService.getMarvelHero(id);
  }

  ngOnInit(): void {
    this.marvelHeroSubscription = this.marvelHero$.subscribe((value: Hero) => {
      this.marvelHero = value;
    });
  }

  ngOnDestroy(): void {
    this.marvelHeroSubscription.unsubscribe();
  }
}
