"use client";

import { FormEvent, useMemo, useState } from "react";
import { useApp } from "@/context/AppContext";

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
    className: "inline-block shrink-0 transition-colors",
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
  const { addEnquiry } = useApp();
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
      consultationType: String(form.get("consultationType") || "In-Clinic Consultation"),
      purpose: String(form.get("purpose") || "General Consultation"),
      concern: String(form.get("concern") || ""),
      date: selectedDateLabel,
      time: selectedTime,
    };

    try {
      addEnquiry({
        name: payload.name,
        age: payload.age,
        phone: payload.phone,
        email: payload.email,
        gender: payload.gender,
        address: payload.address,
        consultationType: payload.consultationType,
        purpose: payload.purpose,
        concern: payload.concern,
        date: payload.date,
        time: payload.time,
        source: "appointment",
      });

      setMessage("Appointment request sent successfully! Our care team will contact you shortly.");

      e.currentTarget.reset();
      setSelectedDate(15);
      setSelectedTime("09:00 AM");
    } catch {
      setMessage("Unable to submit appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-10 px-4 sm:px-6 lg:px-8 text-gray-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto bg-[#F3F6F1] rounded-3xl p-6 sm:p-10 border border-[#E2E8DD] shadow-sm mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1e4d2b] bg-[#e3eed7] px-3.5 py-1.5 rounded-full">
              BOOK APPOINTMENT
              <Icon name="eco" size={15} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1b3b22] leading-tight">
              Your Health, <br />
              <span className="text-[#2b6137]">Our Priority</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base max-w-lg leading-relaxed">
              Schedule your consultation with our expert Ayurvedic doctor
              and take the first step towards a healthier you.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur p-3 rounded-xl border border-gray-100 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EAF2E6] flex items-center justify-center text-[#1b3b22]">
                  <Icon name="calendar_month" size={20} />
                </div>
                <div className="text-xs">
                  <strong className="block text-gray-900 font-semibold">Easy</strong>
                  <span className="text-gray-500">Booking</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur p-3 rounded-xl border border-gray-100 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EAF2E6] flex items-center justify-center text-[#1b3b22]">
                  <Icon name="spa" size={20} />
                </div>
                <div className="text-xs">
                  <strong className="block text-gray-900 font-semibold">Expert</strong>
                  <span className="text-gray-500">Ayurvedic Care</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur p-3 rounded-xl border border-gray-100 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#EAF2E6] flex items-center justify-center text-[#1b3b22]">
                  <Icon name="lock" size={20} />
                </div>
                <div className="text-xs">
                  <strong className="block text-gray-900 font-semibold">100% Safe &</strong>
                  <span className="text-gray-500">Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 h-56 md:h-72 relative rounded-2xl overflow-hidden shadow-md shrink-0">
            <img
              src="https://ponsanthanbotanicals.com/assets/images/hero/herbals.png"
              alt="Ayurvedic herbs and traditional healing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="max-w-6xl mx-auto mb-16" id="appointment">
        <form className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" onSubmit={handleSubmit}>
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTitle number="1." title="Patient Details" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div className="space-y-3 pt-2">
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

            <div className="space-y-3 pt-2">
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

            <div className="space-y-3 pt-2">
              <SectionTitle number="4." title="Any Specific Concern" />

              <textarea
                name="concern"
                className="w-full p-3.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1b3b22] focus:border-transparent outline-none transition-all resize-y min-h-[100px]"
                placeholder="Please describe your symptoms or health concern"
                rows={4}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-6">
            <SectionTitle number="5." title="Choose Date" />

            <div className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-white space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <button type="button" aria-label="Previous month" className="p-1 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
                  <Icon name="chevron_left" size={20} />
                </button>

                <strong className="text-sm font-semibold text-gray-800">May 2024</strong>

                <button type="button" aria-label="Next month" className="p-1 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
                  <Icon name="chevron_right" size={20} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <span key={day} className="py-1">{day}</span>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {calendarDays.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.day}-${index}`}
                    className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full font-medium transition-all ${
                      item.muted
                        ? "text-gray-300 cursor-not-allowed"
                        : item.day === selectedDate
                        ? "bg-[#1b3b22] text-white font-bold shadow-xs"
                        : "text-gray-700 hover:bg-gray-100"
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

            <div className="space-y-3">
              <SectionTitle number="6." title="Choose Time Slot" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`py-2 px-1 text-xs font-medium rounded-xl border text-center transition-all ${
                      selectedTime === time
                        ? "bg-[#1b3b22] text-white border-[#1b3b22] shadow-xs"
                        : "border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#F4F7F0] p-4 rounded-2xl border border-[#E2EBD8]">
              <div className="p-2.5 bg-[#E3EED7] text-[#1b3b22] rounded-xl shrink-0">
                <Icon name="lock" size={24} />
              </div>

              <div className="text-xs space-y-0.5">
                <strong className="block text-[#1b3b22] font-semibold">Your Information is Safe with Us</strong>
                <p className="text-gray-500 leading-normal">
                  We respect your privacy and your details will never be
                  shared.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#1b3b22] hover:bg-[#2b6137] text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              disabled={loading}
            >
              <Icon name="send" size={18} />

              {loading ? "Sending..." : "Confirm Appointment"}

              {!loading && <Icon name="arrow_forward" size={18} />}
            </button>

            {message && (
              <div
                className={`p-3.5 rounded-xl text-xs font-medium text-center border ${
                  message.includes("successfully")
                    ? "bg-green-50 text-green-800 border-green-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </form>
      </section>

      {/* WHY BOOK */}
      <section className="max-w-6xl mx-auto mb-16 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1b3b22]">Why Book An Appointment With Us?</h2>
          <div className="flex items-center justify-center gap-2 text-[#2b6137]">
            <span className="w-8 h-[1px] bg-[#2b6137]/30" />
            <Icon name="eco" size={17} />
            <span className="w-8 h-[1px] bg-[#2b6137]/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="max-w-6xl mx-auto bg-[#F4F7F0] border border-[#E2EBD8] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="hidden sm:flex items-center gap-3 text-[#1b3b22]/30 shrink-0">
          <Icon name="calendar_month" size={56} strokeWidth={1.2} />
          <Icon name="spa" size={36} strokeWidth={1.4} />
        </div>

        <div className="text-center md:text-left space-y-1 flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-[#1b3b22]">Take the first step towards a healthier life!</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Book your appointment today and let Ayurveda bring balance to
            your life.
          </p>
        </div>

        <a href="#appointment" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3b22] hover:bg-[#2b6137] text-white text-xs sm:text-sm font-medium rounded-xl shadow-sm transition-all shrink-0">
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
    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
      <h3 className="text-sm sm:text-base font-semibold text-[#1b3b22]">
        {number} {title}
      </h3>

      <div className="flex items-center gap-1 text-[#2b6137]">
        <span className="w-4 h-[1px] bg-[#2b6137]/30" />
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
    <label className="block space-y-1.5">
      <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
        <Icon name={icon} size={15} />
        {label}
      </span>

      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1b3b22] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
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
    <label className="block space-y-1.5">
      {label && (
        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
          {icon && <Icon name={icon} size={15} />}
          {label}
        </span>
      )}

      <div className="relative flex items-center">
        <select 
          name={name} 
          defaultValue={options[0]} 
          required 
          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1b3b22] focus:border-transparent outline-none transition-all appearance-none text-gray-700 pr-10"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option === options[0] ? "" : option}
            >
              {option}
            </option>
          ))}
        </select>

        <div className="absolute right-3 pointer-events-none text-gray-400">
          <Icon name="expand_more" size={19} />
        </div>
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
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs text-center space-y-3">
      <div className="w-12 h-12 bg-[#F4F7F0] text-[#1b3b22] rounded-full flex items-center justify-center mx-auto">
        <Icon name={icon} size={26} />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}