import { Component, OnInit } from '@angular/core';
import {StatistikaService} from '../../../servisi/statistika.service';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mecevi-po-mesecima',
  templateUrl: './mecevi-po-mesecima.component.html',
  styleUrls: ['./mecevi-po-mesecima.component.css']
})
export class MeceviPoMesecimaComponent implements OnInit {

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
  yAxisLabel = 'Mečevi';

  colorScheme = {
    domain: ['#ffaa00', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor(public translate: TranslateService, public statistikaService: StatistikaService, public cookieService: CookieService) {}

  onSelect(event) {
    console.log(event);
  }

  ngOnInit()
  {
    this.view = [320, 300];
    //this.srediDimenzijeCharta();

    this.showLegend = false;

	let monthNames = []
	if (this.cookieService.get("language") == "sr")
	{
		monthNames = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
		this.xAxisLabel = 'Meseci';
		this.yAxisLabel = 'Mečevi';
	}
	else
	{
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		this.xAxisLabel = 'Month'
		this.yAxisLabel = 'Matches';
	}

    this.statistikaService.UkupanBrojMecevaPoMesecima().subscribe(odgB => {
      //console.log(odgB);
      //console.log(JSON.stringify(odgB));

      this.multi = [
        {
          "name": "Meceva",
          "series": [
            {
              "name": monthNames[0],
              "value": odgB['1']
            },
            {
              "name": monthNames[1],
              "value": odgB['1']
            },
            {
              "name": monthNames[2],
              "value": odgB['2']
            },
            {
              "name": monthNames[3],
              "value": odgB['3']
            },
            {
              "name": monthNames[4],
              "value": odgB['4']
            },
            {
              "name": monthNames[5],
              "value": odgB['5']
            }, {
              "name": monthNames[6],
              "value": odgB['6']
            },
            {
              "name": monthNames[7],
              "value": odgB['7']
            },
            {
              "name": monthNames[8],
              "value": odgB['8']
            }, {
              "name": monthNames[9],
              "value": odgB['9']
            },
            {
              "name": monthNames[10],
              "value": odgB['10']
            },
            {
              "name": monthNames[11],
              "value": odgB['12']
            }
          ]
        }
      ];
    });
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
