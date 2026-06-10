import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationListPage } from './pages/destination-list/destination-list.page';
import { DestinationDetailPage } from './pages/destination-detail/destination-detail.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DestinationListPage,
    DestinationDetailPage
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    FontAwesomeModule
  ]
})
export class DestinationsModule { }
