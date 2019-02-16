import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-igra-temp-rank',
  templateUrl: './igra-temp-rank.component.html',
  styleUrls: ['./igra-temp-rank.component.css']
})
export class IgraTempRankComponent implements OnInit {

  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }

  ngOnInit() {
  }

}
