import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormControlDirective, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminService} from '../../servisi/admin.service';
import {AuthService} from '../../servisi/auth.service';
import {MatSidenav} from '@angular/material';
import {environment} from '../../../environments/environment';
import { Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{

	cookieValue = 'UNKNOWN';
    jezik = 'SRB';
	private languageInCookie;

    @Input() prijavljen: boolean;
    // @Output() nakonOdjave = new EventEmitter()<boolean>();
    @ViewChild('sidenav') public myNav: MatSidenav;

    mode = new FormControl('over');

    constructor
    (
		public authService: AuthService,
		private router: Router,
		public adminService: AdminService,
		public translate: TranslateService,
		private cookieService: CookieService
	)
	{
		this.languageInCookie = this.cookieService.get("language");
		if (this.languageInCookie == "") 
		{
			this.cookieService.set("language", 'sr', 30);
			this.translate.setDefaultLang('sr');
		    this.languageInCookie = 'sr';
		}		
		else if(this.languageInCookie != "en" && this.languageInCookie != "sr")
		{
			this.cookieService.set("language", 'sr', 30);
			this.languageInCookie = 'sr';
			//this.cookieService.set("language", this.translate.getDefaultLang(), 30);
			//this.languageInCookie = this.translate.getDefaultLang();
			this.translate.use('sr');
			//console.log(this.translate.getDefaultLang());
			
		}

		if(this.languageInCookie == "en")
		{
			this.jezik = 'ENG';
			this.translate.setDefaultLang('en');
		}
		else
		{
			this.jezik = 'SRB';
			this.translate.setDefaultLang('sr');
		}
			

		translate.addLangs(['en', 'sr']);
		//translate.setDefaultLang('sr');
		//console.log(this.languageInCookie);
		translate.use(this.languageInCookie);

	}

	changeLang(lang: string) {
		this.translate.use(lang);
		//if(lang == "sr") this.translate.currentLang = "sr";
		//else this.translate.currentLang = "en";
		this.cookieService.delete("language");
		this.cookieService.set("language", lang, 30);
		this.languageInCookie = lang;
		if(lang == 'en')
		{
			this.jezik = 'ENG';
			this.translate.setDefaultLang(lang);
		}
		else
		{
			this.jezik = 'SRB';
			this.translate.setDefaultLang(lang);
		}
			
	}

    ngOnInit()
    {
		this.router.events.subscribe((res) =>
        {
			if (res instanceof RouterEvent)
			{
				if(res.url == '/prijava')
				{
					this.myNav.close();
					this.prijavljen = false;
				}
				else
				{
					/* OVO MORA DA SE URADI KAD  BUDEMO IMALI ADMIN PROFIL
					this.username = localStorage.getItem("username");

					if (this.username != null && this.prijavljen == false)
					{
						this.prijavljen = true;
						this.adminService.UzmiPodatkeOKorisniku(this.username).subscribe(odg =>
						{
							//console.log("odg: " + odg + " " + odg.username);
							this.korisnik.username = odg.username;
							this.korisnik.urlSlike = odg.urlSlike;
							//console.log(this.username + " " + this.korisnik.urlSlike);
						});
						//console.log(this.username);
					}
					*/
				}
			}

			/*
            if(this.router.url == '/prijava')
            {
                this.sakritiSidebar = true;
                this.myNav.close();
			}
			else
			{
				this.username = localStorage.getItem("username")
				if (this.username != null)
				{
					this.prijavljen = true;
					this.korisnikService.UzmiPodatkeOKorisniku(this.username).subscribe(odg =>
					{
						//console.log("odg: " + odg + " " + odg.username);
						this.korisnik.username = odg.username;
						this.korisnik.urlSlike = odg.urlSlike;
						//console.log(this.username + " " + this.korisnik.urlSlike);
					});
					//console.log(this.username);
				}
			}
			*/
        })

		//console.log(environment.serverUrl);
		if(this.authService.DaLiJePrijavljen())
		{
			if(window.innerWidth < 900)
			{
			this.myNav.close();
			}
			else
			{
			this.myNav.open();
			}
		}
		else
		{
			this.myNav.close();
		}

    }

    @HostListener('window:resize')
    ResponsiveSidenav(): void
    {
      if(this.authService.DaLiJePrijavljen() == false || window.innerWidth < 900)
      {
        this.myNav.close();
        //console.log('close');
      }
      else
      {
        this.myNav.open();
        //console.log('open');
      }


    }

    Odjava(): void
    {
		  this.authService.Odjavi();
		  //this.nakonOdjave.emit(true);
		  //window.location.replace('/');
      this.router.navigate(['/']);
    }

    ZatvoriUslovnoSidebar(): void
    {
        if(window.innerWidth < 900)
        {
          this.myNav.close();
          //console.log('close');
        }
    }

}
