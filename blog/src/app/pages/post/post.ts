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


  postObj?: PostModel;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.postService.getPostById(id).subscribe(post => {
        this.postObj = post;
      });
    });
  }
}
