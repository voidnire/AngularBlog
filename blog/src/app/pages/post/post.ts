import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../../core/models/Post';
import { PostService } from '../../core/services/post';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  postService = inject(PostService)
  route = inject(ActivatedRoute);


  //postObj: PostModel = new PostModel(1, "Man must explore, and this is exploration at its greatest", "This is the content of my first post.");
  posts: PostModel[] = [new PostModel(1, 
      "Man must explore, and this is exploration at its greatest",
      "Problems look mighty small from 150 miles up",
      "Start Bootstrap",
      "September 24, 2023",
    ),
    new PostModel(2,
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      null,
      "Start Bootstrap",
      "September 18, 2023",
    ),
    new PostModel(3,
      "Science has not yet mastered prophecy",
      "We predict too much for the next year and yet far too little for the next ten.",
      "Start Bootstrap",
      "August 24, 2023",
    ),
    new PostModel(4,
      "Failure is not an option",
      "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
      "Start Bootstrap",
      "July 8, 2023",
    )]; 

  postObj?: PostModel;

  constructor() {
    // Pega id da URL e acha o post correspondente
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.postObj = this.posts.find(p => p.id === id);
    });
  }
}
