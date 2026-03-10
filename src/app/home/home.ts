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
    { id: 'solar-panels', name: 'Solar Panels', desc: 'High-efficiency N-Type Bifacial monocrystalline solar panels for maximum power generation in Bihar\'s climate.' },
    { id: 'solar-inverters', name: 'Solar Inverters', desc: 'Smart on-grid & hybrid inverters with MPPT technology for seamless DC to AC power conversion.' },
    { id: 'solar-structures', name: 'Mounting Structures', desc: 'Hot-dip galvanized & aluminium mounting structures built to withstand Bihar\'s monsoon storms.' },
    { id: 'batteries', name: 'Solar Batteries', desc: 'Advanced LiFePO4 lithium batteries for reliable long-lasting solar energy storage and backup.' }
  ];

  heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Best Solar Panel Installation in Samastipur, Muzaffarpur & Darbhanga',
      subtitle: 'Bihar\'s trusted solar energy company — Expert rooftop solar installation, on-grid & hybrid solar systems with PM Surya Ghar Yojana subsidy support. Save up to 90% on your electricity bill!'
    }
  ];

  stats = [
    { count: 50, label: 'Solar Projects Completed in Bihar', current: 0 },
    { count: 2, label: 'Years of Solar Expertise', current: 0 },
    { count: 5, label: 'Cities Served Across North Bihar', current: 0 }
  ];

  whyChooseUs = [
    { icon: '🏆', title: 'Trusted Solar Experts', desc: 'Experienced solar EPC contractor with 50+ successful installations across Samastipur, Muzaffarpur & Darbhanga.' },
    { icon: '💰', title: 'Government Subsidy Support', desc: 'We help you avail up to 40% subsidy under PM Surya Ghar Muft Bijli Yojana. Complete paperwork assistance.' },
    { icon: '🔧', title: 'End-to-End Solar EPC', desc: 'From free site survey to installation, net metering & maintenance — we handle everything for your solar project.' },
    { icon: '⚡', title: 'Premium Solar Products', desc: 'We use only Tier-1 solar panels, inverters & batteries from top brands for 25+ years of reliable performance.' },
    { icon: '📞', title: 'Free Consultation & Site Visit', desc: 'Call +91 9709877100 for a free solar consultation and site survey anywhere in North Bihar.' },
    { icon: '🛡️', title: '25-Year Performance Warranty', desc: 'All our solar installations come with comprehensive warranty and lifetime after-sales support.' }
  ];

  serviceAreas = [
    { city: '📍 Samastipur', desc: 'Leading solar panel installation company in Samastipur. Residential & commercial rooftop solar with net metering. Visit us at Jail Chowk, Tajpur Road.' },
    { city: '📍 Muzaffarpur', desc: 'Best solar energy solutions in Muzaffarpur. On-grid, off-grid & hybrid solar systems. Affordable solar panel prices with government subsidy.' },
    { city: '📍 Darbhanga', desc: 'Top-rated solar installer in Darbhanga. Expert solar panel fitting for homes, shops & factories. PM Surya Ghar Yojana approved vendor.' },
    { city: '📍 Begusarai', desc: 'Professional solar panel installation in Begusarai. Quality rooftop solar power systems with up to 40% government subsidy.' },
    { city: '📍 Madhubani', desc: 'Reliable solar energy company in Madhubani. Complete solar EPC services for residential and commercial projects.' },
    { city: '📍 All North Bihar', desc: 'Serving all districts of North Bihar including Sitamarhi, Sheohar, Supaul, Khagaria & more with premium solar solutions.' }
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
