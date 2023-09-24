import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (params.id > 10)
    return NextResponse.json({ error: "user is too large" }, { status: 400 });
  return NextResponse.json({ id: 4, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (params.id > 10)
    return NextResponse.json({ error: "user is too large" }, { status: 400 });
  return NextResponse.json(
    `user with id:4,name ${body.name} , price:${body.price} deleted`
  );
}
