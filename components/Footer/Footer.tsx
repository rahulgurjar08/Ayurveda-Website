import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col">

          <div className="footer-logo">
            <div className="logo-icon">🌿</div>

            <div>
              <h3>Ayurveda</h3>
              <span>Healing Naturally</span>
            </div>
          </div>

          <p>
            Ayurveda is the ancient science of life that focuses on achieving
            balance in body, mind and soul for a healthier and happier life.
          </p>

          <div className="social-icons">

{/* Facebook */}
<a href="#" aria-label="Facebook">
  <svg viewBox="0 0 24 24">
    <path
      d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"
    />
  </svg>
</a>

{/* Instagram */}
<a href="#" aria-label="Instagram">
  <svg viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      className="instagram-dot"
    />
  </svg>
</a>

{/* WhatsApp */}
<a href="#" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24">
    <path
      d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.35A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.13l-.3-.18-3.08.8.82-3-.2-.31A8 8 0 1 1 12 20zm4.4-5.9c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.61-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
    />
  </svg>
</a>

{/* YouTube */}
<a href="#" aria-label="YouTube">
  <svg viewBox="0 0 24 24">
    <path
      d="M23 12s0-3.5-.4-5.1c-.2-.9-.9-1.6-1.8-1.8C19.2 4.7 12 4.7 12 4.7s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.5 1 12 1 12s0 3.5.4 5.1c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5.1.4-5.1z"
    />

    <path
      className="youtube-play"
      d="M10 8.5v7l6-3.5-6-3.5z"
    />
  </svg>
</a>

</div>

        </div>

        {/* Quick Links */}
        <div className="footer-col">

          <h4>Quick Links</h4>

          <Link href="/">Home</Link>
          <Link href="/about-doctor">About Doctor</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>

        </div>

        {/* Services */}
        <div className="footer-col">

          <h4>Our Services</h4>

          <Link href="#">Consultation</Link>
          <Link href="#">Panchakarma Therapy</Link>
          <Link href="#">Herbal Treatments</Link>
          <Link href="#">Diet & Nutrition</Link>
          <Link href="#">Wellness Programs</Link>

        </div>

        {/* Contact */}
        <div className="footer-col">

          <h4>Contact Us</h4>

          <div className="contact-item">
            📞 +91 82392 39249
          </div>

          <div className="contact-item">
            ✉ contact.prisminfotech@gmail.com 
          </div>

          <div className="contact-item">
            📍 Kota
            <br />
           Rajsthan
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <p>
          © 2026 Ayurvedic Doctor. All Rights Reserved.
        </p>

        <div className="footer-links">
          <Link href="#">Privacy Policy</Link>
          <span>|</span>
          <Link href="#">Terms & Conditions</Link>
        </div>

      </div>

    </footer>
  );
}