import connectMongoDB from "@/lib/mongo";
import Pregame from "@/models/pregame";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestBody = await request.json();
  await connectMongoDB();

  if (Array.isArray(requestBody)) {
    await Promise.all(
      requestBody.map(
        async ({ name, price, description }) => {
          return Pregame.create({
            name,
            price,
            description,
          });
        }
      )
    );
  } else {
    const { name, price, description } =
      requestBody;
    await Pregame.create({
      name,
      price,
      description,
    });
  }

  return NextResponse.json(
    { msg: "Entries Created" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const pregame = await Pregame.find();
  return NextResponse.json(pregame);
}
