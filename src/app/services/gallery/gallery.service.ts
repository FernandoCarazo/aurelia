import { Injectable } from '@angular/core';

export interface Gallery {
  id: string;
  title: string;
  date: string;
  img1: string;
  description: string;
}

export interface Photo {
  src: string;
}

interface PhotoSet {
  galleryId: string;
  photos: Photo[];
}

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private galleries: Gallery[] = [
    {
      id: '1',
      title: 'Costa Rica — Volcanoes & Pacific',
      date: '01/03/2026',
      img1: 'assets/img/gallery/CostaRica/Four-Seasons-Costa-Rica-at-Peninsula-Papagayo-1.jpg',
      description: 'Between the volcano and the sea',
    },
    {
      id: '2',
      title: 'Italy - Amalfi Coast',
      date: '17/09/2024',
      img1: 'assets/img/gallery/Italy/download.jpeg',
      description: 'The golden light of Positano',
    },
    {
      id: '3',
      title: 'Japan - Imperial Kyoto',
      date: '17/09/2025',
      img1: 'assets/img/gallery/Japan/a2000480_main.png',
      description: 'Temples and quiet gardens',
    },
  ];

  private photoSets: PhotoSet[] = [
    {
      galleryId: '1',
      photos: [
        { src: 'assets/img/gallery/CostaRica/image_processing20200204-4-4yocgo.jpg' },
        { src: 'assets/img/gallery/CostaRica/slide-2.jpg' },
        { src: 'assets/img/gallery/CostaRica/VOLCAN-ARENAL1.jpg' },
      ],
    },
    {
      galleryId: '2',
      photos: [
        { src: 'assets/img/gallery/Italy/Amalfi-Coast-1440x900.jpg' },
        { src: 'assets/img/gallery/Italy/251fa57998618962b9280d658d7ab13ff8ca54dcb412096a88d8bdba0ceb42ae.avif' },
        { src: 'assets/img/gallery/Italy/TAL-lead-image-AMALFITOWNS0625-cdac6b27fb414f799e98db61267f4c32.jpg' },
      ],
    },
    {
      galleryId: '3',
      photos: [
        { src: 'assets/img/gallery/Japan/gluten-free-kyoto-japan-25-1024x769.png' },
        { src: 'assets/img/gallery/Japan/photo-1558862107-d49ef2a04d72.png' },
        { src: 'assets/img/gallery/Japan/photo-1578469645742-46cae010e5d4.png' },
      ],
    },
  ];

  constructor() {}

  getGalleries(): Gallery[] {
    return this.galleries;
  }

  getGalleryById(id: string): Gallery | undefined {
    return this.galleries.find((gallery) => gallery.id === id);
  }

  getPhotosForGallery(galleryId: string): Photo[] {
    const data = this.photoSets.find((set) => set.galleryId === galleryId);
    return data ? data.photos : [];
  }
}
