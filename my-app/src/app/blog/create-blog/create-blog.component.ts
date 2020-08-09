import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  public blogForm: FormGroup;
  public date: Date;
  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.date = new Date();
  }

  setForm(){
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: [''],
      pictures: ['', Validators.required]
    });
  }

  submit(){
    const blog = new Blog();
    blog.id  = this.blogService.getDocumentId();
    blog.title = this.blogForm.get('title').value;
    blog.description = this.blogForm.get('description').value;
    blog.tags = this.blogForm.get('tags').value;
    blog.pictures = this.blogForm.get('pictures').value;
    blog.date = this.date;
    this.blogService.addBlog(blog);
  }

}
