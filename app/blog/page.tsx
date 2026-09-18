"use client";

import Link from "next/link";
import React, { useState, useMemo } from "react";
import { Search, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

const CATEGORY_LIST = [
  { name: "All Categories", icon: "🍃" },
  { name: "AYURVEDA BASICS", icon: "🌿" },
  { name: "DIET & NUTRITION", icon: "🍲" },
  { name: "HERBAL REMEDIES", icon: "🌱" },
  { name: "YOGA & WELLNESS", icon: "🧘" },
  { name: "PANCHAKARMA", icon: "🌿" },
  { name: "MENTAL HEALTH", icon: "☘" },
  { name: "SEASONAL CARE", icon: "☀️" },
];

export default function BlogPage() {
  const { blogs } = useApp();
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Shows 2 rows of 3 cards each (total 6 cards)

  // Filter only published blogs for public view (Managed by Admin)
  const publishedBlogs = useMemo(() => {
    return (blogs || []).filter((b) => b.published !== false);
  }, [blogs]);

  // Filtered Articles by Search and Category
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

  // Calculate dynamic category counts
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

  // Pagination Logic
  const totalPages = Math.ceil(filteredArticles.length / cardsPerPage);
  const indexOfLastBlog = currentPage * cardsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - cardsPerPage;
  const currentBlogs = filteredArticles.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    alert("Thank you for subscribing to Ayurvedic Wisdom newsletter!");
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF8F5] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] border-b border-gray-200/60">

