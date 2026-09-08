"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./BookAppointment.module.css";

type IconName =
  | "calendar_month"
  | "eco"
  | "person"
  | "call"
  | "mail"
  | "location_on"
  | "expand_more"
  | "send"
  | "lock"
  | "medical_services"
  | "spa"
  | "schedule"
  | "self_improvement"
  | "arrow_forward"
  | "chevron_left"
  | "chevron_right"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "youtube";

function Icon({
  name,
  size = 21,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: styles.icon,
  };

  switch (name) {
    case "calendar_month":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M7 3v4M17 3v4M3 10h18" />
          <path d="M8 14h2M14 14h2M8 17h2M14 17h2" />
        </svg>
      );

    case "eco":
    case "spa":
      return (
        <svg {...common}>
          <path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-6 10-16Z" />
          <path d="M5 20c3-5 7-8 12-11" />
        </svg>
      );

    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21c.5-4.2 3-6.5 7-6.5s6.5 2.3 7 6.5" />
        </svg>
      );

    case "call":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h3l1.7 4.3-2.1 1.8c1 2.2 2.6 3.9 4.9 4.9l1.8-2.1 4.3 1.7v3c0 1.1-.9 2-2 2C11.3 19.1 4.9 12.7 4.9 5.5c0-1.1.7-2 1.6-2Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "location_on":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "expand_more":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );

    case "send":
      return (
        <svg {...common}>
          <path d="M21 3 10 14" />
          <path d="m21 3-7 18-4-7-7-4 18-7Z" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="10" width="14" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <path d="M12 14v3" />
        </svg>
      );

    case "medical_services":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M12 10v6M9 13h6" />
        </svg>
      );

    case "schedule":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "self_improvement":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.5" />
          <path d="M8 10c1.2-1 2.5-1.5 4-1.5s2.8.5 4 1.5" />
          <path d="M12 8.5v6" />
          <path d="m8 21 4-6 4 6" />
          <path d="M6 13h3M15 13h3" />
        </svg>
      );

    case "arrow_forward":
      return (
        <svg {...common}>
          <path d="M4 12h15" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "chevron_left":
      return (
        <svg {...common}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      );

    case "chevron_right":
      return (
        <svg {...common}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.6v3h2.7v8h3.1Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.3-.5.6-.5.9-.1l1 1.4c.2.3.2.6-.1.9l-.5.5c.7 1.2 1.5 2 2.8 2.7l.5-.5c.3-.3.6-.3.9-.1l1.4 1c.4.3.4.6.1.9-.4.6-1 1-1.8 1-1.2 0-3-.9-4.5-2.3-1.5-1.5-2.4-3.3-2.4-4.5 0-.8.4-1.4 1-1.9Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="m10 9 5 3-5 3V9Z" fill="white" />
        </svg>
      );

    default:
      return null;
  }
}

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const calendarDays = [
  { day: 28, muted: true },
  { day: 29, muted: true },
  { day: 30, muted: true },
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 31 },
  { day: 1, muted: true },
];

