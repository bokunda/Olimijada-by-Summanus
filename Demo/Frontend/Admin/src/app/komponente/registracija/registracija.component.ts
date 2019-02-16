import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import {FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
//import { PasswordValidator } from '../password-validator.directive';
import { AuthService } from '../../servisi/auth.service';
import { Admin } from '../../modeli/Admin';
import {MatSnackBar} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import swal from "sweetalert2";

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);
	username = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required, Validators.minLength(8)]);
	passwordPonovo = new FormControl('', [Validators.required, Validators.minLength(8)]);
	poklapanje: boolean;
	zauzeto: boolean;

	constructor(
		private adminService: AdminService,
		private router: Router,
		private authService: AuthService,
		private snackBar: MatSnackBar,
		public translate: TranslateService,
		private cookieService: CookieService
  ) { }

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

	ngOnInit() {
		this.zauzeto = false;
	}

	GreskaMail(): string
	{
		return (this.email.hasError('email') && !this.email.hasError('required')) ? this.cookieService.get("language") == "sr" ? "Email nije validan" : "Email is not valid" : "";
	}

	GreskaPasswordPonovo(): string
	{
		return this.passwordPonovo.hasError('Password') ? this.cookieService.get("language") == "sr" ? "Lozinke se ne poklapaju" : "Passwords do not match" : "";
	}

	PoklapanjePassworda(): void
	{
		//console.log(this.password.value);
		//console.log(this.passwordPonovo.value);
		//console.log(this.poklapanje = (this.password.value === this.passwordPonovo.value));
	}

	RegistracijaAdmina(): void
	{
		if (this.email.valid && this.password.valid && this.username.valid)
		{
			let admin: Admin = new Admin();
			admin.username = this.username.value;
			admin.password = this.password.value;
			admin.email = this.email.value;

			var odgovor;

			this.adminService.RegistrujAdmina(admin).subscribe(odg =>
			{
				//console.log(odg);
				if (odg.status == 1)
				{
					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'success',
							title: 'Uspešno ste dodali novog admina!',
							showConfirmButton: false,
							timer: 2600
						});
					}
					else
					{
						swal({
							type: 'success',
							title: 'New admin has been successfully added!',
							showConfirmButton: false,
							timer: 2600
						});
					}

					admin.id = odg.id;
					this.adminService.dodatAdmin.emit(admin);
					this.zauzeto = false;
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

					this.zauzeto = false;
				}
				else
				{
					this.zauzeto = true;

					if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'error',
							title: 'Korisničko ime/email adresa su u upotrebi!'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'Username/email address are already in use!'
						});
					}

				}
			});
			/*
			this.korisnikService.RegistrujKorisnika(korisnik).subscribe(odg =>
			{
				//console.log(odg.status);
				if (odg.status === "ok")
				{
					// ako se uspesno registrovao
          this.openSnackBar('Uspešno ste dodali novog admina!', '');
          swal({
          type: 'success',
          title: 'Uspešno ste dodali novog admina!',
          showConfirmButton: false,
          timer: 2600
        });
				}
				else if (odg.status === "postoji")
				{
					// ispisi da je zauzeto ime (nece da radi ngIf u mat-error-u)
          this.openSnackBar('GREŠKA: Već postoji admin sa tim imenom!', '');
          swal({
          type: 'error',
          title: 'GREŠKA: Već postoji admin sa tim korisničkim imenom!'
        });
				}
				else
				{
					// otvori neki prozor koji ce da obavesti da je doslo do greske
          //this.openSnackBar('GREŠKA: Nije moguće dodati admina!', '');
          swal({
          type: 'GREŠKA: Nije moguće dodati admina!',
          title: 'Turnir je uspešno kreiran!'
          });
				}
			});
		*/
		}
		else
		{
			if (this.cookieService.get("language") == "sr")
					{
						swal({
							type: 'error',
							title: 'Podaci nisu validni!'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'Data is not valid!'
						});
					}

		}
	}
}	