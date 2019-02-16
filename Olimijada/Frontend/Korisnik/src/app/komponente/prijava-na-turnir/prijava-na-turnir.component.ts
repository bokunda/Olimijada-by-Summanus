import { Component, OnInit, Inject } from '@angular/core';
import { BotService } from '../../servisi/bot.service';
import { ModelZaPrijavuNaTurnir } from '../../modeli/ModelZaPrijavuNaTurnir';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-prijava-na-turnir',
  templateUrl: './prijava-na-turnir.component.html',
  styleUrls: ['./prijava-na-turnir.component.css']
})
export class PrijavaNaTurnirComponent implements OnInit {

	constructor(public botService: BotService,

		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<PrijavaNaTurnirComponent>) { }

	botovi: any[] = [];
	turnir : any;
	prijave: any[] = [];
	indikator = 0;	//pokazatelj da li je korisnik vec prijavljen ili ne

	botSelect = new FormControl('',[Validators.required]);

	indikatorPrijave;
	porukaKadPrijavaNijeAktivna;

	ngOnInit() {
		/*this.botService.UzmiBotoveKorisnika().subscribe(botovi =>
		{
			this.botovi = botovi;
			//console.log((botovi);
		});*/
		this.turnir = this.data.turnir;
		this.botService.DajSvePrijaveZaTurnir(this.turnir.id).subscribe(prijave =>
		{
			//console.log(prijave);
			this.prijave = prijave;
			for(var i = 0; i < this.prijave.length; i++)
			{
				//console.log((prijave[i]);
				if(prijave[i].usernameKorisnika == localStorage.getItem("username"))
				{
					this.indikator = 1;
					break;
				}
			}
		});

		if(Date.now()/1000 >= this.turnir.pocetakPrijava && Date.now()/1000 <= this.turnir.krajPrijava)
		{
			this.indikatorPrijave = true;
		}
		else
		{
			this.indikatorPrijave = false;
			if(Date.now()/1000 < this.turnir.pocetakPrijava)
			{
				//this.porukaKadPrijavaNijeAktivna = "Prijava nije pocela";
				this.dialogRef.close();
				swal({
					type: 'error',
					title: 'Prijava nije počela!'
				});
			}
			else if(Date.now()/1000 > this.turnir.krajPrijava)
			{
				//this.porukaKadPrijavaNijeAktivna = "Prijave su zavrsene";
				this.dialogRef.close();
				swal({
					type: 'error',
					title: 'Prijave su završene!'
				});
			}
		}

		this.botService.UzmiTimoveKorisnikaZaIgru(this.turnir.idIgre).subscribe(botovi =>
		{
			this.botovi = botovi;
			//console.log((botovi);
		});


	}

	PrijaviSe(): void
	{
		let modelZaPrijavu: ModelZaPrijavuNaTurnir = new ModelZaPrijavuNaTurnir();

		modelZaPrijavu.datumVremePrijave = Math.floor(Date.now() / 1000);
		//console.log((this.botSelect.value);
        modelZaPrijavu.idTima = this.botSelect.value;

        modelZaPrijavu.usernameKorisnika = localStorage.getItem("username");
		modelZaPrijavu.idTurnira = this.turnir.id;

		if(this.botSelect.value == "")
		{
			swal({
				type: 'error',
				title: 'GREŠKA: Niste izabrali bota!'
			});
		}
		else
		{
			this.botService.PrijavuKorisnikaZaTurnir(modelZaPrijavu).subscribe(odg=>
				{
					if (odg == -1)
					{
						swal({
							type: 'error',
							title: 'GREŠKA: Prijava nije poslata!'
						});
					}
					else
					{
						swal({
							type: 'success',
							title: 'Uspešno ste se prijavili!',
							showConfirmButton: false,
							timer: 2600
						});

						this.dialogRef.close();
					}
				});
		}


	}

	OtkaziPrijavu(): void
	{
		let modelZaPrijavu: ModelZaPrijavuNaTurnir = new ModelZaPrijavuNaTurnir();

		modelZaPrijavu.usernameKorisnika = localStorage.getItem("username");

		this.botService.OtkaziPrijavu(modelZaPrijavu).subscribe(odg =>
		{
			if (odg == -1)
			{
				swal({
					type: 'error',
					title: 'GREŠKA: Prijava nije poslata!'
				});
			}
			else
			{
				swal({
					type: 'success',
					title: 'Uspešno ste otkazali prijavu!',
					showConfirmButton: false,
					timer: 2600
				});
				this.indikator = 0;
				this.dialogRef.close();
			}
		});

	}

	zatvori():void
	{
		this.dialogRef.close();
	}


}
