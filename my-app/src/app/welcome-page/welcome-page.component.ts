import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  public blogs: Blog [] = [];

  public title: string;
  public description: string;

  constructor(
    private router: Router,
    private blogService: BlogService)
    { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void{
    this.blogService.getAllBlogs().subscribe((res: Blog[]) => {
      this.blogs = res;
    });
  }

  goToBlog(id: number): void{
    this.router.navigate(['blog', id]);
  }
}
