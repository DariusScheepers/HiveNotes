import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { LowerCasePipe } from '@angular/common';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  loginForm: User;
  dbUserExist: boolean = true;

  @Output() verified: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.loginForm = new User('');
  }

  login() {
    this.loginForm.username = this.loginForm.username.toLowerCase();
    this.authenticateUserAndSetUserID();
    
    if (this.dbUserExist) {
      this.verified.emit(true);
    }
  }

  authenticateUserAndSetUserID() {
    const rec = this.databaseService.getUserAuthentication(this.loginForm.username);
    if (rec) {
      rec.subscribe(value => this.databaseService.userID = value.id);
      this.dbUserExist = true;
    } else {
      this.dbUserExist = false;
    }
  }

}
