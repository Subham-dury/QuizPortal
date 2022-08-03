import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../../services/register.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide = true;
  @ViewChild('registerform')
  registerForm!: NgForm;
  

  constructor(private registerService: RegisterService,private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    
  }

  submitform(){
    console.log(this.registerForm.valid)
    this.registerService.registerUser(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'User is registered', 'success');
        
        this.registerForm.resetForm()
        this.router.navigateByUrl('/login')
      },
      (error) => {
        console.log(error);
        this._snackBar.open((error.error.message == null) ? 'Something went wrong' : error.error.message, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 5000,
        });
        
      }
    )

  }

  clearform(){
    this.registerForm.resetForm()
  }

}
