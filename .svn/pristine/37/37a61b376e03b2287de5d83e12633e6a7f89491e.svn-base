import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IgreComponent } from '../igre/igre.component';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-dodavanje-bota-za-datu-igru',
	templateUrl: './dodavanje-bota-za-datu-igru.component.html',
	styleUrls: ['./dodavanje-bota-za-datu-igru.component.css']
})
export class DodavanjeBotaZaDatuIgruComponent implements OnInit
{

	izabranaIgra = 9;

	constructor
		(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<DodavanjeBotaZaDatuIgruComponent>,
		public translate: TranslateService,
		private cookieService: CookieService
		)
	{ }

	ngOnInit()
	{
		this.izabranaIgra = this.data.idIgre;
		//console.log(this.izabranaIgra);
	}

	zatvori(): void
	{
		this.dialogRef.close(null);
	}

	dodatBot(bot)
	{
		//console.log(bot);
		this.dialogRef.close(bot);
	}

}
