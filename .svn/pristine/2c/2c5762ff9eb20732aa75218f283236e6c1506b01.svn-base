import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Turnir } from '../../modeli/Turnir';
import { TurnirService } from '../../servisi/turnir.service';
import { TurnirZaPrikaz } from '../../modeli/TurnirZaPrikaz';
import { MatDialog } from '@angular/material';
import { PrijavaNaTurnirComponent } from '../prijava-na-turnir/prijava-na-turnir.component';
import { EventService } from '../../servisi/event.service';
import { Dogadjaj } from '../../modeli/Dogadjaj';
import swal from 'sweetalert2';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { environment } from '../../../environments/environment';
import { RezultatiTurniraComponent } from '../rezultati-turnira/rezultati-turnira.component';
import { MeceviTurniraComponent } from '../mecevi-turnira/mecevi-turnira.component'

import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component
	({
		selector: 'app-prikaz-turnira',
		templateUrl: './prikaz-turnira.component.html',
		styleUrls: ['./prikaz-turnira.component.css']
	})

export class PrikazTurniraComponent implements OnInit
{
	constructor
		(
		public turnirService: TurnirService,
		public dialog: MatDialog,
		public eventService: EventService,
		public translate: TranslateService,
		private cookieService: CookieService
		) { }

	daLiJeLogovan = true;
	ruta;
	prikaziTabelu = false;

	datasi: Dogadjaj[] = [];

	calendarOptions: Options;
	@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
	displayEvent: any;

	indikatorKalendara = false;

	setovanjeKalendara(): void
	{
		this.indikatorKalendara = true;
	}

	prosliTurniri: TurnirZaPrikaz[] = [];
	zakazaniTurniri: TurnirZaPrikaz[] = [];
	turniri: TurnirZaPrikaz[] = [];
	turniri2: TurnirZaPrikaz[] = [];


	displayedColumns = ['Turnir', 'Igra', 'pocetakPrijava', 'krajPrijava', 'pocetakTurnira', 'krajTurnira', 'prijava'];

	dataSourceProsli;
	dataSourceZakazani;

	@ViewChild(MatSort) sortProsli: MatSort;
	//@ViewChild(MatPaginator) paginatorProsli: MatPaginator;
	@ViewChild(MatSort) sortZakazani: MatSort;
	//@ViewChild(MatPaginator) paginatorZakazani: MatPaginator;

	applyFilterProsli(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespaces
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSourceProsli.filter = filterValue;
	}

	applyFilterZakazani(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespaces
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSourceZakazani.filter = filterValue;
	}

	ngOnInit()
	{
		this.ruta = '' + environment.serverUrl;
		//console.log(this.ruta + 'bokunda');
		//this.eventService.getEvents().subscribe(data => {


		//console.log("username: " + localStorage.getItem("username"));
		if (localStorage.getItem("username") == null)
		{
			this.daLiJeLogovan = false;
		}

		this.calendarOptions = {
			editable: true,
			eventLimit: false,
			header: {
				left: 'prev,next',
				center: 'title',
				right: ''
			},
			events: []
		};

		this.calendarOptions.eventDurationEditable = false;
		this.calendarOptions.eventStartEditable  = false;

		if(this.cookieService.get("language") == 'sr')
		{
			this.calendarOptions.firstDay = 1;
		this.calendarOptions.dayNames = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak',
			'Petak', 'Subota'];
		this.calendarOptions.dayNamesShort = ['Ned', 'Pon', 'Uto', 'Sre', 'Čet',
			'Pet', 'Sub'];
		this.calendarOptions.monthNames = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul',
			'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
		this.calendarOptions.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
			'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];
		}
		else
		{
			this.calendarOptions.firstDay = 1;
			this.calendarOptions.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
				'Friday', 'Saturday'];
			this.calendarOptions.dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu',
				'Fri', 'Sat'];
			this.calendarOptions.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
				'August', 'September', 'October', 'Novembar', 'Decembar'];
			this.calendarOptions.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
				'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		}





		this.turnirService.DajSveTurnire().subscribe(turniri =>
		{
			//console.log(turniri);
			if (turniri != undefined && turniri != null)
			{
				let danasnjiDatum = Date.now() / 1000;

				for (var i = 0; i < turniri.length; i++)
				{
					//console.log(turniri[i].datumVremePrijave);
					let pom = new Dogadjaj();
					pom.title = turniri[i].nazivTurnira;

					var datum = new Date(turniri[i].datumVremePocetka * 1000);
					var stringiDatum = datum.toISOString();
					////console.log((stringiDatum);
					var shorty = stringiDatum.substring(0, 10);
					////console.log((shorty);
					pom.start = shorty;

					datum = new Date((turniri[i].datumVremeZavrsetka + 86400) * 1000);
					stringiDatum = datum.toISOString();
					////console.log((stringiDatum);
					shorty = stringiDatum.substring(0, 10);
					////console.log((shorty);
					pom.end = shorty;
					this.datasi.push(pom);


				}

				//console.log(this.datasi);


				this.calendarOptions.events = this.datasi;

				this.zakazaniTurniri = turniri.filter(turnir => turnir.datumVremePocetka >= danasnjiDatum || turnir.datumVremeZavrsetka > danasnjiDatum);
				this.prosliTurniri = turniri.filter(turnir => turnir.datumVremeZavrsetka < danasnjiDatum);
			}

			this.dataSourceProsli = new MatTableDataSource(this.prosliTurniri);
			this.dataSourceProsli.sort = this.sortProsli;
			//this.dataSourceProsli.paginator = this.paginatorProsli;

			this.dataSourceZakazani = new MatTableDataSource(this.zakazaniTurniri);
			this.dataSourceZakazani.sort = this.sortZakazani;
			//this.dataSourceZakazani.paginator = this.paginatorZakazani;
		});


	}

	ucitajTurnire()
	{
		this.calendarOptions.events = this.datasi;
	}

	clickButton(model: any)
	{
		this.displayEvent = model;
	}
	eventClick(model: any)
	{
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				allDay: model.event.allDay
				// other params
			},
			duration: {}
		}
		this.displayEvent = model;
	}
	updateEvent(model: any)
	{
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				format: ''
				// other params
			},
			duration: {
				_data: model.duration._data
			}
		}
		this.displayEvent = model;
	}

	OtvoriPrijavaDialog(turnir: TurnirZaPrikaz)
	{
		let dialogRef = this.dialog.open(PrijavaNaTurnirComponent, {
			width: '300px',
			closeOnNavigation: true,
			data: {
				turnir: turnir
			}
		});

		/*dialogRef.afterClosed().subscribe(bot =>
		{
			if(bot == undefined || bot == null)
			{

			}
		})*/
	}

	zatvoriDialog()
	{
		this.dialog.closeAll();
	}


	ngAfterViewInit()
	{
		this.ucitajTurnire();
	}

	PrikaziMeceveSaTurnira(idTurnira: number): void
	{
		let dialogRef = this.dialog.open(MeceviTurniraComponent, {
			data: {
				idTurnira: idTurnira
			}
		});


	}

	PrikaziRezultateTurnira(idTurnira: number): void
	{
		let dialogRef = this.dialog.open(RezultatiTurniraComponent, {
			//width: '500px',
			data: {
				idTurnira: idTurnira
			}
		});
	}
}
