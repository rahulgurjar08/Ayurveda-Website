"use client";

import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";
import { useApp } from "@/context/AppContext";

/* =========================================================
   IMAGES
========================================================= */

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=85",

  clinic:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=90",

  herbs:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=90",

  help:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=90",
};

/* =========================================================
   ICONS
========================================================= */

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 3.2C12.7 2.7 5.1 5.7 4 12.1c-.7 4.1 2.1 7 5.8 7 6.5 0 9.7-7.8 11-15.9Z" />
      <path d="M3.5 21c3.1-5.1 7.1-8.2 13.3-11.1" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h3l1.5 4-2 1.5a16 16 0 0 0 6 6L17 12l4 1.5v3c0 1.1-.9 2-2 2C10.7 18.5 5.5 13.3 5.5 5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 3-7.2 18-3.4-7.4L3 10.2 21 3Z" />
      <path d="m10.4 13.6 4.4-4.4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 20 6v5c0 5.2-3.3 8.8-8 10-4.7-1.2-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.8-5" />
    </svg>
  );
}

function EnvironmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4C11 4 5 7 5 13c0 4 3 7 7 7 6 0 8-6 8-16Z" />
      <path d="M4 21c3-5 7-8 13-11" />
    </svg>
  );
}

function TreatmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4v16M16 4v16M4 8h16M4 16h16" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 8.7c0 6.1-8.8 11.1-8.8 11.1S3.2 14.8 3.2 8.7A5.2 5.2 0 0 1 12 5.6a5.2 5.2 0 0 1 8.8 3.1Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

function NewsletterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const { addEnquiry } = useApp();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  function handleNewsletter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

 
  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const treatment = formData.get("treatment")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (name && phone) {
      addEnquiry({
        name,
        phone,
        email,
        treatment: treatment || "General Enquiry",
        concern: message,
        source: "contact",
      });
    }

    setContactSubmitted(true);

    const whatsappNumber = "918239239249";

    const whatsappMessage = `
New Contact Form Enquiry 🌿

Name: ${name}
Phone: ${phone}
Email: ${email}
Interested Treatment: ${treatment}

Message:
${message}

--------------------------------
Sent from Ayurveda Website
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Form reset
    form.reset();
  };

  return (
    <main className={styles.contactPage}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.contactHero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <LeafIcon />
              <span>We&apos;re Here for You</span>
            </div>

            <h1>
              We&apos;re Here to Help
              <br />
              <span>You Live a Healthier Life</span>
            </h1>

            <p className={styles.heroDescription}>
              Have questions about your health or our natural wellness
              treatments? We&apos;re always happy to listen, guide, and help
              you find the right path toward better health.
            </p>

            <div className={styles.heroActions}>
              <a href="#contact-form" className={styles.primaryButton}>
                Send Us a Message
                <span>→</span>
              </a>

              <a href="#clinic" className={styles.secondaryButton}>
                Visit Our Clinic
              </a>
            </div>

            <div className={styles.heroMiniInfo}>
              <div className={styles.miniInfoItem}>
                <div className={styles.miniIcon}>
                  <PhoneIcon />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>+91 82392 39249</strong>
                </div>
              </div>

              <div className={styles.miniInfoItem}>
                <div className={styles.miniIcon}>
                  <CalendarIcon />
                </div>

                <div>
                  <span>Appointments</span>
                  <strong>Available Daily</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageShape}>
              <img
                src={IMAGES.hero}
                alt="Natural wellness consultation"
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroFloatingCard}>
              <div className={styles.floatingIcon}>
                <LeafIcon />
              </div>

              <div>
                <strong>Natural Wellness</strong>
                <span>Personalized care for you</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}

      <section className={styles.contactMain}>
        <div className={styles.contactContainer}>
          {/* CONTACT INFO */}

          <div className={styles.contactInfo}>
            <div className={styles.sectionEyebrow}>
              <LeafIcon />
              CONTACT US
            </div>

            <h2>
              Let&apos;s Start a
              <br />
              <span>Conversation</span>
            </h2>

            <p className={styles.contactIntro}>
              Whether you&apos;re looking for answers, need help choosing a
              treatment, or simply want to know more about our approach, feel
              free to reach out.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <PhoneIcon />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+918239239249">+91 82392 39249</a>
                  <small>Mon - Sat, 9 AM - 7 PM</small>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <MailIcon />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:contact.prisminfotech@gmail.com">
                    contact.prisminfotech@gmail.com
                  </a>
                  <small>We reply within 24 hours</small>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <LocationIcon />
                </div>

                <div>
                  <span>Visit Us</span>
                  <strong>Kota</strong>
                  <small>Rajasthan</small>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <ClockIcon />
                </div>

                <div>
                  <span>Working Hours</span>
                  <strong>9:00 AM - 7:00 PM</strong>
                  <small>Sunday: 10 AM - 2 PM</small>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

<div
  className={styles.contactFormCard}
  id="contact-form"
>
  <div className={styles.formHeader}>
    <div className={styles.formIcon}>
      <MailIcon />
    </div>

    <div>
      <h3>Send Us a Message</h3>
      <p>We&apos;ll get back to you as soon as possible.</p>
    </div>
  </div>

  <form
    className={styles.contactForm}
    onSubmit={handleContact}
  >
    {contactSubmitted && (
      <div
        style={{
          backgroundColor: "#eaf5e6",
          color: "#225819",
          padding: "12px 16px",
          borderRadius: "8px",
          marginBottom: "16px",
          fontWeight: 600,
          fontSize: "14px",
          border: "1px solid #bce3b2",
        }}
      >
        ✓ Your inquiry has been submitted and recorded! Our team will get back to you shortly.
      </div>
    )}

    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
        />
      </div>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="email">Email Address</label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="treatment">
        Interested Treatment
      </label>

      <select
        id="treatment"
        name="treatment"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Select a treatment
        </option>

        <option value="Ayurvedic Consultation">
          Ayurvedic Consultation
        </option>

        <option value="Panchakarma">
          Panchakarma
        </option>

        <option value="Ayurvedic Massage">
          Ayurvedic Massage
        </option>

        <option value="Wellness Therapy">
          Wellness Therapy
        </option>

        <option value="Other">
          Other
        </option>
      </select>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="message">
        Your Message
      </label>

      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Tell us how we can help you..."
        required
      />
    </div>

    <div className={styles.formBottom}>
      <div className={styles.formPrivacy}>
        <ShieldIcon />

        <span>
          Your information is safe and will only be used
          to contact you.
        </span>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
      >
        <span>Send Message</span>
        <SendIcon />
      </button>
    </div>
  </form>
</div>
        </div>
      </section>

      {/* =====================================================
          VISIT OUR CLINIC
      ===================================================== */}

      <section
        className={styles.clinicSection}
        id="clinic"
      >
        <div className={styles.clinicContainer}>
          <div className={styles.clinicImageCard}>
            <img
              src={IMAGES.clinic}
              alt="Wellness clinic"
              className={styles.clinicImage}
            />

            <div className={styles.clinicImageOverlay}>
              <span>Peaceful Space</span>
              <strong>Designed for Your Wellness</strong>
            </div>
          </div>

          <div className={styles.clinicContent}>
            <div className={styles.sectionEyebrow}>
              <LeafIcon />
              VISIT OUR CLINIC
            </div>

            <h2>
              A Space Designed
              <br />
              <span>for Your Wellness</span>
            </h2>

            <p>
              Step into a calm and welcoming environment where traditional
              wellness wisdom meets modern comfort. Our clinic is designed to
              help you slow down, reconnect, and focus on your health.
            </p>

            <div className={styles.clinicPoints}>
              <div className={styles.clinicPoint}>
                <div>
                  <EnvironmentIcon />
                </div>

                <span>
                  Peaceful &amp; natural
                  <br />
                  environment
                </span>
              </div>

              <div className={styles.clinicPoint}>
                <div>
                  <TreatmentIcon />
                </div>

                <span>
                  Personalized
                  <br />
                  treatments
                </span>
              </div>

              <div className={styles.clinicPoint}>
                <div>
                  <CareIcon />
                </div>

                <span>
                  Caring &amp; experienced
                  <br />
                  practitioners
                </span>
              </div>
            </div>

            <div className={styles.clinicAddress}>
              <div className={styles.addressIcon}>
                <LocationIcon />
              </div>

              <div>
                <strong>Ayur Wellness Clinic</strong>

                <p>
                  Green Park, New Delhi,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* MAP */}

          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps?q=Green+Park,+New+Delhi,+India&output=embed"
              title="Ayur Wellness Clinic location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className={styles.mapOverlay}>
              <div className={styles.mapPin}>
                <LocationIcon />
              </div>

              <div>
                <strong>Our Clinic</strong>
                <span>Green Park, New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className={styles.faqHelpSection}>
        <div className={styles.faqHelpContainer}>
          <div className={styles.faqSection}>
            <div className={styles.sectionEyebrow}>
              <LeafIcon />
              FAQ
            </div>

            <h2>
              Frequently Asked
              <br />
              <span>Questions</span>
            </h2>

            <p className={styles.faqIntro}>
              Find answers to some of the most common questions our patients
              ask.
            </p>

            <div className={styles.faqList}>
              <details>
                <summary>
                  <span>Do I need an appointment?</span>
                  <ChevronIcon />
                </summary>

                <p>
                  Yes, we recommend booking an appointment so we can give you
                  dedicated time and personalized attention.
                </p>
              </details>

              <details>
                <summary>
                  <span>What should I bring to my first consultation?</span>
                  <ChevronIcon />
                </summary>

                <p>
                  Please bring any previous health reports, current
                  medications, and a brief history of your health concerns.
                </p>
              </details>

              <details>
                <summary>
                  <span>How long does a consultation take?</span>
                  <ChevronIcon />
                </summary>

                <p>
                  A first consultation usually takes around 45–60 minutes,
                  depending on your individual needs.
                </p>
              </details>

              <details>
                <summary>
                  <span>Can I consult online?</span>
                  <ChevronIcon />
                </summary>

                <p>
                  Yes. Online consultations can be arranged for patients who
                  cannot visit our clinic in person.
                </p>
              </details>
            </div>
          </div>

          {/* IMMEDIATE HELP */}

          <div className={styles.helpCard}>
            <div className={styles.helpImageWrap}>
              <img
                src={IMAGES.help}
                alt="Wellness support"
                className={styles.helpImage}
              />
            </div>

            <div className={styles.helpContent}>
              <div className={styles.helpIcon}>
                <PhoneIcon />
              </div>

              <span className={styles.helpLabel}>
                NEED IMMEDIATE HELP?
              </span>

              <h3>
                We&apos;re Just
                <br />
                a Call Away
              </h3>

              <p>
                If you have a question that can&apos;t wait, give us a call.
                Our friendly team is ready to help.
              </p>

              <a
                href="tel:+918239239249"
                className={styles.helpButton}
              >
                <PhoneIcon />
                +91 82392 39249
              </a>

              <span className={styles.helpHours}>
                Mon - Sat · 9 AM - 7 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletterText}>
            <div className={styles.newsletterIcon}>
              <NewsletterIcon />
            </div>

            <div>
              <span>STAY CONNECTED</span>

              <h2>
                Get Wellness Tips
                <br />
                <strong>in Your Inbox</strong>
              </h2>

              <p>
                Simple, natural tips for a healthier and happier life.
              </p>
            </div>
          </div>

          {!subscribed ? (
            <form
              className={styles.newsletterForm}
              onSubmit={handleNewsletter}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                required
              />

              <button type="submit">
                Subscribe
                <span>→</span>
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <LeafIcon />

              <span>
                Thank you! You&apos;re subscribed to our wellness tips.
              </span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}