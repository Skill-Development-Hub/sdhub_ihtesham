import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  onSubmit(): void {
    if(this.signInForm.valid) {
      const {username, password } = this.signInForm.value;
      console.log('Sign-In Data: ', {username});
    } else {
      console.log("Validation Failed")
    }
  }
}
