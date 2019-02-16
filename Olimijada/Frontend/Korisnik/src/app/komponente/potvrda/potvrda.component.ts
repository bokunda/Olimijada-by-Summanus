import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-potvrda',
  templateUrl: './potvrda.component.html',
  styleUrls: ['./potvrda.component.css']
})
export class PotvrdaComponent implements OnInit {
	
	poruka: string;

	constructor(
		public dialogRef: MatDialogRef<PotvrdaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		this.poruka = this.data.poruka;
	}

	NaKlikNe():void
	{
		this.dialogRef.close(-1);
	}

	NaKlikDa(): void
	{
		this.dialogRef.close(1);
	}
	
}
