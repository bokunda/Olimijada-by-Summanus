import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import {FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
//import { PasswordValidator } from '../password-validator.directive';
import { AuthService } from '../../servisi/auth.service';
import { Admin } from '../../modeli/Admin';
import {MatSnackBar} from '@angular/material';
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
    private snackBar: MatSnackBar
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
		return (this.email.hasError('email') && !this.email.hasError('required')) ? "Email nije validan": "";
	}

	GreskaPasswordPonovo(): string
	{
		////console.log(this.passwordPonovo.value);
		////console.log(this.password.value);
		return this.passwordPonovo.hasError('Password') ? "Lozinke se ne poklapaju" : "aaa";
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
			//console.log("submitovano");
			let admin: Admin = new Admin();
			admin.username = this.username.value;
			admin.password = this.password.value;
			admin.email = this.email.value;

			var odgovor;

			this.adminService.RegistrujAdmina(admin).subscribe(odg =>
			{
				if (odg.status == 1)
				{
					swal({
						type: 'success',
						title: 'Uspešno ste dodali novog admina!',
						showConfirmButton: false,
						timer: 2600
					  });
					  this.zauzeto = false;
				}
				else if (odg.status == -1)
				{
					swal({
						type: 'error',
						title: 'GREŠKA: Pokušajte ponovo!'
					  });
					  this.zauzeto = false;
				}
				else
				{
					this.zauzeto = true;
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

	}


}
