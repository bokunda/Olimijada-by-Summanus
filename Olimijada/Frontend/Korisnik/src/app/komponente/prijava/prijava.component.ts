import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { KorisnikService } from '../../servisi/korisnik.service';
import { AuthService } from '../../servisi/auth.service';
import { Korisnik } from '../../modeli/Korisnik';
import swal from 'sweetalert2';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-prijava',
	templateUrl: './prijava.component.html',
	styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit
{
	@Output() nakonPrijave = new EventEmitter<boolean>();

	username2 = new FormControl('',[Validators.required]);
    username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{1,10}'), Validators.maxLength(10)]);
    password = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9\ \.\!\?\#\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}')]);
	pogresno: boolean;
	usernameForgot;
	mailForgot;
	nijeUnetUsername;
	pozicija = "below";

	prikaziInputZaKod: boolean = false;
	usernameZaVerifikaciju: string;
	kod = new FormControl('', [Validators.required]);

	constructor(public korisnikService: KorisnikService, public authService: AuthService)
	{
	}

	ngOnInit()
	{
		this.pogresno = false;
	}

	VerifikacijaKoda(): void
	{
		if (this.kod.valid)
		{

			this.korisnikService.AktivirajNalog(this.kod.value, this.usernameZaVerifikaciju).subscribe(odg =>
			{
				if (odg.status == 1)
				{
					this.authService.Prijavi(odg);

					this.nakonPrijave.emit(true);
				}
				else
				{
					// otvori neki prozor koji ce da obavesti da je doslo do greske
				}


			})

		}
	}

	PrijavaKorisnika(): void
	{
		if (this.password.valid && this.username.valid && this.username2.value == "")
		{
			//console.log(("submitovano");
			let korisnik: Korisnik = new Korisnik();
			korisnik.username = this.username.value;
			korisnik.password = this.password.value;


			this.usernameZaVerifikaciju = this.username.value;

			this.korisnikService.PrijaviKorisnika(korisnik).subscribe(odg =>
			{
				//console.log((odg);
				if (odg.status == 1)
				{
					this.authService.Prijavi(odg);
					// redirekcija na pocetnu stranu kada se uloguje
					this.nakonPrijave.emit(true);
					//console.log((odg);

				}
				else if (odg.status == 0)
				{
					this.ResetovanjeForme();
					swal({
						type: 'error',
						title: 'Pogrešno korisničko ime i/ili lozinka!'
					})
				}
				else if (odg.status == -2)
				{
					swal({
						type: 'error',
						title: 'Banovani ste'
					});
				}
				else if (odg.status == -3)
				{
					swal({
						title: 'Link za verifikaciju Vam je poslat na navedenu email adresu!'
					});

					this.prikaziInputZaKod = true;

				}
				else
				{
					this.ResetovanjeForme();
					
					// otvori neki prozor koji ce da obavesti da je doslo do greske
				}
			});


		}
	}

	ResetovanjeForme(): void
	{
		this.username.reset();
		this.password.reset();
		this.pogresno = false;

	}

	ZaboraviliSteLozinku()
	{
		if (this.username.valid)
		{
			this.usernameForgot = this.username.value;
			this.korisnikService.ZaboraviliSteLozinku(this.usernameForgot).subscribe(odg =>
			{
				if (odg != -1)
				{
					swal({
						type: 'success',
						title: 'Nova lozinka vam je poslata na mail'
					});
				}
			});
		}
		else
		{
			swal({
				type: 'error',
				title: 'Morate uneti korisničko ime!'
			})
		}

		return false;
	}
}
