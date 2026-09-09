"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { BlogItem, EnquiryItem } from "@/types";

export const INITIAL_BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    date: "08",
    month: "May",
    year: "2024",
    category: "AYURVEDA BASICS",
    title: "What is Ayurveda and How Does It Work?",
    excerpt: "Learn the ancient science of life and how it helps in balancing body, mind and soul naturally.",
    content: "Ayurveda, the ancient science of life, offers a holistic approach to health. By identifying individual constitution (Prakriti) and current imbalances (Vikriti), Ayurvedic therapy utilizes natural herbs, specific dietary guidance, and therapeutic daily routines to restore harmony and natural vitality.",
    time: "5 min read",
    author: "Dr. Sharma",
    image: "https://shatavariayurveda.com/_ipx/f_webp/images/blog/ayurvedic-consultation-europe.png",
    published: true,
    createdAt: new Date("2024-05-08T10:00:00Z").toISOString(),
  },
  {
    id: "blog-2",
    date: "05",
    month: "May",
    year: "2024",
    category: "DIET & NUTRITION",
    title: "Ayurvedic Diet: Eat Right for Your Dosha",
    excerpt: "Know what to eat according to your dosha and improve digestion, energy and immunity.",
    content: "According to Ayurveda, balanced digestion (Agni) is the cornerstone of vibrant health. Discover which foods soothe Vata, cool Pitta, and lighten Kapha, ensuring optimal energy and preventing toxins (Ama) from forming.",
    time: "6 min read",
    author: "Dr. Sharma",
    image: "https://www.sharadaynch.com/assets/images/about/about-Wellness-Through-Nature.jpg",
    published: true,
    createdAt: new Date("2024-05-05T09:30:00Z").toISOString(),
  },
  {
    id: "blog-3",
    date: "02",
    month: "May",
    year: "2024",
    category: "YOGA & WELLNESS",
    title: "Yoga and Ayurveda: The Perfect Combination",
    excerpt: "Discover how yoga and Ayurveda work together to enhance overall health and inner peace.",
    content: "Yoga and Ayurveda are twin branches of Vedic wisdom. While Ayurveda diagnoses and treats imbalances through diet and herbal medicines, Yoga aligns posture, breath, and meditation for sustained mental and spiritual peace.",
    time: "4 min read",
    author: "Dr. Sharma",
    image: "https://www.sharadaynch.com/assets/images/about/about-Wellness-Through-Nature.jpg",
    published: true,
    createdAt: new Date("2024-05-02T11:00:00Z").toISOString(),
  },
  {
    id: "blog-4",
    date: "28",
    month: "Apr",
    year: "2024",
    category: "HERBAL REMEDIES",
    title: "Healing Herbs in Ayurveda You Should Know",
    excerpt: "Explore the power of Ayurvedic herbs and their amazing benefits for everyday health problems.",
    content: "Discover powerful rejuvenating herbs like Ashwagandha for nervous strength, Brahmi for cognitive sharpness, Shatavari for vitality, and Triphala for comprehensive digestive detoxification.",
    time: "5 min read",
    author: "Dr. Sharma",
    image: "https://vaidyarajindia.com/images/combo-products.jpg",
    published: true,
    createdAt: new Date("2024-04-28T08:15:00Z").toISOString(),
  },
  {
    id: "blog-5",
    date: "25",
    month: "Apr",
    year: "2024",
    category: "PANCHAKARMA",
    title: "Panchakarma Therapy: Detoxify Your Body",
    excerpt: "Deep cleansing therapies that remove toxins, boost immunity and rejuvenate your body.",
    content: "Panchakarma is Ayurveda's signature detoxification program. It purges accumulated metabolic waste from deep tissues, resets digestive strength, and provides total rejuvenation for mind and body.",
    time: "7 min read",
    author: "Dr. Sharma",
    image: "https://www.pravaayu.com/_next/image?q=100&url=https%3A%2F%2Fwww.pravaayu.com%2Fbackend%2Fwp-content%2Fuploads%2F2024%2F06%2FUntitled-design-17-1024x576.png&w=3840",
    published: true,
    createdAt: new Date("2024-04-25T14:20:00Z").toISOString(),
  },
  {
    id: "blog-6",
    date: "22",
    month: "Apr",
    year: "2024",
    category: "MENTAL HEALTH",
    title: "Ayurvedic Tips to Manage Stress & Anxiety",
    excerpt: "Simple and effective Ayurvedic ways to reduce stress, calm your mind and improve sleep.",
    content: "Soften nervous tension and ground runaway thoughts with classical Ayurvedic therapies like Shirodhara, warm Abhyanga oil massage, and soothing herbal infusions.",
    time: "5 min read",
    author: "Dr. Sharma",
    image: "https://www.ask-ayurveda.com/media/uploads/ckeditor/2025/05/06/chatgpt-image-may-6-2025-11_36_18-am.png",
    published: true,
    createdAt: new Date("2024-04-22T16:00:00Z").toISOString(),
  },
];

