import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostModel } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: PostModel[] = [
    new PostModel(
      1,
      "Man must explore, and this is exploration at its greatest",
      "Problems look mighty small from 150 miles up",
      "Start Bootstrap",
      "September 24, 2023"
    ),
    new PostModel(
      2,
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      null,
      "Start Bootstrap",
      "September 18, 2023"
    ),
    new PostModel(
      3,
      "Science has not yet mastered prophecy",
      "We predict too much for the next year and yet far too little for the next ten.",
      "Start Bootstrap",
      "August 24, 2023"
    ),
    new PostModel(
      4,
      "Failure is not an option",
      "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
      "Start Bootstrap",
      "July 8, 2023"
    )
  ];

  getPosts(): Observable<PostModel[]> {
    return of(this.posts);
  }

  getPostById(id: number): Observable<PostModel | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(p => p.id === id))
    );
  }
}
