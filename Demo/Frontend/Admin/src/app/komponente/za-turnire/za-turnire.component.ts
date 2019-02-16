import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-za-turnire',
  templateUrl: './za-turnire.component.html',
  styleUrls: ['./za-turnire.component.css']
})
export class ZaTurnireComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
