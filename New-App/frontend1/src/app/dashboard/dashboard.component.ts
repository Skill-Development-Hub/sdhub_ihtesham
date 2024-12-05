import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  userlist = 0;
  displayedColumns: string[] = [];
  studentData = [];
  dataset = [];
  dataSource = ELEMENT_DATA;

  constructor(
    private UserService : UserService
  ) {}

  ngOnInit(): void {
    this.displayedColumns = ["ID", "name", "nationality", "city", "gender", "Age", "email"];
    this.getUsers();
    this.getDataset();
    this.UserService.getStudents().subscribe(students => {
      console.log("Student: ",students);
      this.userlist = students.length;
      this.studentData = students
    });
    // this.dataSource = ELEMENT_DATA;  
  }

  getUsers(): void {
    this.UserService.getUsers().subscribe({
      next: (res) => {
        console.log(res.data);
      },
      error(e) {
        console.log(e.error);
      },
      complete() {
        console.log("Users Fetched");
      },
    })
  }

  getDataset(): void {
    this.UserService.getDataset().subscribe({
      next: (res) => {
        console.log(res.data);
        this.dataset = res.data;
      },
      error(e) {
        console.log(e.error);
      },
      complete() {
        console.log("Users Fetched");
      },
    })
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];