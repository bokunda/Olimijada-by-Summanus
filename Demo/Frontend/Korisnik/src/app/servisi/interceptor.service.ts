import { Injectable } from '@angular/core';
import
{
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpSentEvent,
	HttpHeaderResponse,
	HttpProgressEvent,
	HttpResponse,
	HttpUserEvent,
	HttpEvent,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';
import { BotService } from './bot.service';


@Injectable()
export class InterceptorService implements HttpInterceptor
{

	constructor(
		private authService: AuthService,
		private botService: BotService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
	{
		return next.handle(req).do((event: HttpEvent<any>) =>
		{ }, (err: any) =>
		{
			if (err instanceof HttpErrorResponse)
			{
				//console.log("greska");
				//console.log(err);
				if (err.status === 403)
				{/*
					if (event instanceof HttpResponse)
					{
						let res = event.clone(
							{
								body: -5
							}
						)

						return res;
					}
					*/
					this.authService.Odjavi(403);
				}
/*
				else if (err.status === 413)
				{
					console.log("err status ", err.status);
					this.botService.premasenaVelicina.emit();
				} */

			}
		}
		);
	}

}
