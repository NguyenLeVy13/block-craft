import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { parse } from "url";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { query } = parse(req.url || "", true);
    const id = query.id;

    if (id) {
      let result = await prisma.sample.findUnique({
        where: { id },
      });
      return NextResponse.json(result);
    } else {
      let result = await prisma.sample.findMany()
      return NextResponse.json(result);
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(_req: NextRequest, res?: NextResponse) {
  try {
    const data = await _req.json();
    const result = await prisma.sample.create({
      data
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(_req: NextRequest, res?: NextResponse) {
  try {
    const result = await prisma.sample.update({
      where: { id },
      data,
    });
    return NextResponse.json("");
  } catch (error) {}
}

export async function DELETE(req: NextRequest, res?: NextResponse) {
  try {
    const user = await prisma.sample.delete({
      where: { id },
    });
    return NextResponse.json("");
  } catch (error) {}
}
