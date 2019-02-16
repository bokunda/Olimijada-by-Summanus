import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-napravi-tim',
  templateUrl: './napravi-tim.component.html',
  styleUrls: ['./napravi-tim.component.css']
})
export class NapraviTimComponent implements OnInit {

  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }

  ngOnInit() {
  }

}
