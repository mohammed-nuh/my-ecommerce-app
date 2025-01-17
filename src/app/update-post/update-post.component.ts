import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../posts/posts.service';
import { Router, ActivatedRoute } from '@angular/router'; // Ensure ActivatedRoute is imported
import { Post } from '../posts/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  post: Post | undefined;
  formToSubmit: FormGroup;
  isSubmitted = false;
  isFormValid = false;
  postId: number;

  constructor(
    private postService: PostService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formToSubmit = this.formBuilder.group({
      userId: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(100)]],
    });
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.postService.getPostById(this.postId).subscribe((response: Post) => {
      this.post = response;
      this.formToSubmit.patchValue(response);
    });
  }

  OnSubmit(): void {
    if (this.formToSubmit.valid) {
      this.isFormValid = true;
      this.isSubmitted = true;

      this.postService.updatePost(this.postId, this.formToSubmit.value).subscribe((response: any) => {
        console.log('Post updated successfully:', response);
        this.router.navigate(['/posts']);
      });
    }
  }
}