import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDataService } from './test-data/test-data.service';
import { DatabaseService } from './database/database.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestDataService,
    DatabaseService
  ]
})
export class ServicesModule { }
