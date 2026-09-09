"use client";

import Link from "next/link";
import styles from "./page.module.css";

/* =========================================================
   IMAGE URLS
========================================================= */

const HERO_IMAGE =
  "https://krishiayurvedayoga.com.au/images/treatment-hero.png";

const SERVICES_IMAGE =
  "https://aaftonline-website-new-green.s3.ap-south-1.amazonaws.com/production/images/courses/ayurvedic-wellness/cms-uploads/1777699344776-17d073e9eb27e05f.png";

/* =========================================================
   ICONS
========================================================= */

function LeafIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z" />
      <path d="M4 20c4-6 8-9 14-12" />
    </svg>
  );
}

function CalendarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 9h18" />
      <path d="M8 13h2M14 13h2M8 17h2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

function StethoscopeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7v10c0 6 4 10 10 10s10-4 10-10V7" />
      <path d="M8 7h8M28 7h8" />
      <path d="M12 7c0 3 2 5 5 5" />
      <circle cx="34" cy="31" r="5" />
      <path d="M34 26v-5" />
    </svg>
  );
}

function BowlIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17h34" />
      <path d="M10 17c1 11 6 18 14 18s13-7 14-18" />
      <path d="M16 13c2-4 5-6 8-6s6 2 8 6" />
      <path d="M19 30h10" />
      <path d="M14 39h20" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 37c-9 0-15-5-15-12 6 0 11 2 15 8 4-6 9-8 15-8 0 7-6 12-15 12Z" />
      <path d="M24 33c-5-7-5-15 0-21 5 6 5 14 0 21Z" />
      <path d="M24 33c-9-4-11-10-9-16 6 1 10 7 9 16Z" />
      <path d="M24 33c9-4 11-10 9-16-6 1-10 7-9 16Z" />
      <path d="M11 40h26" />
    </svg>
  );
}

function YogaIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="10" r="4" />
      <path d="M24 14v12" />
      <path d="M24 19 14 24" />
      <path d="M24 19l10 5" />
      <path d="M24 26l-9 9" />
      <path d="M24 26l9 9" />
      <path d="M10 39c4-4 9-5 14-5s10 1 14 5" />
    </svg>
  );
}

function NutritionIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 22h30" />
      <path d="M12 22c1 10 6 15 12 15s11-5 12-15" />
      <path d="M24 37v5" />
      <path d="M17 42h14" />
      <path d="M24 18c0-7 5-10 11-10-1 6-5 10-11 10Z" />
      <path d="M24 18c0-5-3-8-8-9 0 5 3 8 8 9Z" />
    </svg>
  );
}

function StressIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="17" r="8" />
      <path d="M12 40c1-9 6-14 12-14s11 5 12 14" />
      <path d="M20 17h.1M28 17h.1" />
      <path d="M21 21c2 2 4 2 6 0" />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 34c7-8 12-9 18-9 5 0 9 2 14 7" />
      <path d="M13 32c3 4 9 6 15 6 5 0 9-1 12-4" />
      <path d="M17 20c3-4 8-5 12-2 2 2 2 5 0 7" />
      <circle cx="27" cy="14" r="4" />
      <path d="M11 38h27" />
    </svg>
  );
}

function ShirodharaIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h14l-2 7H19l-2-7Z" />
      <path d="M24 15v9" />
      <path d="M24 24c0 4-3 6-3 9" />
      <path d="M14 35c2-3 6-5 10-5s8 2 10 5" />
      <path d="M11 39h26" />
    </svg>
  );
}

function BastiIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 9h18" />
      <path d="M17 9v8c0 5 3 8 7 8s7-3 7-8V9" />
      <path d="M24 25v12" />
      <path d="M18 40h12" />
      <path d="M19 15h10" />
    </svg>
  );
}

function NasyaIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 18c6-7 22-7 28 0" />
      <path d="M14 18v6c0 7 4 12 10 12s10-5 10-12v-6" />
      <path d="M24 36v5" />
      <path d="M19 41h10" />
      <path d="M24 18v9" />
    </svg>
  );
}

function BloodIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 7c-5 8-10 13-10 20a10 10 0 0 0 20 0c0-7-5-12-10-20Z" />
      <path d="M20 28c0 3 2 5 5 5" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="14" r="6" />
      <path d="M12 40c1-9 5-14 12-14s11 5 12 14" />
      <path d="M31 10h6" />
      <path d="M34 7v6" />
    </svg>
  );
}

function SafeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 6l14 5v9c0 10-6 17-14 22C16 37 10 30 10 20v-9l14-5Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="14" />
      <path d="M24 16v9l6 4" />
      <path d="M16 7l-4 4M32 7l4 4" />
    </svg>
  );
}

function ComfortIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="11" width="32" height="26" rx="4" />
      <path d="M14 18h20M14 25h20M14 32h11" />
      <path d="M34 30h.1" />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    title: "Ayurvedic Consultation",
    text: "One-on-one consultation to understand your health concerns and create a personalized treatment plan.",
    icon: <StethoscopeIcon />,
  },
  {
    title: "Panchakarma Therapy",
    text: "Detoxify and rejuvenate your body with authentic Panchakarma treatments for long lasting results.",
    icon: <BowlIcon />,
  },
  {
    title: "Herbal Treatments",
    text: "Natural herbal medicines to treat various acute and chronic health conditions effectively.",
    icon: <LotusIcon />,
  },
  {
    title: "Yoga & Lifestyle Guidance",
    text: "Personalized yoga, diet and lifestyle recommendations to bring balance to body, mind and soul.",
    icon: <YogaIcon />,
  },
  {
    title: "Diet & Nutrition",
    text: "Customized Ayurvedic diet plans to improve digestion, immunity and overall well-being.",
    icon: <NutritionIcon />,
  },
  {
    title: "Stress Management",
    text: "Ayurvedic therapies and techniques to reduce stress, anxiety and improve mental wellness.",
    icon: <StressIcon />,
  },
];

