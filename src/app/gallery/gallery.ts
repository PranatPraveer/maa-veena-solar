import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-container">
      <h2>Project Gallery</h2>
      <div class="grid">
        <div class="item" *ngFor="let img of images">
          <img [src]="'/assets/galleryImages/' + img" alt="Solar Project">
        </div>
      </div>
      <br>
      <button (click)="goToHome()")>Back to Home</button>
    </div>
  `,
  styles: [`
    .gallery-container { padding: 50px; text-align: center; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px; }
    .item img { width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
  `]
})
export class GalleryComponent {

  constructor(private router: Router) {};
  // Add your filenames here. Put these files in src/assets/images/gallery/
  images = ['project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'];

  goToHome() {
    this.router.navigate(['/']);
  }
}