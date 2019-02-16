import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import { Igra } from '../../modeli/Igra';
import { TipTurnira } from '../../modeli/TipTurnira';
import { FormControl, Validators } from '@angular/forms';
import { Turnir } from '../../modeli/Turnir';
import { DatePipe } from '@angular/common';
import { MatSnackBar} from '@angular/material';
import { validateConfig } from '@angular/router/src/config';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material';
import swal from 'sweetalert2'

@Component({
  selector: 'app-turniri',
  templateUrl: './turniri.component.html',
  styleUrls: ['./turniri.component.css']
})
export class TurniriComponent implements OnInit {

	constructor
	(
		public adminService: AdminService,
		public snackBar: MatSnackBar,
		public dataPipe: DatePipe,
		public adapter: DateAdapter<any>
	) { }

	openSnackBar(message: string, action: string)
	{
		this.snackBar.open(message, action, {
		duration: 2000,
		});
	}

	french() {
		this.adapter.setLocale('sh');
	  }

	public odabraniTipTurnira = new FormControl('',Validators.required);	//tip turnira (liga/kup)
	public naziv = new FormControl('',[Validators.required, Validators.pattern("[' 'a-zA-z0-9\ \u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);				//naziv turnira
	public odabranaIgra = new FormControl('',Validators.required);			//igra na turniru(xox,tenis)
	//--------------------------------------------------------------------------------------------------

	public datumPocetkaPrijava = new FormControl('',[Validators.required]);	//datum pocetka prijave
	public pocetakPrijavaSati = new FormControl(0,[Validators.required]);		//vreme pocetka prijave u satima
	public pocetakPrijavaMinuti = new FormControl(0,[Validators.required]);	//vreme pocetka prijave u minutima
	//------------------------------------------------------------------------------------------------------------

	public datumZavrsetkaPrijava = new FormControl('',[Validators.required]);	//datum zavrsetka prijave
	public zavrsetakPrijavaSati = new FormControl(0,[Validators.required]);	//vreme zavrsetka prijave u satima
	public zavrsetakPrijavaMinuti = new FormControl(0,[Validators.required]); //vreme zavrsetka prijave u mintima
	//------------------------------------------------------------------------------------------------------------

	public datumPocetka = new  FormControl('',[Validators.required]);			//datum pocetka turnira
	public pocetakTurniraSati = new FormControl(0,[Validators.required]);		//vreme pocetka turnira u satima
	public pocetakTurniraMinuti = new FormControl(0,[Validators.required]);	//vreme pocetka turnira u minutima
	//------------------------------------------------------------------------------------------------------------

	public datumZavrsetka = new FormControl('',[Validators.required]);			//datum zavrsetka turnira
	public zavrsetakTurniraSati = new FormControl(0,[Validators.required]);	//vreme zavrsetka turnira u satima
	public zavrsetakTurniraMinuti = new FormControl(0,[Validators.required]);	//vreme zavrsetka turnira u minutima
	//--------------------------------------------------------------------------------------------------------------

	public minDatum: Date = new Date();	//datum za kontrolu, koji onemogucava da se izabere manji od danasnjeg

	public poruka: string = "Lose izabrani datumi"; 	//poruka koja se salje u slucaju loseg datuma/vremena
	public losDatum: boolean = false;					//indikator pravilnosti izabranih datuma

	sati: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	minuti: number[] = [0,10,20,30,40,50];

	igre: Igra[] = [];	//igre koje se uzimaju iz baze
	tipoviTurnira: TipTurnira[] = [];	//tipovi turnira koji se uzimaju iz baze

	public _12hUSekundama: number = 43200;

	public pocetakPrijavaUSekundama: number;
	public krajPrijavaUSekundama: number;
	public pocetakTurniraUSekundama: number;
	public krajTurniraUSekundama: number;

	public message: string = "";

	ngOnInit() {
		this.adminService.DajSveIgre().subscribe(igre => this.igre = igre);
		this.adminService.DajTipoveTurnira().subscribe(tipoviTurnira => this.tipoviTurnira = tipoviTurnira);



		//this.french();
	}

	DodajTurnir(): void{

		if(this.odabraniTipTurnira.valid && this.odabranaIgra.valid && this.naziv.valid &&
		   this.datumPocetkaPrijava.valid && this.pocetakPrijavaSati.valid && this.pocetakPrijavaMinuti.valid &&
		   this.datumZavrsetkaPrijava.valid && this.zavrsetakPrijavaSati.valid && this.zavrsetakPrijavaMinuti.valid &&
		   this.datumPocetka.valid && this.pocetakTurniraSati.valid && this.pocetakTurniraMinuti.valid &&
		   this.datumZavrsetka.valid && this.zavrsetakTurniraSati.valid && this.zavrsetakTurniraMinuti.valid)
		{
			//------------------PRETVARANJE DATUMA U SEKUNDE PO UNIX VREMENU(OD 1.1.1970.)
			this.pocetakPrijavaUSekundama = this.datumPocetkaPrijava.value.getTime() / 1000;
			this.krajPrijavaUSekundama = this.datumZavrsetkaPrijava.value.getTime() / 1000;
			this.pocetakTurniraUSekundama = this.datumPocetka.value.getTime() / 1000;
			this.krajTurniraUSekundama = this.datumZavrsetka.value.getTime() / 1000;

			//------------------DODAVANJE SATI I MINUTA U SEKUNDAMA KOJE JE IZABRAO ADMIN
			this.pocetakPrijavaUSekundama += this.pocetakPrijavaSati.value * 3600 + this.pocetakPrijavaMinuti.value * 60;
			this.krajPrijavaUSekundama += this.zavrsetakPrijavaSati.value * 3600 + this.zavrsetakPrijavaMinuti.value * 60;
			this.pocetakTurniraUSekundama += this.pocetakTurniraSati.value * 3600 + this.pocetakTurniraMinuti.value * 60;
			this.krajTurniraUSekundama += this.zavrsetakTurniraSati.value * 3600 + this.zavrsetakTurniraMinuti.value * 60;


			this.losDatum = false;

			var prvi = new Date(this.pocetakPrijavaUSekundama * 1000);
			var drugi  = new Date(this.krajPrijavaUSekundama * 1000);
			var treci = new Date(this.pocetakTurniraUSekundama * 1000);
			var cetvrti = new Date(this.krajTurniraUSekundama * 1000);

			/*//console.log("prvi: " + prvi.toLocaleString());						//PROVERA DATUMA
			//console.log("drugi: " + drugi.toLocaleString());
			//console.log("treci: " + treci.toLocaleString());
			//console.log("ctvrti: " + cetvrti.toLocaleString());*/

			if(!(this.pocetakPrijavaUSekundama < this.krajPrijavaUSekundama &&
				this.krajPrijavaUSekundama < this.pocetakTurniraUSekundama &&
				this.pocetakTurniraUSekundama < this.krajTurniraUSekundama))
				{
					this.losDatum = true;
				}

			let turnir: Turnir = new Turnir();	//objekat tipa turnir
			turnir.idTipaTurnira = this.odabraniTipTurnira.value;	//id tipa turnira
			turnir.naziv = this.naziv.value;	//naziv turnira
			turnir.idIgre = this.odabranaIgra.value;	//id odabrane igre
			turnir.pocetakPrijava = this.pocetakPrijavaUSekundama;
			turnir.krajPrijava = this.krajPrijavaUSekundama;
			turnir.datumVremePocetka = this.pocetakTurniraUSekundama;
			turnir.datumVremeZavrsetka = this.krajTurniraUSekundama;

			var pomMesecTurnir = treci.getMonth() + 1;
			var pomMesecPrijave = prvi.getMonth() + 1;

			this.message = turnir.naziv + " turnir pocinje " + treci.getDate() + "." + pomMesecTurnir + "." + treci.getFullYear() +  ". Prijave za turnir pocinju " + prvi.getDate() + "." + pomMesecPrijave + "." + prvi.getFullYear() + ".";
			turnir.porukaZaMail = this.message;
			////console.log(turnir);

			if(!this.losDatum)
			{
				
				this.adminService.DodajTurnir(turnir).subscribe(odg =>
				{
					if (odg.status == 1)
					{
						swal({
							type: 'success',
							title: 'Turnir je uspešno kreiran!',
							showConfirmButton: false,
							timer: 2600
						});

						// turnir: turnir
						this.adminService.dodatTurnir.emit({turnir: turnir, nazivIgre: odg.nazivIgre, id: odg.idTurnira});
					}
					else
					{
						swal({
							type: 'error',
							title: 'Turnir nije kreiran!'
						});
					}
				});
				//this.openSnackBar('Turnir uspešno kreiran!', '');

    
			}
		}
		else
		{
			swal({
				type: 'error',
				title: 'Uneti podaci nisu validni'
			})
		}


	}

	// poruka koja se ispisuje ukoliko naziv turnira nije pravilo unet
	greskaNazivTurnira(): string
	{
		return this.naziv.hasError("required") ? "Polje za naziv turnira ne može biti prazno!" : this.naziv.hasError("pattern") ? "Polje za naziv turnira može da sadrži samo slova i brojeve!" : "";
	}

	GreskaPocetakPrijava(): string
	{
		if (this.datumPocetkaPrijava.hasError('required'))
		{
			return 'Morate uneti datum pocetka';
		}

		//console.log(this.datumPocetkaPrijava.errors);
		return '';
	}

	GreskaZavrsetakPrijava(): string
	{
		return '';
	}
}

//Ovde sam napravio svoj neki dataAdapter koji nasledjuje osobine ovog nejtvnog
//sa nekim osobinama koje nama odgovaraju
@Injectable()
export class MyDateAdapter extends NativeDateAdapter {

	getFirstDayOfWeek(): number {
		return 1;
	}

	format(date: Date, displayFormat: Object): string {
		if (displayFormat === 'input') {
		  const day = date.getDate();
		  const month = date.getMonth() + 1;
		  const year = date.getFullYear();
		  return `${day}-${month}-${year}`;
		} else {
			//console.log("else");
			const day = date.getDate();
		  	const month = date.getMonth() + 1;
			  const year = date.getFullYear();
			  return day + "." + month + "." + year + ".";
		  //return date.toDateString();
		}
	  }

}
