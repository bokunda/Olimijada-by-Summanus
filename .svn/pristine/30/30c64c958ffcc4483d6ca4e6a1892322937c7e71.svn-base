import {Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Bot} from '../../modeli/Bot';
import {Validators, FormControl} from '@angular/forms';
import {Igra} from '../../modeli/Igra';
import {BotService} from '../../servisi/bot.service';
import {IgraService} from '../../servisi/igra.service';
import {MatSnackBar} from '@angular/material';
import swal from "sweetalert2";

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
        public snackBar: MatSnackBar
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

                    swal({
                        type: 'error',
                        title: 'GREŠKA: Bot nije dodat!'
                    });

				}
				else if (odgovor.status === 0)
				{
					swal({
                        type: 'info',
						title: 'Bot sa ovim imenom već postoji!',
						timer: 2600,
						showConfirmButton: false
                    });
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
                    swal({
                        type: 'success',
                        title: 'Bot uspešno dodat!',
                        showConfirmButton: false,
                        timer: 2600
                    });

                }
            });
		}
		else if (this.fajlZaUpload.size > 6000000)
		{
			swal ({
				type: 'error',
				title: 'Datoteka koju ste izabrali je prevelika! Izaberite drugu.'
			})
		}
        else
        {
            this.nijeOdabranFajl = true;
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
        return this.nazivBota.hasError("required") ? "Polje za naziv bota ne može biti prazno!" : this.nazivBota.hasError("pattern") ? "Naziv bota može da sadrži samo slova, brojeve i donju crticu!" : "";
    }
}
