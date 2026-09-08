import { postgres } from "@/src/prisma/db";
import type { Contract } from "@/src/prisma/contract.d";

export async function GET(request: Request) {
  const blogs = await postgres<Contract>(
    `SELECT * FROM "Blog" ORDER BY "createdAt" DESC`
  );
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { title, content, excerpt, category, image, published } = await request.json();
  const blog = await postgres<Contract>(
    `INSERT INTO "Blog" ("title", "content", "excerpt", "category", "image", "published") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [title, content, excerpt, category, image, published]
  );
  return new Response(JSON.stringify(blog), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}