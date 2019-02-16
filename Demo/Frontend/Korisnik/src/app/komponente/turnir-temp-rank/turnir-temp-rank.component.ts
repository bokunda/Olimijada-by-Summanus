import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-turnir-temp-rank',
  templateUrl: './turnir-temp-rank.component.html',
  styleUrls: ['./turnir-temp-rank.component.css']
})
export class TurnirTempRankComponent implements OnInit {

  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }



  ngOnInit() {


    /*
      */

  }

}
