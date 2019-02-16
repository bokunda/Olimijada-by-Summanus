import {Component, HostListener, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import {StatistikaService} from "../../../servisi/statistika.service";

@Component({
  selector: 'app-pobede-porazi',
  templateUrl: './pobede-porazi.component.html',
  styleUrls: ['./pobede-porazi.component.css']
})
export class PobedePoraziComponent implements OnInit {

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
    yAxisLabel = 'Utakmica';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // line, area
    autoScale = true;

    constructor(public statistikaService: StatistikaService) {}





    onSelect(event) {
        ////console.log(event);
    }

  ngOnInit()
  {

      if(window.innerWidth < 900)
      {
          this.sirina = window.innerWidth - 18;
          this.visina = 400;
      }
      else if(window.innerWidth < 400)
      {
          this.sirina = window.innerWidth - 18;
          this.visina = 200;
      }

      this.showLegend = false;

      this.view = [this.sirina, this.visina];

      this.statistikaService.UkupanBrojPobedaZaKorisnkaPoMesecima().subscribe(odgP =>
      {
         ////console.log(odgP);
         ////console.log(JSON.stringify(odgP));

         /* ISPOD TREBA ODHARDKODIRATI this.multi[] */

         this.multi = [
             {
                 "name": "Pobede",
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
                         "value": 2
                     },
                     {
                         "name" : "maj",
                         "value": 6
                     },
                     {
                         "name" : "jun",
                         "value": 0
                     },{
                         "name" : "jul",
                         "value": 1
                     },
                     {
                         "name" : "avgust",
                         "value": 3
                     },
                     {
                         "name" : "septembar",
                         "value": 7
                     },{
                         "name" : "oktobar",
                         "value": 7
                     },
                     {
                         "name" : "novembar",
                         "value": 13
                     },
                     {
                         "name" : "decembar",
                         "value": 17
                     },
                 ]
             },
             {
                 "name": "Porazi",
                 "series": [
                     {
                         "name" : "januar",
                         "value": 11
                     },
                     {
                         "name" : "februar",
                         "value": 17
                     },
                     {
                         "name" : "mart",
                         "value": 16
                     },
                     {
                         "name" : "april",
                         "value": 8
                     },
                     {
                         "name" : "maj",
                         "value": 4
                     },
                     {
                         "name" : "jun",
                         "value": 9
                     },{
                         "name" : "jul",
                         "value": 4
                     },
                     {
                         "name" : "avgust",
                         "value": 5
                     },
                     {
                         "name" : "septembar",
                         "value": 6
                     },{
                         "name" : "oktobar",
                         "value": 11
                     },
                     {
                         "name" : "novembar",
                         "value": 7
                     },
                     {
                         "name" : "decembar",
                         "value": 3
                     },
                 ]
             }
         ];
      });



/*
      this.multi = [
      {
          "name": "Germany",
          "series": [
              {
                  "name": "2010",
                  "value": 7300000
              },
              {
                  "name": "2011",
                  "value": 8940000
              }
          ]
      },

      {
          "name": "USA",
          "series": [
              {
                  "name": "2010",
                  "value": 7870000
              },
              {
                  "name": "2011",
                  "value": 8270000
              }
          ]
      },

      {
          "name": "France",
          "series": [
              {
                  "name": "2010",
                  "value": 5000002
              },
              {
                  "name": "2011",
                  "value": 5800000
              }
          ]
      }
  ];
  */


  }

    @HostListener('window:resize')
    srediDimenzijeCharta(): void
    {
        if(window.innerWidth < 900)
        {
            this.sirina = window.innerWidth - 38;
            this.visina = 400;
        }
        else if(window.innerWidth < 400)
        {
            this.sirina = window.innerWidth - 108;
            this.visina = 200;
        }
        ////console.log(this.sirina, this.visina);
        this.view = [this.sirina, this.visina];
    }
}
