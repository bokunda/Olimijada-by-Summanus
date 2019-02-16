import { Component, OnInit, Inject } from '@angular/core';
import { TurnirZaPrikaz } from '../../modeli/TurnirZaPrikaz';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AdminService } from '../../servisi/admin.service';
import { Igra } from '../../modeli/Igra';
import { TipTurnira } from '../../modeli/TipTurnira';
import { Turnir } from '../../modeli/Turnir';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material';
import swal from 'sweetalert2';

@Component({
  selector: 'app-azuriraj-turnir',
  templateUrl: './azuriraj-turnir.component.html',
  styleUrls: ['./azuriraj-turnir.component.css']
})
export class AzurirajTurnirComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<AzurirajTurnirComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private adminService: AdminService,
		private snackBar: MatSnackBar
	) { }


	openSnackBar(message: string, action: string)
	{
		this.snackBar.open(message, action, {
		duration: 3000,
		});
	}

	turnir: TurnirZaPrikaz; //POSTOJECI TURNIR KOJI ZELIMO DA AZURIRAMO
	turnirBaza: Turnir; //ISTI TURNIR KAO GORNJI ALI ID-OVIMA UMESTO NAZIVA


	minDatum = Date.now();


	//PROMENLJIVE KOJE CE SETOVATI VREDNOSTI POLJA PRI GENERISANJU KOMPONENTE
	selectedTipTurnira;
	selectedNaziv;
	//------------------------------------------------------------------------
	selectedPocetakPrijava;
	selectedKrajPrijava;
	selectedPocetakTurnira;
	selectedKrajTurnira;
	//------------------------------------------------------------------------
	selectedPocetakPrijavaSati;
	selectedKrajPrijavaSati;
	selectedPocetakTurniraSati;
	selectedKrajTurniraSati;
	//-----------------------------------------------------------------------
	selectedPocetakPrijavaMinuti;
	selectedKrajPrijavaMinuti;
	selectedPocetakTurniraMinuti;
	selectedKrajTurniraMinuti;
	//-----------------------------------------------------------------------
	//---DATUMI U SEKUNDAMA
	pocetakPrijvaSekunde;
	krajPrijavaSekunde;
	pocetakTurniraSekunde;
	krajTurniraSekunde;
	//-------------------------------------------------------------------------
	private datumPocetkaPrijava = new  FormControl('',[Validators.required,Validators.pattern('[0-9\.]{8,11}')]);
	private datumZavrsetkaPrijava = new  FormControl('',[Validators.required,Validators.pattern('[0-9\.]{8,11}')]);
	private datumPocetkaTurnira = new  FormControl('',[Validators.required,Validators.pattern('[0-9\.]{8,11}')]);
	private datumZavrsetkaTurnira = new  FormControl('',[Validators.required,Validators.pattern('[0-9\.]{8,11}')]);
	private nazivTurnira = new FormControl('',Validators.required);
	//------------------------------------------------------------------------
	proveraPocetakPrijava = false;
	proveraKrajPrijava = false;
	proveraPocetakTurnira = false;
	proveraKrajTurnira = false;
	//--------------------------------------------------------------------------
	igre: Igra[] = [];	//igre koje se uzimaju iz baze
	tipoviTurnira: TipTurnira[] = [];	//tipovi turnira koji se uzimaju iz baze

	ngOnInit() {
		this.turnir = this.data.turnir;

		this.selectedNaziv = this.turnir.nazivTurnira;

		this.selectedPocetakPrijava = new Date(this.turnir.pocetakPrijava * 1000);
		this.selectedKrajPrijava = new Date(this.turnir.krajPrijava * 1000);
		this.selectedPocetakTurnira = new Date(this.turnir.datumVremePocetka * 1000);
		this.selectedKrajTurnira = new Date(this.turnir.datumVremeZavrsetka * 1000);
		//-------------------------------------------------------------------------
		if(this.selectedPocetakPrijava >= Date.now())
		{
			this.proveraPocetakPrijava = true;
		}
		if(this.selectedKrajPrijava >= Date.now())
		{
			this.proveraKrajPrijava = true;
		}
		if(this.selectedPocetakTurnira >= Date.now())
		{
			this.proveraPocetakTurnira = true;
		}
		if(this.selectedKrajTurnira >= Date.now())
		{
			this.proveraKrajTurnira = true;
		}
		//--------------------------------------------------------------------------
		this.selectedPocetakPrijavaSati = this.selectedPocetakPrijava.getHours().toString();
		this.selectedKrajPrijavaSati = this.selectedKrajPrijava.getHours().toString();;
		this.selectedPocetakTurniraSati = this.selectedPocetakTurnira.getHours().toString();;
		this.selectedKrajTurniraSati = this.selectedKrajTurnira.getHours().toString();;
		//---------------------------------------------------------------------------
		this.selectedPocetakPrijavaMinuti = this.selectedPocetakPrijava.getMinutes().toString();
		this.selectedKrajPrijavaMinuti = this.selectedKrajPrijava.getMinutes().toString();
		this.selectedPocetakTurniraMinuti = this.selectedPocetakTurnira.getMinutes().toString();
		this.selectedKrajTurniraMinuti = this.selectedKrajTurnira.getMinutes().toString();
		//----------------------------------------------------------------------------
		this.adminService.DajSveIgre().subscribe(igre => this.igre = igre);
		this.adminService.DajTipoveTurnira().subscribe(tipoviTurnira => this.tipoviTurnira = tipoviTurnira);
		this.adminService.DajTurnirZaId(this.turnir.id).subscribe(turnir =>
		{
			this.turnirBaza = turnir;
			this.selectedTipTurnira = this.turnirBaza.idTipaTurnira.toString();

			//console.log(this.selectedTipTurnira);
		});


	}


	NaAzur():void
	{
		this.dialogRef.close();
	}


	AzurirajTurnir(): void{
		let azuriraniTurnir: Turnir = new Turnir();

		azuriraniTurnir.id = this.turnir.id;
		azuriraniTurnir.idTipaTurnira = parseInt(this.selectedTipTurnira);
		if(this.nazivTurnira.value == "")
		{
			azuriraniTurnir.naziv = this.selectedNaziv;
		}
		else
		{
			azuriraniTurnir.naziv = this.nazivTurnira.value;
			//console.log(azuriraniTurnir.naziv);
		}

		azuriraniTurnir.idIgre = this.turnirBaza.idIgre;

		////console.log(this.datumPocetkaPrijava.value);
		////console.log(this.selectedPocetakPrijava);
		if(this.datumPocetkaPrijava.value == "")	//POCETAK PRIJAVE
		{
			this.pocetakPrijvaSekunde = this.selectedPocetakPrijava.getTime() / 1000;
			this.pocetakPrijvaSekunde -= this.selectedPocetakPrijava.getHours() *3600;
			this.pocetakPrijvaSekunde -= this.selectedPocetakPrijava.getMinutes() * 60;
			this.pocetakPrijvaSekunde += this.selectedPocetakPrijavaSati * 3600 + this.selectedPocetakPrijavaMinuti * 60;
		}
		else
		{
			this.pocetakPrijvaSekunde = this.datumPocetkaPrijava.value.getTime() / 1000;
			this.pocetakPrijvaSekunde += this.selectedPocetakPrijavaSati * 3600 + this.selectedPocetakPrijavaMinuti * 60;
		}

		//-------------------------------------------------------
		if(this.datumZavrsetkaPrijava.value == "")	//KRAJ PRIJAVE
		{
			this.krajPrijavaSekunde = this.selectedKrajPrijava.getTime() / 1000;
			this.krajPrijavaSekunde -= this.selectedKrajPrijava.getHours() * 3600;
			this.krajPrijavaSekunde -= this.selectedKrajPrijava.getMinutes() * 60;
			this.krajPrijavaSekunde += this.selectedKrajPrijavaSati * 3600 + this.selectedKrajPrijavaMinuti * 60;
		}
		else
		{
			this.krajPrijavaSekunde = this.datumZavrsetkaPrijava.value.getTime() / 1000;
			this.krajPrijavaSekunde += this.selectedKrajPrijavaSati * 3600 + this.selectedKrajPrijavaMinuti * 60;
		}
		//----------------------------------------------------------
		if(this.datumPocetkaTurnira.value == "")	//POCETAK TURNIRA
		{
			this.pocetakTurniraSekunde = this.selectedPocetakTurnira.getTime() / 1000;
			this.pocetakTurniraSekunde -= this.selectedPocetakTurnira.getHours() * 3600;
			this.pocetakTurniraSekunde -= this.selectedPocetakTurnira.getMinutes() * 60;
			this.pocetakTurniraSekunde += this.selectedPocetakTurniraSati * 3600 + this.selectedPocetakTurniraMinuti * 60;
		}
		else
		{
			this.pocetakTurniraSekunde = this.datumPocetkaTurnira.value.getTime() / 1000;
			this.pocetakTurniraSekunde += this.selectedPocetakTurniraSati * 3600 + this.selectedPocetakTurniraMinuti * 60;
		}

		//------------------------------------------------------------------
		if(this.datumZavrsetkaTurnira.value == "")	//KRAJ TURNIRA
		{
			this.krajTurniraSekunde = this.selectedKrajTurnira.getTime() / 1000;
			this.krajTurniraSekunde -= this.selectedKrajTurnira.getHours() * 3600;
			this.krajTurniraSekunde -= this.selectedKrajTurnira.getMinutes() * 60;
			this.krajTurniraSekunde += this.selectedKrajTurniraSati * 3600 + this.selectedKrajTurniraMinuti * 60;
		}
		else
		{
			this.krajTurniraSekunde = this.datumZavrsetkaTurnira.value.getTime() / 1000;
			//console.log(this.krajTurniraSekunde);
			//console.log(this.datumZavrsetkaTurnira.value);
			this.krajTurniraSekunde += this.selectedKrajTurniraSati * 3600 + this.selectedKrajTurniraMinuti * 60;
		}

		//----------------------------------------------------------------------

		azuriraniTurnir.pocetakPrijava = this.pocetakPrijvaSekunde;
		azuriraniTurnir.krajPrijava = this.krajPrijavaSekunde;
		azuriraniTurnir.datumVremePocetka = this.pocetakTurniraSekunde;
		azuriraniTurnir.datumVremeZavrsetka = this.krajTurniraSekunde;

		////console.log(azuriraniTurnir);
		/*if(this.selectedPocetakPrijava > this.pocetakPrijvaSekunde || this.selectedKrajPrijava > this.krajPrijavaSekunde || this.selectedPocetakTurnira > this.pocetakTurniraSekunde || this.selectedKrajTurnira > this.krajTurniraSekunde)
		{
			this.openSnackBar("NE MOŽETE IZABRATI DATUM MANJI OD TRENUTNOG!","");
			swal({
          type: 'error',
          title: 'GREŠKA: Ne možete izabrati datum manji od trenutnog!'
        });
		}
		else */if(this.pocetakPrijvaSekunde < this.krajPrijavaSekunde &&
			this.krajPrijavaSekunde < this.pocetakTurniraSekunde &&
			this.pocetakTurniraSekunde < this.krajTurniraSekunde)
		{
			this.adminService.AzurirajTurnir(azuriraniTurnir).subscribe();
		}
		else
		{
			//this.openSnackBar("LOŠE IZABRANI DATUMI!","");
      swal({
        type: 'error',
        title: 'Loše izabrani datumi!'
      });
		}

	}

}
