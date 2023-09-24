import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  //cek product ada atau engga
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json(
      { error: "Product is not exist" },
      { status: 400 }
    );

  //lakukan update
  const newProduct = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //cek product ada atau engga
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json(
      { error: "product is not exist" },
      { status: 400 }
    );

  //delete
  const delProduct = await prisma.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json(
    `user with id:${delProduct.id},name ${delProduct.name} , price:${delProduct.price} deleted`
  );
}
