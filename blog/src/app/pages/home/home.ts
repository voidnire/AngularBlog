import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { PostModel } from '../../core/models/Post';
import { PostService } from '../../core/services/post';

interface Post {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  link: string;
}


@Component({
  selector: 'app-home',
  standalone: true, // se estiver usando Angular standalone
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  postService = inject(PostService);
  posts: PostModel[] = [];

  

  
constructor() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }


}