export default function BookAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("09:00 AM");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const selectedDateLabel = useMemo(
    () => `May ${selectedDate}, 2024`,
    [selectedDate]
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      age: String(form.get("age") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      gender: String(form.get("gender") || ""),
      address: String(form.get("address") || ""),
      consultationType: String(form.get("consultationType") || ""),
      purpose: String(form.get("purpose") || ""),
      concern: String(form.get("concern") || ""),
      date: selectedDateLabel,
      time: selectedTime,
    };

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Something went wrong.");
      }

      setMessage("Appointment request sent successfully!");

      e.currentTarget.reset();
      setSelectedDate(15);
      setSelectedTime("09:00 AM");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send appointment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <Icon name="eco" size={43} strokeWidth={1.5} />
          </span>

          <span>
            <strong>Ayurveda</strong>
            <small>Healing Naturally</small>
          </span>
        </a>

        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about-doctor">About Doctor</a>
          <a href="/treatments">Treatments</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="#appointment" className={styles.headerButton}>
          <Icon name="calendar_month" size={17} />
          Book Appointment
        </a>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              BOOK APPOINTMENT
              <Icon name="eco" size={15} />
            </div>

            <h1>
              Your Health,
              <span>Our Priority</span>
            </h1>

            <p>
              Schedule your consultation with our expert Ayurvedic doctor
              and take the first step towards a healthier you.
            </p>

            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <div className={styles.roundIcon}>
                  <Icon name="calendar_month" size={22} />
                </div>
                <div>
                  <strong>Easy</strong>
                  <span>Booking</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.roundIcon}>
                  <Icon name="spa" size={22} />
                </div>
                <div>
                  <strong>Expert</strong>
                  <span>Ayurvedic Care</span>
                </div>
              </div>

              <div className={styles.heroFeature}>
                <div className={styles.roundIcon}>
                  <Icon name="lock" size={22} />
                </div>
                <div>
                  <strong>100% Safe &</strong>
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroImageWrap}>
            <img
              src="https://ponsanthanbotanicals.com/assets/images/hero/herbals.png"
              alt="Ayurvedic herbs and traditional healing"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className={styles.appointmentSection} id="appointment">
        <form className={styles.bookingCard} onSubmit={handleSubmit}>
          {/* LEFT */}
          <div className={styles.leftColumn}>
            <SectionTitle number="1." title="Patient Details" />

            <div className={styles.inputGrid}>
              <Input
                icon="person"
                name="name"
                label="Full Name *"
                placeholder="Full Name *"
                required
              />

              <Input
                icon="calendar_month"
                name="age"
                label="Age *"
                placeholder="Age *"
                type="number"
                required
              />

              <Input
                icon="call"
                name="phone"
                label="Phone Number *"
                placeholder="Phone Number *"
                type="tel"
                required
              />

              <Input
                icon="mail"
                name="email"
                label="Email Address *"
                placeholder="Email Address *"
                type="email"
                required
              />

              <SelectInput
                icon="person"
                name="gender"
                label="Gender *"
                options={["Select Gender", "Male", "Female", "Other"]}
              />

              <Input
                icon="location_on"
                name="address"
                label="Address *"
                placeholder="Enter your address"
                required
              />
            </div>

            <div className={styles.formSection}>
              <SectionTitle number="2." title="Select Consultation Type" />

              <SelectInput
                name="consultationType"
                label=""
                options={[
                  "Select Consultation Type",
                  "General Ayurvedic Consultation",
                  "Panchakarma Consultation",
                  "Online Consultation",
                  "Follow-up Consultation",
                ]}
              />
            </div>

            <div className={styles.formSection}>
              <SectionTitle number="3." title="Select Purpose of Visit" />

              <SelectInput
                name="purpose"
                label=""
                options={[
                  "Select the reason for visit",
                  "General Wellness",
                  "Joint Pain",
                  "Stress & Anxiety",
                  "Skin Care",
                  "Digestive Problems",
                  "Weight Management",
                  "Other",
                ]}
              />
            </div>

            <div className={styles.formSection}>
              <SectionTitle number="4." title="Any Specific Concern" />

              <textarea
                name="concern"
                className={styles.textarea}
                placeholder="Please describe your symptoms or health concern"
                rows={4}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.rightColumn}>
            <SectionTitle number="5." title="Choose Date" />

            <div className={styles.calendarBox}>
              <div className={styles.calendarHeader}>
                <button type="button" aria-label="Previous month">
                  <Icon name="chevron_left" size={20} />
                </button>

                <strong>May 2024</strong>

                <button type="button" aria-label="Next month">
                  <Icon name="chevron_right" size={20} />
                </button>
              </div>

              <div className={styles.weekdays}>
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <span key={day}>{day}</span>
                  )
                )}
              </div>

              <div className={styles.daysGrid}>
                {calendarDays.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.day}-${index}`}
                    className={`${styles.dayButton} ${
                      item.muted ? styles.mutedDay : ""
                    } ${
                      item.day === selectedDate && !item.muted
                        ? styles.selectedDay
                        : ""
                    }`}
                    disabled={item.muted}
                    onClick={() => {
                      if (!item.muted) {
                        setSelectedDate(item.day);
                      }
                    }}
                  >
                    {item.day}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.timeSection}>
              <SectionTitle number="6." title="Choose Time Slot" />

              <div className={styles.timeGrid}>
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`${styles.timeButton} ${
                      selectedTime === time ? styles.activeTime : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.safeBox}>
              <div className={styles.safeIcon}>
                <Icon name="lock" size={28} />
              </div>

              <div>
                <strong>Your Information is Safe with Us</strong>
                <p>
                  We respect your privacy and your details will never be
                  shared.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              <Icon name="send" size={18} />

              {loading ? "Sending..." : "Confirm Appointment"}

              {!loading && <Icon name="arrow_forward" size={18} />}
            </button>

            {message && (
              <div
                className={`${styles.formMessage} ${
                  message.includes("successfully")
                    ? styles.successMessage
                    : styles.errorMessage
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </form>
      </section>

      {/* WHY BOOK */}
      <section className={styles.whySection}>
        <div className={styles.whyTitle}>
          <h2>Why Book An Appointment With Us?</h2>
          <div className={styles.titleLeaves}>
            <span />
            <Icon name="eco" size={17} />
            <span />
          </div>
        </div>

        <div className={styles.whyGrid}>
          <WhyCard
            icon="self_improvement"
            title="Expert Doctors"
            text="Consult with experienced Ayurvedic specialists."
          />

          <WhyCard
            icon="eco"
            title="Personalized Care"
            text="Get customized treatment plan for your health."
          />

          <WhyCard
            icon="schedule"
            title="Convenient Booking"
            text="Easy online appointment at your preferred time."
          />

          <WhyCard
            icon="spa"
            title="Holistic Healing"
            text="Natural and holistic approach for long term wellness."
          />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaIllustration}>
          <Icon name="calendar_month" size={62} strokeWidth={1.2} />
          <Icon name="spa" size={38} strokeWidth={1.4} />
        </div>

        <div className={styles.ctaText}>
          <h2>Take the first step towards a healthier life!</h2>
          <p>
            Book your appointment today and let Ayurveda bring balance to
            your life.
          </p>
        </div>

        <a href="#appointment" className={styles.ctaButton}>
          Confirm Appointment
          <Icon name="arrow_forward" size={17} />
        </a>
      </section>

      {/* FOOTER */}
      
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <h3>
        {number} {title}
      </h3>

      <div>
        <span />
        <Icon name="eco" size={14} />
      </div>
    </div>
  );
}

function Input({
  icon,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  icon: IconName;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>
        <Icon name={icon} size={17} />
        {label}
      </span>

      <div className={styles.inputWrap}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </label>
  );
}

function SelectInput({
  icon,
  name,
  label,
  options,
}: {
  icon?: IconName;
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className={styles.field}>
      {label && (
        <span className={styles.fieldLabel}>
          {icon && <Icon name={icon} size={17} />}
          {label}
        </span>
      )}

      <div className={styles.selectWrap}>
        <select name={name} defaultValue={options[0]} required>
          {options.map((option) => (
            <option
              key={option}
              value={option === options[0] ? "" : option}
            >
              {option}
            </option>
          ))}
        </select>

        <Icon name="expand_more" size={19} />
      </div>
    </label>
  );
}

function WhyCard({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.whyCard}>
      <div className={styles.whyIcon}>
        <Icon name={icon} size={29} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}