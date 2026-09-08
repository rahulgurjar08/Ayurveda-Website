"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

/* =========================================================
   LEAF ICON
========================================================= */

function LeafIcon() {
  return (
    <svg
      className={styles.leafIcon}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.5 5.5C22.3 5.7 13.2 9.1 9.1 16.1C5.8 21.7 7.8 28.9 13.4 31.3C19.2 33.8 26.5 30.2 30.2 24.4C33.9 18.5 34.5 10.6 33.5 5.5Z"
        fill="currentColor"
      />

      <path
        d="M10.3 30.1C15.5 22.9 21.3 18.2 29.5 13"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M18.4 21.8C16.7 21.7 15.1 21.1 13.8 20"
        stroke="white"
        strokeWidth="1.2"
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
      className={styles.calendarIcon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 3V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M16 3V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M4 9H20"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M8 13H8.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M12 13H12.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M16 13H16.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   MENU ICON
========================================================= */

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   CLOSE ICON
========================================================= */

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Current URL */
  const pathname = usePathname();

  /* Close mobile menu */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =======================================================
     ACTIVE CHECK
  ======================================================= */

  const isActive = (href: string) => {
    /* Home */
    if (href === "/") {
      return pathname === "/";
    }

    /* Other pages + nested pages */
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <div className={styles.logoIcon}>
            <LeafIcon />
          </div>

          <div className={styles.logoText}>
            <span className={styles.logoTitle}>
              Ayurveda
            </span>

            <span className={styles.logoTagline}>
              Healing Naturally
            </span>
          </div>
        </Link>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`${styles.navMenu} ${
            menuOpen ? styles.navMenuOpen : ""
          }`}
        >

          {/* HOME */}
          <Link
            href="/"
            className={`${styles.navLink} ${
              isActive("/") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* ABOUT DOCTOR */}
          <Link
            href="/about-doctor"
            className={`${styles.navLink} ${
              isActive("/about-doctor") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            About Doctor
          </Link>

          {/* TREATMENTS */}
          <Link
            href="/treatments"
            className={`${styles.navLink} ${
              isActive("/treatments") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Treatments
          </Link>

          {/* SERVICES */}
          <Link
            href="/services"
            className={`${styles.navLink} ${
              isActive("/services") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Services
          </Link>

          {/* BLOG */}
          <Link
            href="/blog"
            className={`${styles.navLink} ${
              isActive("/blog") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Blog
          </Link>

          {/* TESTIMONIALS */}
          <Link
            href="/testimonials"
            className={`${styles.navLink} ${
              isActive("/testimonials") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Testimonials
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`${styles.navLink} ${
              isActive("/contact") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* =================================================
            BOOK APPOINTMENT
        ================================================= */}


        {/* =================================================
    ADMIN DASHBOARD
================================================= */}

<Link
  href="/admin/login"
  className={styles.adminButton}
  onClick={closeMenu}
>
  Admin
</Link>

        <Link
          href="/book-appointment"
          className={`${styles.appointmentButton} ${
            isActive("/book-appointment")
              ? styles.appointmentActive
              : ""
          }`}
          onClick={closeMenu}
        >
          <CalendarIcon />

          <span>
            Book Appointment
          </span>
        </Link>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>
    </header>
  );
}