import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/Models/module';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  module: Module;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  
}
