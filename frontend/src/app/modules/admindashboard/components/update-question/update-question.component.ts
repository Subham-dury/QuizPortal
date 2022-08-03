import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  quesId !: any
  qid !: any
  qtitle !: any
  question !: any
  @ViewChild('updatequestionform')
  quizform : NgForm = this.question;

  constructor(private route :ActivatedRoute, private questionservice: QuestionService) { }

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params['quesId']
    this.qid = this.route.snapshot.params['qid']
    this.qtitle = this.route.snapshot.params['qtitle']

    this.questionservice.getQuestionById(this.quesId).subscribe(
      (data: any) => {
        this.question = data
      },
      (error) => {
        console.log(error)
        Swal.fire("Error !!", "Failed to load question", 'error')
      }
    )


  }

  updateQuestion() {
    this.questionservice.updateQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Question updated successfully', 'success')
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Failed to update the question', 'error')
      }
    )
  }

  clearform(){
    this.quizform.resetForm()
  }

}
