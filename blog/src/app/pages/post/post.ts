import { Component, inject } from '@angular/core';
import { PostModel } from '../../core/models/Post';
import { PostService } from '../../core/services/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  postService = inject(PostService)


  postObj: PostModel = new PostModel(1, "Man must explore, and this is exploration at its greatest", "This is the content of my first post.");
  posts: PostModel[] = []; 
}
