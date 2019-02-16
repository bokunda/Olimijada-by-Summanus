import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {KorisnikService} from '../../servisi/korisnik.service';
import {Router} from '@angular/router';
import {Korisnik} from '../../modeli/Korisnik';
import {AuthService} from '../../servisi/auth.service';
import {MatSnackBar} from '@angular/material';
import swal from "sweetalert2";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-izmena-profila',
  templateUrl: './izmena-profila.component.html',
  styleUrls: ['./izmena-profila.component.css']
})
export class IzmenaProfilaComponent implements OnInit {

	public korisnik: Korisnik = new Korisnik();

    email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]);
    username = new FormControl('');
    korisnickoIme = localStorage.getItem('username');
    ime = new FormControl('',[Validators.pattern('[a-zA-Z0-9\ \u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}')]);
    prezime = new FormControl('',[Validators.pattern('[a-zA-Z0-9\ \u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}')]);
    password = new FormControl('', [Validators.minLength(8),Validators.pattern('[a-zA-Z0-9\ \. \! \?]{1,}')]);
    passwordPonovo = new FormControl('', [Validators.minLength(8),Validators.pattern('[a-zA-Z0-9\ \. \! \?]{1,}')]);
    poklapanje: boolean;
    poklapanjeIspis;
    poklapanjeFlag = false;
	zauzeto: boolean;

	@Output() promenjenaSlika = new EventEmitter<any>();

    postojiSlika;
    slikaAvatara;



    uspesno = 0;
    neuspesno = 0;

    constructor
    (
        public router: Router,
        public authService: AuthService,
        public korisnikService: KorisnikService,
        public snackBar: MatSnackBar
        /*public dialog: MatDialog*/
        ) { }

    ngOnInit() {

        this.zauzeto = false;

        this.korisnikService.UzmiPodatkeOKorisniku(this.korisnickoIme).subscribe(odg =>
        {
			this.korisnik = odg;
			this.username.setValue(this.korisnik.username);
            this.ime.setValue(this.korisnik.ime);
            this.prezime.setValue(this.korisnik.prezime);
			this.email.setValue(this.korisnik.email);

			this.slikaAvatara = environment.serverUrl + 'upload/slike/'+this.korisnik.urlSlike;
        });
    }

    openSnackBar(message: string, action: string)
    {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    GreskaMail(): string
    {
        return (this.email.hasError('email') && !this.email.hasError('required')) ? "Email nije validan": "";
    }

    GreskaPasswordPonovo(): string
    {
        return this.passwordPonovo.hasError('Password') ? "Lozinke se ne poklapaju" : "aaa";
    }

    PoklapanjePassworda(): void
    {
        this.poklapanje = (this.password.value === this.passwordPonovo.value);

        if(this.poklapanje == true)
        {
            this.poklapanjeIspis = 'Lozinke se poklapaju!';
            this.poklapanjeFlag = true;
        }

        if(this.poklapanje == false)
        {
            this.poklapanjeIspis = 'Lozinke se ne poklapaju!';
            this.poklapanjeFlag = false;
        }
    }

    AzurirajSliku(event): void
    {
        ////////console.log(((((event.target);

        this.korisnikService.AzurirajSlikuKorisnika(event.target.files[0]).subscribe(odgovor =>
        {
			//odgovor je ili ekstenzija slike ili -1 ukoliko slika ne postoji.
			////////console.log(((((odgovor);
            if(odgovor != -1)
            {
				this.slikaAvatara = environment.serverUrl+'upload/slike/' + this.korisnik.username + odgovor;
				this.korisnikService.promenaSlike.emit(this.korisnik.username+odgovor);
            }
            else
            {
				this.slikaAvatara = environment.serverUrl+'upload/slike/podrazumevani_avatar.jpg';
				this.korisnikService.promenaSlike.emit('podrazumevani_avatar.jpg');
			}


        });
    }

    IzmenaKorisnika(): void
    {
        if (this.email.valid)
        {

            //////console.log(((("submitovano");
            var korisnik = new Korisnik();

            korisnik.username = this.username.value;
            korisnik.ime = this.ime.value;
            korisnik.prezime = this.prezime.value;
            korisnik.email = this.email.value;
            korisnik.password = this.password.value;

            var odgovor;

            this.korisnikService.IzmeniKorisnika(korisnik).subscribe(odg =>
            {
                //////console.log((((odg);
                if (odg.status == 1)
                {
                    localStorage.setItem("token",odg.token);
                    this.uspesno = 1;
                    // this.openSnackBar("Profil je uspešno ažuriran!", "");
                    swal({
                        type: 'success',
                        title: 'Profil je uspešno ažuriran!',
                        showConfirmButton: false,
                        timer: 2600
                    });

                    // redirekcija na pocetnu stranu kada se registruje

                }
                else if (odg.status == 0)
                {
                    // ispisi da je zauzeto ime (nece da radi ngIf u mat-error-u)
                    this.neuspesno = 1;
                    // this.openSnackBar("Došlo je do greške, profil nije ažuriran!", "");
                    swal({
                        type: 'error',
                        title: 'GREŠKA: Profil nije ažuriran!'
                    });

                }
                else
                {
                    this.neuspesno = 1;
                    // this.openSnackBar("Došlo je do greške, profil nije ažuriran!", "");
                    swal({
                        type: 'error',
                        title: 'GREŠKA: Profil nije ažuriran!'
                    });

                    // otvori neki prozor koji ce da obavesti da je doslo do greske
                }
            });

        }

    }

    ResetovanjeForme(): void
    {
        this.password.reset();
        this.passwordPonovo.reset();
        this.email.reset();
    }

}
