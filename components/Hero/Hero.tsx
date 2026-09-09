"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

/* =========================================================
   LEAF ICON
========================================================= */

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 3.5C12.2 3.7 6.2 5.7 3.7 10.3C1.7 14 3.4 18.5 7.1 19.7C11.1 21 15.5 18.4 17.8 14.7C20.1 11.1 20.7 6.8 20.5 3.5Z"
        fill="currentColor"
      />
      <path
        d="M4.8 18.8C8.5 13.7 12.4 10.4 17.8 7.1"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   CALENDAR ICON
========================================================= */

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 3V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M16 3V7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M4 9H20"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 13H8.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M12 13H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M16 13H16.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   NATURAL ICON
========================================================= */

function NaturalIcon() {
  return (
    <div className={styles.featureIcon}>
      <LeafIcon />
    </div>
  );
}

/* =========================================================
   PERSON ICON
========================================================= */

function PersonIcon() {
  return (
    <div className={styles.featureIcon}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M6.5 20C7.2 15.8 9 14 12 14C15 14 16.8 15.8 17.5 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   DOCTOR ICON
========================================================= */

function DoctorIcon() {
  return (
    <div className={styles.featureIcon}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M6 20C6.7 15.8 8.6 14 12 14C15.4 14 17.3 15.8 18 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M18 8L20 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   HOLISTIC ICON
========================================================= */

function HolisticIcon() {
  return (
    <div className={styles.featureIcon}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 20C7.5 17.5 5 14.5 5 11.5C5 9.5 6.5 8 8.5 8C10 8 11.2 8.8 12 10C12.8 8.8 14 8 15.5 8C17.5 8 19 9.5 19 11.5C19 14.5 16.5 17.5 12 20Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   EXPERIENCE ICON
========================================================= */

function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M13 7L18 12L13 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DIGESTIVE ICON
========================================================= */

function DigestiveIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 17C16 20 15 26 18 31C21 36 27 37 31 34C35 31 35 25 32 21C29 17 24 15 20 17Z"
        fill="#F2D77B"
        stroke="#315C29"
        strokeWidth="2.6"
      />

      <path
        d="M31 34C33 39 37 43 42 43C47 43 51 39 50 35C49 31 45 29 41 30"
        stroke="#315C29"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      <path
        d="M22 24C25 22 28 23 29 26"
        stroke="#8B742C"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 18C16 20 15 23 15.5 25"
        stroke="#5C8238"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   JOINT ICON
========================================================= */

function JointIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M25 12V24C25 28 28 31 32 31C36 31 39 28 39 24V12"
        stroke="#315C29"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M25 52V40C25 36 28 33 32 33C36 33 39 36 39 40V52"
        stroke="#315C29"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M22 12H42"
        stroke="#A9954A"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M22 52H42"
        stroke="#A9954A"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <circle
        cx="32"
        cy="32"
        r="4"
        fill="#D9B84B"
        stroke="#315C29"
        strokeWidth="2"
      />
    </svg>
  );
}

/* =========================================================
   SKIN ICON
========================================================= */

function SkinIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M37 13C32 15 28 19 27 24C26 28 28 31 31 33C34 35 38 35 41 33C45 30 48 25 47 20C46 16 42 13 37 13Z"
        fill="#E8D57E"
        stroke="#315C29"
        strokeWidth="2.5"
      />

      <path
        d="M31 33C27 34 23 37 21 42C19 46 20 50 24 52C28 54 34 52 37 49C40 46 41 41 39 37"
        stroke="#315C29"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M35 18C39 20 40 23 39 27"
        stroke="#A58A35"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="41"
        cy="19"
        r="1.5"
        fill="#5C8238"
      />
    </svg>
  );
}

/* =========================================================
   STRESS ICON
========================================================= */

function StressIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 49C32 49 15 39 15 26C15 20 19 17 24 17C28 17 31 20 32 24C33 20 36 17 40 17C45 17 49 20 49 26C49 39 32 49 32 49Z"
        fill="#648B3B"
        stroke="#315C29"
        strokeWidth="2.4"
      />

      <path
        d="M32 12V7"
        stroke="#A9954A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22 14L19 10"
        stroke="#A9954A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M42 14L45 10"
        stroke="#A9954A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="32"
        cy="25"
        r="2"
        fill="#D5B84B"
      />
    </svg>
  );
}

/* =========================================================
   PANCHAKARMA ICON
========================================================= */

function PanchakarmaIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 21C32 15 36 11 42 10C42 16 39 21 32 24"
        fill="#E7D47D"
        stroke="#315C29"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M31 24C28 17 23 14 18 15C19 21 24 25 31 27"
        fill="#E7D47D"
        stroke="#315C29"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="M32 23C34 17 37 15 41 14"
        stroke="#315C29"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M17 32C20 28 26 27 32 29C38 27 44 28 47 32"
        fill="#648B3B"
        stroke="#315C29"
        strokeWidth="2.3"
      />

      <path
        d="M18 32V44C18 48 22 51 32 51C42 51 46 48 46 44V32"
        fill="#668A35"
        stroke="#315C29"
        strokeWidth="2.3"
      />

      <path
        d="M17 35H47"
        stroke="#C0A345"
        strokeWidth="2.3"
      />

      <circle
        cx="32"
        cy="17"
        r="2"
        fill="#C6A840"
      />
    </svg>
  );
}

/* =========================================================
   WHY CHOOSE US ICONS
========================================================= */

function WhyDoctorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M6 20C6.7 15.8 8.6 14 12 14C15.4 14 17.3 15.8 18 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M17.5 8.5L19.5 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TreatmentPlanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="4"
        width="14"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M9 8H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M9 12H15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M9 16H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SafeTreatmentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19 5C13.5 5.2 8.5 7.4 7 12.2C6 15.6 8.2 18.5 11.5 18.3C16.5 17.9 18.8 11.9 19 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M5 20C8 16 11 13 16 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WellnessWhyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 20C7.5 17.5 5 14.5 5 11.5C5 9.5 6.5 8 8.5 8C10 8 11.2 8.8 12 10C12.8 8.8 14 8 15.5 8C17.5 8 19 9.5 19 11.5C19 14.5 16.5 17.5 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M12 10V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}


function AboutLeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.5 3.5C12.2 3.7 6.2 5.7 3.7 10.3C1.7 14 3.4 18.5 7.1 19.7C11.1 21 15.5 18.4 17.8 14.7C20.1 11.1 20.7 6.8 20.5 3.5Z"
        fill="currentColor"
      />

      <path
        d="M4.8 18.8C8.5 13.7 12.4 10.4 17.8 7.1"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
/* =========================================================
   QUOTE ICON
========================================================= */

