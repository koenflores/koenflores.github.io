import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from '../blog/create-blog/create-blog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  createBlog() {
    const dialogRef = this.dialog.open(CreateBlogComponent, {
      height: '400px',
      width: '600px',
    });

  }
}