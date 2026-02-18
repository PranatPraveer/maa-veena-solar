import { Routes } from '@angular/router';
import { home } from './home/home'; // Path to your home.ts
import { GalleryComponent } from './gallery/gallery'; // Your new component
import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: home },           // Loads Home by default
  { path: 'gallery', component: GalleryComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '' }           // Redirects errors back to home
];