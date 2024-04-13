import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { parse } from "url";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { query } = parse(req.url || "", true);
    const id = query.id as string;

    if (id) {
      let result = await prisma.page.findUnique({
        where: { id },
      });
      return NextResponse.json(result);
    } else {
      let result = await prisma.page.findMany()
      return NextResponse.json(result);
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(req: NextRequest, res?: NextResponse) {
  try {
    const data = await req.json();
    const result = await prisma.page.create({
      data
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(req: NextRequest, res?: NextResponse) {
  try {
    const { query } = parse(req.url || "", true);
    const id = query.id as string;
    const data = await req.json();
    const result = await prisma.page.update({
      where: { id },
      data,
    });
    return NextResponse.json("");
  } catch (error) {}
}

export async function DELETE(req: NextRequest, res?: NextResponse) {
  try {
    const { query } = parse(req.url || "", true);
    const id = query.id as string;
    const result = await prisma.page.delete({
      where: { id },
    });
    return NextResponse.json("");
  } catch (error) {}
}
