import {Component, HostListener, OnInit} from '@angular/core';
import {Korisnik} from '../../modeli/Korisnik';
import {KorisnikService} from '../../servisi/korisnik.service';
import {AuthService} from '../../servisi/auth.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import swal from "sweetalert2";
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import {StatistikaService} from '../../servisi/statistika.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit
{
    izmeni = false;
    username;
	korisnik = new Korisnik();
	slikaAvatara;

    pieChartData;

    smeUpload: boolean;

    brPobeda;
    brPoraza;

    ruta;

    constructor(
        public authService: AuthService,
        public korisnikService: KorisnikService,
		public dialog: MatDialog,
		public translate: TranslateService,
		private cookieService: CookieService,
        public statistikaService: StatistikaService
    ) { }

    ngOnInit() {

        this.ruta = environment.serverUrl;

        let str = '' + window.location.href;
        if( (str.substring(str.lastIndexOf('/') + 1) == localStorage.getItem('username') ) || (str.substring(str.lastIndexOf('/') + 1) == 'profil') )
        {
            this.smeUpload = true;
        }
        else
        {
            this.smeUpload = false;
        }

        // kreiram parser i pokupim iz url-a da li gadjam nekog konkretnog korisnika
        // izvucem username ukoliko postoji
        // ukoliko ne gledam svoj profil, nemam opciju izmeni, u suprotnom imam

        var parser = document.createElement('a');
        parser.href = window.location.href;
        var res = parser.pathname.slice(8, 30);

        if((res.length > 3) && (res != localStorage.getItem('username')) )
        {
            this.username = res;
            this.izmeni = false;
        }
        else
        {
            this.username = localStorage.getItem('username')
            this.izmeni = true;
        }

        this.korisnikService.UzmiPodatkeOKorisniku(this.username).subscribe(odg =>
        {
			this.korisnik = odg;
			this.slikaAvatara = environment.serverUrl+'upload/slike/'+this.korisnik.urlSlike;

            this.statistikaService.UkupanBrojPobedaKorisnika('' + this.username).subscribe( odgPob =>
            {
               this.brPobeda = odgPob;
            });

            this.statistikaService.UkupanBrojPorazaKorisnika('' + this.username).subscribe( odgPor =>
            {
               this.brPoraza = odgPor;
            });
        });



	}

	Odjava(): void
    {
      this.authService.Odjavi();
      //this.nakonOdjave.emit(true);
      window.location.replace('/');
    }


	ObrisiNalog(): void
	{
		let dialogRef = null;

		if(this.cookieService.get("language") == 'sr')
		{
			dialogRef = this.dialog.open(PotvrdaComponent, {
				width: '400px',
				data: {

					poruka: "Da li ste sigurni da želite da deaktivirate Vaš nalog? Nalog se automatski aktivira prilikom sledećeg prijavljivanja na sajt!"
				}
			});
		}
		else
		{
			dialogRef = this.dialog.open(PotvrdaComponent, {
				width: '400px',
				data: {

					poruka: "Are you sure you want to deactivate your account? The account is automatically activated when you next sign up to the site!"
				}
			});
		}


		dialogRef.afterClosed().subscribe(odgovor =>
			{
				//console.log((odgovor);

				var username = localStorage.getItem("username");

				if (odgovor == 1)
				{
					this.korisnikService.ObrisiNalog(username).subscribe(odg =>
					{
						let poruka;

						if (odg == 1)
						{
							//this.botovi = this.botovi.filter(bot => bot.id != idBota);

							if(this.cookieService.get("language") == 'sr')
							{
								poruka = "Nalog je obrisan!";
							}
							else
							{
								poruka = "Your account has been deleted!";
							}

							if(this.cookieService.get("language") == 'sr')
							{
								swal({
									type: 'success',
									title: 'Uspešno ste deaktivirali Vaš nalog!',
									showConfirmButton: false,
									timer: 2600
								});
							}
							else
							{
								swal({
									type: 'success',
									title: 'You have successfully deactivated your account!',
									showConfirmButton: false,
									timer: 2600
								});
							}


							setTimeout(this.Odjava(), 2600);
						}
						else
						{
							//console.log(("Nastala je greska");
							if(this.cookieService.get("language") == 'sr')
							{
								poruka = "Nastala je greška";
								swal({
									type: 'error',
									title: 'GREŠKA: Nalog nije deaktiviran!'
								});
							}
							else
							{
								poruka = "Nastala je greška";
								swal({
									type: 'error',
									title: 'ERROR: The account is not deactivated!'
								});
							}

						}

					});


				}

			});
	}

    AzurirajSliku(event): void
    {
        //console.log((event.target);

        this.korisnikService.AzurirajSlikuKorisnika(event.target.files[0]).subscribe(odgovor =>
        {
            //odgovor je ili ekstenzija slike ili -1 ukoliko slika ne postoji.
            if(odgovor != -1)
            {
				this.slikaAvatara = environment.serverUrl+ 'upload/slike/' + this.korisnik.username + odgovor;
				this.korisnikService.promenaSlike.emit(this.korisnik.username+odgovor);
            }
            else
            {
				this.slikaAvatara = environment.serverUrl+'upload/slike/podrazumevani_avatar.jpg';
				this.korisnikService.promenaSlike.emit('podrazumevani_avatar.jpg');
            }
        });
    }

    @HostListener('window:resize')
    sakrij(): boolean
    {
        if(window.innerWidth < 900)
        {
            return true;
        }

        return false;
    }
}
