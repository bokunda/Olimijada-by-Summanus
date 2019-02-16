import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import { StatistikaService } from '../../servisi/statistika.service';
import {environment} from "../../../environments/environment";
import { TranslateService } from '@ngx-translate/core';
import {TurnirService} from '../../servisi/turnir.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

    username;
	prijavljen;
	brojKorisnika: number;
	brojIgara: number;
	brojBotova: number;

	dvaTurnira = [];

    constructor
    (
        private statistikaService: StatistikaService,
		private turniriService: TurnirService,
		private translate: TranslateService,
		private cookieService: CookieService
		
    ) {}

    carouselBanner;

    ruta;

    rutaIgra;

    ngOnInit()
    {

        this.dvaTurnira[0] = {};
        this.dvaTurnira[1] = {};

        this.ruta = environment.serverUrl;
        this.rutaIgra = '' + this.ruta + 'upload/slike/slajder/igre.jpg';
        //console.log((this.rutaIgra);

        this.turniriService.DajPoslednjaDvaTurnira().subscribe( odg => {

            this.dvaTurnira[0] = odg[0];
            this.dvaTurnira[1] = odg[1];

        });

		this.statistikaService.UkupanBrojKorisnika().subscribe(odg => {
			if (odg != -1)
			{
				this.brojKorisnika = odg;
			}
			else
			{
				this.brojKorisnika = 0;
			}
		});

		this.statistikaService.UkupanBrojBotova().subscribe(odg =>
		{
			if (odg != -1)
			{
				this.brojBotova = odg;
			}
			else
			{
				this.brojBotova = 0;
			}
		});

		this.statistikaService.UkupanBrojIgara().subscribe(odg =>
			{
				if (odg != -1)
				{
					this.brojIgara = odg;
				}
				else
				{
					this.brojIgara = 0;
				}
			});

        this.username = localStorage.getItem("username")
        if (this.username != null)
        {
            this.prijavljen = true;
        }
        else
        {
            this.prijavljen = false;
        }

        this.carouselBanner = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true,
                pointStyles: `
          .ngxcarouselPoint {
            display: none;
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
            },
            load: 2,
            loop: true,
            touch: true
        }
    }

    /* This will be triggered after carousel viewed */
    afterCarouselViewedFn(data) {
        //console.log((data);
    }

    /* It will be triggered on every slide*/
    onmoveFn(data: NgxCarouselStore) {
        //console.log((data);
    }

}
