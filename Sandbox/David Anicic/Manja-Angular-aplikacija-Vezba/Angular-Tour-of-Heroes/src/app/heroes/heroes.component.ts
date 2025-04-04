import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit
{
  selectedHero: Hero;
  heroes: Hero[] = HEROES;

  constructor(private heroService: HeroService)
  {

  }
  
  ngOnInit()
  {
    this.getHereos;
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }

  getHereos(): void
  {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
