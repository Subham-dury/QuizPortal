import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public generateToken(loginData: any ){
    return this.http.post('http://localhost:8080/generate-token', loginData);
  }

  public getCurrentUser(){
    return this.http.get('http://localhost:8080/current-user');
  }

  public setToken(token: any){
    localStorage.setItem("token" , token);
    return true;
  }

  public hasToken(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==null || token=='')return false;
    return true;
  }

  public logout(){
    localStorage.removeItem("token");
    return true;
  }

  public fetchToken(){
    return (this.hasToken) ? localStorage.getItem("token") : null; 
  }


  public setUser(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getUser(){
    let usr = localStorage.getItem("user");
    return (usr != null) ? JSON.parse(usr) : null; 
  }

  public getUserRole(){
    let usr = this.getUser();
    return usr.authorities[0].authority;
  }

  


}
