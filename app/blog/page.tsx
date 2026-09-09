"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import styles from "./blog.module.css";
import { useApp } from "@/context/AppContext";
import type { BlogItem } from "@/types";

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

const CATEGORY_LIST = [
  { name: "All Categories", icon: "🍃" },
  { name: "AYURVEDA BASICS", icon: "🌿" },
  { name: "DIET & NUTRITION", icon: "🍲" },
  { name: "HERBAL REMEDIES", icon: "🌱" },
  { name: "YOGA & WELLNESS", icon: "🧘" },
  { name: "PANCHAKARMA", icon: "🌿" },
  { name: "MENTAL HEALTH", icon: "☘" },
];

export default function BlogPage() {
  const { blogs } = useApp();
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  // Filter only published blogs for the public view
  const publishedBlogs = useMemo(() => {
    return blogs.filter((b) => b.published);
  }, [blogs]);

  // Filtered by search and category
  const filteredArticles = useMemo(() => {
    return publishedBlogs.filter((article) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All Categories" ||
        article.category.toUpperCase() === selectedCategory.toUpperCase();

      return matchesSearch && matchesCategory;
    });
  }, [publishedBlogs, searchQuery, selectedCategory]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of CATEGORY_LIST) {
      if (cat.name === "All Categories") {
        counts[cat.name] = publishedBlogs.length;
      } else {
        counts[cat.name] = publishedBlogs.filter(
          (b) => b.category.toUpperCase() === cat.name.toUpperCase()
        ).length;
      }
    }
    return counts;
  }, [publishedBlogs]);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    alert("Thank you for subscribing to Ayurvedic Wisdom newsletter!");
    setEmail("");
  }

  return (
    <main className={styles.page}>
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
              Discover natural ways to improve your health and well-being with
              Ayurveda. Tips, insights and expert advice for a balanced life.
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
                    <h2>
                      {selectedCategory === "All Categories"
                        ? "Latest Articles"
                        : selectedCategory}
                      {" "}({filteredArticles.length})
                    </h2>
                    <span>
                      <LeafIcon size={13} />
                    </span>
                  </div>
                </div>

                {selectedCategory !== "All Categories" && (
                  <button
                    onClick={() => setSelectedCategory("All Categories")}
                    style={{
                      border: "none",
                      background: "none",
                      color: "#2f6b20",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Clear Filter ✕
                  </button>
                )}
              </div>

              <div className={styles.articleGrid}>
                {filteredArticles.map((article) => (
                  <article
                    className={styles.articleCard}
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={styles.articleImage}>
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                        }}
                      />

                      <div className={styles.dateBadge}>
                        <strong>{article.date}</strong>
                        <span>{article.month}</span>
                      </div>
                    </div>

                    <div className={styles.articleBody}>
                      <span className={styles.category}>{article.category}</span>

                      <h3>{article.title}</h3>

                      <p>{article.excerpt}</p>

                      <div className={styles.articleBottom}>
                        <span className={styles.readTime}>
                          <ClockIcon />
                          {article.time}
                        </span>

                        <span
                          className={styles.readMore}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArticle(article);
                          }}
                        >
                          Read More
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <p style={{ fontSize: "16px", color: "#646961", marginBottom: "16px" }}>
                    No articles found matching &quot;{searchQuery}&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                    style={{
                      padding: "8px 18px",
                      backgroundColor: "#2f6b20",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Reset Search
                  </button>
                </div>
              )}
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />

                  <button aria-label="Search" type="button">
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
                  {CATEGORY_LIST.map((cat) => (
                    <div
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      style={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedCategory === cat.name ? "#eef4e7" : "transparent",
                        borderRadius: "6px",
                        padding: "6px 8px",
                        fontWeight: selectedCategory === cat.name ? 700 : 500,
                      }}
                    >
                      <span>{cat.icon}</span>
                      <p>{cat.name}</p>
                      <b>({categoryCounts[cat.name] || 0})</b>
                    </div>
                  ))}
                </div>
              </div>

              {/* POPULAR POSTS */}
              <div className={styles.sideBox}>
                <div className={styles.sideTitle}>
                  <h3>Popular Posts</h3>
                  <LeafIcon size={14} />
                </div>

                <div className={styles.popularPosts}>
                  {publishedBlogs.slice(0, 4).map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setSelectedArticle(post)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: "56px",
                          height: "56px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://vaidyarajindia.com/images/combo-products.jpg";
                        }}
                      />

                      <span>
                        <strong style={{ fontSize: "13px", display: "block", color: "#1e2d18" }}>
                          {post.title}
                        </strong>
                        <small style={{ color: "#718468", fontSize: "11px" }}>
                          {post.month} {post.date}, {post.year || "2024"}
                        </small>
                      </span>
                    </div>
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

      {/* FULL ARTICLE VIEW MODAL */}
      {selectedArticle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
            padding: "20px",
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              maxWidth: "750px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "32px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: 700,
                  backgroundColor: "#e8f4e1",
                  color: "#285e1b",
                  textTransform: "uppercase",
                }}
              >
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#6b7280",
                }}
              >
                &times;
              </button>
            </div>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1e2d18",
                marginBottom: "12px",
              }}
            >
              {selectedArticle.title}
            </h2>

            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "13px",
                color: "#718468",
                marginBottom: "20px",
              }}
            >
              <span>📅 {selectedArticle.date} {selectedArticle.month} {selectedArticle.year || "2024"}</span>
              <span>⏱ {selectedArticle.time}</span>
              <span>✍ {selectedArticle.author || "Dr. Sharma"}</span>
            </div>

            <div style={{ width: "100%", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                style={{ width: "100%", maxHeight: "360px", objectFit: "cover" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                }}
              />
            </div>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#374151",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              {selectedArticle.excerpt}
            </p>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#4b5563",
                whiteSpace: "pre-line",
              }}
            >
              {selectedArticle.content || selectedArticle.excerpt}
            </div>

            <div
              style={{
                marginTop: "28px",
                paddingTop: "20px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                href="/book-appointment"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2f6823",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Book a Consultation
              </Link>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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

            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
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