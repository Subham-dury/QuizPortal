import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  cid !: any
  quizzes !: any
  constructor(private quizservice: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.cid = params['cid']

      this.quizservice.getactivequizbycategory(this.cid).subscribe(
        (data : any) => {
          this.quizzes = data
          console.log(data)
        },
        (error) => {
          console.log(error)
          Swal.fire('Error', 'Failed to load quizzes', 'error')
        }
      )
      
    })

    

  }

}
