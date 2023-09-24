import { NextRequest, NextResponse } from "next/server";
import schemaUser from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schemaUser.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  const userExist = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (userExist)
    return NextResponse.json(
      { error: "User with same email already exist" },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
