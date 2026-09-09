"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./AdminDashboard.module.css";
import { useApp } from "@/context/AppContext";
import type { BlogItem, EnquiryItem } from "@/types";

export default function AdminDashboard() {
  const {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    toggleBlogPublish,
    enquiries,
    addEnquiry,
    updateEnquiryStatus,
    deleteEnquiry,
    resetToDefaults,
  } = useApp();

  // Active Tab: "blogs" | "enquiries"
  const [activeTab, setActiveTab] = useState<"blogs" | "enquiries">("blogs");

  // Blog modal states
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    category: "AYURVEDA BASICS",
    excerpt: "",
    content: "",
    image: "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png",
    author: "Dr. Sharma",
    time: "5 min read",
    published: true,
  });

  // Enquiry modal states
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);
  const [newEnquiryForm, setNewEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "Other",
    consultationType: "In-Clinic Consultation",
    purpose: "",
    concern: "",
    date: "",
    time: "",
  });

  // Search and filter states
  const [blogSearch, setBlogSearch] = useState("");
  const [enquirySearch, setEnquirySearch] = useState("");
  const [enquiryFilterStatus, setEnquiryFilterStatus] = useState<string>("all");
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Open Blog Modal for Create
  const handleOpenCreateBlog = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: "",
      category: "AYURVEDA BASICS",
      excerpt: "",
      content: "",
      image: "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png",
      author: "Dr. Sharma",
      time: "5 min read",
      published: true,
    });
    setBlogModalOpen(true);
  };

  // Open Blog Modal for Edit
  const handleOpenEditBlog = (blog: BlogItem) => {
    setEditingBlogId(blog.id);
    setBlogForm({
      title: blog.title,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author || "Dr. Sharma",
      time: blog.time,
      published: blog.published,
    });
    setBlogModalOpen(true);
  };

  // Handle Save Blog
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title.trim() || !blogForm.excerpt.trim()) {
      alert("Please fill in the title and summary!");
      return;
    }

    if (editingBlogId) {
      updateBlog(editingBlogId, {
        title: blogForm.title,
        category: blogForm.category,
        excerpt: blogForm.excerpt,
        content: blogForm.content || blogForm.excerpt,
        image: blogForm.image,
        author: blogForm.author,
        time: blogForm.time,
        published: blogForm.published,
      });
      showToast("Blog post updated successfully!");
    } else {
      const now = new Date();
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      addBlog({
        title: blogForm.title,
        category: blogForm.category,
        excerpt: blogForm.excerpt,
        content: blogForm.content || blogForm.excerpt,
        image: blogForm.image,
        author: blogForm.author,
        time: blogForm.time,
        date: String(now.getDate()).padStart(2, "0"),
        month: months[now.getMonth()],
        year: String(now.getFullYear()),
        published: blogForm.published,
      });
      showToast("New blog post published to the website!");
    }
    setBlogModalOpen(false);
  };

  // Handle Delete Blog
  const handleDeleteBlog = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteBlog(id);
      showToast("Blog post deleted!");
    }
  };

  // Handle Save New Enquiry/Appointment
  const handleSaveNewEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEnquiryForm.name || !newEnquiryForm.phone) {
      alert("Name and phone number are required.");
      return;
    }

    addEnquiry({
      name: newEnquiryForm.name,
      email: newEnquiryForm.email,
      phone: newEnquiryForm.phone,
      age: newEnquiryForm.age,
      gender: newEnquiryForm.gender,
      consultationType: newEnquiryForm.consultationType,
      purpose: newEnquiryForm.purpose,
      concern: newEnquiryForm.concern,
      date: newEnquiryForm.date,
      time: newEnquiryForm.time,
      source: "appointment",
    });

    setEnquiryModalOpen(false);
    showToast("New appointment added successfully!");
    setNewEnquiryForm({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "Other",
      consultationType: "In-Clinic Consultation",
      purpose: "",
      concern: "",
      date: "",
      time: "",
    });
  };

  // Filtered lists
  const filteredBlogs = blogs.filter((b) => {
    const q = blogSearch.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
  });

  const filteredEnquiries = enquiries.filter((item) => {
    const q = enquirySearch.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q);
    const matchesStatus =
      enquiryFilterStatus === "all" || item.status === enquiryFilterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const publishedCount = blogs.filter((b) => b.published).length;
  const pendingCount = enquiries.filter((e) => e.status === "new").length;

  return (
    <main className={styles.dashboardPage}>
      <div className={styles.container}>
        {/* Toast Notification */}
        {notification && (
          <div
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              backgroundColor: "#2f6823",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              zIndex: 9999999,
              fontWeight: 600,
            }}
          >
            ✓ {notification}
          </div>
        )}

        {/* Header */}
        <header className={styles.dashboardHeader}>
          <div className={styles.headerTitle}>
            <h1>Admin Control Dashboard</h1>
            <p>Manage website blogs, patient appointments, and enquiries with real-time sync.</p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/blog" className={`${styles.btn} ${styles.btnSecondary}`} target="_blank">
              🔗 View Live Blog
            </Link>
            <button
              onClick={() => {
                if (window.confirm("Reset all blogs and appointments to default sample data?")) {
                  resetToDefaults();
                  showToast("Data restored to defaults!");
                }
              }}
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              🔄 Reset Sample Data
            </button>
            <button
              onClick={handleOpenCreateBlog}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              + Add New Blog
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statCardLabel}>Total Blog Posts</span>
            <span className={styles.statCardValue}>{blogs.length}</span>
            <span className={styles.statCardSub}>{publishedCount} published on website</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardLabel}>Active Articles</span>
            <span className={styles.statCardValue}>{publishedCount}</span>
            <span className={styles.statCardSub}>Visible to visitors</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardLabel}>Total Appointments/Enquiries</span>
            <span className={styles.statCardValue}>{enquiries.length}</span>
            <span className={styles.statCardSub}>Bookings &amp; inquiries</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardLabel}>Pending Requests</span>
            <span className={styles.statCardValue} style={{ color: pendingCount > 0 ? "#b45309" : "#203f16" }}>
              {pendingCount}
            </span>
            <span className={styles.statCardSub}>Awaiting confirmation</span>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === "blogs" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("blogs")}
          >
            Blog Articles <span className={styles.tabBadge}>{blogs.length}</span>
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "enquiries" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("enquiries")}
          >
            Appointments &amp; Enquiries <span className={styles.tabBadge}>{enquiries.length}</span>
          </button>
        </div>

        {/* BLOGS MANAGEMENT TAB */}
        {activeTab === "blogs" && (
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h2>Website Articles ({filteredBlogs.length})</h2>
              <div className={styles.searchFilterRow}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  className={styles.searchInput}
                />
                <button onClick={handleOpenCreateBlog} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}>
                  + Create Article
                </button>
              </div>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr key={blog.id}>
                      <td>
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className={styles.tableThumbnail}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png";
                          }}
                        />
                      </td>
                      <td>
                        <strong>{blog.title}</strong>
                        <div style={{ fontSize: "12px", color: "#64755a", marginTop: "2px" }}>
                          {blog.excerpt.substring(0, 65)}...
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${styles.badgeBlue}`}>{blog.category}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            toggleBlogPublish(blog.id);
                            showToast(
                              blog.published
                                ? `"${blog.title}" moved to Drafts!`
                                : `"${blog.title}" published live!`
                            );
                          }}
                          className={`${styles.badge} ${
                            blog.published ? styles.badgeGreen : styles.badgeYellow
                          }`}
                          style={{ border: "none", cursor: "pointer" }}
                          title="Click to toggle publish status"
                        >
                          {blog.published ? "✓ Published" : "○ Draft"}
                        </button>
                      </td>
                      <td>
                        {blog.date} {blog.month}
                      </td>
                      <td>
                        <div className={styles.actionsCell}>
                          <button
                            onClick={() => handleOpenEditBlog(blog)}
                            className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSm}`}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog.id, blog.title)}
                            className={`${styles.btn} ${styles.btnDanger} ${styles.btnSm}`}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredBlogs.length === 0 && (
              <div className={styles.emptyState}>
                <p>No blog articles found matching your criteria.</p>
                <button onClick={handleOpenCreateBlog} className={`${styles.btn} ${styles.btnPrimary}`}>
                  Write First Article
                </button>
              </div>
            )}
          </div>
        )}

        {/* ENQUIRIES / APPOINTMENTS TAB */}
        {activeTab === "enquiries" && (
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h2>Patient Appointments &amp; Inquiries ({filteredEnquiries.length})</h2>
              <div className={styles.searchFilterRow}>
                <input
                  type="text"
                  placeholder="Search patient, email, phone..."
                  value={enquirySearch}
                  onChange={(e) => setEnquirySearch(e.target.value)}
                  className={styles.searchInput}
                />
                <select
                  value={enquiryFilterStatus}
                  onChange={(e) => setEnquiryFilterStatus(e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New (Pending)</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}
                >
                  + Add Booking
                </button>
              </div>
            </div>

            <div className={styles.tableResponsive}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Patient Name</th>
                    <th>Contact</th>
                    <th>Consultation / Topic</th>
                    <th>Scheduled For</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEnquiries.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <span
                          className={`${styles.badge} ${
                            item.source === "appointment" ? styles.badgeBlue : styles.badgeGray
                          }`}
                        >
                          {item.source === "appointment" ? "Appointment" : "Contact"}
                        </span>
                      </td>
                      <td>
                        <strong>{item.name}</strong>
                        {item.gender && item.age && (
                          <div style={{ fontSize: "11px", color: "#64755a" }}>
                            {item.gender}, {item.age} yrs
                          </div>
                        )}
                      </td>
                      <td>
                        <div>📞 {item.phone}</div>
                        {item.email && <div style={{ fontSize: "12px", color: "#64755a" }}>✉ {item.email}</div>}
                      </td>
                      <td>
                        <strong>{item.consultationType || item.treatment || "General Inquiry"}</strong>
                        {item.purpose && (
                          <div style={{ fontSize: "12px", color: "#64755a" }}>Purpose: {item.purpose}</div>
                        )}
                      </td>
                      <td>
                        {item.date ? (
                          <>
                            <div>{item.date}</div>
                            {item.time && <div style={{ fontSize: "12px", color: "#64755a" }}>{item.time}</div>}
                          </>
                        ) : (
                          <span style={{ color: "#8c9b85" }}>—</span>
                        )}
                      </td>
                      <td>
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateEnquiryStatus(item.id, e.target.value as "new" | "confirmed" | "completed")
                          }
                          className={styles.filterSelect}
                          style={{
                            padding: "4px 8px",
                            fontSize: "12px",
                            fontWeight: 600,
                            borderColor:
                              item.status === "confirmed"
                                ? "#86efac"
                                : item.status === "completed"
                                ? "#cbd5e1"
                                : "#fde047",
                          }}
                        >
                          <option value="new">New (Pending)</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td>
                        <div className={styles.actionsCell}>
                          <button
                            onClick={() => setSelectedEnquiry(item)}
                            className={`${styles.btn} ${styles.btnSecondary} ${styles.btnSm}`}
                          >
                            Details
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete enquiry from "${item.name}"?`)) {
                                deleteEnquiry(item.id);
                                showToast("Enquiry deleted!");
                              }
                            }}
                            className={`${styles.btn} ${styles.btnDanger} ${styles.btnSm}`}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredEnquiries.length === 0 && (
              <div className={styles.emptyState}>
                <p>No appointments or patient inquiries found.</p>
              </div>
            )}
          </div>
        )}

        {/* CREATE / EDIT BLOG MODAL */}
        {blogModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setBlogModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>{editingBlogId ? "Edit Blog Article" : "Write New Blog Article"}</h3>
                <button className={styles.closeModalBtn} onClick={() => setBlogModalOpen(false)}>
                  &times;
                </button>
              </div>

              <form onSubmit={handleSaveBlog}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Article Title *</label>
                  <input
                    type="text"
                    required
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    placeholder="e.g., The Healing Wonders of Ashwagandha"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Category</label>
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="AYURVEDA BASICS">AYURVEDA BASICS</option>
                      <option value="DIET & NUTRITION">DIET &amp; NUTRITION</option>
                      <option value="YOGA & WELLNESS">YOGA &amp; WELLNESS</option>
                      <option value="HERBAL REMEDIES">HERBAL REMEDIES</option>
                      <option value="PANCHAKARMA">PANCHAKARMA</option>
                      <option value="MENTAL HEALTH">MENTAL HEALTH</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Estimated Read Time</label>
                    <input
                      type="text"
                      value={blogForm.time}
                      onChange={(e) => setBlogForm({ ...blogForm, time: e.target.value })}
                      placeholder="e.g., 5 min read"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Author Name</label>
                    <input
                      type="text"
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      placeholder="e.g., Dr. Sharma"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Image URL</label>
                    <input
                      type="url"
                      value={blogForm.image}
                      onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                      placeholder="https://..."
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Short Excerpt / Summary *</label>
                  <textarea
                    rows={3}
                    required
                    value={blogForm.excerpt}
                    onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                    placeholder="Brief description displayed on the blog cards..."
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Content</label>
                  <textarea
                    rows={6}
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    placeholder="Write your complete article here..."
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="publishedCheck"
                    checked={blogForm.published}
                    onChange={(e) => setBlogForm({ ...blogForm, published: e.target.checked })}
                  />
                  <label htmlFor="publishedCheck" style={{ fontSize: "14px", fontWeight: 600 }}>
                    Publish immediately on live website
                  </label>
                </div>

                <div className={styles.modalFooter}>
                  <button
                    type="button"
                    onClick={() => setBlogModalOpen(false)}
                    className={`${styles.btn} ${styles.btnSecondary}`}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                    {editingBlogId ? "Save Changes" : "Create Article"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* DETAILS MODAL FOR ENQUIRY */}
        {selectedEnquiry && (
          <div className={styles.modalOverlay} onClick={() => setSelectedEnquiry(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Patient Booking Details</h3>
                <button className={styles.closeModalBtn} onClick={() => setSelectedEnquiry(null)}>
                  &times;
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14px" }}>
                <div>
                  <strong style={{ color: "#2f6823" }}>Patient Name:</strong> {selectedEnquiry.name}
                </div>
                <div>
                  <strong style={{ color: "#2f6823" }}>Phone:</strong> {selectedEnquiry.phone}
                </div>
                <div>
                  <strong style={{ color: "#2f6823" }}>Email:</strong> {selectedEnquiry.email || "Not provided"}
                </div>
                {selectedEnquiry.age && (
                  <div>
                    <strong style={{ color: "#2f6823" }}>Age &amp; Gender:</strong> {selectedEnquiry.age} years (
                    {selectedEnquiry.gender || "Not specified"})
                  </div>
                )}
                {selectedEnquiry.address && (
                  <div>
                    <strong style={{ color: "#2f6823" }}>Address:</strong> {selectedEnquiry.address}
                  </div>
                )}
                <div>
                  <strong style={{ color: "#2f6823" }}>Consultation / Service:</strong>{" "}
                  {selectedEnquiry.consultationType || selectedEnquiry.treatment || "General Consultation"}
                </div>
                {selectedEnquiry.purpose && (
                  <div>
                    <strong style={{ color: "#2f6823" }}>Treatment Purpose:</strong> {selectedEnquiry.purpose}
                  </div>
                )}
                {selectedEnquiry.date && (
                  <div>
                    <strong style={{ color: "#2f6823" }}>Scheduled Date &amp; Time:</strong>{" "}
                    {selectedEnquiry.date} at {selectedEnquiry.time}
                  </div>
                )}
                <div>
                  <strong style={{ color: "#2f6823" }}>Specific Concern / Message:</strong>
                  <div
                    style={{
                      background: "#f4f8f1",
                      padding: "12px",
                      borderRadius: "8px",
                      marginTop: "6px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {selectedEnquiry.concern || "None specified."}
                  </div>
                </div>
                <div>
                  <strong style={{ color: "#2f6823" }}>Status:</strong>{" "}
                  <span
                    className={`${styles.badge} ${
                      selectedEnquiry.status === "confirmed"
                        ? styles.badgeGreen
                        : selectedEnquiry.status === "completed"
                        ? styles.badgeGray
                        : styles.badgeYellow
                    }`}
                  >
                    {selectedEnquiry.status.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADD ENQUIRY MODAL */}
        {enquiryModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setEnquiryModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Add New Patient Booking</h3>
                <button className={styles.closeModalBtn} onClick={() => setEnquiryModalOpen(false)}>
                  &times;
                </button>
              </div>

              <form onSubmit={handleSaveNewEnquiry}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Patient Name *</label>
                    <input
                      type="text"
                      required
                      value={newEnquiryForm.name}
                      onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, name: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={newEnquiryForm.phone}
                      onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, phone: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      value={newEnquiryForm.email}
                      onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, email: e.target.value })}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Consultation Type</label>
                    <select
                      value={newEnquiryForm.consultationType}
                      onChange={(e) =>
                        setNewEnquiryForm({ ...newEnquiryForm, consultationType: e.target.value })
                      }
                      className={styles.formSelect}
                    >
                      <option value="In-Clinic Consultation">In-Clinic Consultation</option>
                      <option value="Online Video Consultation">Online Video Consultation</option>
                      <option value="Panchakarma Consultation">Panchakarma Consultation</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Preferred Date</label>
                    <input
                      type="text"
                      value={newEnquiryForm.date}
                      onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, date: e.target.value })}
                      placeholder="e.g., May 20, 2024"
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Preferred Time</label>
                    <input
                      type="text"
                      value={newEnquiryForm.time}
                      onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, time: e.target.value })}
                      placeholder="e.g., 10:00 AM"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Health Concern / Purpose</label>
                  <textarea
                    rows={3}
                    value={newEnquiryForm.concern}
                    onChange={(e) => setNewEnquiryForm({ ...newEnquiryForm, concern: e.target.value })}
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.modalFooter}>
                  <button
                    type="button"
                    onClick={() => setEnquiryModalOpen(false)}
                    className={`${styles.btn} ${styles.btnSecondary}`}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Save Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}