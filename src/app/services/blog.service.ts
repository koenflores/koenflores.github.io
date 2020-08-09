import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // public blogs: Blog[];
  // private blogs = new Map<number, Blog>();
  // public  app = firebase.initializeApp(config);
  private dbBlog;
  private dbId;
  public blogsCollection: AngularFirestoreCollection<Blog>;
  public id: number;

  constructor(private db: AngularFirestore){
    this.dbBlog = this.db.collection('blogs');
    this.dbId = this.db.collection('id');
    this.getId().subscribe((res: any) => {
      this.id = res[0].id;
    });
  }

  getBlog(id: number) {
    return this.db.collection('blogs', ref => ref.where('id', '==', id)).valueChanges();
  }

  getAllBlogs() {
    return this.dbBlog.valueChanges();
  }

  addBlog(blog: Blog) {
    this.blogsCollection = this.db.collection('blogs', x => x.orderBy('id', 'asc'));
    this.blogsCollection.add({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      pictures: blog.pictures,
      tags: blog.tags
    });
    this.dbId.doc('id').update({id: firestore.FieldValue.increment(1)});
  }

  getDocumentId() {
    return this.id;
  }

  getId(){
    const docId = this.db.collection('id').snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const id = a.payload.doc.data() as number;
        return id ;
      });
    })
    );
    return docId;
  }

  // getDocumentId() {
  //   const docId = this.db.collection('id').get();
  //   return docId;
  // }

  getDocId() {
    const ids = this.db.collection('blogs').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          return { id };
        });
      })
      );
    return ids;
    // console.log(query.valueChanges());
    // this.dbBlog.delete(query);
  }


  deleteDoc(){
    const arr = ['1', '2', '3', '4', '5'];
    this.getDocId().subscribe(docIds => {
      docIds.forEach((id) => {
        if (!arr.includes(id.id)) {
          this.dbBlog.doc(id.id).delete();
        }
      });
    });
  }
}

