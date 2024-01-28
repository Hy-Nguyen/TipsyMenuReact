import connectMongoDB from "@/lib/mongo";
import AddOn from "@/models/addon";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestBody = await request.json();
  await connectMongoDB();

  if (Array.isArray(requestBody)) {
    await Promise.all(
      requestBody.map(
        async ({ name, price }) => {
          return AddOn.create({
            name,
            price
          });
        }
      )
    );
  } else {
    const { name, price} =
      requestBody;
    await AddOn.create({
      name,
      price
    });
  }

  return NextResponse.json(
    { msg: "Entries Created" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const addOn = await AddOn.find();
  return NextResponse.json(addOn);
}
