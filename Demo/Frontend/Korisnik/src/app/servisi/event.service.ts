import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EventService {
	public getEvents(): Observable<any> {
        //const dateObj = new Date();
        //const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
		////console.log((yearMonth);

		let proba: any = {
			title: 'naslov',
			start: '2018-05-05',
            end: '2018-05-15'
		}

		let data: any = [/*{
            title: 'All Day Event',
            start: yearMonth + '-01'
        },
        {
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00'
		},
		{
			title: 'Pajovic doktor',
			start: yearMonth + '-09',
            end: yearMonth + '-11'
		},*/
			proba

       ];
        return Observable.of(data);
    }

  constructor() { }

}
