import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { LowerCasePipe } from '@angular/common';
import { DataService } from 'src/app/Services/data/data.service';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService,
    private databaseService: DatabaseService) { }

  loginForm: User;
  dbUserExist: boolean = true;

  @Output() verified: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.loginForm = new User('');
  }

  login() {
    console.log("works;", this.loginForm);

    this.loginForm.userID = this.loginForm.userID.toLowerCase();
    this.dataService.userID = this.loginForm.userID;
    this.authenticateUser();

    if (this.dbUserExist) {
      this.verified.emit(true);
    }
  }

  authenticateUser() {
    const rec = this.databaseService.getUserAuthentication(this.loginForm.userID);
    if (rec) {
      this.dbUserExist = true;
    } else 
    this.dbUserExist = false;
  }

}
