import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  @ViewChild('loginform')
  loginForm!: NgForm;


  constructor(private loginservice : LoginService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.value)
      this.loginservice.generateToken(this.loginForm.value).subscribe(
        (data: any) => {
          console.log(data);

          this.loginservice.setToken(data.token);
          this.loginservice.getCurrentUser().subscribe(
            (user: any) => {
              console.log(user);
              user.password = ''
              this.loginservice.setUser(user);

              if(this.loginservice.getUserRole() == 'admin'){
                this.loginForm.resetForm()
                this.router.navigate(['admin'])
              }
              else if(this.loginservice.getUserRole() == 'public')
              {
                //window.location.href = 'admindashboard'
                this.loginForm.resetForm()
                this.router.navigate(['user'])
              }
              else{
                this.loginservice.logout()
              }

            },
            (error) => {
              console.log(error)
              this._snackBar.open((error.error.message == null) ? 'Something went wrong' : error.error.message, 'Close', {
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
                duration: 5000,
              });
            }
          )

        },
        (error) => {
          console.log(error);
          this._snackBar.open((error.error.message == null) ? 'Something went wrong' : error.error.message, 'Close', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 5000,
          });
        }
      )
  }

  clearform(){
    this.loginForm.resetForm()
  }

}
