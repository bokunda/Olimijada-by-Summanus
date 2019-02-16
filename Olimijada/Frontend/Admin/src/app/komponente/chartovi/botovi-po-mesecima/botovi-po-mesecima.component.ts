import { Component, HostListener, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-botovi-po-mesecima',
  templateUrl: './botovi-po-mesecima.component.html',
  styleUrls: ['./botovi-po-mesecima.component.css']
})
export class BotoviPoMesecimaComponent implements OnInit {

  single: any[];
  multi: any[];

  sirina: number;
  visina: number;

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mesec';
  showYAxisLabel = true;
  yAxisLabel = 'Broj botova';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {}

  onSelect(event) {
    //console.log(event);
  }

  ngOnInit()
  {
    this.view = [320, 300];
    //this.srediDimenzijeCharta();

    this.showLegend = false;

    //this.statistikaService.UkupanBrojPobedaZaKorisnkaPoMesecima().subscribe(odgP =>
    //{
    //  //console.log(odgP);
    //  //console.log(JSON.stringify(odgP));

      /* ISPOD TREBA ODHARDKODIRATI this.multi[] */

      this.multi = [
        {
          "name": "Botova",
          "series": [
            {
              "name" : "januar",
              "value": 1
            },
            {
              "name" : "februar",
              "value": 3
            },
            {
              "name" : "mart",
              "value": 7
            },
            {
              "name" : "april",
              "value": 6
            },
            {
              "name" : "maj",
              "value": 8
            },
            {
              "name" : "jun",
              "value": 11
            },{
              "name" : "jul",
              "value": 16
            },
            {
              "name" : "avgust",
              "value": 26
            },
            {
              "name" : "septembar",
              "value": 22
            },{
              "name" : "oktobar",
              "value": 36
            },
            {
              "name" : "novembar",
              "value": 42
            },
            {
              "name" : "decembar",
              "value": 59
            },
          ]
        }
      ];
  }

  /*
  @HostListener('window:resize')
  srediDimenzijeCharta(): void
  {
    this.sirina = window.innerWidth - 260;

    if(window.innerWidth < 900)
    {
      this.sirina = window.innerWidth - 120;
      this.visina = 400;
    }
    else
    {
      this.sirina = window.innerWidth - 220;
      this.visina = 400;
    }
    //console.log(this.sirina, this.visina);
    this.view = [this.sirina, this.visina];
  }
  */


}
