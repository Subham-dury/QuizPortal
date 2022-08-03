import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {

  constructor(public loginservice: LoginService, private router: Router,) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginservice.logout();
    this.router.navigate(['login'])
  }

}
