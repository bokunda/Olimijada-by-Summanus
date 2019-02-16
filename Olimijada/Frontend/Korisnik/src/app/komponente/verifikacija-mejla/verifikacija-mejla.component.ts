import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../servisi/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { KorisnikService } from '../../servisi/korisnik.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-verifikacija-mejla',
  templateUrl: './verifikacija-mejla.component.html',
  styleUrls: ['./verifikacija-mejla.component.css']
})
export class VerifikacijaMejlaComponent implements OnInit {

	@Output() nakonPrijave  = new EventEmitter<boolean>();
	
	constructor(private authService: AuthService,
		private korisnikService: KorisnikService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) =>
		{
			if (params['hash'] != undefined)
			{
				this.korisnikService.AktivirajNalog(params['hash'],"").subscribe(odg =>
				{
					if (odg.status == 1)
					{
						this.authService.Prijavi(odg);
						this.router.navigate(['/prijava']);
						this.nakonPrijave.emit(true);
						swal( {
							type: 'success',
							title: 'Nalog je verifikovan!',
							showConfirmButton: false,
							timer: 2600
						})
					}
					else if (odg == -1)
					{
						this.router.navigate(['/prijava']);
						swal ({
							type: 'error',
							title: 'GREŠKA: Pokušajte ponovo!'
						})
					}
					else
					{
						this.router.navigate(['/prijava']);
						swal ({
							type: 'error',
							title: 'GREŠKA: Nalog je već verifikovan!'
						})
					}
					
				})
			}
			else
			{
				this.authService.Odjavi();
			}
		});
	}

}
