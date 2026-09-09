"use client";

import Link from "next/link";
import styles from "./treatments.module.css";

type IconName =
  | "digestive"
  | "joint"
  | "skin"
  | "stress"
  | "panchakarma"
  | "immunity"
  | "leaf"
  | "lotus"
  | "person"
  | "clock"
  | "calendar"
  | "phone"
  | "mail"
  | "location"
  | "arrow"
  | "menu"
  | "close";

function Icon({
  name,
  size = 24,
}: {
  name: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "digestive":
      return (
        <svg {...common}>
          <path d="M8 4c-2 1-3 3-3 5 0 2 1 3 3 4 1 .5 1 1.5 1 3v2" />
          <path d="M8 4c1 1 2 1 3 0 1-1 2-2 4-1 2 1 2 3 1 5-.5 1.5-1 2.5 0 4 1 1.5 1 3 0 5" />
          <path d="M9 18c1 1 3 1 4 0" />
        </svg>
      );

    case "joint":
      return (
        <svg {...common}>
          <path d="M8 3v5c0 2 1 3 3 4" />
          <path d="M16 3v5c0 2-1 3-3 4" />
          <path d="M11 12c-2 1-3 2-3 4v5" />
          <path d="M13 12c2 1 3 2 3 4v5" />
          <path d="M8 7h3M13 7h3" />
          <path d="M9 16h6" />
        </svg>
      );

    case "skin":
      return (
        <svg {...common}>
          <path d="M5 19c1-5 2-8 5-10 2-1 4-1 6-3 1-1 2-2 3-2" />
          <path d="M7 18c2-1 3-2 3-4 0-1-.5-2-1-3" />
          <path d="M16 5c1 2 1 4 0 6" />
          <path d="M4 19h5" />
        </svg>
      );

    case "stress":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 20c0-4 2.5-6 7-6s7 2 7 6" />
          <path d="M4 10l2 1M20 10l-2 1M12 2v-1" />
        </svg>
      );

    case "panchakarma":
      return (
        <svg {...common}>
          <path d="M5 13h14l-1 5H6l-1-5Z" />
          <path d="M7 13c0-4 2-6 5-6s5 2 5 6" />
          <path d="M9 5c1-2 3-3 5-2 1 .5 2 1 3 2" />
          <path d="M4 20h16" />
        </svg>
      );

    case "immunity":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5c0 5-3 8-8 10-5-2-8-5-8-10V6l8-3Z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );

    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4C10 4 4 8 4 15c0 3 2 5 5 5 7 0 11-6 11-16Z" />
          <path d="M4 20c3-5 7-8 12-11" />
        </svg>
      );

    case "lotus":
      return (
        <svg {...common}>
          <path d="M12 20c-4 0-8-2-10-5 3-1 5-1 7 0-3-2-4-5-3-8 3 1 5 3 6 6 1-4 3-6 6-8 1 4 0 7-3 10 2-1 4-1 7 0-2 3-6 5-10 5Z" />
          <path d="M12 13c0-4 0-7 2-9" />
        </svg>
      );

    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 20c.5-4 2.5-6 7-6s6.5 2 7 6" />
          <path d="M8 15l4 3 4-3" />
        </svg>
      );

    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
          <path d="M5 4 3 6M19 4l2 2" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M7 3v4M17 3v4M3 10h18" />
          <path d="m8 15 2 2 5-5" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3h3l2 5-2 2c1 2 3 4 5 5l2-2 5 2v3c0 1-1 2-2 2C11 20 4 13 4 5c0-1 1-2 2-2Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 7 5 5-5 5" />
        </svg>
      );

    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );

    default:
      return null;
  }
}

const treatments = [
  {
    icon: "digestive" as IconName,
    title: "Digestive Care",
    description:
      "Effective Ayurvedic therapies to improve digestion, relieve acidity, gas, bloating, constipation and IBS.",
  },
  {
    icon: "joint" as IconName,
    title: "Joint & Pain Management",
    description:
      "Natural relief from arthritis, back pain, neck pain, sprains and muscular pain.",
  },
  {
    icon: "skin" as IconName,
    title: "Skin Care",
    description:
      "Ayurvedic treatments for acne, eczema, pimples, psoriasis and other skin problems.",
  },
  {
    icon: "stress" as IconName,
    title: "Stress Management",
    description:
      "Balance your mind and body, reduce stress, anxiety, depression and improve sleep.",
  },
  {
    icon: "panchakarma" as IconName,
    title: "Panchakarma Therapy",
    description:
      "Detoxify and rejuvenate your body with authentic Panchakarma therapies.",
  },
  {
    icon: "immunity" as IconName,
    title: "Immunity Boost",
    description:
      "Strengthen your immunity and prevent illnesses with Ayurvedic herbs and therapies.",
  },
];

