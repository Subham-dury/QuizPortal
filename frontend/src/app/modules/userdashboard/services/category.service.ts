import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getcategories(){
    return this.http.get('http://localhost:8080/category/get-all');
  }

  public getcategory(id : any) {
    return this.http.get(`http://localhost:8080/category/get/${id}`)
  }

  public addcategory(category: any) {
    return this.http.post('http://localhost:8080/category/add', category);
  }

  public deletecategory(id: any){
    return this.http.delete(`http://localhost:8080/category/delete/${id}`);
  }

  public updatecategory(category: any) {
    return this.http.put('http://localhost:8080/category/update', category)
  }
}
