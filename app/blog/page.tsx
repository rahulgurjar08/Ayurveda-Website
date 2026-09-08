"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./blog.module.css";

const articles = [
  {
    date: "08",
    month: "May",
    category: "AYURVEDA BASICS",
    title: "What is Ayurveda and How Does It Work?",
    text: "Learn the ancient science of life and how it helps in balancing body, mind and soul naturally.",
    time: "5 min read",
    image:
      "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png",
  },
  {
    date: "05",
    month: "May",
    category: "DIET & NUTRITION",
    title: "Ayurvedic Diet: Eat Right for Your Dosha",
    text: "Know what to eat according to your dosha and improve digestion, energy and immunity.",
    time: "6 min read",
    image:
      "https://www.sharadaynch.com/assets/images/about/about-Wellness-Through-Nature.jpg",
  },
  {
    date: "02",
    month: "May",
    category: "YOGA & WELLNESS",
    title: "Yoga and Ayurveda: The Perfect Combination",
    text: "Discover how yoga and Ayurveda work together to enhance overall health and inner peace.",
    time: "4 min read",
    image:
      "https://www.sharadaynch.com/assets/images/about/about-Wellness-Through-Nature.jpg",
  },
  {
    date: "28",
    month: "Apr",
    category: "HERBAL REMEDIES",
    title: "Healing Herbs in Ayurveda You Should Know",
    text: "Explore the power of Ayurvedic herbs and their amazing benefits for everyday health problems.",
    time: "5 min read",
    image:
      "https://vaidyarajindia.com/images/combo-products.jpg",
  },
  {
    date: "25",
    month: "Apr",
    category: "PANCHAKARMA",
    title: "Panchakarma Therapy: Detoxify Your Body",
    text: "Deep cleansing therapies that remove toxins, boost immunity and rejuvenate your body.",
    time: "7 min read",
    image:
      "https://www.pravaayu.com/_next/image?q=100&url=https%3A%2F%2Fwww.pravaayu.com%2Fbackend%2Fwp-content%2Fuploads%2F2024%2F06%2FUntitled-design-17-1024x576.png&w=3840",
  },
  {
    date: "22",
    month: "Apr",
    category: "MENTAL HEALTH",
    title: "Ayurvedic Tips to Manage Stress & Anxiety",
    text: "Simple and effective Ayurvedic ways to reduce stress, calm your mind and improve sleep.",
    time: "5 min read",
    image:
      "https://www.ask-ayurveda.com/media/uploads/ckeditor/2025/05/06/chatgpt-image-may-6-2025-11_36_18-am.png",
  },
];

const popularPosts = [
  {
    title: "Boost Your Immunity Naturally with Ayurveda",
    date: "May 01, 2024",
    image:
      "https://vaidyarajindia.com/images/combo-products.jpg",
  },
  {
    title: "Signs of Imbalance in Your Dosha",
    date: "Apr 29, 2024",
    image:
      "https://www.sharadaynch.com/assets/images/about/about-Wellness-Through-Nature.jpg",
  },
  {
    title: "Daily Routine (Dinacharya) for Healthy Life",
    date: "Apr 25, 2024",
    image:
      "https://goldenbuddhayoga.com/blog/yoga/yoga-and-ayurveda-center/yoga-and-ayurveda-center-session.webp",
  },
  {
    title: "Benefits of Oil Pulling (Kavala) in Ayurveda",
    date: "Apr 20, 2024",
    image:
      "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/08/Gemini_Generated_Image_xx6ylyxx6ylyxx6yITG-1756021366753.png?size=%2A%3A900",
  },
];

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

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 9h18" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 8.2a2.8 2.8 0 0 0-2-2C17.3 5.7 12 5.7 12 5.7s-5.3 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 15.8a2.8 2.8 0 0 0 2 2c1.7.5 7 .5 7 .5s5.3 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-3.8 29 29 0 0 0-.5-3.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M8.5 9.5c.3 2 1.8 3.7 4 4.3.7.2 1.4 0 1.8-.6l.4-.6c.2-.3.1-.6-.2-.8l-1.1-.5c-.3-.1-.5 0-.7.2l-.4.5c-1-.4-1.7-1.1-2.1-2l.5-.5c.2-.2.2-.4.1-.7l-.5-1.1c-.1-.3-.5-.4-.8-.2l-.6.4c-.4.4-.6 1-.4 1.6Z" />
    </svg>
  );
}

