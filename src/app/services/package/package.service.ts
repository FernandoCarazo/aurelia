import { Injectable } from '@angular/core';

export interface TravelPackage {
  id: string;
  title: string;
  img: string;
  price: string;
}

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private packages: TravelPackage[] = [
    {
      id: '1',
      title: 'For Couples: Santorini Privé',
      img: 'assets/img/packages/couple.png',
      price: 'from $5,200 / couple',
    },
    {
      id: '2',
      title: 'Family: Costa Rica — Volcano & Pacific',
      img: 'assets/img/packages/family.png',
      price: 'from $6,900 / family of 4',
    },
    {
      id: '3',
      title: 'Honeymoon: Maldives — Private Atoll',
      img: 'assets/img/packages/honeymoon.jpg',
      price: 'from $9,800 / couple',
    },
  ];

  constructor() {}

  getPackages(): TravelPackage[] {
    return this.packages;
  }
}
