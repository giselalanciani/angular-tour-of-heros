import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes-list/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MarvelComponent } from './marvel-list/marvel.component';
import { MarvelDetailComponent } from './marvel-detail/marvel-detail.component';
import { DcHeroesComponent } from './dc-heroes-list/dc-heroes.component';
import { DcDetailComponent } from './dc-detail/dc-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'marvel/:id', component: MarvelDetailComponent },
  { path: 'dc', component: DcHeroesComponent },
  { path: 'dc/:id', component: DcDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
