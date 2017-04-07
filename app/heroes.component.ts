import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.template.html`,
  styleUrls: [`./heroes.component.css`]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of heroes '
  selectedHero: Hero;
  heroes: Hero[];
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService, private route: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(){
    this.route.navigate(['/detail', this.selectedHero.id]);
  }

  add(name:string):void {
    this.heroService.create(name).then(hero => {this.heroes.push(hero); this.selectedHero = null})
  }
}
