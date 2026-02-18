import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { home } from './home/home';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery';
import { ProductDetailsComponent } from './product-details/product-details';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true, // <--- Ensure this is here
  imports: [RouterOutlet, home, RouterModule, GalleryComponent, CommonModule, ProductDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    googleFormUrl: SafeResourceUrl;
  private rawUrl = "https://form.typeform.com/to/VhsIlIGW";
  //protected readonly title = signal('maa-veena-project');

    constructor(private sanitizer: DomSanitizer) {
    this.googleFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
  }

  title = 'MAA VEENA POWER ZONE';
  isMenuOpen = false;
  isModalOpen = false;

    navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/',fragment: 'about' },
    { name: 'Products', link: '/',fragment: 'products' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Contact', link: '/', fragment: 'contact' }
  ];

    toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  openQuoteModal() {
    this.isModalOpen = true;
  }

  closeQuoteModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}