export default function BlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <LeafIcon size={43} />
            </span>

            <span className={styles.logoWords}>
              <strong>Ayurveda</strong>
              <small>Healing Naturally</small>
            </span>
          </Link>

          <nav
            className={`${styles.nav} ${
              menuOpen ? styles.navOpen : ""
            }`}
          >
            <Link href="/">Home</Link>
            <Link href="/about-doctor">About Doctor</Link>
            <Link href="/treatments">Treatments</Link>
            <Link href="/services">Services</Link>

            <Link href="/blog" className={styles.active}>
              Blog
            </Link>

            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>

            <Link
              href="/book-appointment"
              className={`${styles.appointmentButton} ${styles.mobileAppointment}`}
            >
              <CalendarIcon />
              Book Appointment
            </Link>
          </nav>

          <Link
            href="/book-appointment"
            className={styles.appointmentButton}
          >
            <CalendarIcon />
            Book Appointment
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span>BLOG &amp; HEALTH TIPS</span>
              <LeafIcon size={14} />
            </div>

            <h1>
              Ayurvedic Wisdom
              <br />
              <em>For A Better Life</em>
            </h1>

            <p>
              Discover natural ways to improve your health and well-being
              with Ayurveda. Tips, insights and expert advice for a balanced
              life.
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src="https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png"
              alt="Ayurvedic herbs and natural wellness"
            />
          </div>
        </div>
      </section>

      {/* BLOG AREA */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogLayout}>
            {/* LEFT */}
            <div className={styles.blogMain}>
              <div className={styles.articleHeader}>
                <div>
                  <div className={styles.sectionTitle}>
                    <h2>Latest Articles</h2>
                    <span>
                      <LeafIcon size={13} />
                    </span>
                  </div>
                </div>

                <button className={styles.sortButton}>
                  Sort by: Latest
                  <span>⌄</span>
                </button>
              </div>

              <div className={styles.articleGrid}>
                {articles.map((article) => (
                  <article
                    className={styles.articleCard}
                    key={article.title}
                  >
                    <div className={styles.articleImage}>
                      <img src={article.image} alt={article.title} />

                      <div className={styles.dateBadge}>
                        <strong>{article.date}</strong>
                        <span>{article.month}</span>
                      </div>
                    </div>

                    <div className={styles.articleBody}>
                      <span className={styles.category}>
                        {article.category}
                      </span>

                      <h3>{article.title}</h3>

                      <p>{article.text}</p>

                      <div className={styles.articleBottom}>
                        <span className={styles.readTime}>
                          <ClockIcon />
                          {article.time}
                        </span>

                        <Link href="/blog" className={styles.readMore}>
                          Read More
                          <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* PAGINATION */}
              <div className={styles.pagination}>
                <button className={styles.pageActive}>1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>8</button>
                <button className={styles.nextPage}>
                  →
                </button>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>
              {/* SEARCH */}
              <div className={styles.sideBox}>
                <div className={styles.sideTitle}>
                  <h3>Search Blog</h3>
                </div>

                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                  />

                  <button aria-label="Search">
                    <SearchIcon />
                  </button>
                </div>
              </div>

              {/* CATEGORIES */}
              <div className={styles.sideBox}>
                <div className={styles.sideTitle}>
                  <h3>Categories</h3>
                  <LeafIcon size={14} />
                </div>

                <div className={styles.categories}>
                  <div>
                    <span>🌿</span>
                    <p>Ayurveda Basics</p>
                    <b>(12)</b>
                  </div>

                  <div>
                    <span>🍲</span>
                    <p>Diet &amp; Nutrition</p>
                    <b>(10)</b>
                  </div>

                  <div>
                    <span>🌱</span>
                    <p>Herbal Remedies</p>
                    <b>(14)</b>
                  </div>

                  <div>
                    <span>🧘</span>
                    <p>Yoga &amp; Wellness</p>
                    <b>(09)</b>
                  </div>

                  <div>
                    <span>🌿</span>
                    <p>Panchakarma</p>
                    <b>(08)</b>
                  </div>

                  <div>
                    <span>☘</span>
                    <p>Mental Health</p>
                    <b>(11)</b>
                  </div>

                  <div>
                    <span>🍃</span>
                    <p>Seasonal Care</p>
                    <b>(07)</b>
                  </div>
                </div>
              </div>

              {/* POPULAR */}
              <div className={styles.sideBox}>
                <div className={styles.sideTitle}>
                  <h3>Popular Posts</h3>
                  <LeafIcon size={14} />
                </div>

                <div className={styles.popularPosts}>
                  {popularPosts.map((post) => (
                    <Link href="/blog" key={post.title}>
                      <img src={post.image} alt={post.title} />

                      <span>
                        <strong>{post.title}</strong>
                        <small>{post.date}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* TAGS */}
              <div className={styles.sideBox}>
                <div className={styles.sideTitle}>
                  <h3>Tags</h3>
                  <LeafIcon size={14} />
                </div>

                <div className={styles.tags}>
                  <span># Ayurveda</span>
                  <span># Health</span>
                  <span># Wellness</span>
                  <span># Herbs</span>
                  <span># Yoga</span>
                  <span># Panchakarma</span>
                  <span># Diet</span>
                  <span># Natural Healing</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletter}>
            <div className={styles.newsletterIcon}>
              <span>
                <LeafIcon size={42} />
              </span>
            </div>

            <div className={styles.newsletterText}>
              <small>Stay Updated with Ayurvedic Tips</small>
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Get the latest health tips, Ayurvedic remedies and special
                offers.
              </p>
            </div>

            <form
              className={styles.newsletterForm}
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />

              <button type="submit">Subscribe</button>
            </form>

            <div className={styles.newsletterLeaves}>
              <LeafIcon size={72} />
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}