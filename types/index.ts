export interface BlogItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author?: string;
  time: string;
  date: string;
  month: string;
  year?: string;
  published: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  age?: string;
  gender?: string;
  address?: string;
  consultationType?: string;
  purpose?: string;
  concern?: string;
  date?: string;
  time?: string;
  treatment?: string;
  source: "appointment" | "contact" | "general";
  status: "new" | "confirmed" | "completed";
  createdAt: string;
}
