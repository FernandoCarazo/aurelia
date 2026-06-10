import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './modules/shared/shared.module';
import { CarouselModule } from './services/carousel/carousel.module';
import { DestinationsModule } from '@destinations/destinations.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    CarouselModule,
    DestinationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
