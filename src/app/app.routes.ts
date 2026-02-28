import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // Path to your home.ts
import { GalleryComponent } from './gallery/gallery'; // Path to your gallery.ts
import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirects errors back to home
];