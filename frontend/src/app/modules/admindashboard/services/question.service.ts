import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getLimitedQuestion(id: any){
    return this.http.get(`http://localhost:8080/question/quiz/${id}`)
  }

  public getAllQuestion(id: any){
    return this.http.get(`http://localhost:8080/question/quiz/all/${id}`)
  }

  public getQuestionById(id: any){
    return this.http.get(`http://localhost:8080/question/get/${id}`)
  }

  public addQuestion(question: any) {
    return this.http.post('http://localhost:8080/question/add', question)
  }

  public updateQuestion(question : any){
    return this.http.put('http://localhost:8080/question/update', question)
  }

  public deleteQuestion(id: any){
    return this.http.delete(`http://localhost:8080/question/delete/${id}`)
  }

}
