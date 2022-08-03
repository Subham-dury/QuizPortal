import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  categories !: any
  quizzes !: any


  constructor(private categoryservice: CategoryService, private quizservice: QuizService) { }

  ngOnInit(): void {
    this.categoryservice.getcategories().subscribe(
      (data : any) => {
        console.log(data)
        this.categories = data
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Failed to load the categories', 'error')
      }
    )

    this.quizservice.getactivequizzes().subscribe(
      (data : any) => {
        this.quizzes = data
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Failed to load the quizzes', 'error')
      }
    )

  }

}
