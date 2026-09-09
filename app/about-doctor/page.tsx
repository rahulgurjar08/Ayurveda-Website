"use client";

import type { ReactNode } from "react";
import styles from "./about-doctor.module.css";

/* =========================================================
   ICONS
========================================================= */

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="12" r="6" />
      <path d="M13 30c1-7 5-11 11-11s10 4 11 11" />
      <path d="M9 38c1-6 6-9 15-9s14 3 15 9" />
      <path d="M17 8c-2 2-3 4-3 7" />
      <path d="M31 8c2 2 3 4 3 7" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M35 7C21 9 11 17 11 29c0 7 5 12 12 12 12 0 17-12 12-34Z" />
      <path d="M10 40c7-10 13-17 23-25" />
      <path d="M18 31c-3-2-5-4-6-7" />
      <path d="M25 23c-2-3-2-6-1-9" />
      <path d="M30 18c3 1 6 0 8-2" />
    </svg>
  );
}

function WellnessIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 38V20" />
      <path d="M24 25c-7 0-12-4-12-10 7 0 12 3 12 10Z" />
      <path d="M24 25c7 0 12-4 12-10-7 0-12 3-12 10Z" />
      <path d="M24 20c-5-1-8-5-8-10 6 0 10 4 8 10Z" />
      <path d="M24 20c5-1 8-5 8-10-6 0-10 4-8 10Z" />
    </svg>
  );
}

function PatientsIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="13" r="5" />
      <path d="M15 31c0-6 4-10 9-10s9 4 9 10" />
      <circle cx="10" cy="20" r="4" />
      <circle cx="38" cy="20" r="4" />
      <path d="M4 35c1-5 4-8 8-8 3 0 6 2 7 5" />
      <path d="M44 35c-1-5-4-8-8-8-3 0-6 2-7 5" />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 7l3.5 7 7.5 1-5.5 5.5 1.3 7.8L24 24.8l-6.8 3.5 1.3-7.8L13 15l7.5-1L24 7Z" />
      <path d="M10 33c5 2 9 5 14 8 5-3 9-6 14-8" />
      <path d="M14 37l-3 5" />
      <path d="M34 37l3 5" />
    </svg>
  );
}

function HealingIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M11 29c5-1 9 0 13 4 4-4 8-5 13-4" />
      <path d="M24 33V15" />
      <path d="M24 20c-6 0-10-3-10-9 6 0 10 3 10 9Z" />
      <path d="M24 20c6 0 10-3 10-9-6 0-10 3-10 9Z" />
      <path d="M14 31c-2 3-3 6-2 10" />
      <path d="M34 31c2 3 3 6 2 10" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 38S9 29 9 18c0-5 4-8 8-8 3 0 6 2 7 5 1-3 4-5 7-5 5 0 8 3 8 8 0 11-15 20-15 20Z" />
      <path d="M24 19v10" />
      <path d="M19 24h10" />
    </svg>
  );
}

function NaturalIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 30c5-8 12-10 18-4 4 4 7 6 14 4" />
      <path d="M10 30c0 7 5 11 14 11h9c5 0 7-3 7-7" />
      <path d="M18 25c-1-6 2-11 8-14 2 7-1 12-8 14Z" />
      <path d="M28 20c3-5 8-6 12-4-2 6-7 8-12 4Z" />
    </svg>
  );
}

function HolisticIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="16" />
      <path d="M24 11v26" />
      <path d="M11 24h26" />
      <path d="M15 15l18 18" />
      <path d="M33 15L15 33" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

function TraditionalIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 27h28" />
      <path d="M14 27c0 7 4 11 10 11s10-4 10-11" />
      <path d="M17 21c1-6 4-10 7-10s6 4 7 10" />
      <path d="M20 20c-4-1-7-4-7-8 5 0 8 2 7 8Z" />
      <path d="M28 20c4-1 7-4 7-8-5 0-8 2-7 8Z" />
    </svg>
  );
}

function PersonalizedIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="14" r="5" />
      <path d="M14 35c1-7 5-11 10-11s9 4 10 11" />
      <path d="M9 23c3 0 5-2 5-5" />
      <path d="M39 23c-3 0-5-2-5-5" />
      <path d="M10 29c3-1 5 0 7 2" />
      <path d="M38 29c-3-1-5 0-7 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="9" y="11" width="30" height="29" rx="4" />
      <path d="M15 7v8" />
      <path d="M33 7v8" />
      <path d="M9 19h30" />
      <path d="M16 25h5" />
      <path d="M27 25h5" />
      <path d="M16 32h5" />
      <path d="M27 32h5" />
    </svg>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({
  icon,
  number,
  text,
}: {
  icon: ReactNode;
  number: string;
  text: string;
}) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statIcon}>{icon}</div>

      <div className={styles.statText}>
        <strong>{number}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

/* =========================================================
   CHECK ITEM
========================================================= */

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className={styles.checkIcon}>✓</span>
      <span>{children}</span>
    </li>
  );
}

/* =========================================================
   APPROACH CARD
========================================================= */

function ApproachCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={styles.approachCard}>
      <div className={styles.approachIcon}>{icon}</div>

      <h3>{title}</h3>

      <p>{children}</p>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AboutDoctor() {
  return (
    <main className={styles.aboutDoctor}>

      {/* TOP DECORATIVE AREA */}

      <div className={styles.topDecor}>
        <span />
        <span />
        <span />
      </div>

      {/* HERO */}

      <section className={styles.hero}>

        {/* LEFT CONTENT */}

        <div className={styles.heroContent}>

          <div className={styles.smallTitle}>
            OUR About
            <span className={styles.leaf}>◆</span>
          </div>

          <h1>
            Dedicated to Your
            <br />
            <span>Health &amp; Wellness</span>
          </h1>

          <p className={styles.description}>
            We offer a range of authentic Ayurvedic services and therapies to
            help you achieve optimal health, naturally and holistically.
          </p>

          <div className={styles.divider}>
            <span />
            <i>◆</i>
            <span />
          </div>

          <div className={styles.tagline}>
            Live Ayurvedic. Live Better.
          </div>

          <div className={styles.points}>
            <span>NATURAL</span>
            <b>|</b>
            <span>BALANCED</span>
            <b>|</b>
            <span>HOLISTIC</span>
          </div>

          <div className={styles.subPoints}>
            Ancient Wisdom
            <span>•</span>
            Modern Wellness
          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className={styles.heroImage}>

          <div className={styles.imageShape}>
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
              alt="Ayurvedic wellness treatment"
            />
          </div>

          <div className={styles.imageOverlay} />

        </div>

      </section>

      {/* MAIN CONTAINER */}

      <div className={styles.container}>

        {/* STATS */}

        <section className={styles.statsBox}>

          <StatItem
            icon={<ExperienceIcon />}
            number="10+"
            text="Years of Experience"
          />

          <StatItem
            icon={<LeafIcon />}
            number="5000+"
            text="Happy Patients"
          />

          <StatItem
            icon={<WellnessIcon />}
            number="15+"
            text="Healing Therapies"
          />

          <StatItem
            icon={<PatientsIcon />}
            number="100%"
            text="Natural Care"
          />

        </section>

        {/* EXPERIENCE + EDUCATION */}

        <section className={styles.infoSection}>

          {/* EXPERIENCE */}

          <div className={styles.infoColumn}>

            <div className={styles.sectionHeading}>
              <h2>Experience</h2>
              <span />
            </div>

            <p className={styles.infoIntro}>
              Dr. Anjali Sharma has over 10 years of experience in the
              field of Ayurveda. She has helped thousands of patients
              experience natural healing through personalized Ayurvedic
              treatments.
            </p>

            <ul className={styles.checkList}>

              <CheckItem>
                Experience in Ayurvedic consultation
              </CheckItem>

              <CheckItem>
                Expertise in Panchakarma therapies
              </CheckItem>

              <CheckItem>
                Training in Ayurvedic lifestyle counselling
              </CheckItem>

              <CheckItem>
                Holistic treatment for mind, body &amp; soul
              </CheckItem>

            </ul>

            <div className={styles.infoLeafDecoration}>
              <LeafIcon />
            </div>

          </div>

          {/* VERTICAL LINE */}

          <div className={styles.verticalLine} />

          {/* EDUCATION */}

          <div className={styles.infoColumn}>

            <div className={styles.sectionHeading}>
              <h2>Education &amp; Qualifications</h2>
              <span />
            </div>

            <ul className={styles.qualificationList}>

              <li>
                <span className={styles.greenDot} />

                <div>
                  <strong>BAMS</strong>

                  <small>
                    Bachelor of Ayurvedic Medicine &amp; Surgery
                  </small>
                </div>
              </li>

              <li>
                <span className={styles.greenDot} />

                <div>
                  <strong>MD (Ayurveda)</strong>

                  <small>
                    Postgraduate specialization in Ayurveda
                  </small>
                </div>
              </li>

              <li>
                <span className={styles.greenDot} />

                <div>
                  <strong>
                    Diploma in Panchakarma Therapy
                  </strong>

                  <small>
                    Advanced training in Panchakarma therapies
                  </small>
                </div>
              </li>

              <li>
                <span className={styles.greenDot} />

                <div>
                  <strong>
                    Certified Ayurvedic Practitioner
                  </strong>

                  <small>
                    Professional certification in holistic care
                  </small>
                </div>
              </li>

            </ul>

            <div className={styles.rightLeafDecoration}>
              <LeafIcon />
            </div>

          </div>

        </section>

        {/* APPROACH */}

        <section className={styles.approachSection}>

          <div className={styles.approachHeader}>

            <span>Our Approach</span>

            <h2>
              Healing Naturally, Living Better
            </h2>

            <div className={styles.headingLine}>
              <i />
              <i />
              <i />
            </div>

          </div>

          <div className={styles.approachGrid}>

            <ApproachCard
              icon={<NaturalIcon />}
              title="Natural Healing"
            >
              A holistic healing approach that focuses on restoring
              your natural balance and wellbeing.
            </ApproachCard>

            <ApproachCard
              icon={<PersonalizedIcon />}
              title="Personalized Care"
            >
              Treatments are carefully designed according to your
              individual needs and health goals.
            </ApproachCard>

            <ApproachCard
              icon={<HolisticIcon />}
              title="Holistic Wellness"
            >
              We treat the root cause and focus on complete mind,
              body and emotional wellness.
            </ApproachCard>

            <ApproachCard
              icon={<TraditionalIcon />}
              title="Time-tested Wisdom"
            >
              Our therapies are inspired by ancient Ayurvedic
              principles and traditional healing practices.
            </ApproachCard>

            <ApproachCard
              icon={<CareIcon />}
              title="Compassionate Care"
            >
              Every patient is treated with care, respect and
              complete personal attention.
            </ApproachCard>

          </div>

        </section>

        {/* APPOINTMENT CTA */}

        <section className={styles.appointmentCta}>

          <div className={styles.ctaIcon}>
            <CalendarIcon />
          </div>

          <div className={styles.ctaContent}>

            <span>
              Take the first step towards a healthier you!
            </span>

            <h2>
              Book Your Appointment Today
            </h2>

            <p>
              Begin your journey towards natural healing and
              complete wellness.
            </p>

          </div>

          <button
            type="button"
            className={styles.ctaButton}
          >
            <CalendarIcon />

            <span>
              BOOK APPOINTMENT
            </span>
          </button>

        </section>

      </div>

    </main>
  );
}