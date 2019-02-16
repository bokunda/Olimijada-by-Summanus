import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate
{

    constructor(private router: Router, private authService: AuthService)
    {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        let url: string = state.url;

        if (url !== '/prijava')
        {
            return this.ProveriDaLiJePrijavljen();
        }
        else
        {
            return this.ProveriDaLiJeOdjavljen();
        }

    }

    ProveriDaLiJePrijavljen(): boolean
    {
        let prijavljen = this.authService.DaLiJePrijavljen();

        if (prijavljen)
        {
            //console.log(('Guard: prijavljen');
            return true;
        }
        else
        {
            //console.log(('Guard: nije prijavljen');
            this.router.navigate(['/prijava']);
            return false;
        }
    }

    ProveriDaLiJeOdjavljen(): boolean
    {
        let prijavljen = this.authService.DaLiJePrijavljen();

        if (prijavljen)
        {

            //console.log(('Guard: prijavljen');
            this.router.navigate(['/pocetna']);
            return false;
        }
        else
        {
            //console.log(('Guard: nije prijavljen');
            return true;
        }
    }
}
