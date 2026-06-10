import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackageListPage } from './pages/package-list/package-list.page';


@NgModule({
  declarations: [
    PackageListPage
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
