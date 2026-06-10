import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPage } from './pages/gallery/gallery.page';
import { GalleryDetailPage } from './pages/gallery-detail/gallery-detail.page';


@NgModule({
  declarations: [
    GalleryPage,
    GalleryDetailPage
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
