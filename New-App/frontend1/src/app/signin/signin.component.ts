import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;
  error_message = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void{
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  onSubmit(): void {
    if(this.signInForm.valid) {
      const {email, password } = this.signInForm.value;

      this.UserService.signin({email, password}).subscribe({
        next: (res) => {
          this.openSnackBar(res.message);
          this.router.navigate(['/dashboard']);
        },
        error: (e) => {
          console.log(e);
          this.openSnackBar(e.error.message);
        },
        complete: () => {
          console.log("Sign in Successful");
        },
      })
    } else {
      console.log("Validation Failed")
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(`${message}`, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
