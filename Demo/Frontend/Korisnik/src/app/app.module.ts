import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './moduli/app-routing.module';
import { HeaderComponent } from './komponente/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { ONamaComponent } from './komponente/o-nama/o-nama.component';
import { RegistracijaComponent } from './komponente/registracija/registracija.component';
import { KorisnikService } from './servisi/korisnik.service';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { PasswordValidatorDirective } from './password-validator.directive';
import { PrijavaComponent } from './komponente/prijava/prijava.component';
import { ProfilComponent } from './komponente/profil/profil.component';
import { SidebarProfilComponent } from './komponente/sidebar-profil/sidebar-profil.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { IzmenaProfilaComponent } from './komponente/izmena-profila/izmena-profila.component';
import { MaterialkomponenteModule } from './moduli/materialkomponente.module';
import { AuthService } from './servisi/auth.service';
import { AuthGuardService } from './servisi/auth-guard.service';
import { DodavanjeBotaComponent } from './komponente/dodavanje-bota/dodavanje-bota.component';
import { BotService } from './servisi/bot.service';
import { IgraService } from './servisi/igra.service';
import { PrikazBotovaComponent } from './komponente/prikaz-botova/prikaz-botova.component';
import { BotoviComponent } from './komponente/botovi/botovi.component';
import { PristupComponent } from './komponente/pristup/pristup.component';
import { PotvrdaComponent } from './komponente/potvrda/potvrda.component';
import { IgreComponent } from './komponente/igre/igre.component';
import { PrikazTurniraComponent } from './komponente/prikaz-turnira/prikaz-turnira.component';
import { PrikazMecevaComponent } from './komponente/prikaz-meceva/prikaz-meceva.component';
import { TurnirService } from './servisi/turnir.service';
import { StatistikaService } from './servisi/statistika.service';
import { RezultatiTurniraComponent } from './komponente/rezultati-turnira/rezultati-turnira.component';
import { PrenosUtakmiceComponent } from './komponente/prenos-utakmice/prenos-utakmice.component';
import { DodavanjeBotaZaDatuIgruComponent } from './komponente/dodavanje-bota-za-datu-igru/dodavanje-bota-za-datu-igru.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { PrijavaNaTurnirComponent } from './komponente/prijava-na-turnir/prijava-na-turnir.component';
import { PrikazKorisnikaComponent } from './komponente/prikaz-korisnika/prikaz-korisnika.component';
import { FaqComponent } from './komponente/faq/faq.component';
import { Strana404Component } from './komponente/strana-404/strana-404.component';
import { ArhivaUtakmicaComponent } from './komponente/arhiva-utakmica/arhiva-utakmica.component';
import { VatrometComponent } from './komponente/vatromet/vatromet.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servisi/interceptor.service';
import { VerifikacijaMejlaComponent } from './komponente/verifikacija-mejla/verifikacija-mejla.component';
import { KreiranjeTimovaComponent } from './komponente/kreiranje-timova/kreiranje-timova.component';
import { NapraviTimComponent } from './komponente/napravi-tim/napravi-tim.component';
import {TimServisService} from './servisi/tim-servis.service';

import { CookieService } from 'ngx-cookie-service';

import { FullCalendarModule } from 'ng-fullcalendar';

import { CalendarModule } from 'angular-calendar';
import { EventService } from './servisi/event.service';
import { TurnirTempRankComponent } from './komponente/turnir-temp-rank/turnir-temp-rank.component';
import { IgraTempRankComponent } from './komponente/igra-temp-rank/igra-temp-rank.component';
import { PrikazTimovaComponent } from './komponente/prikaz-timova/prikaz-timova.component';
import { TimoviComponent } from './komponente/timovi/timovi.component';
import { PobedePoraziComponent } from './komponente/chartovi/pobede-porazi/pobede-porazi.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CrtanjeKupaComponent } from './komponente/crtanje-kupa/crtanje-kupa.component';
import { PlayerListComponent } from './komponente/crtanje-kupa-pom/player-list/player-list.component';
import { FixtureTabComponent } from './komponente/crtanje-kupa-pom/fixture-tab/fixture-tab.component';
import { FixtureComponent } from './komponente/crtanje-kupa-pom/fixture/fixture.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ShareButtonModule } from '@ngx-share/button';
import { MeceviTurniraComponent } from './komponente/mecevi-turnira/mecevi-turnira.component';
export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient, './assets/i18n/','.json');
}

@NgModule({
    declarations: [
        AppComponent,
        ONamaComponent,
        HeaderComponent,
        PocetnaComponent,
        RegistracijaComponent,
        PasswordValidatorDirective,
        PrijavaComponent,
        ProfilComponent,
		IzmenaProfilaComponent,
		SidebarProfilComponent,
		DodavanjeBotaComponent,
		PrikazBotovaComponent,
		BotoviComponent,
		PristupComponent,
		PotvrdaComponent,
		IgreComponent,
		PrikazTurniraComponent,
		PrikazMecevaComponent,
		RezultatiTurniraComponent,
		PrenosUtakmiceComponent,
		DodavanjeBotaZaDatuIgruComponent,
		PrijavaNaTurnirComponent,
		PrikazKorisnikaComponent,
		FaqComponent,
		ArhivaUtakmicaComponent,
		VatrometComponent,
		VerifikacijaMejlaComponent,
		KreiranjeTimovaComponent,
		Strana404Component,
		NapraviTimComponent,
		TurnirTempRankComponent,
		IgraTempRankComponent,
		PrikazTimovaComponent,
		TimoviComponent,
		PobedePoraziComponent,
		CrtanjeKupaComponent,
		PlayerListComponent,
		FixtureTabComponent,
		FixtureComponent,
		MeceviTurniraComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
		HttpClientModule,
		FullCalendarModule,
		Ng2GoogleChartsModule,
		CalendarModule.forRoot(),
        MaterialkomponenteModule,
        NgxChartsModule,
		NgxCarouselModule,
        HttpClientModule,
        ShareButtonModule.forRoot(),
        ScrollToModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
			  provide: TranslateLoader,
			  useFactory: HttpLoaderFactory,
			  deps: [HttpClient]
			}
		  })
    ],
	providers: [AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true
		}, AuthGuardService, KorisnikService, BotService, IgraService, TurnirService, StatistikaService, EventService, CookieService, TimServisService  ],
	bootstrap: [AppComponent],
	entryComponents: [PotvrdaComponent, DodavanjeBotaComponent, Strana404Component, DodavanjeBotaZaDatuIgruComponent, PrijavaNaTurnirComponent, RezultatiTurniraComponent, MeceviTurniraComponent]
})
export class AppModule {}
