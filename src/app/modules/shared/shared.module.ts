import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main/main.layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { 

}
