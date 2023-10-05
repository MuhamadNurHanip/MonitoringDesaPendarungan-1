const { prisma } = require("@/lib/prismaclient");
const { NextResponse } = require("next/server");

export const GET = async () => {
  try {
    const data = await prisma.funds.findMany();
    return NextResponse.json(
      { message: "Get Source Funds Success!", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const addData = await prisma.funds.create(data);
    if (addData)
      return NextResponse.json({ message: "Add source funds success!" });
    return NextResponse.json({
      message: "Add source funds failed! something wrong.",
    });
  } catch (error) {
    console.log(error.message);
  }
};
