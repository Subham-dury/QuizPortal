import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css'],
})
export class ViewQuizComponent implements OnInit {
  qid!: any;
  questions!: any;
  isSubmit: boolean = false;
  marksGot = 0;
  numberOfQuestionsAttempted = 0;
  correctAnswers = 0;
  maxMarks = 0;
  singleQuestionMarks = 0;
  timer !: any

  constructor(
    private location: LocationStrategy,
    private route: ActivatedRoute,
    private questionservice: QuestionService,
    private router :  Router
  ) {}

  ngOnInit(): void {
    this.preventReturn();
    this.qid = this.route.snapshot.params['qid'];
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionservice.getLimitedQuestion(this.qid).subscribe(
      (data: any) => {
        this.questions = data;
        console.log(this.questions)
        this.timer = this.questions.length * 1 * 60
        if (this.questions.length == 0) {
          Swal.fire({
            title: 'No questions available',
            showCancelButton: false,
            confirmButtonText: 'Back to home',
            icon: 'info',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/user'])
            }
          });
        }
        
        this.calculateTime()
        this.maxMarks = this.questions[0].quiz.maxmarks;
        this.singleQuestionMarks = this.maxMarks / this.questions.length;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Failed to load questions', 'error');
      }
    );
  }

  preventReturn() {
    history.pushState(null, null, location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.isSubmit = true;
        console.log(this.questions)
        this.questionservice.evaluateQuiz(this.questions).subscribe(
          (data : any) => {
            console.log(data)
            this.marksGot = data.marksGot
            this.correctAnswers = data.correctAnswers
             this.numberOfQuestionsAttempted = data.attempted
          },
          (error) => {
            console.log(error)
          }
        )
      }
    });
  }

  endQuizOnTimer() {
    this.isSubmit = true;
    console.log(this.questions)
    this.questionservice.evaluateQuiz(this.questions).subscribe(
      (data : any) => {
        console.log(data)
        this.marksGot = data.marksGot
        this.correctAnswers = data.correctAnswers
        this.numberOfQuestionsAttempted = data.attempted
      },
      (error) => {
        console.log(error)
      }
    )
    
  }

  calculateTime() {
    let t = window.setInterval(() => {
      if(this.timer == 0){
        this.endQuizOnTimer()
        clearInterval(t)
      }else {
        this.timer--
      }
    },1000)
  }

  formatTimer(){
    let min = Math.floor(this.timer/60)
    let sec = this.timer - min*60
    return `${min} min : ${sec} sec`
  }


  print() {
    window.print();
  }

}
