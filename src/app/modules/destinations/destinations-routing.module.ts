import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationListPage } from './pages/destination-list/destination-list.page';
import { DestinationDetailPage } from './pages/destination-detail/destination-detail.page';

const routes: Routes = [
  { path: '', component: DestinationListPage },
  { path: ':id', component: DestinationDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
