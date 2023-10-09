import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { loginData } from "@/app/(pages)/login/page";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body: loginData = await request.json();
  if (!body.email || !body.password)
    return NextResponse.json("Login gagal", { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (!user)
    return NextResponse.json("Please enter correct data", { status: 400 });

  const passwordMatch = bcrypt.compare(body.password, user.password!);
  const match = (await passwordMatch)
    ? NextResponse.json("Success", { status: 200 })
    : NextResponse.json("Data tidak sesuai", { status: 400 });
  return match;
}
