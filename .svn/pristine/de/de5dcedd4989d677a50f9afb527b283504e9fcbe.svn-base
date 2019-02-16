import { Component, OnInit, Inject } from '@angular/core';
import { BotService } from '../../servisi/bot.service';
import { ModelZaPrijavuNaTurnir } from '../../modeli/ModelZaPrijavuNaTurnir';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { MatDialog } from '@angular/material';
import {DodavanjeBotaZaDatuIgruComponent} from '../dodavanje-bota-za-datu-igru/dodavanje-bota-za-datu-igru.component';
import { IgraService } from '../../servisi/igra.service';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-prijava-na-turnir',
  templateUrl: './prijava-na-turnir.component.html',
  styleUrls: ['./prijava-na-turnir.component.css']
})
export class PrijavaNaTurnirComponent implements OnInit {

	constructor(public botService: BotService,
		public igraService: IgraService,

		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialog: MatDialog,
		public dialogRef: MatDialogRef<PrijavaNaTurnirComponent>,
		public translate: TranslateService,
		private cookieService: CookieService) { }

	botovi: any[] = [];
	turnir : any;
	prijave: any[] = [];
	indikator = 0;	//pokazatelj da li je korisnik vec prijavljen ili ne

	botSelect = new FormControl('',[Validators.required]);

	indikatorPrijave;
	porukaKadPrijavaNijeAktivna;

	timskaIgra = false;

	ngOnInit() {
		/*this.botService.UzmiBotoveKorisnika().subscribe(botovi =>
		{
			this.botovi = botovi;
			//console.log((botovi);
		});*/
		this.turnir = this.data.turnir;
		this.igraService.UzmiPodatkeOIgri(this.turnir.idIgre).subscribe(igra =>
		{
			if (igra.timska == 1)
			{
				this.timskaIgra = true;
			}
			else
			{
				this.timskaIgra = false;
			}
		});

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
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'Prijava nije počela!'
					});
				}
				else
				{
					swal({
						type: 'error',
						title: 'Registration has not started!'
					});
				}

			}
			else if(Date.now()/1000 > this.turnir.krajPrijava)
			{
				//this.porukaKadPrijavaNijeAktivna = "Prijave su zavrsene";
				this.dialogRef.close();
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'Prijave su završene!'
					});
				}
				else
				{
					swal({
						type: 'error',
						title: 'Registrations are closed!'
					});
				}

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

		if(this.botSelect.value == "" || this.botSelect.value == "novododatibot")
		{
			if(this.cookieService.get("language") == 'sr')
			{
				swal({
					type: 'error',
					title: 'GREŠKA: Niste izabrali bota!'
				});
			}
			else
			{
				swal({
					type: 'error',
					title: 'ERROR: You did not select a bot!'
				});
			}

		}
		else
		{
			console.log("bot: " + this.botSelect.value);
			this.botService.PrijavuKorisnikaZaTurnir(modelZaPrijavu).subscribe(odg=>
				{
					if (odg == -1)
					{
						if(this.cookieService.get("language") == 'sr')
						{
							swal({
								type: 'error',
								title: 'GREŠKA: Prijava nije poslata!'
							});
						}
						else
						{
							swal({
								type: 'error',
								title: 'GREŠKA: Registration not sent!'
							});
						}

					}
					else
					{
						if(this.cookieService.get("language") == 'sr')
						{
							swal({
								type: 'success',
								title: 'Uspešno ste se prijavili!',
								showConfirmButton: false,
								timer: 2600
							});
						}
						else
						{
							swal({
								type: 'success',
								title: 'Registration sent successfully!',
								showConfirmButton: false,
								timer: 2600
							});
						}


						this.dialogRef.close();
					}
				});
		}


	}

	OtkaziPrijavu(): void
	{
		//let modelZaPrijavu: ModelZaPrijavuNaTurnir = new ModelZaPrijavuNaTurnir();

		//modelZaPrijavu.usernameKorisnika = localStorage.getItem("username");

		this.botService.OtkaziPrijavu(this.turnir.id).subscribe(odg =>
		{

			if (odg == -1)
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'GREŠKA: Prijava nije poslata!'
					});
				}
				else
				{
					swal({
						type: 'error',
						title: 'ERROR: Registration not sent!'
					});
				}

			}
			else
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'success',
						title: 'Uspešno ste otkazali prijavu!',
						showConfirmButton: false,
						timer: 2600
					});
				}
				else
				{
					swal({
						type: 'success',
						title: 'You successfully canceled the registration!',
						showConfirmButton: false,
						timer: 2600
					});
				}

				this.indikator = 0;
				this.dialogRef.close();
			}
		});

	}

	/*dialogDodajBota(): void
    {
        let dialogRef = this.dialog.open(DodavanjeBotaZaDatuIgruComponent, {
            width: '600px',
            data: {
                idIgre: 3
            }
		});

		dialogRef.afterClosed().subscribe(bot =>
		{


		});

    }*/

	zatvori():void
	{
		this.dialogRef.close();
	}

	dialogDodajBota(): void
    {
        let dialogRef = this.dialog.open(DodavanjeBotaZaDatuIgruComponent, {
            width: '600px',
            data: {
                idIgre: Number(this.turnir.idIgre)
            }
		});

		dialogRef.afterClosed().subscribe(bot =>
		{
			//this.nizBotova.filter(b => b.id != bot.id);
			// javi preko servisa da se promenilo
			console.log(bot);


			if (bot != undefined || bot != null)
			{

				this.botService.UzmiTimZaBota(bot.id).subscribe(tim =>
					{
						if (tim != 0 && tim != -1)
						{
							this.botovi.push(tim);
							this.botSelect.setValue(tim.id);
						}
						else
						{
							if(this.cookieService.get("language") == 'sr')
							{
								swal({
									type: 'error',
									title: 'GREŠKA: Pokušajte ponovo!'
								})
							}
							else
							{
								swal({
									type: 'error',
									title: 'ERROR: Try again later!'
								})
							}

						}

					}
				);

			}
			else
			{
				this.botSelect.setValue('');
			}

		});

    }

    krajStringa(naziv: string)
    {
        if(naziv.lastIndexOf('.') > 0)
        {
            return naziv.lastIndexOf(('.'));
        }

        return 1991;
    }


}
