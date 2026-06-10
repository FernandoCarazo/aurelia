import { Component, OnInit } from '@angular/core';
import { PackageService, TravelPackage } from 'src/app/services/package/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.page.html',
  styleUrls: ['./package-list.page.css']
})
export class PackageListPage implements OnInit {
  packages: TravelPackage[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packages = this.packageService.getPackages();
  }
}