const specialized = [
  {
    title: "Abhyanga Massage",
    text: "Herbal oil massage to improve circulation, relax muscles and nourish the body.",
    icon: <MassageIcon />,
  },
  {
    title: "Shirodhara Therapy",
    text: "Therapeutic oil treatment for the forehead to calm the mind and improve sleep quality.",
    icon: <ShirodharaIcon />,
  },
  {
    title: "Basti Therapy",
    text: "Ayurvedic medicated enema therapy to detoxify and balance the body.",
    icon: <BastiIcon />,
  },
  {
    title: "Nasya Therapy",
    text: "Herbal nasal therapy to clear sinuses, improve respiration and boost head health.",
    icon: <NasyaIcon />,
  },
  {
    title: "Raktamokshana",
    text: "Purification therapy to support blood and treat skin disorders and chronic conditions.",
    icon: <BloodIcon />,
  },
];

const benefits = [
  {
    title: "Experienced Ayurvedic Doctor",
    text: "Expert guidance with years of experience in Ayurvedic medicine.",
    icon: <DoctorIcon />,
  },
  {
    title: "Holistic Healing Approach",
    text: "Treating the root cause and promoting overall wellness.",
    icon: <BowlIcon />,
  },
  {
    title: "Personalized Care",
    text: "Treatment plans tailored specifically to your body type and health needs.",
    icon: <LeafIcon size={38} />,
  },
  {
    title: "Long Lasting Results",
    text: "Our therapies focus on long term relief and disease prevention.",
    icon: <ResultIcon />,
  },
  {
    title: "Natural & Safe Therapies",
    text: "We use natural herbs and authentic Ayurvedic methods for healing.",
    icon: <SafeIcon />,
  },
  {
    title: "Comfortable Environment",
    text: "Peaceful and hygienic space for your healing journey.",
    icon: <ComfortIcon />,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <div className={styles.container}>
            <span>⌂</span>
            <Link href="/">Home</Link>
            <b>›</b>
            <span>Services</span>
          </div>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span>OUR SERVICES</span>
              <LeafIcon size={14} />
            </div>

            <h1>
              Comprehensive Ayurvedic
              <br />
              <em>Care For Your Well-Being</em>
            </h1>

            <div className={styles.heroDecoration}>
              <span />
              <LeafIcon size={14} />
              <span />
            </div>

            <p>
              We offer a range of authentic Ayurvedic services and
              therapies to help you achieve optimal health,
              naturally and holistically.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/book-appointment"
                className={styles.primaryButton}
              >
                Book an Appointment
                <CalendarIcon size={16} />
              </Link>

              <button className={styles.videoButton}>
                <span className={styles.playCircle}>
                  <PlayIcon />
                </span>

                <span>
                  <strong>How It Works</strong>
                  <small>Watch Video</small>
                </span>
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src={HERO_IMAGE}
              alt="Ayurvedic herbs and traditional treatment"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN SERVICES
      ===================================================== */}

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2>Our Ayurvedic Services</h2>

            <p>
              Personalized care and natural therapies for a
              healthier you
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                className={styles.serviceCard}
                key={service.title}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>

                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <Link href="/contact">
                    Learn More
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIALIZED THERAPIES
      ===================================================== */}

      <section className={styles.specializedSection}>
        <div className={styles.container}>
          <div className={styles.specializedBox}>
            <div className={styles.specializedTitle}>
              <LeafIcon size={18} />
              <h2>Specialized Therapies</h2>
            </div>

            <div className={styles.specializedGrid}>
              {specialized.map((item) => (
                <article
                  className={styles.specializedItem}
                  key={item.title}
                >
                  <div className={styles.specializedIcon}>
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ===================================================== */}

      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyImageWrap}>
              <img
                src={SERVICES_IMAGE}
                alt="Ayurvedic herbal preparation"
              />

              <div className={styles.naturalBadge}>
                <LeafIcon size={25} />

                <div>
                  <strong>100% Natural</strong>
                  <span>Safe • Effective • Authentic</span>
                </div>
              </div>
            </div>

            <div className={styles.whyContent}>
              <div className={styles.smallHeading}>
                <span />
                <LeafIcon size={15} />
                <span />
              </div>

              <h2>Why Choose Our Services?</h2>

              <div className={styles.benefitGrid}>
                {benefits.map((benefit) => (
                  <div
                    className={styles.benefit}
                    key={benefit.title}
                  >
                    <div className={styles.benefitIcon}>
                      {benefit.icon}
                    </div>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaIcon}>
              <CalendarIcon size={38} />
            </div>

            <div className={styles.ctaText}>
              <span>
                Take the first step towards a healthier you!
              </span>

              <h2>Book Your Appointment Today</h2>

              <p>
                Let us help you live a healthy, balanced and
                happy life.
              </p>
            </div>

            <Link
              href="/book-appointment"
              className={styles.ctaButton}
            >
              <CalendarIcon size={16} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

    </main>
  );
}