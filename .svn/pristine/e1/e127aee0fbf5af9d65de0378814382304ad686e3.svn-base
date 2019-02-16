import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../servisi/admin.service';


@Component({
  selector: 'app-banovanje',
  templateUrl: './banovanje.component.html',
  styleUrls: ['./banovanje.component.css']
})
export class BanovanjeComponent implements OnInit {

	constructor
	(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private adminService: AdminService,
		public dialogRef: MatDialogRef<BanovanjeComponent>,

	) { }

	korisnik;
	ukupnoVreme;
	vreme;
	datum;

	permBan = 33333333333;


	indikatorBana;

	message: string = "";

	private duzinaBana = new FormControl('',[Validators.required]);

	ngOnInit()
	{
		this.korisnik = this.data.korisnik;
		if(this.korisnik.banovan * 1000 < Date.now())
		{
			this.indikatorBana = false;
		}
		else
		{
			this.indikatorBana = true;
		}
		//console.log(this.korisnik);
	}

	NaAzur():void
	{
		this.dialogRef.close();
	}

	BanujKorisnika(): void
	{
		this.korisnik.banovan = Math.floor(Date.now() / 1000);
		//console.log(Date.now());
		this.korisnik.banovan += parseInt(this.duzinaBana.value);

		//console.log(this.duzinaBana.value);
		//console.log(this.korisnik.banovan);

		this.datum = new Date(this.korisnik.banovan * 1000);

		var mesec = this.datum.getMonth() + 1;
		if(this.korisnik.banovan > 33333333333)
		{
			this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste trajno banovani sa našeg web sajta.";
		}
		else
		{
			this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste banovani do " + this.datum.getDate() + "." + mesec + "." + this.datum.getFullYear();
		}
		//this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste banovani do " + this.datum.getDate() + "." + mesec + "." + this.datum.getFullYear();
		this.korisnik.banPoruka = this.message;
		//console.log(this.korisnik);

		if(this.duzinaBana.valid)
		{
			this.adminService.BanujKorisnika(this.korisnik).subscribe();
			this.indikatorBana = true;
			this.NaAzur();
		}

	}

	UkloniBan(): void
	{
		this.korisnik.banovan = 0;

		this.message = "Poštovani/a " + this.korisnik.username + ", obaveštavamo vas da vam je uklonjena zabrana sa našeg sajta.";
		this.korisnik.banPoruka = this.message;
		this.adminService.UkloniBan(this.korisnik).subscribe();
		this.indikatorBana = false;
		this.NaAzur();
	}

}
