import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {KorisnikService} from './servisi/korisnik.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  darkMode = false;
  tema = "";

  constructor(private translate: TranslateService, private korisnikService: KorisnikService, private cookieService: CookieService){}

  ngOnInit(){
	  /*if(this.translate.currentLang == "en")
	  this.translate.use("en");
	  else
	  this.translate.use("sr");*/

	  this.korisnikService.temaPromenjena.subscribe(odg =>
      {

          if(this.darkMode == false)
          {
              this.darkMode = true;
              this.tema = "alternative";
          }
          else
          {
              this.darkMode = false;
              this.tema = "";
          }
      });
  }

}
