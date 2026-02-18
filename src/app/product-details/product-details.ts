import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="product-detail-container" *ngIf="product">
      <div class="product-header">
        <button routerLink="/" class="back-link"><i class="fa fa-arrow-left"></i> Back to Products</button>
        <h2>{{ product.name }}</h2>
        <p class="subtitle">Next-Generation Solar Engineering by Maa Veena Power Zone</p>
      </div>

      <div class="product-grid">
        <div class="product-main">
          <section class="info-block">
            <h3>Advanced Technology Overview</h3>
            <p class="description-text">{{ product.fullDescription }}</p>
          </section>

          <section class="benefit-grid">
            <div class="benefit-card" *ngFor="let benefit of product.keyBenefits">
              <i class="fa fa-check-circle"></i>
              <div>
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.text }}</p>
              </div>
            </div>
          </section>
          
          <div class="trust-badges">
            <div class="badge"><i class="fa fa-certificate"></i> IS:14286 Certified</div>
            <div class="badge"><i class="fa fa-shield-virus"></i> PID Resistant</div>
            <div class="badge"><i class="fa fa-temperature-low"></i> Thermal Optimized</div>
          </div>
        </div>

        <div class="product-specs">
          <h3>Technical Datasheet</h3>
          <p class="spec-intro">Engineering Evaluation Parameters:</p>
          <ul>
            <li *ngFor="let spec of product.specs">
              <span class="spec-label">{{ spec.label }}</span>
              <span class="spec-value">{{ spec.value }}</span>
            </li>
          </ul>
          <button class="whatsapp-btn" (click)="sendWhatsApp()">
            <i class="fab fa-whatsapp"></i> Get Quote on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-detail-container { max-width: 1240px; margin: 120px auto 60px; padding: 20px; font-family: 'Inter', system-ui, sans-serif; }
    .product-header { background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%); padding: 50px 40px; border-radius: 20px; color: white; margin-bottom: 40px; }
    .subtitle { opacity: 0.8; margin-top: 10px; font-size: 1.1rem; }
    .back-link { background: rgba(255,255,255,0.15); border: none; color: white; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-bottom: 20px; display: inline-flex; align-items: center; gap: 8px; transition: 0.3s; text-decoration: none; }
    .back-link:hover { background: rgba(255,255,255,0.25); }
    
    .product-grid { display: grid; grid-template-columns: 1.8fr 1fr; gap: 50px; }
    .description-text { line-height: 1.9; color: #34495e; font-size: 1.15rem; white-space: pre-line; }
    
    .benefit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px; }
    .benefit-card { display: flex; gap: 15px; padding: 20px; background: #fdfcfb; border: 1px solid #eee; border-radius: 12px; }
    .benefit-card i { color: #27ae60; font-size: 1.4rem; }
    .benefit-card h4 { margin: 0 0 5px 0; color: #2c3e50; }
    .benefit-card p { margin: 0; font-size: 0.95rem; color: #7f8c8d; }

    .product-specs { background: #ffffff; padding: 35px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); height: fit-content; position: sticky; top: 100px; border: 1px solid #f0f0f0; }
    .spec-intro { font-size: 0.9rem; color: #95a5a6; margin-bottom: 20px; }
    .product-specs li { padding: 15px 0; border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center; }
    .spec-label { color: #7f8c8d; font-size: 0.95rem; }
    .spec-value { color: #2c3e50; font-weight: 700; text-align: right; }
    
    .trust-badges { display: flex; gap: 15px; margin-top: 40px; }
    .badge { background: #f0f4f8; color: #2c3e50; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 0.85rem; display: flex; align-items: center; gap: 10px; }
    
    .whatsapp-btn { width: 100%; background: #25D366; color: white; border: none; padding: 18px; border-radius: 12px; font-weight: 800; cursor: pointer; margin-top: 30px; font-size: 1rem; transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px; }
    .whatsapp-btn:hover { background: #128C7E; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3); }

    @media (max-width: 992px) { .product-grid { grid-template-columns: 1fr; } .benefit-grid { grid-template-columns: 1fr; } .product-specs { position: static; } }
  `]
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  allProducts = [
    {
      id: 'solar-panels',
      name: 'N-Type HJT & TOPCon Bifacial Modules',
      fullDescription: `We provide the pinnacle of solar energy technology: N-Type Bifacial Modules using HJT and TOPCon cell architectures. 

      1. N-Type HJT (Heterojunction): These cells combine crystalline and amorphous silicon, resulting in the industry's best "Temperature Coefficient." While standard panels lose efficiency in Bihar's 45°C+ summer heat, HJT modules maintain peak performance.
      
      2. TOPCon Architecture: The latest in "Tunnel Oxide" technology, offering 22-23.5% module efficiency. It ensures your system generates power even during the thick fog of North India's winters.
      
      3. Bifacial Dual-Glass Design: Captures direct sunlight from the front and reflected light from the back. This dual-sided harvesting can increase your total energy generation by up to 30%.`,
      keyBenefits: [
        { title: 'Elite Heat Tolerance', text: 'Optimized for high-temperature climates like Bihar with minimal power drop.' },
        { title: 'Zero LID Degradation', text: 'N-Type silicon prevents initial power loss, ensuring a 30-year performance life.' }
      ],
      specs: [
        { label: 'Cell Technology', value: 'N-Type HJT / TOPCon' },
        { label: 'Module Efficiency', value: '22.5% - 23.5%' },
        { label: 'Temp. Coefficient', value: '-0.26%/°C' },
        { label: 'Glass Type', value: '2.0mm Dual Glass' }
      ]
    },
    {
      id: 'solar-inverters',
      name: 'Smart On-Grid & Hybrid Inverters',
      fullDescription: `Our smart inverters act as the brain of your solar plant. 

      On-Grid Systems: Designed for maximum ROI via Net Metering. These inverters export excess power to the government grid, effectively reversing your meter.
      
      Hybrid Intelligence: The best solution for areas with frequent power cuts. It manages panels, batteries, and the grid simultaneously. During a power failure, it switches to "Island Mode" in under 20ms—meaning your lights, fans, and computers stay on without a single flicker.
      
      MPPT Performance: Built-in Maximum Power Point Tracking extracts the most energy possible even on cloudy or hazy days.`,
      keyBenefits: [
        { title: 'Remote App Monitoring', text: 'Monitor generation, savings, and system health in real-time on your phone.' },
        { title: 'UPS-Grade Switching', text: 'Seamless transition during grid failure to protect sensitive appliances.' }
      ],
      specs: [
        { label: 'Max. Efficiency', value: '98.6%' },
        { label: 'Switching Time', value: '< 20ms (Hybrid)' },
        { label: 'Enclosure Rating', value: 'IP65 (Outdoor)' },
        { label: 'Communication', value: 'Wi-Fi / GPRS / RS485' }
      ]
    },
    {
      id: 'solar-structures',
      name: 'High-Strength Galvanized & Aluminium Structures',
      fullDescription: `In India, the durability of a solar plant depends on its foundation. We provide the industry's most trusted mounting solutions:

  1. Hot-Dip Galvanized (HDG) Steel: This is the backbone of Indian solar installations. Unlike local painted iron, our HDG structures are dipped in molten zinc (IS 2062 standard). This creates a rust-proof shield that lasts 25+ years, even in Bihar’s humid and rainy climate.
  
  2. Anodized Aluminium Railings: For premium residential rooftops and tin-shade factories, we use high-grade Aluminium (AL-6005-T5). It is lightweight, 100% rust-proof, and puts significantly less load on your building's ceiling.
  
  Every structure we install is wind-tunnel tested to withstand speeds of up to 150 km/h, ensuring your panels stay safe during heavy monsoon storms and cyclones.`,
      keyBenefits: [
        { title: 'Anti-Corrosion Tech', text: '80-micron Zinc coating or Anodized finish ensures zero rust for decades.' },
        { title: 'Cyclone-Ready Design', text: 'Heavy-duty purlins and SS304 fasteners prevent panel lift during high winds.' }
      ],
      specs: [
        { label: 'Steel Grade', value: 'IS 2062 / HDG (80 Microns)' },
        { label: 'Aluminium Grade', value: 'AL-6005-T5 (Anodized)' },
        { label: 'Hardware', value: 'SS304 Stainless Steel' },
        { label: 'Design Life', value: '25 - 30 Years' }
      ]
    },
    { 
      id: 'batteries', 
      name: 'Advanced LiFePO4 & Solar Tubular Storage', 
      fullDescription: `Modern solar storage focuses on depth and speed. 

      LiFePO4 (Lithium Iron Phosphate): The safest battery technology in the world. Non-combustible, fast-charging (0-100% in 3 hours), and built for 10+ years of daily use.
      
      Solar Tubular (C10): For customers preferring traditional lead-acid, we provide C10-rated tubular batteries. Unlike standard C20 inverter batteries, C10 is designed for the high-frequency discharge and recharge cycles of a solar system, ensuring longer backup and better recovery.`, 
      keyBenefits: [
        { title: 'Ultra-Safe Chemistry', text: 'LiFePO4 technology is thermally stable and safe for indoor installation.' },
        { title: 'Long Cycle Life', text: 'Lithium systems offer 5,000+ cycles compared to 1,200 in traditional batteries.' }
      ],
      specs: [
        { label: 'Chemistry', value: 'LiFePO4 / Lead-Acid' },
        { label: 'Depth of Discharge', value: '90% (Li) / 70% (Lead)' },
        { label: 'Service Life', value: 'Up to 10+ Years' },
        { label: 'Charging Rate', value: '0.5C to 1C (Lithium)' }
      ] 
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.product = this.allProducts.find(p => p.id === productId);
    });
  }

  sendWhatsApp() {
    if (!this.product) return;
    const phoneNumber = '919709877100';
    const message = `Hello Maa Veena Power Zone, I'm interested in the ${this.product.name}. Please provide a technical quote and installation details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }
}