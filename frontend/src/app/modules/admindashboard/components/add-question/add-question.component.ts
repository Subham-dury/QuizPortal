import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';



@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  
  qid !: number
  qtitle !: any
  question = {
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    quiz: {
      qid : this.qid,
    }
  }
  
  
  

  @ViewChild('addquestionform')
  questionform !: NgForm;
 

  

  constructor(private route : ActivatedRoute, private questionservice: QuestionService) {
    
   }

  ngOnInit(): void {
    
    this.qid = this.route.snapshot.params['qid']
    this.qtitle = this.route.snapshot.params['qtitle']
    this.question.quiz['qid'] = this.qid
  }

  addQuestion() {
    console.log(this.question)
    this.questionservice.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Question added successfully', 'success')
        this.clearform()
      },
      (error) => {
        console.log(error)
        Swal.fire('Error', 'Failed to add question', 'error')
      }
    )

  }

  clearform(){
    this.questionform.resetForm()
  }

}
