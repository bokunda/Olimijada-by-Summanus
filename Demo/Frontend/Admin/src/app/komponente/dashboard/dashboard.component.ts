import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {StatistikaService} from '../../servisi/statistika.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public translate: TranslateService, public statistikaService: StatistikaService) { }

  brojKorisnika = 0;
  brojIgara = 0;
  brojTurnira = 0;
  brojBotova = 0;

  ngOnInit()
  {
    this.statistikaService.UkupanBrojBotova().subscribe( odgB => {
      this.brojBotova = odgB;
    });

    this.statistikaService.UkupanBrojIgara().subscribe( odgI => {
      this.brojIgara = odgI;
    });

    this.statistikaService.UkupanBrojKorisnika().subscribe( odgK => {
      this.brojKorisnika = odgK;
    });
  }



}
