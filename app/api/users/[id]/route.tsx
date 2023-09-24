import { NextRequest, NextResponse } from "next/server";
import schemaUser from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const jmlUser = await prisma.user.count();

  if (id > jmlUser)
    return NextResponse.json(
      { error: "id you're requested more than available" },
      { status: 404 }
    );
  if (id <= jmlUser) {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    return NextResponse.json(user);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = schemaUser.safeParse(body);
  //validate body
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json(
      { error: "The user does not exist" },
      { status: 400 }
    );

  //response error
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  //update data and return the updated
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //fetch data from db, show error 404 if not found
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not Found" }, { status: 404 });

  //response data has been deleted or like apps requirement
  const deletedUser = await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json(
    `user with id :${deletedUser.id}, name: ${deletedUser.name} has been deleted`
  );
}
