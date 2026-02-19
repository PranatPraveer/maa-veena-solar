import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class home {

  currentYear = new Date().getFullYear();


  products = [
    {
      id: 'batteries',
      name: 'Batteries',
      desc: 'We deal in high-performance Lithium-Ion, Lithium Iron Phosphate (LiFePO₄), and Lead-Acid solar batteries from trusted brands, offering reliable energy storage solutions for residential, commercial, and industrial solar systems. Our batteries ensure long backup time, enhanced safety, and efficient power management.',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'solar-structures',
      name: 'Solar Structures',
      desc: 'Durable and weather-resistant mounting structures for solar panels.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'solar-panels',
      name: 'Solar Panels',
      desc: 'Authorized dealers of advanced solar panel technologies including HJT and N-Type TOPCon bifacial modules, offering higher efficiency, better durability, and improved long-term performance.',
      img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'solar-inverters',
      name: 'Solar Inverters',
      desc: 'We deal in high-quality On-Grid, Off-Grid, and Hybrid solar inverters from trusted brands, offering reliable and efficient power conversion solutions for residential, commercial, and industrial solar installations. We ensure genuine products, competitive pricing, and complete customer support.',
      img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80'
    }

  ];

  stats = [
    { count: 50, label: 'Projects Done' },
    { count: 100, label: 'Happy Clients' },
    { count: 2, label: 'Years Experience' }
  ];



  heroSlides = [
    {
      title: 'MAA VEENA POWER ZONE',
      subtitle: 'Sustainable Energy for a Brighter Tomorrow',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80'
    }
  ];



  productsClick() {
    const productSection = document.getElementById('products');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  contactUsClick(){
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

ngAfterViewInit() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('stats-section')) {
          document.querySelectorAll('.stat-number').forEach(el => el.classList.add('start-count'));
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Watch both sections
  const statsSec = document.querySelector('.stats-section');
  
  if (statsSec) observer.observe(statsSec);
}
}
