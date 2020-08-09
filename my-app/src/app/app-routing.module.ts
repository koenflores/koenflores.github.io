import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BlogComponent } from './blog/blog.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: WelcomePageComponent,
    pathMatch: 'full',
    children: [
      {
      path: 'create',
      component: CreateBlogComponent,
      pathMatch: 'full',
      }
    ]
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateBlogComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
