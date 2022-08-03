import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  public getquizzes() {
    return this.http.get('http://localhost:8080/quiz/get-all');
  }

  public getactivequizzes(){
    return this.http.get('http://localhost:8080/quiz/get-all/active')
  }

  public getquiz(id: any){
    return this.http.get(`http://localhost:8080/quiz/get/${id}`);
  }

  public getquizbycategory(id: any){
    return this.http.get(`http://localhost:8080/quiz/get/category/${id}`);
  }

  public getactivequizbycategory(id: any){
    return this.http.get(`http://localhost:8080/quiz/get/category/active/${id}`);
  }

  public addquiz(data: any) {
    return this.http.post('http://localhost:8080/quiz/add', data);
  }

  public deleteQuiz(id: any){
    return this.http.delete(`http://localhost:8080/quiz/delete/${id}`)
  }

  public updateQuiz(quiz: any){
    return this.http.put('http://localhost:8080/quiz/update', quiz);
  }
}
