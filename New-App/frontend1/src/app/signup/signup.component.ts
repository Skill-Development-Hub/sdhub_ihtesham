import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.signUpForm = this.fb.group({
      studentID: '',
      name: '',
      age: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
  
  onSubmit(): void {
    if(this.signUpForm.valid) {
      const {studentID, name, age, email, password, number } = this.signUpForm.value;
      console.log('Sign-Up Data: ', {studentID, name, age, email, password, number });
      
      this.UserService.signup({studentID, name, age, email, password, number }).subscribe(user => {
        console.log(user);
        this.router.navigate(['/signin']);
      });

    } else {
      console.log("Validation Failed")
    }
  }

}
