import { Component, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  products = [
    { id: 'solar-panels', name: 'Solar Panels', desc: 'High-efficiency monocrystalline panels for maximum power generation.' },
    { id: 'solar-inverters', name: 'Solar Inverters', desc: 'Smart inverters for seamless DC to AC conversion.' },
    { id: 'solar-structures', name: 'Mounting Structures', desc: 'Durable and rust-proof galvanized iron structures.' },
    { id: 'batteries', name: 'Solar Batteries', desc: 'Advanced LiFePO4 batteries for long-lasting backup.' }
  ];

  heroSlides = [
    { image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', title: 'Powering the Future with Solar', subtitle: 'Pioneering EPC solutions in Samastipur and beyond.' }
  ];

  stats = [
    { count: 50, label: 'Projects Completed', current: 0 },
    { count: 2, label: 'Years Experience', current: 0 },
    { count: 5, label: 'Cities Covered', current: 0 }
  ];

  currentYear = new Date().getFullYear();
  private observer: IntersectionObserver | null = null;
  private statObserver: IntersectionObserver | null = null;
  private animationStarted = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.setupScrollAnimations();
    this.setupStatCounter();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    if (this.statObserver) this.statObserver.disconnect();
  }

  private setupScrollAnimations() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      this.observer!.observe(el);
    });
  }

  private setupStatCounter() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    this.statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animationStarted = true;
          this.animateStats();
        }
      });
    }, { threshold: 0.1 }); // Lower threshold in case section is large

    this.statObserver.observe(statsSection);
  }

  private animateStats() {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    this.stats.forEach(stat => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Easing function for smooth stop
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.round(stat.count * easeOutQuad(progress));

        if (frame >= totalFrames) {
          stat.current = stat.count;
          clearInterval(counter);
        } else {
          stat.current = currentCount;
        }
        this.cdr.detectChanges(); // Trigger Angular UI update
      }, frameDuration);
    });
  }

  productsClick() {
    const productSection = document.getElementById('products');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  contactUsClick() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
