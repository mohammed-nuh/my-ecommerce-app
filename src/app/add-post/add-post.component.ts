import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { 
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../posts/posts.service';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-add-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  formToSubmit: FormGroup;
    isSubmitted = false;
    isFormValid = false;
  
    constructor(private postService: PostService, private router: Router, private formBuilder: FormBuilder) { 
      
      this.formToSubmit = this.formBuilder.group({
        userId: ['', [Validators.required]],
        title: ['', [Validators.required, Validators.minLength(5)]],
        body: ['', [Validators.required, Validators.minLength(100)]],
      })
    }
  
    OnSubmit(){
      if(this.formToSubmit.valid){
        this.isFormValid = true;
        this.isSubmitted = true;
 
        this.postService
        .addPost(this.formToSubmit.value) // this.postForm.value is an instance of Post and hence is a valid argument to addPost
        .subscribe((response: Post) => {
          console.log(response);
          this.formToSubmit.reset();
          this.router.navigate(['/posts']);
        });
      }
    }
}
