import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    WelcomePageComponent,
    HeaderComponent,
    BlogCardComponent,
    HomeComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


