import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { LoginService } from 'src/app/modules/login/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(public loginservice: LoginService, private router: Router,) { 
    
  }

  ngOnInit(): void {
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['login'])
  }

  
  
}
