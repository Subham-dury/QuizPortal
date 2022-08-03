import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @ViewChild('addcategoryform')
  addcategoryform!: NgForm;

  constructor(private categoryservice: CategoryService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addCategory(){
    console.log(this.addcategoryform.value)
    this.categoryservice.addcategory(this.addcategoryform.value).subscribe(
      (data: any) => {
        console.log(data)
        Swal.fire("Success !!", "Category is added successfully", 'success')
        this.clearform()
      },
      (error) => {
        console.log(error)
        this.snackbar.open((error.error.message == null) ? 'Something went wrong' : error.error.message, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 5000,
        });
      }
    )
  }

  clearform(){
    this.addcategoryform.resetForm()
  }

}
