import { prisma } from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.proker.findMany();
    return NextResponse.json(
      {
        message: "Get data Program Kerja success!",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const response = await prisma.proker.create({ data });
    if (response)
      return NextResponse.json(
        { message: "POST data success!" },
        { status: 201 }
      );
    return NextResponse.json(
      { message: "POST data failed! Something wrong!" },
      { status: 500 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
