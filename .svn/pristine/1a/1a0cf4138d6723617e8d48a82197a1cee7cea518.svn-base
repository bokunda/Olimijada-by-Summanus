import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../servisi/auth.service';
import {Korisnik} from '../../modeli/Korisnik';
import {KorisnikService} from '../../servisi/korisnik.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import swal from "sweetalert2";
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-sidebar-profil',
    templateUrl: './sidebar-profil.component.html',
    styleUrls: ['./sidebar-profil.component.css']
})
export class SidebarProfilComponent implements OnInit
{
    @Input() prijavljen: boolean;
    @Output() nakonOdjave = new EventEmitter<boolean>();

	korisnik: Korisnik = new Korisnik();
	slikaAvatara;

	darkModeLocal = false;
	cekiran = false;

    constructor(
        public authService: AuthService,
		public korisnikService: KorisnikService,
		public translate: TranslateService,
        public router: Router,
        public cookieService: CookieService
    )
    {
    }

    ngOnInit()
    {
        if(localStorage.getItem('tema') == null)
        {
            localStorage.setItem('tema', 'light');
            this.cekiran = false;
        }
        else if(localStorage.getItem('tema') == 'light')
        {
            this.cekiran = false;
        }
        else if(localStorage.getItem('tema') == 'dark')
        {
            this.PromeniTemu();
        }

        this.prijavljen = true;

        let username = localStorage.getItem('username');

        this.korisnikService.UzmiPodatkeOKorisniku(username).subscribe(odg =>
        {
			this.korisnik = odg;
			this.slikaAvatara = environment.serverUrl+'upload/slike/'+this.korisnik.urlSlike;
		});

		this.korisnikService.promenaSlike.subscribe((nazivSlike)=>
		{
			this.slikaAvatara = environment.serverUrl+'upload/slike/'+nazivSlike;
		})
    }

    Odjava(): void
    {
		// promenjen redosled (bilo prvo odjavi, pa emit pa replace)
		//window.location.replace('/');
        this.router.navigate(['/pocetna']);
		this.authService.Odjavi();
        this.nakonOdjave.emit(true);

        if(this.cookieService.get("language") == 'sr')
        {
            swal({
                type: 'success',
                title: 'Uspešno ste se odjavili!',
                showConfirmButton: false,
                timer: 2600
            });
        }
        else
        {
            swal({
                type: 'success',
                title: 'Logged out successfully!',
                showConfirmButton: false,
                timer: 2600
            });
        }

    }

    PromeniTemu(): void
    {

        if(localStorage.getItem('tema') == 'light')
        {
            localStorage.setItem('tema', 'dark');
        }
        else
        {
            localStorage.setItem('tema', 'light');
        }

        if(this.cekiran == false)
        {
            this.cekiran = true;
            this.darkModeLocal = true;
        }
        else
        {
            this.cekiran = false;
            this.darkModeLocal = false;
        }

        this.korisnikService.temaPromenjena.emit(this.cekiran);

        console.log(this.cekiran);

    }




}
