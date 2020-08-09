import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {BlogService } from 'src/app/services/blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;

  public blog: Blog;
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'), 0);
    });
    this.getBlog();
  }

  getBlog(): void{
    this.blogService.getBlog(this.id).subscribe((res: Blog[]) => {
      this.blog = res[0];
    });
  }
}
