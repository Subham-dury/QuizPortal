import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  @ViewChild('updatecategoryform')
  updatecategoryform!: NgForm;

  category !: any
  cid !: any

  constructor(private categoryservice: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cid = this.route.snapshot.params['cid']
    this.categoryservice.getcategory(this.cid).subscribe(
      (data: any) => {
        this.category = data
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !!', 'Failed to load category', 'error')
      }
    )
  }

  updateCategory(){
    console.log(this.category)
    this.categoryservice.updatecategory(this.category).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Category edited successfully', 'success')
        console.log(data)
      },
      (error) => {
        Swal.fire('Error !!', 'Failed to update category', 'error')
      }
    )
  }

  clearform(){
    this.updatecategoryform.resetForm()
  }

}
