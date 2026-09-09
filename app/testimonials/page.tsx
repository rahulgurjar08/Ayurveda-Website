"use client";

import Link from "next/link";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    name: "Rohan Mehta",
    treatment: "Acidity & Digestion Treatment",
    text: "I was struggling with chronic acidity and bloating for years. After following the Ayurvedic treatment and diet plan, I feel so much lighter and healthier. Thank you, Doctor!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Sunita Sharma",
    treatment: "Joint Pain Treatment",
    text: "Suffering from knee pain made daily life difficult. The Panchakarma therapy and medicines helped me a lot. Now I can walk comfortably without pain.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Priya Verma",
    treatment: "Skin Care Treatment",
    text: "My skin problems are completely gone after the Ayurvedic treatment. I got natural solutions with no side effects. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Amit K.",
    treatment: "Stress Management",
    text: "I had stress, anxiety and sleepless nights. The Ayurvedic counselling and treatments really balanced my mind and improved my sleep naturally.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Neha Joshi",
    treatment: "Postpartum Care",
    text: "After delivery, I opted for postpartum care and it was amazing. The therapies and diet plan gave me strength and energy.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Vijay Malhotra",
    treatment: "General Wellness",
    text: "Very professional and caring doctor. The treatment is personalized and you can see real results. I am very happy with the complete experience.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
  },
];

function LeafIcon({ size = 24 }: { size?: number }) {
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

function UsersIcon({ size = 27 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c.5-3.5 2.5-5.5 5.5-5.5s5 2 5.5 5.5" />
      <path d="M14.5 14c3-.5 5.2 1.3 6 4.5" />
    </svg>
  );
}

function StarIcon({ size = 27 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2.8 2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 16.85l-5.5 2.89 1.05-6.13L3.1 9.27l6.15-.9L12 2.8Z" />
    </svg>
  );
}

function HeartIcon({ size = 27 }: { size?: number }) {
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
      <path d="M20.8 8.8c0 5.1-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
      <path d="m8.5 10.5 2 2 4-4" />
    </svg>
  );
}

function ShieldIcon({ size = 27 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 20 6v5c0 5.2-3.3 8.4-8 10-4.7-1.6-8-4.8-8-10V6l8-3Z" />
      <path d="M12 8v7" />
      <path d="M9 11h6" />
    </svg>
  );
}

function CalendarIcon({ size = 25 }: { size?: number }) {
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

function QuoteIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.5 6C3.6 7.3 3 9.3 3 12h5.2v5H3v-4.1C3 8.6 4.1 5.8 7.4 4L8 5.4A8.4 8.4 0 0 0 5.5 6Zm11 0C14.6 7.3 14 9.3 14 12h5.2v5H14v-4.1c0-4.3 1.1-7.1 4.4-8.9l.6 1.4A8.4 8.4 0 0 0 16.5 6Z" />
    </svg>
  );
}


function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroImage} />

        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span>TESTIMONIALS</span>
                <LeafIcon size={13} />
              </div>

              <h1>
                Trusted by Patients,
                <br />
                <em>Proven by Results</em>
              </h1>

              <div className={styles.heroLine} />

              <p>
                Read what our happy patients have to say about their
                healing journey with Ayurveda and how it has improved
                their health and quality of life.
              </p>

              <Link
                href="/contact"
                className={styles.heroButton}
              >
                <QuoteIcon size={18} />
                Share Your Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsBox}>
            <div className={styles.stat}>
              <div className={styles.statIcon}>
                <UsersIcon />
              </div>

              <div>
                <strong>2000+</strong>
                <span>Happy Patients</span>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <div className={styles.statIcon}>
                <StarIcon />
              </div>

              <div>
                <strong>4.9/5</strong>
                <span>Average Rating</span>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <div className={styles.statIcon}>
                <HeartIcon />
              </div>

              <div>
                <strong>98%</strong>
                <span>Satisfaction Rate</span>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.stat}>
              <div className={styles.statIcon}>
                <ShieldIcon />
              </div>

              <div>
                <strong>10+</strong>
                <span>Years of Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>Patient Testimonials</span>

            <h2>Real Stories, Real Transformations</h2>

            <div className={styles.headingDecoration}>
              <i />
              <LeafIcon size={15} />
              <i />
            </div>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <article
                className={styles.testimonialCard}
                key={item.name}
              >
                <div className={styles.cardTop}>
                  <div className={styles.quote}>
                    <QuoteIcon size={27} />
                  </div>

                  <div className={styles.stars}>
                    ★★★★★
                  </div>
                </div>

                <p className={styles.testimonialText}>
                  {item.text}
                </p>

                <div className={styles.patient}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.treatment}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO / PATIENT STORY
      ===================================================== */}

      <section className={styles.patientStorySection}>
        <div className={styles.container}>
          <div className={styles.patientStory}>
            <div className={styles.storyText}>
              <span className={styles.storyEyebrow}>
                Hear From Our Patients
              </span>

              <h2>
                Their Journey
                <br />
                In Their Words
              </h2>

              <button className={styles.watchButton}>
                <span className={styles.playCircle}>
                  <PlayIcon />
                </span>

                Watch Video Testimonials
              </button>
            </div>

            <div className={styles.storyVideo}>
              <div className={styles.videoImage} />

              <button
                className={styles.videoPlay}
                aria-label="Play testimonial video"
              >
                <PlayIcon />
              </button>
            </div>

            <div className={styles.storyQuote}>
              <div className={styles.largeQuote}>
                <QuoteIcon size={33} />
              </div>

              <p>
                Ayurveda is not just treatment,
                <br />
                it’s a way of life. Grateful to be on this
                <br />
                healing journey.
              </p>

              <span>– Our Happy Patient</span>
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
              <LeafIcon size={38} />
            </div>

            <div className={styles.ctaText}>
              <span>Join Thousands of Happy Patients</span>

              <h2>Start Your Healing Journey Today</h2>

              <p>
                Book your consultation and experience the power
                of Ayurveda.
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