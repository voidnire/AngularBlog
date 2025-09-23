import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostModel } from '../models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
   /*getPosts(): Observable<PostModel[]> {
     Exemplo com dados mockados
    const posts: PostModel[] = [
      new PostModel(1, "First Post", "Content 1"),
      new PostModel(2, "Second Post", "Content 2")
    ];
    return of(posts);
  }*/

}
