import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { 
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import  { RegForm } from './regform.model'

@Component({
  selector: 'app-registration',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  formToSubmit: FormGroup;
  isSubmitted = false;
  isFormValid = false;

  constructor(private registrationService: RegistrationService, private router: Router, private formBuilder: FormBuilder) { 
    
    this.formToSubmit = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  OnSubmit(){
    if(this.formToSubmit.valid){
      this.isFormValid = true;
      this.isSubmitted = true;

      this.registrationService.addForm(this.formToSubmit.value).subscribe((response: RegForm) => {
            console.log(response);
            this.formToSubmit.reset();
            console.log("Form Submiited Successfully!");
            alert("Form Submiited Successfully!");
          });
    }
  }
}
