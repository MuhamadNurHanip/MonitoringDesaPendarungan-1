import { prisma } from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json(
      { message: "GET All Users", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const setData = await prisma.user.create({ data });
    if (setData) return NextResponse.json({ message: "Add user success!" });
    return NextResponse.json({ message: "Add user failed! something wrong." });
  } catch (error) {
    console.log(error.message);
  }
};
