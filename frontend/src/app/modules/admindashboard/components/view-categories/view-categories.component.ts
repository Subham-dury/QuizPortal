import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories !: any
  
  constructor(private categoryservice: CategoryService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.categoryservice.getcategories().subscribe(
      (data: any) => {
        this.categories = data
      },
      (error) => {
        console.log(error)
        this.snackbar.open((error.error.message == null) ? 'Connection error' : error.error.message, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 5000,
        });
      }
    )
  }

  deleteCategory(id: any) {
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
          this.categoryservice.deletecategory(id).subscribe(
            (data: any) => {
              Swal.fire("Success !!", "Category is deleted successfully", 'success')
              this.categories = this.categories.filter((category: { cid: any; }) => category.cid != id)
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
      })
    }

}
