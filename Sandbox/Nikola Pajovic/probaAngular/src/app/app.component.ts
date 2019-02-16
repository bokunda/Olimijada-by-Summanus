//TypeScript deo komponente koji predstavlja logicki deo komponente
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   //exportovani deo klase AppComponent
  title = 'Tour of Heroes';
}
