import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../posts/posts.service';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-post-info',
  imports: [CommonModule],
  templateUrl: './post-info.component.html',
  styleUrl: './post-info.component.css'
})

export class PostInfoComponent {
  post: Post | undefined;
  postId: number;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.postService.getPostById(this.postId).subscribe((response: Post) => {
      this.post = response;
    });
  }
}
