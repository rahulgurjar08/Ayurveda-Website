import { postgres } from "@/src/prisma/db";
import type { Contract } from "@/src/prisma/contract.d";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  
  let query = `SELECT * FROM "Enquiry"`;
  const params: any[] = [];
  
  if (status === "unread") {
    query += ` WHERE "message" != ''`;
  }
  
  query += ` ORDER BY "createdAt" DESC`;
  
  const enquiries = await postgres<Contract>(query, params);
  return new Response(JSON.stringify(enquiries), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  const enquiry = await postgres<Contract>(
    `INSERT INTO "Enquiry" ("name", "email", "phone", "message") VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, email, phone, message]
  );
  return new Response(JSON.stringify(enquiry), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}