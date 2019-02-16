import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Mail } from '../../modeli/Mail';
import { AdminService } from '../../servisi/admin.service';
import {MatSnackBar} from '@angular/material';
import swal from "sweetalert2";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

	mail = new FormControl('',[Validators.required]);
	subject = new FormControl('',[Validators.required]);
	poruka = new FormControl('',[Validators.required]);

	constructor
  (
    public adminService: AdminService,
    public snackBar: MatSnackBar
  ) { }

	ngOnInit() {
	}

  openSnackBar(message: string, action: string)
  {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

	PosaljiMail(): void
	{
		let mail: Mail = new Mail();
		mail.mail = this.mail.value;
		mail.subject = this.subject.value;
		mail.poruka = this.poruka.value;

		//console.log(mail);

		this.adminService.PosaljiMail(mail).subscribe();
		//this.openSnackBar('Email uspešno poslat!', '');

    swal({
      type: 'success',
      title: 'Email uspešno poslat!',
      showConfirmButton: false,
      timer: 2600
    });

	}
}
