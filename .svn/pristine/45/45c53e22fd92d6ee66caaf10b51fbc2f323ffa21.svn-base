import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KorisnikService } from '../../servisi/korisnik.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../password-validator.directive';
import { Korisnik } from '../../modeli/Korisnik';
import { AuthService } from '../../servisi/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
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
	username = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]{1,10}"), Validators.minLength(4),Validators.maxLength(10)]);
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
		public authService: AuthService,
		public translate: TranslateService,
		public cookieService: CookieService
	) { }

	ngOnInit() {
		this.korisnickoZauzeto = false;
		this.emailZauzet = false;
	}

	GreskaMail(): string
	{
		return (!this.email.hasError('required') && (this.email.hasError('email')|| this.email.hasError('pattern'))) ? this.cookieService.get("language")=="sr" ?  "Email nije validan" : "Email is not valid" : "";
	}

	// ispis poruke ukoliko << username >> nije ispravan
	greskaUsername(): string
	{
		////console.log((this.username.hasError("pattern") +"");
		return this.username.hasError("required") ? "Polje za korisničko ime ne može biti prazno!" : this.username.hasError("pattern") ? this.cookieService.get("language")=="sr" ? "Dozvoljeno je korišćenje samo slova, brojeva i tački!" : "Letters, numbers and points are only allowed!" : "";
	}

	GreskaPasswordPonovo(): string
	{
		////console.log((this.passwordPonovo.value);
		////console.log((this.password.value);
		return this.passwordPonovo.hasError('Password') ? this.cookieService.get("language")=="sr" ? "Lozinke se ne poklapaju" : "Passwords do not match" : "";
	}

	PoklapanjePassworda(): void
	{
        this.poklapanje = (this.password.value === this.passwordPonovo.value);

        if(this.poklapanje == true)
        {
			if (this.cookieService.get("language") == "sr")
			{
				this.poklapanjeIspis = 'Lozinke se poklapaju!';
			}
			else
			{
				this.poklapanjeIspis = "Passwords match each other";
			}

            this.poklapanjeFlag = true;
        }

        if(this.poklapanje == false)
        {
			if (this.cookieService.get("language") == "sr")
			{
            	this.poklapanjeIspis = 'Lozinke se ne poklapaju!';
			}
			else
			{
				this.poklapanjeIspis = "Passwords do not match";
			}

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
					
					if (this.cookieService.get("language") == "sr")
					{
						swal({
                        	title: 'Link za verifikaciju Vam je poslat na navedenu email adresu!'
						});
					}
					else
					{
						swal({
							title: 'A link for verification have been sent to your email address!'
						});
					}

					this.prikaziInputZaKod = true;
				}
				else if (odg.status == -1)
				{
					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'error',
							title: 'GREŠKA: Pokušajte ponovo!'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'ERROR: Try again!'
						});
					}
				}
				else if (odg.status == -3)
				{
					this.prikaziInputZaKod = true;

					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'success',
							title: 'Verifikacioni kod vam je poslat na navedenu email adresu!',
							showConfirmButton: false,
							timer: 2600
						});
					}
					else
					{
						swal({
							type: 'success',
							title: 'Verification code have been sent to your email address!',
							showConfirmButton: false,
							timer: 2600
						});
					}
				}
				else if (odg.status == 0)
				{
					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'error',
							title: 'Korisničko ime je zauzeto! Izaberite drugo.'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'Username is already taken! Choose another one.'
						});
					}
				}
				else if (odg.status == -4)
				{
					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'error',
							title: 'Email adresa je zauzeta! Unesite drugu.'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'Email address is already taken! Choose another one.'
						});
					}
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