function QuoteIcon() {
  return (
    <svg
      className={styles.quoteIcon}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 8C4.24 8 2 10.24 2 13V17C2 19.76 4.24 22 7 22H11V16H7V14C7 13.45 7.45 13 8 13H11V8H7Z"
        fill="currentColor"
      />

      <path
        d="M21 8C18.24 8 16 10.24 16 13V17C16 19.76 18.24 22 21 22H25V16H21V14C21 13.45 21.45 13 22 13H25V8H21Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   TREATMENT DATA
========================================================= */

const treatments = [
  {
    icon: DigestiveIcon,
    title: "Digestive Care",
    description:
      "Natural remedies for acidity, constipation, IBS and other digestive issues.",
  },
  {
    icon: JointIcon,
    title: "Joint & Pain Management",
    description:
      "Ayurvedic treatment for arthritis, back pain, neck pain and joint stiffness.",
  },
  {
    icon: SkinIcon,
    title: "Skin Care",
    description:
      "Natural solutions for acne, eczema, pigmentation and glowing skin.",
  },
  {
    icon: StressIcon,
    title: "Stress Management",
    description:
      "Manage stress, anxiety, insomnia and improve mental well-being.",
  },
  {
    icon: PanchakarmaIcon,
    title: "Panchakarma Therapy",
    description:
      "Detoxify your body and rejuvenate with authentic Panchakarma treatments.",
  },
];

/* =========================================================
   WHY CHOOSE DATA
========================================================= */

const whyFeatures = [
  {
    icon: WhyDoctorIcon,
    title: "Experienced Ayurvedic Doctor",
  },
  {
    icon: TreatmentPlanIcon,
    title: "Personalized Treatment Plans",
  },
  {
    icon: SafeTreatmentIcon,
    title: "Natural & Safe Treatments",
  },
  {
    icon: WellnessWhyIcon,
    title: "Holistic Approach to Wellness",
  },
];

/* =========================================================
   PATIENT DATA
========================================================= */

const patients = [
  {
    name: "Priya Sharma",
    role: "Patient",
    initials: "PS",
    message:
      "The treatment was very effective. I feel more energetic and my digestion has improved a lot. Highly recommend!",
  },
  {
    name: "Rahul Verma",
    role: "Patient",
    initials: "RV",
    message:
      "After struggling with chronic back pain for years, Ayurvedic treatment gave me real and lasting relief.",
  },
  {
    name: "Anjali Mehta",
    role: "Patient",
    initials: "AM",
    message:
      "A wonderful experience! The doctor is very knowledgeable and caring. I feel completely transformed.",
  },
  {
    name: "Neha Gupta",
    role: "Patient",
    initials: "NG",
    message:
      "The Ayurvedic treatment helped me feel healthier, calmer and more energetic. I am very happy with the results.",
  },
  {
    name: "Amit Singh",
    role: "Patient",
    initials: "AS",
    message:
      "Excellent treatment and very caring guidance. My overall health and daily energy have improved significantly.",
  },
  {
    name: "Kavita Joshi",
    role: "Patient",
    initials: "KJ",
    message:
      "I had a wonderful experience with the treatment. Everything was explained clearly and the results were excellent.",
  },
];

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =======================================================
     TOTAL SLIDES
     6 patients / 3 cards = 2 slides
  ======================================================= */

  const totalSlides = Math.ceil(patients.length / 3);

  /* =======================================================
     AUTOMATIC SLIDER
     EVERY 1 SECOND
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => {
        return (current + 1) % totalSlides;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [totalSlides]);

  /* =======================================================
     SHOW 3 PATIENTS
  ======================================================= */

  const startIndex = activeSlide * 3;

  const visiblePatients = [
    patients[startIndex],
    patients[startIndex + 1],
    patients[startIndex + 2],
  ].filter(Boolean);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

<section className={styles.blogHero}>
      <div className={styles.blogHeroContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.blogContent}>

        <div className={styles.blogBadge}>
        <LeafIcon />
        <span>Natural Healing. Holistic Living.</span>
      </div>

      <h1 className={styles.blogTitle}>
        Ayurvedic Care For
        <span>A Better Life</span>
      </h1>

          <div className={styles.headingDecoration}>
            <span></span>

            <LeafIcon />

            <span></span>
          </div>

          <p className={styles.blogDescription}>
        Experience the power of Ayurveda with personalized
        treatments that heal the root cause and bring balance
        to your body, mind &amp; soul.
      </p>


      <div className={styles.blogButtons}>

<a
  href="/book-appointment"
  className={styles.appointmentButton}
>
  <span>Book Appointment</span>

  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />

    <path
      d="M8 3V7M16 3V7M4 10H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
</a>

<a
  href="/services"
  className={styles.treatmentButton}
>
  <span>Explore Treatments</span>

  <LeafIcon />
</a>

</div>

          {/* FEATURES */}
          <div className={styles.blogFeatures}>

            <div className={styles.blogFeature}>
              <div className={styles.featureIcon}>
                <LeafIcon />
              </div>

              <div>
                <strong>Natural</strong>
                <span>Living</span>
              </div>
            </div>

            <div className={styles.blogFeature}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M6.5 20C7.2 15.8 9 14 12 14C15 14 16.8 15.8 17.5 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <strong>Expert</strong>
                <span>Advice</span>
              </div>
            </div>

            <div className={styles.blogFeature}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 20C7.5 17.5 5 14.5 5 11.5C5 9.5 6.5 8 8.5 8C10 8 11.2 8.8 12 10C12.8 8.8 14 8 15.5 8C17.5 8 19 9.5 19 11.5C19 14.5 16.5 17.5 12 20Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <strong>Better</strong>
                <span>Health</span>
              </div>
            </div>

            <div className={styles.blogFeature}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 20C7.5 17.5 5 14.5 5 11.5C5 9.5 6.5 8 8.5 8C10 8 11.2 8.8 12 10C12.8 8.8 14 8 15.5 8C17.5 8 19 9.5 19 11.5C19 14.5 16.5 17.5 12 20Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M12 10V15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <strong>Holistic</strong>
                <span>Wellness</span>
              </div>
            </div>

          </div>

          {/* BUTTON */}
      

        </div>


        {/* RIGHT IMAGE */}
        <div className={styles.blogVisual}>

          <div className={styles.imageFade}></div>

          <img
  src="https://cdn.prod.website-files.com/657780e2a4f01a0d919410a1/693186887ec5243ab1f33e3c_1.jpg"
  alt="Ayurvedic doctor with herbal medicines"
  className={styles.blogImage}
/>

        </div>

      </div>
    </section>

      {/* =====================================================
          TREATMENTS SECTION
      ===================================================== */}

      <section className={styles.treatmentsSection}>
        <div className={styles.treatmentContainer}>

          <div className={styles.headingArea}>

            <span className={styles.smallHeading}>
              OUR TREATMENTS
            </span>

            <h2 className={styles.mainHeading}>
              Natural Solutions For Your Health
            </h2>

            <div className={styles.headingDecoration}>
              <span className={styles.line}></span>

              <span className={styles.decorationLeaf}>
                <LeafIcon />
              </span>

              <span className={styles.line}></span>
            </div>

          </div>

          <div className={styles.cardsGrid}>

            {treatments.map((item) => {
              const Icon = item.icon;

              const slug = item.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

              return (
                <article
                  className={styles.treatmentCard}
                  key={item.title}
                >

                  <div className={styles.cardIconCircle}>
                    <Icon />
                  </div>

                  <h3 className={styles.cardTitle}>
                    {item.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {item.description}
                  </p>

                  <Link
                    href={`/treatments#${slug}`}
                    className={styles.learnMore}
                  >
                    <span>Learn More</span>
                    <ArrowIcon />
                  </Link>

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className={styles.whySection}>
        <div className={styles.whyContainer}>

          <div className={styles.whyContent}>

            <span className={styles.whySmallTitle}>
              WHY CHOOSE US
            </span>

            <h2 className={styles.whyHeading}>
              Healing With Tradition
              <br />
              Caring With Compassion
            </h2>

            <p className={styles.whyDescription}>
              Our approach combines ancient Ayurvedic wisdom with
              modern understanding to provide safe, effective and
              long-lasting results.
            </p>

            <div className={styles.whyFeaturesGrid}>

              {whyFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className={styles.whyFeature}
                    key={item.title}
                  >

                    <div className={styles.whyFeatureIcon}>
                      <Icon />
                    </div>

                    <span>
                      {item.title}
                    </span>

                  </div>
                );
              })}

            </div>

            <Link
              href="/about"
              className={styles.readMoreButton}
            >
              <span>
                Read More About Us
              </span>

              <ArrowIcon />
            </Link>

          </div>

          {/* RIGHT VISUAL */}

          <div className={styles.whyVisual}>

            <div className={styles.whyGreenCircle}></div>

            <div className={styles.whyImageWrapper}>
              <Image
                src="/ayurvedic-products.png"
                alt="Ayurvedic Natural Products"
                width={550}
                height={420}
                className={styles.ayurvedicImage}
              />
            </div>

            <div className={styles.naturalBadge}>

              <div className={styles.naturalBadgeInner}>
                <strong>100%</strong>

                <span>
                  Natural
                </span>

                <small>
                  Ayurveda
                </small>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          APPOINTMENT CTA
      ===================================================== */}

      <section className={styles.appointmentSection}>
        <div className={styles.appointmentContainer}>

          <div className={styles.appointmentIcon}>
            <CalendarIcon />
          </div>

          <div className={styles.appointmentContent}>

            <span>
              Your Health is Our Priority
            </span>

            <h3>
              Book Your Appointment Today!
            </h3>

            <p>
              Take the first step towards a healthier and happier you.
            </p>

          </div>

          <Link
            href="/book-appointment"
            className={styles.appointmentButton}
          >
            <CalendarIcon />

            <span>
              Book Appointment
            </span>
          </Link>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL SECTION
      ===================================================== */}

      <section className={styles.testimonialSection}>

        <div className={styles.testimonialContainer}>

          {/* HEADING */}

          <div className={styles.testimonialHeadingArea}>

            <span className={styles.testimonialSmallHeading}>
              PATIENT STORIES
            </span>

            <h2 className={styles.testimonialMainHeading}>
              What Our Patients Say
            </h2>

            <div className={styles.testimonialHeadingDecoration}>

              <span className={styles.testimonialLine}></span>

              <span className={styles.testimonialLeaf}>
                <LeafIcon />
              </span>

              <span className={styles.testimonialLine}></span>

            </div>

          </div>

          {/* SLIDER */}

          <div className={styles.sliderWrapper}>

            <div className={styles.testimonialCardsGrid}>

              {visiblePatients.map((patient) => (

                <article
                  className={styles.patientCard}
                  key={patient.name}
                >

                  {/* QUOTE */}

                  <div className={styles.quoteBox}>
                    <QuoteIcon />
                  </div>

                  {/* MESSAGE */}

                  <p className={styles.message}>
                    {patient.message}
                  </p>

                  {/* PATIENT INFO */}

                  <div className={styles.patientInfo}>

                    <div className={styles.avatar}>
                      {patient.initials}
                    </div>

                    <div className={styles.patientDetails}>

                      <strong>
                        {patient.name}
                      </strong>

                      <span>
                        {patient.role}
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

          {/* DOTS */}

          <div className={styles.dots}>

            {Array.from({
              length: totalSlides,
            }).map((_, index) => (

              <button
                key={index}
                type="button"
                aria-label={`Testimonial slide ${index + 1}`}
                className={`${styles.dot} ${
                  activeSlide === index
                    ? styles.activeDot
                    : ""
                }`}
                onClick={() => {
                  setActiveSlide(index);
                }}
              />

            ))}

          </div>

        </div>

      </section>
    </>
  );
}