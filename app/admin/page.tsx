"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./AdminDashboard.module.css";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

interface Blog {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  category?: string;
  image?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showNewEnquiryForm, setShowNewEnquiryForm] = useState(false);
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [newEnquiry, setNewEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    excerpt: "",
    category: "",
    image: "",
    published: false,
  });

  useEffect(() => {
    fetch("/api/admin/enquiries")
      .then((res) => res.json())
      .then((data) => setEnquiries(data))
      .catch((err) => console.error("Error fetching enquiries:", err));
  }, []);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const handleDeleteEnquiry = async (id: string) => {
    if (window.confirm("Delete this enquiry?")) {
      await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
      fetch("/api/admin/enquiries").then((res) => res.json()).then((data) => setEnquiries(data));
    }
  };

  const handleDeleteBlog = async (id: string) => {
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    fetch("/api/admin/blogs").then((res) => res.json()).then((data) => setBlogs(data));
  };

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="header-actions">
          <Link href="/admin/enquiry/new" className="btn btn-primary">
            New Enquiry
          </Link>
          <Link href="/admin/blog/new" className="btn btn-secondary">
            New Blog
          </Link>
        </div>
      </header>

      {/* Enquiries Section */}
      <section className="enquiries-section">
        <h2>Enquiries ({enquiries.length})</h2>
        <div className="enquiries-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phone || "-"}</td>
                  <td>{enquiry.message.substring(0, 50) + (enquiry.message.length > 50 ? "..." : "")}</td>
                  <td>{enquiry.createdAt}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDeleteEnquiry(enquiry.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {enquiries.length === 0 && <p>No enquiries yet.</p>}
      </section>

      {/* Blogs Section */}
      <section className="blogs-section">
        <h2>Blog Posts ({blogs.length})</h2>
        <div className="blogs-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Published</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.category || "-"}</td>
                  <td>
                    <span className={blog.published ? "badge bg-green" : "badge bg-red"}>
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>{blog.createdAt}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDeleteBlog(blog.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {blogs.length === 0 && <p>No blog posts yet.</p>}
      </section>
    </main>
  );
}