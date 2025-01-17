import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Component } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { identity } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [RouterLink,RouterModule,CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent {
  postsList: Post[];
  filteredPostsList: Post[];
  searchTerm: string = '';
  
    constructor(private router: Router,private postService: PostService){
      this.postsList = [];
      this.filteredPostsList = [];
    }
  
    ngOnInit(): void {
        this.postService.getPosts().subscribe((response: Post[]) => {
          this.postsList = response;
          this.filteredPostsList = response;
    });
    }

    onDelete(id: number): void {
      this.postService.delPost(id).subscribe(() => {
        this.postService.getPosts().subscribe((response: Post[]) => {
          this.postsList = response;
    });
  });
    }

    onSearch() {
      if (!this.searchTerm || this.searchTerm.trim() === ''){
        this.filteredPostsList = this.postsList;
    } else {
      this.filteredPostsList = this.postsList.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())  // Make sure searchTerm is also in lowercase
      );
    }
    }
    
}
