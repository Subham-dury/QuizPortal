import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {

  qid !: any
  quiz !: any
  constructor(private route : ActivatedRoute, private quizservice: QuizService,private router: Router) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid']
    this.quizservice.getquiz(this.qid).subscribe(
      (data : any) => {
          this.quiz= data
          console.log(data)
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Failed to load the quiz', 'error')
      } 
    )
  }

  openConfirmDialog() {
    Swal.fire({
      title: 'Do you want to start the quiz ?',
       showCancelButton: true,
      confirmButtonText: 'Start',
      icon: 'info'
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.qid])
      } 
    })
  }

}