export const INITIAL_ENQUIRIES: EnquiryItem[] = [
  {
    id: "enq-1",
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    phone: "+91 98765 43210",
    age: "34",
    gender: "Male",
    address: "Jaipur, Rajasthan",
    consultationType: "In-Clinic Consultation",
    purpose: "Digestive Care & Acidity",
    concern: "Suffering from persistent acidity and bloating for the past 6 months.",
    date: "May 15, 2024",
    time: "10:00 AM",
    source: "appointment",
    status: "new",
    createdAt: new Date("2024-05-10T08:30:00Z").toISOString(),
  },
  {
    id: "enq-2",
    name: "Sunita Reddy",
    email: "sunita.r@example.com",
    phone: "+91 98234 56789",
    age: "48",
    gender: "Female",
    address: "Kota, Rajasthan",
    consultationType: "Online Video Consultation",
    purpose: "Joint Pain & Arthritis",
    concern: "Severe knee stiffness in the mornings, looking for herbal Panchakarma therapy.",
    date: "May 16, 2024",
    time: "11:30 AM",
    source: "appointment",
    status: "confirmed",
    createdAt: new Date("2024-05-11T11:45:00Z").toISOString(),
  },
  {
    id: "enq-3",
    name: "Meera Deshmukh",
    email: "meera.d@example.com",
    phone: "+91 94111 22334",
    treatment: "Skin Care & Glow Treatment",
    concern: "Inquiry about herbal facial treatments and natural skin health remedies.",
    source: "contact",
    status: "new",
    createdAt: new Date("2024-05-12T14:10:00Z").toISOString(),
  },
];

const BLOGS_STORAGE_KEY = "ayurveda_global_blogs_v1";
const ENQUIRIES_STORAGE_KEY = "ayurveda_global_enquiries_v1";

export interface AppContextType {
  blogs: BlogItem[];
  addBlog: (blog: Omit<BlogItem, "id" | "createdAt">) => void;
  updateBlog: (id: string, blog: Partial<BlogItem>) => void;
  deleteBlog: (id: string) => void;
  toggleBlogPublish: (id: string) => void;

  enquiries: EnquiryItem[];
  addEnquiry: (enquiry: Omit<EnquiryItem, "id" | "createdAt" | "status">) => void;
  updateEnquiryStatus: (id: string, status: "new" | "confirmed" | "completed") => void;
  deleteEnquiry: (id: string) => void;

  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function getStoredItem<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<BlogItem[]>(() =>
    getStoredItem(BLOGS_STORAGE_KEY, INITIAL_BLOGS)
  );
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(() =>
    getStoredItem(ENQUIRIES_STORAGE_KEY, INITIAL_ENQUIRIES)
  );

  // Save blogs to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
    } catch (e) {
      console.warn("Could not save blogs to localStorage:", e);
    }
  }, [blogs]);

  // Save enquiries to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(enquiries));
    } catch (e) {
      console.warn("Could not save enquiries to localStorage:", e);
    }
  }, [enquiries]);

  const addBlog = (newBlogData: Omit<BlogItem, "id" | "createdAt">) => {
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const newBlog: BlogItem = {
      ...newBlogData,
      id: `blog-${Date.now()}`,
      date: newBlogData.date || String(now.getDate()).padStart(2, "0"),
      month: newBlogData.month || months[now.getMonth()],
      year: newBlogData.year || String(now.getFullYear()),
      createdAt: now.toISOString(),
    };
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const updateBlog = (id: string, updatedFields: Partial<BlogItem>) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updatedFields, updatedAt: new Date().toISOString() } : b))
    );
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const toggleBlogPublish = (id: string) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, published: !b.published, updatedAt: new Date().toISOString() } : b))
    );
  };

  const addEnquiry = (newEnquiryData: Omit<EnquiryItem, "id" | "createdAt" | "status">) => {
    const newEnquiry: EnquiryItem = {
      ...newEnquiryData,
      id: `enq-${Date.now()}`,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: "new" | "confirmed" | "completed") => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToDefaults = () => {
    setBlogs(INITIAL_BLOGS);
    setEnquiries(INITIAL_ENQUIRIES);
    try {
      localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(INITIAL_BLOGS));
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_ENQUIRIES));
    } catch (e) {
      console.warn("Could not reset localStorage:", e);
    }
  };

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
export type { BlogItem, EnquiryItem };
