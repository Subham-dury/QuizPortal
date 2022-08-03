import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  @ViewChild('addquizform')
  quizform!: NgForm;

  categories !: any

  constructor(private categoryservice : CategoryService, private quizservice: QuizService) { }

  ngOnInit(): void {
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

  addQuiz(){
    console.log(this.quizform.value)
    this.quizservice.addquiz(this.quizform.value).subscribe(
      (data: any) => {
        console.log(data)
        Swal.fire("Sucess !!", "Quiz added successfully", 'success')
        this.clearform()
      },
      (error) => {
        console.log(error);
        Swal.fire("Error !!", "Failed to add quiz", 'error')
      }
    )
  }

  clearform(){
    this.quizform.resetForm();
  }

}
