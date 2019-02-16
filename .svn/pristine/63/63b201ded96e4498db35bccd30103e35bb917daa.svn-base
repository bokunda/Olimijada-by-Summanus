import {Component, NgModule, OnInit, ViewChild, HostListener} from '@angular/core';
import {FormControl, FormControlDirective, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ONamaComponent} from '../o-nama/o-nama.component';
import { PrikazTurniraComponent } from '../prikaz-turnira/prikaz-turnira.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from '../../app.component';
import {AppRoutingModule} from '../../moduli/app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {PocetnaComponent} from '../pocetna/pocetna.component';
import {KorisnikService} from '../../servisi/korisnik.service';
import {Korisnik} from '../../modeli/Korisnik';
import {MatSidenav} from '@angular/material';
import {Router, RouterEvent, NavigationStart, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatRadioModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
		PocetnaComponent,
		KorisnikService
    ],
    providers: [],
    bootstrap: [AppComponent]
})

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

	cookieValue = 'UNKNOWN';
    jezik = 'SRB';
	private languageInCookie;
	slikaAvatara;

    prijavljen: boolean = false;
    mode = new FormControl('over');
	username;
	sakritiSidebar = false;

	//selected = "sr";

	korisnik = new Korisnik();
	//prethodni;

	ruta;

	darkMode = false;
	bojaPozadina = 'white';
	slikaPozadina = environment.serverUrl + 'upload/slike/pozadina.png';

    @ViewChild('sidenav') public myNav: MatSidenav;

    constructor
    (
        public korisnikService: KorisnikService,
		public router: Router,
		public translate: TranslateService,
		private cookieService: CookieService

    ) {



		this.languageInCookie = this.cookieService.get("language");
		if (this.languageInCookie == "") {
			this.cookieService.set("language", 'sr', 30);
			////console.log("fvhajdkjasjfbjsfjsjfkd");
			this.translate.setDefaultLang('sr');
		  this.languageInCookie = 'sr';
		}

		if (this.languageInCookie != 'en' && this.languageInCookie != 'sr')
		{
			this.cookieService.set("language", 'sr', 30);
			this.languageInCookie = 'sr';
			this.translate.use('sr');
			//this.cookieService.set('language',this.prethodni,5);
			//this.languageInCookie = this.prethodni;
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

		//const browserLang = translate.getBrowserLang();
		//translate.use(browserLang.match(/en|sr/) ? browserLang : 'en');


  }

	changeLang(lang: string) {
		/*this.prethodni = this.translate.currentLang;
		this.translate.use(lang);
		//if(lang == "sr") this.translate.currentLang = "sr";
		//else this.translate.currentLang = "en";
		this.cookieService.delete("language");
		this.cookieService.set("language", lang, 30);
		this.languageInCookie = lang;
		if(lang == 'en')
			this.jezik = 'ENG';
		else
			this.jezik = 'SRB';*/
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
        /*
        if(localStorage.getItem('tema') == null)
        {
            localStorage.setItem('tema', 'light');
        }
        else if(localStorage.getItem('tema') == 'light')
        {

        }
        else if(localStorage.getItem('tema') == 'dark')
        {
            this.korisnikService.temaPromenjena.emit(true);
        }
        */
	    this.korisnikService.temaPromenjena.subscribe(odg =>
            {
                if(this.darkMode == false)
                {
                    this.darkMode = true;
                    this.bojaPozadina = '#282828';
                    this.slikaPozadina = environment.serverUrl + 'upload/slike/pozadina_dark.png';
                }
                else
                {
                    this.darkMode = false;
                    this.bojaPozadina = 'white';
                    this.slikaPozadina = environment.serverUrl + 'upload/slike/pozadina.png';
                }
            });



        // pretplaceni smo na promenu url-a, kada je /prijava, sakriti sidebar
        this.router.events.subscribe((res) =>
        {
			if (res instanceof RouterEvent)
			{
				if(res.url == '/prijava')
				{
					this.sakritiSidebar = true;
					this.myNav.close();
					this.prijavljen = false;
				}
				else
				{
					this.username = localStorage.getItem("username");
					//console.log("prijavljen");

					if (this.username != null && this.prijavljen == false)
					{
						this.prijavljen = true;
						this.korisnikService.UzmiPodatkeOKorisniku(this.username).subscribe(odg =>
						{
							//console.log("uzeo podatke o korisniku");
							//console.log("odg: " + odg + " " + odg.username);
							this.korisnik.username = odg.username;
							this.korisnik.urlSlike = odg.urlSlike;
							this.slikaAvatara = environment.serverUrl+'upload/slike/'+this.korisnik.urlSlike;
							//console.log(this.username + " " + this.korisnik.urlSlike);
						});
						//console.log(this.username);
					}

                    if(window.innerWidth < 900)
                    {
                        this.myNav.close();
                    }
                    else
                    {
                        this.myNav.open();
                    }
				}
			}

			this.korisnikService.promenaSlike.subscribe((nazivSlike)=>
			{
				/*
				this.korisnikService.UzmiNazivSlikeKorisnika().subscribe(odg =>
				{
					this.korisnik.urlSlike = odg;
					this.slikaAvatara = environment.serverUrl+'upload/slike/'+this.korisnik.urlSlike;
				});
				*/

				this.slikaAvatara = environment.serverUrl+'upload/slike/'+nazivSlike;
			});

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

        this.router.events.subscribe((event) => {

            if(event) {

				let pom:string;

                if(event instanceof NavigationEnd )//&& urlAfterRedirect != undefined)
                {

					pom = '' + this.router.url;

					if(pom == '/')
					{
						pom = '/pocetna';
					}

					//console.log(environment.serverUrl);

					//console.log(environment.serverUrl == 'http://localhost:8081/');

					if(('' + environment.serverUrl) == 'http://localhost:8081/')
					{
						this.ruta = 'http://localhost:4200/';
					}

					if(('' + environment.serverUrl) == 'http://147.91.204.116:11000/')
					{
						this.ruta = 'http://147.91.204.116:11002/';
					}



					this.ruta += pom.substring(1, 100);
				}

            }
        });


	}

    @HostListener('window:resize')
    ResponsiveSidenav(): void
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

    ZatvoriUslovnoSidebar(): void
    {
        if(window.innerWidth < 900)
        {
            this.myNav.close();
        }
    }

	NakonPrijave(prijavljen: boolean): void
	{
		this.prijavljen = prijavljen;

	}

	NakonOdjave(odjavljen: boolean): void
	{
		this.prijavljen = !odjavljen;
	}



}
