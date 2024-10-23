import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;



    constructor(
      private _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void{
      // this.firstFormGroup = this._formBuilder.group({
      //   StudentId: [''],
      //   date: [''],
      //   fisrtName: [''],
      //   middleName: [''],
      //   lastName: [''],
      //   f_Firstname: [''],
      //   f_Middlename: [''],
      //   f_Lastname: [''],
      //   DOB: [''],
      //   number: [''],
      //   mail: [''],
      //   contact: [''],
      //   income: [''],

      // });
     
      
      this.firstFormGroup = this._formBuilder.group({
        StudentId: [''],
        date: [''],
        fisrtName: ['',Validators.required],
        middleName: [''],
        lastName: [''],
        f_Firstname: ['',Validators.required],
        f_Middlename: [''],
        f_Lastname: [''],
        DOB: [''],
        number: [''],
        mail: [''],
        contact: [''],
        income: [''],

      });
      this.secondFormGroup = this._formBuilder.group({
        course: ['',Validators.required],
        degree: [''],
        collage: [''],
        passing: [''],
        percentage: [''],
      });

      this.thirdFormGroup = this._formBuilder.group({
        signiture: [''],
        parent_signiture: [''],
        pdate: [''],
      });
      
    }
  submit() {
    console.log(this.firstFormGroup.controls['fisrtName'].value);
    console.log(this.firstFormGroup.controls['f_Firstname'].value);


  }
  
  isLinear = true;
}


