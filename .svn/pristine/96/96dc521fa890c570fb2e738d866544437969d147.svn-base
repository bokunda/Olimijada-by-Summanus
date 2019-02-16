import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../../servisi/admin.service';
import {Admin} from '../../modeli/Admin';
import {AuthService} from '../../servisi/auth.service';
import {Router} from '@angular/router';import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit
{
  @Output() naSubmit = new EventEmitter<boolean>();


  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
	pogresno: boolean;

  constructor(
    public adminService: AdminService,
    public authService: AuthService,
	public router: Router,	public translate: TranslateService)
  {
  }

  ngOnInit()
  {
    this.pogresno = false;
  }

  PrijaviAdmina(): void
  {
    if (this.password.valid && this.username.valid)
    {
      //console.log('submitovano');
      let admin = new Admin();
      admin.username = this.username.value;
      admin.password = this.password.value;

      var odgovor;

      this.adminService.PrijaviAdmina(admin).subscribe(odg =>
      {
        //console.log(odg);
        if (odg.status === 1)
        {
          this.authService.Prijavi(odg);
          // redirekcija na pocetnu stranu kada se uloguje
          this.naSubmit.emit(true);

          //window.location.replace('/pocetna');
          this.router.navigate(['/pocetna']);

        }
        else if (odg.status == 0)
        {
          this.ResetovanjeForme();
          this.pogresno = true;
        }
        else
        {
          this.ResetovanjeForme();
          // otvori neki prozor koji ce da obavesti da je doslo do greske
        }
      });


    }
  }

  ResetovanjeForme(): void
  {
    this.username.reset();
    this.password.reset();
    this.pogresno = false;

  }
}
