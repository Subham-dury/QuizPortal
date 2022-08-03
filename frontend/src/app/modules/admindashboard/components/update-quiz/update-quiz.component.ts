import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  categories!: any
  quiz !: any
  @ViewChild('updatequizform')
  quizform : NgForm = this.quiz;
  qid !: any
  
  constructor(private router: ActivatedRoute, private categoryservice : CategoryService, private quizservice: QuizService) {
    
   }

  ngOnInit(): void {
    
    this.qid = this.router.snapshot.params['qid']
    console.log(this.qid)

    this.quizservice.getquiz(this.qid).subscribe(
      (data:any) => {
        this.quiz = data
      },
      (error) => {
        console.log(error)
        Swal.fire("Error !!", "Failed to load quiz", 'error')
      }
    )


    this.categoryservice.getcategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error)
        Swal.fire("Error !!", "Failed to load categories", 'error')
      }
    )
  }

  updateQuiz() {
    console.log(this.quiz)
    this.quizservice.updateQuiz(this.quiz).subscribe(
      (data: any) => {
        console.log(data)
        Swal.fire('Success', 'Quiz updated successfully', 'success')
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'error occureed', 'error')
      }
    )
  }

  clearform() {
    this.quizform.resetForm()
  }

}
