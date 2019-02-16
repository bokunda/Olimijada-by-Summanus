import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { AuthService } from '../../servisi/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pristup',
  templateUrl: './pristup.component.html',
  styleUrls: ['./pristup.component.css']
})
export class PristupComponent implements OnInit {

    prijavljen: boolean = false;
    mode = new FormControl('over');
    username;

    constructor(public authService : AuthService, public router: Router) { }

    ngOnInit() {

        if (localStorage.getItem("username") != null)
        {
            this.prijavljen = true;
            this.router.navigate(['/pocetna']);
        }
        this.username = localStorage.getItem('username');
    }

    sleep(ms: number)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async NakonPrijave(prijavljen: boolean)
    {
        this.prijavljen = prijavljen;
        //await this.sleep(1000);
        //window.location.replace("/");

        this.router.navigate(['/pocetna']);
    }

    NakonOdjave(odjavljen: boolean): void
    {
        this.prijavljen = !odjavljen;
    }

}
