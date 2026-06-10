import { Component, OnInit } from '@angular/core';
import { GalleryService, Gallery } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.css']
})
export class GalleryPage implements OnInit {
  galleries: Gallery[] = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleries = this.galleryService.getGalleries();
  }
}
