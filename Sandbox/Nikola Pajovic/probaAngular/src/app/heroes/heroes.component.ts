import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //importovanje Hero klase
import { HEROES } from '../mock-heroes'; //importovanje niza heroja 

@Component({
  selector: 'app-heroes',   //selektor za prepoznavanje CSS-a
  templateUrl: './heroes.component.html',   //putanja gde se nalazi html komponente
  styleUrls: ['./heroes.component.css']     //putanja gde se nalazi privatni css komponente
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
