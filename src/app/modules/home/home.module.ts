import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page'; 
import { CarouselModule } from 'src/app/services/carousel/carousel.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
    
  ]
})
export class HomeModule { }
