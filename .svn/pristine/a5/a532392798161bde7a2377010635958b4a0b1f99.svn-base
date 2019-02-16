import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  pieChartData;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

    this.pieChartData =  {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Pobedio',     11],
        ['Izgubio',      2],
        ['Nerešeno',  2]
      ],
      options: {'title': 'Legenda'},
    };
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
