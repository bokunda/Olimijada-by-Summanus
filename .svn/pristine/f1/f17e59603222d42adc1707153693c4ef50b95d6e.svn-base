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
import { TurnirTempRankComponent } from '../turnir-temp-rank/turnir-temp-rank.component';



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
			public eventService: EventService
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


		displayedColumns = ['Turnir', 'Igra', 'pocetakPrijava', 'krajPrijava', 'pocetakTurnira', 'krajTurnira','prijava'];

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


		console.log("username: " + localStorage.getItem("username"));
		if(localStorage.getItem("username") == null)
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
			  events: this.datasi
			};

			this.calendarOptions.eventDurationEditable = false;


				this.calendarOptions.firstDay = 1;
				this.calendarOptions.dayNames =	['Nedelja','Ponedeljak','Utorak', 'Sreda', 'Cetvrtak',
				'Petak', 'Subota'];
				this.calendarOptions.dayNamesShort =	['Ned','Pon','Uto', 'Sre', 'Cet',
				'Pet', 'Sub'];
				this.calendarOptions.monthNames = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul',
				'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
				this.calendarOptions.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
				'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];

			if(this.daLiJeLogovan)
			{
				this.turnirService.DajSveTurnireSaKorisnikom().subscribe(turniri =>
					{
						this.turnirService.DajSveTurnire().subscribe(turniri2 =>
						{
							//console.log(turniri);
							//console.log(turniri2);

							for(var i = 0; i < turniri2.length; i++)
							{
								var ind = 1;

								for(var j = 0; j < turniri.length; j++)
								{
									if(turniri2[i].id == turniri[j].id)
									{
										ind = 0;
									}
								}
								if(ind)
								{
									turniri.push(turniri2[i]);
								}
							}


							if (turniri != undefined && turniri != null)
								{
									let danasnjiDatum = Date.now()/1000;

									for(var i = 0; i < turniri.length; i++)
									{
										//console.log("USLO U PETLJU");
										//console.log(turniri[i].datumVremePrijave);
										let pom = new Dogadjaj();
										pom.title = turniri[i].nazivTurnira;

										var datum = new Date(turniri[i].datumVremePocetka * 1000);
										var stringiDatum = datum.toISOString();
										////console.log((stringiDatum);
										var shorty = stringiDatum.substring(0,10);
										////console.log((shorty);
										pom.start = shorty;

										datum = new Date((turniri[i].datumVremeZavrsetka + 86400) * 1000);
										stringiDatum = datum.toISOString();
										////console.log((stringiDatum);
										shorty = stringiDatum.substring(0,10);
										////console.log((shorty);
										pom.end = shorty;
										this.datasi.push(pom);

										if(i == turniri.length - 1)
										{
											console.log("bthsnmakghdskbdsd,asdbhtrjkas,kjndl");
											this.calendarOptions.events = this.datasi;
										}
									}

									//console.log(this.datasi);
									//this.calendarOptions.events = this.datasi;

									for(var i = 0; i < this.datasi.length; i++)
									{
										//console.log(this.datasi[i].title);
										//console.log(this.datasi[i].start);
										//console.log(this.datasi[i].end);
									}
									//this.calendarOptions.events = this.datasi;

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

					});
			}
			else
			{
				this.turnirService.DajSveTurnire().subscribe(turniri =>
					{
					//console.log(turniri);
					if (turniri != undefined && turniri != null)
						{
							let danasnjiDatum = Date.now()/1000;

							for(var i = 0; i < turniri.length; i++)
							{
								//console.log(turniri[i].datumVremePrijave);
								let pom = new Dogadjaj();
								pom.title = turniri[i].nazivTurnira;

								var datum = new Date(turniri[i].datumVremePocetka * 1000);
								var stringiDatum = datum.toISOString();
								////console.log((stringiDatum);
								var shorty = stringiDatum.substring(0,10);
								////console.log((shorty);
								pom.start = shorty;

								datum = new Date((turniri[i].datumVremeZavrsetka + 86400) * 1000);
								stringiDatum = datum.toISOString();
								////console.log((stringiDatum);
								shorty = stringiDatum.substring(0,10);
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


		}

		ucitajJebeneTurnire()
		{
			this.calendarOptions.events = this.datasi;
		}

		clickButton(model: any) {
		this.displayEvent = model;
		}
		eventClick(model: any) {
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
		updateEvent(model: any) {
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
				data:{
					turnir: turnir
				}
			});
		}

		zatvoriDialog()
		{
			this.dialog.closeAll();
		}


		ngAfterViewInit()
		{
			this.ucitajJebeneTurnire();
		}

		prikaziTabeluZaTakmicenje(turnir: TurnirZaPrikaz):void
		{
			let dialogRef = this.dialog.open(TurnirTempRankComponent, {
				width: '500px',
				data:{
					turnir: turnir
				}
			});

		}
}
