import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from '@shared/layouts/main/main.layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'packages',

        loadChildren: () =>
          import('@packages/packages.module').then((m) => m.PackagesModule),
      },
      {
        path: 'details',

        loadChildren: () =>
          import('@destinations/destinations.module').then(
            (m) => m.DestinationsModule,
          ),
      },
      {
        path: 'gallery',

        loadChildren: () =>
          import('@gallery/gallery.module').then((m) => m.GalleryModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
