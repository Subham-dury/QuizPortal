import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qid !: any
  qtitle !: any
  questions !: any

  constructor(private route: ActivatedRoute, private questionservice: QuestionService) { }

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid']
    this.qtitle = this.route.snapshot.params['qtitle']
    
    this.questionservice.getAllQuestion(this.qid).subscribe(
      (data:any) => {
        console.log(data)
        this.questions = data
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Failed to load questions', 'error')
      }
    )

  }

  deleteQuestion(id: any) {
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
        this.questionservice.deleteQuestion(id).subscribe(
          (data: any) => {
            Swal.fire('Success', 'Question deleted Successfully', 'success')
            this.questions = this.questions.filter((question: { quesId: any; }) => question.quesId != id)
            
          },
          (error) => {
            console.log(error)
            Swal.fire('Error', 'Failed to delete question', 'error')
          }
        )
      }
    })
  }

}
