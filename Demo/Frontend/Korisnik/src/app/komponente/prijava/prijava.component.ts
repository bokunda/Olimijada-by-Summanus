import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { KorisnikService } from '../../servisi/korisnik.service';
import { AuthService } from '../../servisi/auth.service';
import { Korisnik } from '../../modeli/Korisnik';
import swal from 'sweetalert2';
import { MatTooltipModule } from '@angular/material/tooltip';

import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-prijava',
	templateUrl: './prijava.component.html',
	styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit
{
	@Output() nakonPrijave = new EventEmitter<boolean>();
	verif = new FormControl('');
	username2 = new FormControl('',[Validators.required]);
    username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{1,10}'), Validators.maxLength(10)]);
    password = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9\ \.\!\?\#\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}')]);
	pogresno: boolean;
	usernameForgot;
	mailForgot;
	nijeUnetUsername;
	pozicija = "below";

	indikator = false;
	kod = "";

	prikaziInputZaKod: boolean = false;
	usernameZaVerifikaciju: string;
	//kod = new FormControl('', [Validators.required]);

	constructor(public korisnikService: KorisnikService, public authService: AuthService,public translate: TranslateService,
		private cookieService: CookieService)
	{
	}

	ngOnInit()
	{
		this.pogresno = false;
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
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'error',
							title: 'Pogrešno korisničko ime i/ili lozinka!'
						})
					}
					else
					{
						swal({
							type: 'error',
							title: 'Wrong username or password!'
						})
					}
				}
				else if (odg.status == -2)
				{
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'error',
							title: 'Banovani ste'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'You are banned'
						});
					}
					
				}
				else if (odg.status == -3)
				{
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							title: 'Link za verifikaciju Vam je poslat na navedenu email adresu!'
						});
					}
					else
					{
						swal({
							title: 'A verification link has been sent to the email address!'
						});
					}
					

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
			if(this.verif.value == this.kod)
			{
				this.usernameForgot = this.username.value;
				this.korisnikService.ZaboraviliSteLozinku(this.usernameForgot).subscribe(odg =>
				{
					if (odg != -1)
					{
						if(this.cookieService.get("language") == 'sr')
						{
							swal({
								type: 'success',
								title: 'Nova lozinka vam je poslata na mail'
							});
						}
						else
						{
							swal({
								type: 'success',
								title: 'A new password has been sent to your e-mail address'
							});
						}
						
					}
				});
			}
			else if(this.verif.value == "")
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'Morate uneti verifikacioni kod!'
					});
				}
				else
				{
					swal({
						type: 'error',
						title: 'You must enter verification code!'
					});
				}
				
			}
			else
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'Verifikacioni kod nije validan!'
					});
				}
				else
				{
					swal({
						type: 'error',
						title: 'Verification code is not valid!'
					});
				}
				
			}

			
		}
		else
		{
			if(this.cookieService.get("language") == 'sr')
			{
				swal({
					type: 'error',
					title: 'Morate uneti korisničko ime!'
				})
			}
			else
			{
				swal({
					type: 'error',
					title: 'You must enter a username!'
				})
			}
			
		}

		return false;
	}

	GenerisiPolje()
	{
		if (this.username.valid)
		{
			this.indikator = true;
		
			var korisnik = this.username.value;
	
			for(var i = 0; i < 7; i++)
			{
				var pom = Math.floor((Math.random() * 9) + 1);
				this.kod += pom;
	
				if(this.kod.length == 7)
				{
					//console.log("kod: " + this.kod);
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'success',
							title: 'Verifikacioni kod vam je poslat na mejl'
						});
					}
					else
					{
						swal({
							type: 'success',
							title: 'Verification code has been sent to your e-mail address'
						});
					}
					
					this.korisnikService.PosaljiMailZaReset(korisnik,this.kod).subscribe();
				}
			}
		}
		else
		{
			if(this.cookieService.get("language") == 'sr')
			{
				swal({
					type: 'error',
					title: 'Morate uneti korisničko ime!'
				})
			}
			else
			{
				swal({
					type: 'error',
					title: 'You must enter a username!'
				})
			}
		}

		return false;
	}
}