const approach = [
  {
    icon: "calendar" as IconName,
    number: "1.",
    title: "Consultation",
    text: "Detailed consultation and health assessment",
  },
  {
    icon: "person" as IconName,
    number: "2.",
    title: "Diagnosis",
    text: "Identify the root cause of the problem",
  },
  {
    icon: "panchakarma" as IconName,
    number: "3.",
    title: "Personalized Plan",
    text: "Customized treatment plan for your body type",
  },
  {
    icon: "lotus" as IconName,
    number: "4.",
    title: "Treatment",
    text: "Natural therapies and herbal remedies",
  },
  {
    icon: "leaf" as IconName,
    number: "5.",
    title: "Better Health",
    text: "Long term wellness and balanced living",
  },
];

const benefits = [
  {
    icon: "leaf" as IconName,
    title: "Natural & Safe",
    text: "Made from natural herbs and therapies with no side effects.",
  },
  {
    icon: "lotus" as IconName,
    title: "Personalized Care",
    text: "Treatment plans tailored to your body type and health needs.",
  },
  {
    icon: "person" as IconName,
    title: "Holistic Healing",
    text: "Treats the root cause and promotes overall well-being.",
  },
  {
    icon: "clock" as IconName,
    title: "Long Lasting Results",
    text: "Focus on long term relief and healthy living.",
  },
];

export default function TreatmentsPage() {
  return (
    <main className={styles.page}>
      {/* ================= BREADCRUMB ================= */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>›</span>
          <span>Treatments</span>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />

        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span />
                OUR TREATMENTS
              </div>

              <h1>
                Natural Healing Solutions
                <br />
                <em>For Every Health Need</em>
              </h1>

              <div className={styles.heroLine} />

              <p>
                Ayurveda offers a holistic approach to heal the root
                cause of disorders and bring balance to your body,
                mind and soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TREATMENTS ================= */}
      <section className={styles.treatmentsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div className={styles.headingDecoration}>
              <span />
              <span className={styles.smallLeaf}>◆</span>
              <span />
            </div>

            <h2>Our Ayurvedic Treatments</h2>

            <p>Customized treatments for a healthier and happier you</p>
          </div>

          <div className={styles.treatmentGrid}>
            {treatments.map((item) => (
              <article
                className={styles.treatmentCard}
                key={item.title}
              >
                <div className={styles.treatmentIcon}>
                  <Icon name={item.icon} size={39} />
                </div>

                <div className={styles.treatmentInfo}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href={`/treatments/${item.title.toLowerCase().replaceAll(" ", "-")}`}>
                    Learn More
                    <Icon name="arrow" size={13} />
                  </a>
                </div>

                <a
                  href={`/treatments/${item.title.toLowerCase().replaceAll(" ", "-")}`}
                  className={styles.cardArrow}
                  aria-label={`View ${item.title}`}
                >
                  <Icon name="arrow" size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachBox}>
            <div className={styles.approachTitle}>
              <span />
              <h2>Our Treatment Approach</h2>
              <span />
            </div>

            <div className={styles.approachSteps}>
              {approach.map((step, index) => (
                <div className={styles.approachStep} key={step.title}>
                  <div className={styles.stepTop}>
                    <div className={styles.stepIcon}>
                      <Icon name={step.icon} size={31} />
                    </div>

                    {index !== approach.length - 1 && (
                      <div className={styles.stepConnector}>
                        <span />
                        <Icon name="arrow" size={15} />
                      </div>
                    )}
                  </div>

                  <h3>
                    {step.number} {step.title}
                  </h3>

                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyImageWrap}>
              <div className={styles.whyImage} />

              <div className={styles.safeBadge}>
                <div className={styles.safeIcon}>
                  <Icon name="leaf" size={27} />
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Natural & Safe<br />Treatments</span>
                </div>
              </div>
            </div>

            <div className={styles.whyContent}>
              <div className={styles.eyebrow}>
                <span />
                WHY CHOOSE AYURVEDA?
              </div>

              <h2>Why Ayurvedic Treatments?</h2>

              <div className={styles.greenLine} />

              <div className={styles.benefitsGrid}>
                {benefits.map((item) => (
                  <div className={styles.benefit} key={item.title}>
                    <div className={styles.benefitIcon}>
                      <Icon name={item.icon} size={28} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaIcon}>
              <Icon name="calendar" size={39} />
            </div>

            <div className={styles.ctaText}>
              <span>Take the first step towards a healthier you!</span>
              <h2>Book Your Appointment Today</h2>
              <p>
                Get expert Ayurvedic care and start your healing
                journey.
              </p>
            </div>

            <Link
              href="/book-appointment"
              className={styles.ctaButton}
            >
              <Icon name="calendar" size={17} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
     
    </main>
  );
}