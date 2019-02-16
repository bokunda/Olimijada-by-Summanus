import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Igra} from '../../modeli/Igra';
import {IgraService} from '../../servisi/igra.service';
import {BotService} from '../../servisi/bot.service';
import {MatDialog} from '@angular/material';
import {Bot} from '../../modeli/Bot';
import {DodavanjeBotaZaDatuIgruComponent} from '../dodavanje-bota-za-datu-igru/dodavanje-bota-za-datu-igru.component';
import {TimServisService} from '../../servisi/tim-servis.service';
import {KorisnikService} from '../../servisi/korisnik.service';
import {Korisnik} from '../../modeli/Korisnik';
import swal from "sweetalert2";

@Component({
  selector: 'app-kreiranje-timova',
  templateUrl: './kreiranje-timova.component.html',
  styleUrls: ['./kreiranje-timova.component.css']
})
export class KreiranjeTimovaComponent implements OnInit
{

    FC_nazivTima = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);

    // pamtim ID odabrane igre
    FC_igra = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);

    FC_NizNazivaIgraca: FormControl[] = [];
    FC_NizBotova: FormControl[] = [];

    // predstavlja niz id-eva svih igri
    nizTimskih: number[] = [];
    nizIgre: Igra[] = [];
    nizTimske: Igra[] = [];

    nizIndeksaZaTimskuIgru: number[] = [];
    nizIndeksaBotova: number[] = [];
    nizBotova: Bot[] = [];
    nizIDBotova: number[] = [];

    nizIndeksUloga: string[] = [];

    // JSON iz tabele
    jsonOdabraneIgre;
    flagPokupioTimske = false;

    brojIgraca;
    brojUloga;

    constructor
    (
        public igreService: IgraService,
        public botService: BotService,
        public timService: TimServisService,
        public korisnikService: KorisnikService,
        public dialog: MatDialog
    ){}

    ngOnInit()
    {
        this.igreService.DajSveIgre().subscribe(odg =>
        {
           this.nizIgre = odg;

           let i;
           let br = 0;

           for(i = 0; i < this.nizIgre.length; i++)
           {
               if(this.nizIgre[i].timska == 1)
               {
                   this.nizTimske[br++] = this.nizIgre[i];
                   this.flagPokupioTimske = true;
               }
           }
        });
    }

    napraviJSON(): void
    {
        let jsonObjekat =
        {
            nazivTima: this.FC_nazivTima.value,
            idIgre: this.FC_igra.value,

            igracUloga: []
        };

		//console.log("napravi json" , this.FC_NizBotova[0].value);

        for(let i = 0; i < this.brojIgraca; i++)
        {
            jsonObjekat.igracUloga[i] = { nazivIgraca: this.FC_NizNazivaIgraca[i].value, idBota: this.FC_NizBotova[i].value/*this.nizIDBotova[i]*/, nazivUloge: this.nizIndeksUloga[i] };
        }

        this.korisnikService.UzmiPodatkeOKorisniku( localStorage.getItem('username') ).subscribe(odgUSR =>
        {
            //console.log((odgUSR.id);

            this.timService.DodajTim(odgUSR.id, this.FC_nazivTima.value, 'trebaSrediti.jbg', this.FC_igra.value, JSON.stringify(jsonObjekat), this.brojIgraca).subscribe(odg =>
            {
                // OVDE FENSI MODALI
				//console.log(odg);
                if(odg.status == 1)
                {
                    swal({
                        type: 'success',
                        title: 'Tim je uspešno kreiran!',
                        showConfirmButton: false,
                        timer: 2600
					});


					this.timService.timDodat.emit(odg.tim);
                }
                else
                {
                    swal({
                        type: 'error',
                        title: 'GREŠKA: Tim nije kreiran!'
                    });
                }

                //console.log((odg);
            });

        });
    }

    // vraca indeks u nizu timskih igara
    nadjiTimskuIgru(idIgre): number
    {
        let i;
        for(i = 0; i < this.nizIgre.length; i++)
        {
            if(this.nizTimske[i].id == idIgre)
            {
                return i;
            }
        }

        return -1;
    }

    // metoda kreira i niz indeksa za ngFor i niz formKontrola
    brojIgracaZaTimskuIgru(idIgre): number
    {
        /* RESETUJEM NIZOVE */

        this.nizIndeksUloga = [];
        this.nizIndeksaZaTimskuIgru = [];
        this.FC_NizNazivaIgraca = [];
        this.FC_NizBotova = [];
        this.nizBotova = [];
        this.nizIndeksaBotova = [];
        this.nizIDBotova = [];

        this.brojIgraca = Number(JSON.parse(this.nizTimske[idIgre].timskaUloge).brojIgraca);
        this.brojUloga = Number(JSON.parse(this.nizTimske[idIgre].timskaUloge).brojUloga);


        let pom, pomJ, br = 0;
        for(pom = 0; pom < this.brojUloga; pom++)
        {
            for(pomJ = 0; pomJ < Number(JSON.parse(this.nizTimske[idIgre].timskaUloge).uloge[pom].brojIgracaUloge); pomJ++)
            {
                this.nizIndeksUloga[br++] = '' + JSON.parse(this.nizTimske[idIgre].timskaUloge).uloge[pom].nazivUloge;
            }
        }

        let i = 0;
        for(i = 0; i < this.brojIgraca; i++)
        {
            this.nizIndeksaZaTimskuIgru[i] = i;
            this.FC_NizNazivaIgraca[i] = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);


            this.FC_NizBotova[i] = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);
        }

        // kupi sve botove za selektovanu igru
        this.botService.UzmiBotoveKorisnikaZaIgru(this.nizTimske[idIgre].id).subscribe(odg =>
        {
            this.nizBotova = odg;

            let k;

            for(k = 0; k < this.nizBotova.length; k++)
            {
                this.nizIDBotova[k] = Number(this.nizBotova[k].id);
                this.nizIndeksaBotova[k] = k;
            }
        });

        return this.brojIgraca;
    }

    srediNazivBota(nazivBota): string
    {
        let m = nazivBota.search('_');
		let n = nazivBota.lastIndexOf('.');
		//console.log(m,n);
        return nazivBota.substring(m + 1, n);
    }

    dialogDodajBota(indeksMatSelekta): void
    {
        let dialogRef = this.dialog.open(DodavanjeBotaZaDatuIgruComponent, {
            width: '600px',
            data: {
                idIgre: Number(this.FC_igra.value)
            }
		});

		dialogRef.afterClosed().subscribe(bot =>
		{
			//this.nizBotova.filter(b => b.id != bot.id);
			// javi preko servisa da se promenilo
			//console.log(bot);
			if (bot != undefined || bot != null)
			{
				this.nizBotova.push(bot);
				this.nizIDBotova[this.nizBotova.length-1] = Number(this.nizBotova[this.nizBotova.length-1].id);
				this.nizIndeksaBotova[this.nizBotova.length-1] = this.nizBotova.length-1;



				let nazivBota = this.srediNazivBota(bot.naziv);
				//console.log(nazivBota);

				this.FC_NizBotova[indeksMatSelekta].setValue(bot.id);

			}

		});

    }

}