{/* Right Side Image */}
<div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
  <img
    src="https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png"
    alt="Ayurvedic consultation and natural wellness"
    className="w-full h-full object-cover object-center"
  />

  {/* Same Home Page Fade */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent lg:from-[#FAF8F5] lg:via-[#FAF8F5]/65 lg:to-transparent" />
</div>

{/* Main Content */}
<div className="relative z-10 max-w-7xl mx-auto min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] px-6 sm:px-8 md:px-10 lg:px-12 flex items-center">

  <div className="w-full lg:w-[58%] py-8 lg:py-0">

    {/* Label */}
    <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-widest text-[#2D5A27] uppercase mb-4">
      <span>BLOG &amp; HEALTH TIPS</span>
      <LeafIcon size={14} />
    </div>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-serif font-bold text-[#1E2D18] leading-[1.08]">
      Ayurvedic Wisdom
      <br />
      <span className="italic font-normal text-[#2D5A27]">
        For A Better Life
      </span>
    </h1>

    {/* Description */}
    <p className="mt-5 text-[#5C6F63] text-sm sm:text-base leading-relaxed max-w-lg">
      Discover natural ways to improve your health and well-being with
      Ayurveda. Tips, insights and expert advice for a balanced life.
    </p>

  </div>

</div>
</section>
      {/* MAIN CONTENT AREA */}
      <section className="py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT 3-COLUMNS ARTICLE GRID (75% Width on Desktop) */}
          <div className="lg:col-span-3">
            {/* Header & Sort Control */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[#1E2D18]">
                  {selectedCategory === "All Categories" ? "Latest Articles" : selectedCategory}
                </h2>
                <span className="text-xs text-gray-500 font-medium">
                  ({filteredArticles.length})
                </span>
              </div>

              <div className="mt-2 sm:mt-0 flex items-center gap-3">
                {selectedCategory !== "All Categories" && (
                  <button
                    onClick={() => handleCategorySelect("All Categories")}
                    className="text-xs font-semibold text-[#2D5A27] hover:underline"
                  >
                    Clear Filter ✕
                  </button>
                )}
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span>Sort by:</span>
                  <select className="bg-white border border-gray-200 rounded px-2 py-1 text-gray-700 outline-none text-xs">
                    <option>Latest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* EXACT 3 CARDS PER ROW GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentBlogs.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer border border-gray-100 group"
                >
                  {/* Image & Date Badge */}
                  <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#2D5A27] text-white rounded-lg px-2.5 py-1 text-center shadow-md">
                      <span className="block text-sm font-bold leading-none">
                        {article.date}
                      </span>
                      <span className="block text-[10px] uppercase tracking-wider leading-tight">
                        {article.month}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-[#2D5A27] uppercase tracking-wider mb-1.5">
                      {article.category}
                    </span>

                    <h3 className="text-sm font-bold text-[#1E2D18] leading-snug mb-2 line-clamp-2 group-hover:text-[#2D5A27] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Footer / Read More */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 mt-auto">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {article.time}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedArticle(article);
                        }}
                        className="flex items-center gap-1 font-semibold text-[#2D5A27] hover:underline"
                      >
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty Search Result State */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 my-4">
                <p className="text-gray-500 text-sm mb-4">
                  No articles found matching &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                  }}
                  className="px-4 py-2 bg-[#2D5A27] text-white font-semibold text-xs rounded-md hover:bg-[#23471e] transition"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* PAGINATION NUMBERS */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1.5 mt-10">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 text-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full text-xs font-semibold transition-colors ${
                      currentPage === page
                        ? "bg-[#2D5A27] text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 text-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR (25% Width on Desktop) */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Search Box */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-[#1E2D18] mb-3">Search Blog</h3>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#2D5A27]"
                />
                <button
                  aria-label="Search"
                  type="button"
                  className="absolute right-1 p-1.5 bg-[#2D5A27] text-white rounded-md hover:bg-[#23471e] transition"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                <h3 className="text-sm font-bold text-[#1E2D18]">Categories</h3>
                <LeafIcon size={14} />
              </div>

              <ul className="space-y-1">
                {CATEGORY_LIST.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  return (
                    <li
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name)}
                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-xs transition ${
                        isSelected
                          ? "bg-[#eef4e7] font-bold text-[#1E2D18]"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span className="capitalize">{cat.name.toLowerCase()}</span>
                      </div>
                      <span className="text-gray-400 font-normal">
                        ({categoryCounts[cat.name] || 0})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                <h3 className="text-sm font-bold text-[#1E2D18]">Popular Posts</h3>
                <LeafIcon size={14} />
              </div>

              <div className="space-y-3">
                {publishedBlogs.slice(0, 4).map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedArticle(post)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-[#1E2D18] line-clamp-2 leading-tight group-hover:text-[#2D5A27] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {post.month} {post.date}, {post.year || "2026"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                <h3 className="text-sm font-bold text-[#1E2D18]">Tags</h3>
                <LeafIcon size={14} />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "# Ayurveda",
                  "# Health",
                  "# Wellness",
                  "# Herbs",
                  "# Yoga",
                  "# Panchakarma",
                  "# Diet",
                  "# Natural Healing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-[11px] font-medium hover:bg-[#eef4e7] hover:text-[#2D5A27] cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* READ ARTICLE MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#e8f4e1] text-[#2D5A27]">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#1E2D18] mb-3">
              {selectedArticle.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
              <span>📅 {selectedArticle.date} {selectedArticle.month} {selectedArticle.year || "2026"}</span>
              <span>⏱ {selectedArticle.time}</span>
              <span>✍ {selectedArticle.author || "Dr. Sharma"}</span>
            </div>

            <div className="w-full rounded-xl overflow-hidden mb-5 max-h-72 bg-gray-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                }}
              />
            </div>

            <p className="text-sm font-medium leading-relaxed text-gray-800 mb-4">
              {selectedArticle.excerpt}
            </p>

            <div className="text-xs md:text-sm leading-relaxed text-gray-600 whitespace-pre-line border-t border-gray-100 pt-4">
              {selectedArticle.content || selectedArticle.excerpt}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
              <Link
                href="/book-appointment"
                className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg font-semibold text-xs md:text-sm hover:bg-[#23471e] transition"
              >
                Book a Consultation
              </Link>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold text-xs md:text-sm hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEWSLETTER FOOTER SECTION */}
      <section className="py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2D5A27] text-white rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="text-center lg:text-left">
              <small className="text-xs uppercase tracking-wider text-green-200 font-semibold">
                Stay Updated with Ayurvedic Tips
              </small>
              <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-1">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xs md:text-sm text-green-100 max-w-md">
                Get the latest health tips, Ayurvedic remedies and special offers.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto z-10"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="px-4 py-2.5 rounded-lg border-none text-white outline-none text-xs min-w-[260px]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#1E2D18] text-white font-semibold rounded-lg hover:bg-black transition text-xs"
              >
                Subscribe
              </button>
            </form>

            <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
              <LeafIcon size={140} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}