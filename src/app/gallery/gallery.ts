import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-container">
      <h2>Our Solar Installation Projects in Bihar</h2>
      <p class="gallery-desc">View our successful solar panel installations across Samastipur, Muzaffarpur, Darbhanga and neighboring districts.</p>
      <div class="grid">
        <div class="item" *ngFor="let img of images">
          <img [src]="'assets/galleryImages/' + img.file" [alt]="img.altText" [title]="img.title">
        </div>
      </div>
      <br>
      <button class="back-btn" (click)="goToHome()">Back to Home</button>
    </div>
  `,
  styles: [`
    .gallery-container { padding: 50px; text-align: center; max-width: 1200px; margin: 0 auto; box-sizing: border-box; }
    .gallery-container h2 { color: #2c3e50; margin-bottom: 5px; }
    .gallery-desc { color: #666; margin-bottom: 40px; font-size: 1.1rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 30px; }
    .item { display: block; overflow: hidden; border-radius: 8px; }
    .item img { width: 100%; height: 250px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: block; transition: transform 0.3s ease; }
    .item img:hover { transform: scale(1.05); }
    .back-btn { background: #f39c12; color: white; border: none; padding: 12px 24px; font-size: 16px; font-weight: bold; border-radius: 5px; cursor: pointer; transition: 0.3s; margin-top: 40px; }
    .back-btn:hover { background: #e67e22; }
    
    @media (max-width: 768px) {
      .gallery-container { padding: 30px 15px; }
      .grid { grid-template-columns: 1fr; }
      .back-btn { width: 100%; padding: 15px; }
    }
  `]
})
export class GalleryComponent {

  constructor(private router: Router) { };
  // Add your filenames here. Put these files in src/assets/images/gallery/
  images = [
    { file: 'project1.jpg', altText: 'Residential rooftop solar panel installation in Samastipur by Maa Veena Power Zone', title: 'Rooftop Solar in Samastipur' },
    { file: 'project2.jpg', altText: 'Commercial ON-Grid solar power plant in Muzaffarpur Bihar', title: 'ON-Grid Solar in Muzaffarpur' },
    { file: 'project3.jpg', altText: 'Solar inverter and battery setup for home in Darbhanga under PM Surya Ghar Yojana', title: 'Hybrid Solar Setup in Darbhanga' },
    { file: 'project4.jpg', altText: 'Off-grid solar installation with mounting structure in North Bihar', title: 'Solar EPC Project in Bihar' }
  ];

  goToHome() {
    this.router.navigate(['/']);
  }
}