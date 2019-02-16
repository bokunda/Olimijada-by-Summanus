import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes, ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { PesmeComponent } from './pesme/pesme.component';
import { PlejlisteComponent } from './plejliste/plejliste.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServerService } from './server.service';


@NgModule({
  declarations: [
    AppComponent,
    PesmeComponent,
    PlejlisteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [ 
	ServerService 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
