import { postgres } from "@/src/prisma/db";
import type { Contract } from "@/src/prisma/contract.d";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const enquiry = await postgres<Contract>(
    `SELECT * FROM "Enquiry" WHERE "id" = $1`,
    [params.id]
  );
  return new Response(JSON.stringify(enquiry), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { name, email, phone, message } = await request.json();
  const enquiry = await postgres<Contract>(
    `UPDATE "Enquiry" SET "name" = $1, "email" = $2, "phone" = $3, "message" = $4 WHERE "id" = $5 RETURNING *`,
    [name, email, phone, message, params.id]
  );
  return new Response(JSON.stringify(enquiry), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await postgres<Contract>(
    `DELETE FROM "Enquiry" WHERE "id" = $1`,
    [params.id]
  );
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}