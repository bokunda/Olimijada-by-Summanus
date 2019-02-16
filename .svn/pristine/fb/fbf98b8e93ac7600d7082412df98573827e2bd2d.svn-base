import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistracijaComponent } from './komponente/registracija/registracija.component';
import { HeaderComponent } from './komponente/header/header.component';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './moduli/app-routing.module';
import { AdminService } from './servisi/admin.service';
import { StatistikaService } from './servisi/statistika.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { PrijavaComponent } from './komponente/prijava/prijava.component';
import { TurniriComponent } from './komponente/turniri/turniri.component';

import { MaterialkomponenteModule } from './moduli/materialkomponente.module';
import { AuthService } from './servisi/auth.service';
import { AuthGuardService } from './servisi/auth-guard.service';
import { PravilaService } from './servisi/pravila.service';
import { KreiranjeIgaraComponent } from './komponente/kreiranje-igara/kreiranje-igara.component';
import { PrikazTurniraComponent } from './komponente/prikaz-turnira/prikaz-turnira.component';

import { DatePipe } from '@angular/common';

import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MyDateAdapter } from './komponente/turniri/turniri.component';
import { DateAdapter } from '@angular/material/core';
import { Strana404Component } from './komponente/strana-404/strana-404.component';
import { AzurirajTurnirComponent } from './komponente/azuriraj-turnir/azuriraj-turnir.component';
import { PrikazKorisnikaComponent } from './komponente/prikaz-korisnika/prikaz-korisnika.component';
import { BanovanjeComponent } from './komponente/banovanje/banovanje.component';
import { PrikazMecevaZaTurnirComponent } from './komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component';
import { FaqComponent } from './komponente/faq/faq.component';
import { PrikazIgaraComponent } from './komponente/prikaz-igara/prikaz-igara.component';
import { PotvrdaComponent } from './komponente/potvrda/potvrda.component';
import { PrikazPrijavaComponent } from './komponente/prikaz-prijava/prikaz-prijava.component';
import { AzurirajFaqComponent } from './komponente/azuriraj-faq/azuriraj-faq.component';
import { PrikazAdminaComponent } from './komponente/prikaz-admina/prikaz-admina.component';
import { IgreComponent } from './komponente/igre/igre.component';
import { IzmenaIgaraComponent } from './komponente/izmena-igara/izmena-igara.component';
import { ZaTurnireComponent } from './komponente/za-turnire/za-turnire.component';
import { InterceptorService } from './servisi/interceptor.service';
import { KreiranjeTimskeIgreComponent } from './komponente/kreiranje-timske-igre/kreiranje-timske-igre.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { KalendarComponent } from './komponente/kalendar/kalendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BotoviPoMesecimaComponent } from './komponente/chartovi/botovi-po-mesecima/botovi-po-mesecima.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './komponente/dashboard/dashboard.component';
import { UkupnoStatistikaComponent } from './komponente/chartovi/ukupno-statistika/ukupno-statistika.component';
import { KorisniciPoMesecimaComponent } from './komponente/chartovi/korisnici-po-mesecima/korisnici-po-mesecima.component';
import { MeceviPoMesecimaComponent } from './komponente/chartovi/mecevi-po-mesecima/mecevi-po-mesecima.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new TranslateHttpLoader(httpClient, './assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    HeaderComponent,
    PocetnaComponent,
    PrijavaComponent,
    TurniriComponent,
    KreiranjeIgaraComponent,
    PrikazTurniraComponent,
	AzurirajTurnirComponent,
	PrikazKorisnikaComponent,
	BanovanjeComponent,
	PrikazMecevaZaTurnirComponent,
	FaqComponent,
	PrikazIgaraComponent,
	PotvrdaComponent,
	PrikazPrijavaComponent,
	Strana404Component,
	AzurirajFaqComponent,
	PrikazAdminaComponent,
	IgreComponent,
	ZaTurnireComponent,
	KreiranjeTimskeIgreComponent,
	IzmenaIgaraComponent,
	KalendarComponent,
	BotoviPoMesecimaComponent,
	DashboardComponent,
	UkupnoStatistikaComponent,
	KorisniciPoMesecimaComponent,
	MeceviPoMesecimaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
	AppRoutingModule,
	FullCalendarModule,
    NgxChartsModule,
	MaterialkomponenteModule,
	NgxEditorModule,
	AngularFontAwesomeModule,
	TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient]
		}
	})
  ],
  providers: [CookieService ,AuthService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: InterceptorService,
		multi: true
	},
	AdminService,  AuthGuardService, StatistikaService, PravilaService, DatePipe, {provide: DateAdapter, useClass: MyDateAdapter} ],
  bootstrap: [AppComponent],
  entryComponents: [AzurirajTurnirComponent, BanovanjeComponent, PotvrdaComponent, IzmenaIgaraComponent, PrikazPrijavaComponent, AzurirajFaqComponent]
})
export class AppModule { }
