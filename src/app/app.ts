import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { GalleryComponent } from './gallery/gallery';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, GalleryComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  isMenuOpen = false;

  navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/', fragment: 'about' },
    { name: 'Products', link: '/', fragment: 'products' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Contact', link: '/', fragment: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
