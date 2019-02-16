import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpSentEvent,
	HttpHeaderResponse,
	HttpProgressEvent,
	HttpResponse,
	HttpUserEvent,
	HttpEvent,
	HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorService {

  	constructor(private authService: AuthService) { }

  	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
		return next.handle(req).do((event: HttpEvent<any>) =>
		{}, (err: any) => {
			if (err instanceof HttpErrorResponse) {
				//console.log("greska");
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
					this.authService.Odjavi();
				}
			}
		});
	}
}
