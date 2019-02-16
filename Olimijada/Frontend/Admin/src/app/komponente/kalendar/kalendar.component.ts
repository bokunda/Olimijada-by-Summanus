import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import { Dogadjaj } from '../../modeli/Dogadjaj';



import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';


@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {

	constructor
	(
		public adminService: AdminService
	) { }

	datasi: Dogadjaj[] = [];

	indikatorKalendara = false;

  setovanjeKalendara(): void
  {
	  this.indikatorKalendara = true;
  }

	calendarOptions: Options;
	@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
	displayEvent: any;

	ngOnInit()
	{
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

		this.calendarOptions.firstDay = 1;
		  this.calendarOptions.dayNames =	['Nedelja','Ponedeljak','Utorak', 'Sreda', 'Cetvrtak',
		  'Petak', 'Subota'];
			this.calendarOptions.dayNamesShort =	['Ned','Pon','Uto', 'Sre', 'Cet',
			'Pet', 'Sub'];
		  this.calendarOptions.monthNames = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul',
		  'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
		  this.calendarOptions.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul',
		  'Avg', 'Sep', 'Okt', 'Nov', 'Dec'];

		  this.adminService.DajSveTurnire().subscribe(turniri =>
			{
				//console.log(turniri);
		if (turniri != undefined && turniri != null)
			{
				let danasnjiDatum = Date.now()/1000;

				for(var i = 0; i < turniri.length; i++)
				{
					let pom = new Dogadjaj();
					pom.title = turniri[i].nazivTurnira;

					var datum = new Date(turniri[i].datumVremePocetka * 1000);
					var stringiDatum = datum.toISOString();
					////console.log(stringiDatum);
					var shorty = stringiDatum.substring(0,10);
					////console.log(shorty);
					pom.start = shorty;

					datum = new Date((turniri[i].datumVremeZavrsetka + 86400) * 1000);
					stringiDatum = datum.toISOString();
					////console.log(stringiDatum);
					shorty = stringiDatum.substring(0,10);
					////console.log(shorty);
					pom.end = shorty;
					this.datasi.push(pom);
				}

				//console.log(this.datasi);
				this.calendarOptions.events = this.datasi;


			}
		});
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

}
