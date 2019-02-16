import {Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Bot} from '../../modeli/Bot';
import {Validators, FormControl} from '@angular/forms';
import {Igra} from '../../modeli/Igra';
import {BotService} from '../../servisi/bot.service';
import {IgraService} from '../../servisi/igra.service';
import {MatSnackBar} from '@angular/material';
import swal from "sweetalert2";
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-dodavanje-bota',
    templateUrl: './dodavanje-bota.component.html',
    styleUrls: ['./dodavanje-bota.component.css']
})

export class DodavanjeBotaComponent implements OnInit
{
    @Output() nakonDodavanja = new EventEmitter<any>();
    @Input()  izabranaIgra: number;

    nazivBota = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9_\ \u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);
    odabranaIgra: number;
    igre: Igra[];
    uspesno: boolean;
    neuspesno: boolean;
    nijeOdabranFajl: boolean;
    fajlZaUpload: File;
    kontrolaZaIgru = new FormControl('', [Validators.required]);

    izabranaIgraZaPrikaz = null;

    openSnackBar(message: string, action: string)
    {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    constructor(
        public igraService: IgraService,
        public botService: BotService,
		public snackBar: MatSnackBar,
		public translate: TranslateService,
		private cookieService: CookieService
    )
    {
    }

    ngOnInit()
    {
		if (this.odabranaIgra != undefined && this.odabranaIgra != null)
		{
			//console.log("odarana");
			this.kontrolaZaIgru.disable();
		}

        this.igraService.DajSveIgre().subscribe(
            igre =>
            {
				if (igre != undefined && igre.length > 0)
				{
					this.igre = igre;
             		//console.log(this.igre);
				}
				else
				{
					this.igre = [];
					//console.log("greska");
				}

            }
		);

		/*
		this.botService.premasenaVelicina.subscribe(() =>
		{
			swal({
				type: 'error',
				titleText: 'Datoteka premašuje dozvoljenu veličinu'
			})
		});
		*/

        this.nijeOdabranFajl = false;
        this.fajlZaUpload = null;
        this.uspesno = false;
        this.neuspesno = false;

        if(this.izabranaIgra != undefined)
        {
            this.odabranaIgra = this.izabranaIgra;
			this.izabranaIgraZaPrikaz = this.izabranaIgra;
			this.kontrolaZaIgru.disable();
        }
    }

    DodajBota(): void
    {
		//console.log("dodaj bota");
        let bot: Bot = new Bot();
        bot.nazivFajla = this.nazivBota.value;
        bot.idIgre = this.odabranaIgra;

        if (this.fajlZaUpload != null && this.nazivBota.valid && this.fajlZaUpload.size <= 6000000)
        {

            this.botService.DodajBota(bot, this.fajlZaUpload).subscribe(odgovor =>
            {
                if (odgovor.status === -1)
                {

                    // modal za gresku
                    //console.log(odgovor);
                    this.neuspesno = true;
                    // this.openSnackBar('Greška: Bot nije dodat!', '');

					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'error',
							title: 'GREŠKA: Bot nije dodat!'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'ERROR: Bot was not added!'
						});
					}
				}
				else if (odgovor.status === 0)
				{
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'info',
							title: 'Bot sa ovim imenom već postoji!',
							timer: 2600,
							showConfirmButton: false
						});
					}
					else
					{
						swal({
							type: 'info',
							title: 'Bot with this name already exists!',
							timer: 2600,
							showConfirmButton: false
						});
					}
					
				}
				else if (odgovor.status === 1)
                {
                    // neki FENSI modal za potvrdu da je dodat
					//console.log("dodavanje-bota: dodat" +odgovor);

					//console.log(odgovor.bot);
					this.uspesno = true;
					//bot.id = odgovor.bot.id;
                    this.nakonDodavanja.emit(odgovor.bot);
					// this.openSnackBar('Bot uspešno dodat!', '');
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'success',
							title: 'Bot uspešno dodat!',
							showConfirmButton: false,
							timer: 2600
						});
					}
					else
					{
						swal({
							type: 'success',
							title: 'Bot added successfully!',
							showConfirmButton: false,
							timer: 2600
						});
					}
                    

                }
            });
		}
		else if (this.fajlZaUpload.size > 6000000)
		{
			if(this.cookieService.get("language") == 'sr')
					{
						swal ({
							type: 'error',
							title: 'Datoteka koju ste izabrali je prevelika! Izaberite drugu.'
						})
					}
					else
					{
						swal ({
							type: 'error',
							title: 'The file you selected is too large. Choose another one.'
						})
					}
			
		}
        else
        {
			this.nijeOdabranFajl = true;
			if(this.cookieService.get("language") == 'sr')
					{
						swal ({
							type: 'error',
							title: 'Morate uneti sve podatke!'
						})
					}
					else
					{
						swal ({
							type: 'error',
							title: 'Not enough data provided'
						})
					}

        }


    }

    PostaviFajl(event): void
    {
        //console.log(event);
        let files = event.target.files;

        if (files.length > 0)
        {
			this.fajlZaUpload = files[0];
        }
    }

    greskaNazivBota(): string
    {
		if(this.cookieService.get("language") == 'sr')
			return this.nazivBota.hasError("required") ? "Polje za naziv bota ne može biti prazno!" : this.nazivBota.hasError("pattern") ? "Naziv bota može da sadrži samo slova, brojeve i donju crticu!" : "";
		else
		return this.nazivBota.hasError("required") ? "The botname field can not be empty!" : this.nazivBota.hasError("pattern") ? "The name of the bot can contain only letters, numbers and a lower dash!" : "";
    }
}
