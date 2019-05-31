import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { User } from 'src/app/Models/user';
import { DatabaseService } from 'src/app/Services/database/database.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
 
  private unsubscribe$ = new Subject<void>();

  constructor(private databaseService: DatabaseService) { }

  loginForm: User;
  dbUserExist: boolean = true;

  @Output() verified: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.loginForm = new User('');
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login() {
    this.loginForm.username = this.loginForm.username.toLowerCase();
    this.authenticateUserAndSetUserID();
    
    if (this.dbUserExist) {
      this.verified.emit(true);
    }
  }

  authenticateUserAndSetUserID() {
    this.databaseService.getUserAuthentication(this.loginForm.username).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe( response => {
      this.databaseService.userID = response.id;
      this.dbUserExist = true;
    }, () => { // if error occurs
      this.dbUserExist = false;
    });
  }

}
