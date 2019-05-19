import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/app/Models/module';

@Component({
  selector: 'app-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.scss']
})
export class ModuleContentComponent implements OnInit {

  @Input() module: Module;

  constructor() { }

  ngOnInit() {
  }

}
