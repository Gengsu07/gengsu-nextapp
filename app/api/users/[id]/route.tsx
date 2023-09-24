import { NextRequest, NextResponse } from "next/server";
import { GetUsers } from "../GetUser";
import schemaUser from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  if (id >= 11)
    return NextResponse.json(
      { error: "id you're requested more than available" },
      { status: 404 }
    );
  if (id < 11) {
    const users = await GetUsers();
    const UserSelected = users.filter((user) => user.id === id);
    return NextResponse.json(UserSelected);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const validation = schemaUser.safeParse(body);
  //validate body
  if (params.id > 10)
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
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //fetch data from db, show error 404 if not found
  if (params.id > 10)
    return NextResponse.json({ error: "User not Found" }, { status: 404 });

  //response data has been deleted or like apps requirement
  const body = await request.json();
  return NextResponse.json(
    `user with id :${params.id}, name: ${body.name} has been deleted`
  );
}
