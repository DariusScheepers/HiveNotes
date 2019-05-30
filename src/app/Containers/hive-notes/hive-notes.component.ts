import { Component, OnInit } from '@angular/core';
import { HiveNotesService } from '../../Services/hive-notes/hive-notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hive-notes',
  templateUrl: './hive-notes.component.html',
  styleUrls: ['./hive-notes.component.scss']
})
export class HiveNotesComponent implements OnInit {

  constructor(private hiveNotesService: HiveNotesService, private router: Router) { }
  
  loggedIn: boolean = false;

  ngOnInit() {
    this.hiveNotesService.startup();
  }

  userLoggedIn() {
    this.loggedIn = true;
  }

  isTabActive(route: string): boolean {
    let currentRoute = this.router.url;
    return (route === currentRoute);
  }

  navigateTo(route: string): void {
    console.log('navigating');
    this.router.navigateByUrl(route);
  }

}
