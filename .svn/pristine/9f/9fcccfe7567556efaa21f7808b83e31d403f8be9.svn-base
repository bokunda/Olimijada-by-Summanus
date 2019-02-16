import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KorisnikService } from '../../servisi/korisnik.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../password-validator.directive';
import { Korisnik } from '../../modeli/Korisnik';
import { AuthService } from '../../servisi/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
	@Output() nakonPrijave  = new EventEmitter<boolean>();
	email2 = new FormControl('',[Validators.required]);
	email = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")]);
	username = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{1,10}"), Validators.maxLength(10)]);
	password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9\ \.\!\?\#]{1,}')]);
	passwordPonovo = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9\ \.\!\?\#]{1,}')]);
    poklapanje: boolean;
    poklapanjeIspis;
    poklapanjeFlag = false;
	korisnickoZauzeto: boolean;
	emailZauzet: boolean;
	

	usernameZaVerifikaciju: string = null;
	kod = new FormControl('', [ Validators.required]);
	prikaziInputZaKod: boolean = false;

	constructor(
        public korisnikService: KorisnikService,
        public router: Router,
        public authService: AuthService
	) { }

	ngOnInit() {
		this.korisnickoZauzeto = false;
		this.emailZauzet = false;
	}

	GreskaMail(): string
	{
		return (!this.email.hasError('required') && (this.email.hasError('email')|| this.email.hasError('pattern'))) ? "Email nije validan": "";
	}

	// ispis poruke ukoliko << username >> nije ispravan
	greskaUsername(): string
	{
		////console.log((this.username.hasError("pattern") +"");
		return this.username.hasError("required") ? "Polje za korisničko ime ne može biti prazno!" : this.username.hasError("pattern") ? "Dozvoljeno je korišćenje samo slova, brojeva i tački!" : "";
	}

	GreskaPasswordPonovo(): string
	{
		////console.log((this.passwordPonovo.value);
		////console.log((this.password.value);
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

	VerifikacijaKoda(): void
	{
		if (this.kod.valid)
		{

			this.korisnikService.AktivirajNalog(this.kod.value,this.usernameZaVerifikaciju).subscribe(odg =>
			{
				if (odg.status == 1)
				{
					this.authService.Prijavi(odg);

					this.nakonPrijave.emit(true);
				}
				else if (odg.status == 0)
				{
					this.korisnickoZauzeto = true;
				}
				else
				{
					// otvori neki prozor koji ce da obavesti da je doslo do greske
				}


			})

		}
	}

	RegistracijaKorisnika(): void
	{

		if (this.email.valid && this.password.valid && this.passwordPonovo.valid && this.username.valid && this.email2.value == "")
		{
			//console.log(("submitovano");
			let korisnik: Korisnik = new Korisnik();
			korisnik.username = this.username.value;
			korisnik.password = this.password.value;
			korisnik.email = this.email.value;

			var odgovor;

			this.korisnikService.RegistrujKorisnika(korisnik).subscribe(odg =>
			{
				this.emailZauzet = false;
				this.korisnickoZauzeto = false;
				if (odg.status == 1)
				{
					this.usernameZaVerifikaciju = this.username.value;
					swal({
                        title: 'Link za verifikaciju Vam je poslat na navedenu email adresu!'
					});

					this.prikaziInputZaKod = true;
				}
				else if (odg.status == -1)
				{
					swal({
                        type: 'error',
                        title: 'GREŠKA: Pokušajte ponovo!'
                    });
				}
				else if (odg.status == -3)
				{
					this.prikaziInputZaKod = true;
					swal({
                        type: 'success',
                        title: 'Verifikacioni kod vam je poslat na navedenu email adresu!',
                        showConfirmButton: false,
                        timer: 2600
					});
				}
				else if (odg.status == 0)
				{
					swal({
                        type: 'error',
                        title: 'Korisničko ime je zauzeto! Izaberite drugo.'
					});
				}
				else if (odg.status == -4)
				{
					

					swal({
                        type: 'error',
                        title: 'Email adresa je zauzeta! Unesite drugu.'
					});
				}
				/*
				//console.log((odg);
				if (odg.status == 1)
				{
					this.authService.Prijavi(odg);
					// redirekcija na pocetnu stranu kada se registruje
					this.nakonPrijave.emit(true);
				}
				else if (odg.status == 0)
				{
					// ispisi da je zauzeto ime (nece da radi ngIf u mat-error-u)
				}
				else
				{
					// otvori neki prozor koji ce da obavesti da je doslo do greske
				}
				*/

			});


		}

	}

	ResetovanjeForme(): void
	{
		this.username.reset();
		this.password.reset();
		this.passwordPonovo.reset();
		this.email.reset();
		this.emailZauzet = false;
		this.korisnickoZauzeto = false;
	}
}
