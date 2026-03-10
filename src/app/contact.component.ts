import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact section" id="contact">
      <span class="sub-title" style="text-align: center; width: 100%;">Contact Us for Solar Installation</span>
      <h2 class="section-title" style="text-align: center; width: 100%; margin-bottom: 2rem; color: #2c3e50;">Get Your Free Solar Consultation</h2>
      <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: #666; font-size: 1.1rem;">
        Serving Samastipur, Muzaffarpur, Darbhanga and all of North Bihar. Contact Maa Veena Power Zone to lower your electricity bill today.
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:uniquetiwari1971@gmail.com" style="color: inherit; text-decoration: none;">uniquetiwari1971&#64;gmail.com</a>
              </p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">📍</div>
            <div>
              <h4>Head Office</h4>
              <p>Jail Chowk, Tajpur Road, Samastipur, Bihar 848101</p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">📞</div>
            <div>
              <h4>Phone & WhatsApp</h4>
              <p>
                <a href="tel:+919709877100" style="color: inherit; text-decoration: none;">+91 9709877100</a>
              </p>
            </div>
          </div>
          <div class="info-card">
            <div class="info-icon">💼</div>
            <div>
              <h4>Service Status</h4>
              <p class="status-available">Available for Bookings in Muzaffarpur, Samastipur & Darbhanga</p>
            </div>
          </div>
        </div>

        <form 
          class="contact-form" 
          action="https://formspree.io/f/mpqjnvwa" 
          method="POST"
          (submit)="handleSubmit($event)"
          aria-label="Contact form for solar panel quotation"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address (Optional)" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number (e.g., 9709877100)" required />
          </div>
          <div class="form-group">
            <label for="city">Your City</label>
            <input type="text" id="city" name="city" placeholder="e.g., Samastipur, Muzaffarpur, Darbhanga" required />
          </div>
          <div class="form-group">
            <label for="bill">Monthly Electricity Bill</label>
            <input type="text" id="bill" name="bill" placeholder="e.g., ₹2000" required />
          </div>
          <div class="form-group">
            <label for="message">Message / Enquiry</label>
            <textarea id="message" name="message" rows="4" placeholder="I'm interested in rooftop solar panel installation..." required></textarea>
          </div>
          <button type="submit" class="submit-btn" [class.sent]="formSent()">
            {{ formSent() ? '✓ Sending Enquiry...' : 'Get Free Solar Quote' }}
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact.section {
      padding: 60px 0;
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
      align-items: start;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .info-card:hover {
      border-color: #f39c12;
      transform: translateY(-2px);
    }

    .info-icon {
      font-size: 1.5rem;
    }

    .info-card h4 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.15rem;
    }

    .info-card p {
      font-size: 0.95rem;
      color: #1e293b;
    }
    
    .info-card p a:hover {
      color: #f39c12;
    }

    .status-available {
      color: #10b981 !important;
      font-weight: 500;
    }
    
    .contact-form {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    }

    .form-group {
      margin-bottom: 1.25rem;
    }

    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 0.5rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      color: #0f172a;
      font-family: inherit;
      font-size: 0.9rem;
      transition: border-color 0.2s;
      resize: vertical;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #f39c12;
      box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.2);
    }

    .submit-btn {
      width: 100%;
      padding: 0.85rem;
      background: #f39c12;
      color: white;
      font-weight: 600;
      font-size: 0.95rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-btn:hover {
      background: #e67e22;
      transform: translateY(-1px);
    }

    .submit-btn.sent {
      background: #10b981;
      color: white;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  formSent = signal(false);

  // Set the correct formspree if available
  hasFormspreeUrl = true;

  handleSubmit(event: Event) {
    if (!this.hasFormspreeUrl) {
      event.preventDefault();
      alert('Formspree URL is not set.');
      return;
    }
    // Using native form action, it posts automatically. Just updating UI
    this.formSent.set(true);
  }
}

