import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService, Gallery, Photo } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.page.html',
  styleUrls: ['./gallery-detail.page.css']
})
export class GalleryDetailPage implements OnInit {
  gallery?: Gallery;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    const galleryId = this.route.snapshot.paramMap.get('id') ?? '';
    this.gallery = this.galleryService.getGalleryById(galleryId);
    this.photos = this.galleryService.getPhotosForGallery(galleryId);
  }
}
