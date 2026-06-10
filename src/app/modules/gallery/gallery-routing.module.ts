import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPage } from './pages/gallery/gallery.page';
import { GalleryDetailPage } from './pages/gallery-detail/gallery-detail.page';

const routes: Routes = [
  { path: '', component: GalleryPage },
  { path: ':id', component: GalleryDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
