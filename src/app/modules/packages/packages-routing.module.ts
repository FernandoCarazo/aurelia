import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageListPage } from './pages/package-list/package-list.page';

const routes: Routes = [
  {
    path: '',
    component: PackageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
