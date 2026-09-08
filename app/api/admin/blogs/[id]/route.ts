import { postgres } from "@/src/prisma/db";
import type { Contract } from "@/src/prisma/contract.d";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const blog = await postgres<Contract>(
    `SELECT * FROM "Blog" WHERE "id" = $1`,
    [params.id]
  );
  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { title, content, excerpt, category, image, published } = await request.json();
  const blog = await postgres<Contract>(
    `UPDATE "Blog" SET "title" = $1, "content" = $2, "excerpt" = $3, "category" = $4, "image" = $5, "published" = $6 WHERE "id" = $7 RETURNING *`,
    [title, content, excerpt, category, image, published, params.id]
  );
  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await postgres<Contract>(
    `DELETE FROM "Blog" WHERE "id" = $1`,
    [params.id]
  );
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}