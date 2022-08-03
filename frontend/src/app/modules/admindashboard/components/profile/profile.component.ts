import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: any
  

  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginservice.getUser();

  }

}
