import {Component, HostListener, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import {StatistikaService} from "../../../servisi/statistika.service";
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pobede-porazi',
  templateUrl: './pobede-porazi.component.html',
  styleUrls: ['./pobede-porazi.component.css']
})
export class PobedePoraziComponent implements OnInit {

    username = '';
    izmeni = false;

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
    xAxisLabel = '';
    showYAxisLabel = true;
    yAxisLabel = '';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // line, area
    autoScale = true;

    constructor(public statistikaService: StatistikaService,
		public translate: TranslateService,
		private cookieService: CookieService) {}





    onSelect(event) {
        ////console.log(event);
    }

  ngOnInit()
  {

      var parser = document.createElement('a');
      parser.href = window.location.href;
      var res = parser.pathname.slice(8, 30);

      if((res.length > 3) && (res != localStorage.getItem('username')) )
      {
          this.username = res;
          this.izmeni = false;
      }
      else
      {
          this.username = localStorage.getItem('username')
          this.izmeni = true;
      }

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

      this.statistikaService.UkupanBrojPobedaZaKorisnkaPoMesecima('' + this.username).subscribe(odgP =>
      {
         this.statistikaService.UkupanBrojPorazaZaKorisnkaPoMesecima('' + this.username).subscribe(odgI =>
         {
             /* ISPOD TREBA ODHARDKODIRATI this.multi[] */

			 if(this.cookieService.get("language") == 'sr')
			 {
				this.multi = [
					{
						"name": "Pobede",
						"series": [
							{
								"name" : "januar",
								"value": Number(odgP['1'])
							},
							{
								"name" : "februar",
								"value": Number(odgP['1'])
							},
							{
								"name" : "mart",
								"value": Number(odgP['2'])
							},
							{
								"name" : "april",
								"value": Number(odgP['3'])
							},
							{
								"name" : "maj",
								"value": Number(odgP['4'])
							},
							{
								"name" : "jun",
								"value": Number(odgP['5'])
							},{
								"name" : "jul",
								"value": Number(odgP['6'])
							},
							{
								"name" : "avgust",
								"value": Number(odgP['7'])
							},
							{
								"name" : "septembar",
								"value": Number(odgP['8'])
							},{
								"name" : "oktobar",
								"value": Number(odgP['9'])
							},
							{
								"name" : "novembar",
								"value": Number(odgP['10'])
							},
							{
								"name" : "decembar",
								"value": Number(odgP['12'])
							},
						]
					},
					{
						"name": "Porazi",
						"series": [
							{
								"name" : "januar",
								"value": Number(odgI['1'])
							},
							{
								"name" : "februar",
								"value": Number(odgI['1'])
							},
							{
								"name" : "mart",
								"value": Number(odgI['2'])
							},
							{
								"name" : "april",
								"value": Number(odgI['3'])
							},
							{
								"name" : "maj",
								"value": Number(odgI['4'])
							},
							{
								"name" : "jun",
								"value": Number(odgI['5'])
							},{
								"name" : "jul",
								"value": Number(odgI['6'])
							},
							{
								"name" : "avgust",
								"value": Number(odgI['7'])
							},
							{
								"name" : "septembar",
								"value": Number(odgI['8'])
							},{
								"name" : "oktobar",
								"value": Number(odgI['9'])
							},
							{
								"name" : "novembar",
								"value": Number(odgI['10'])
							},
							{
								"name" : "decembar",
								"value": Number(odgI['12'])
							},
						]
					}
				];
			 }
			 else
			 {
				this.multi = [
					{
						"name": "Victory",
						"series": [
							{
								"name" : "january",
								"value": Number(odgP['1'])
							},
							{
								"name" : "february",
								"value": Number(odgP['1'])
							},
							{
								"name" : "march",
								"value": Number(odgP['2'])
							},
							{
								"name" : "april",
								"value": Number(odgP['3'])
							},
							{
								"name" : "may",
								"value": Number(odgP['4'])
							},
							{
								"name" : "june",
								"value": Number(odgP['5'])
							},{
								"name" : "july",
								"value": Number(odgP['6'])
							},
							{
								"name" : "august",
								"value": Number(odgP['7'])
							},
							{
								"name" : "september",
								"value": Number(odgP['8'])
							},{
								"name" : "october",
								"value": Number(odgP['9'])
							},
							{
								"name" : "november",
								"value": Number(odgP['10'])
							},
							{
								"name" : "december",
								"value": Number(odgP['12'])
							},
						]
					},
					{
						"name": "Defeat",
						"series": [
							{
								"name" : "january",
								"value": Number(odgI['1'])
							},
							{
								"name" : "february",
								"value": Number(odgI['1'])
							},
							{
								"name" : "march",
								"value": Number(odgI['2'])
							},
							{
								"name" : "april",
								"value": Number(odgI['3'])
							},
							{
								"name" : "may",
								"value": Number(odgI['4'])
							},
							{
								"name" : "june",
								"value": Number(odgI['5'])
							},{
								"name" : "july",
								"value": Number(odgI['6'])
							},
							{
								"name" : "august",
								"value": Number(odgI['7'])
							},
							{
								"name" : "september",
								"value": Number(odgI['8'])
							},{
								"name" : "october",
								"value": Number(odgI['9'])
							},
							{
								"name" : "november",
								"value": Number(odgI['10'])
							},
							{
								"name" : "december",
								"value": Number(odgI['12'])
							},
						]
					}
				];
			 }


         });
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
