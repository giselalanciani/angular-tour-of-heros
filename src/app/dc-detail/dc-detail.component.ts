import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dc-detail',
  templateUrl: './dc-detail.component.html',
  styleUrls: ['./dc-detail.component.scss'],
})
export class DcDetailComponent implements OnInit, OnDestroy {
  public dcHero!: Hero;
  private dcHero$: Observable<Hero>;
  private dcHeroSuscription!: Subscription;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.dcHero$ = this.heroService.getDcHero(id);
  }
  ngOnInit(): void {
    this.dcHeroSuscription = this.dcHero$.subscribe((value:Hero)=> {
      this.dcHero = value;
    });
  }
 ngOnDestroy(): void {
   this.dcHeroSuscription.unsubscribe();
 }
}
