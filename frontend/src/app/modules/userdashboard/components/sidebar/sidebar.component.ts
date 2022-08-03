import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories !: any

  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getcategories().subscribe(
      (data : any) => {
        this.categories = data
      },
      (error) => {
        console.log(error)
        Swal.fire('Error !', 'Failed to load categories', 'error')
      }
    )
  }

}
