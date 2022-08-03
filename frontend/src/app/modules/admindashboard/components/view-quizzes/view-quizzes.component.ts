import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../../services/quiz.service';


@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes !: any
  active !: any

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getquizzes().subscribe(
      (data: any) => {
        this.quizzes = data
        
        console.log(this.quizzes)
      },
      (error) => {
        console.log(error)
        Swal.fire('error', "error loading data", 'error')
      }
    )
  }

  deleteQuiz(id: any){
    console.log(id)
    
  
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.quizService.deleteQuiz(id).subscribe(
        (data: any) => {
          Swal.fire('Success', "Quiz deleted", 'success')
          this.quizzes = this.quizzes.filter((quiz: { qid: any; }) => quiz.qid != id);
        },
        (error) => {
          console.log(error)
          Swal.fire('error', "Failed to delete quiz", 'error')
        }
      )
    }
  })
  }

  

}
