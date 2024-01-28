import connectMongoDB from "@/lib/mongo";
import Drink from "@/models/drinks";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestBody = await request.json();
  await connectMongoDB();

  if (Array.isArray(requestBody)) {
    await Promise.all(
      requestBody.map(
        async ({
          name,
          price,
          description,
          category,
        }) => {
          return Drink.create({
            name,
            price,
            description,
            category,
          });
        }
      )
    );
  } else {
    const { name, price, description, category } =
      requestBody;
    await Drink.create({
      name,
      price,
      description,
      category,
    });
  }

  return NextResponse.json(
    { msg: "Entries Created" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const drink = await Drink.find();
  return NextResponse.json(drink);
}
