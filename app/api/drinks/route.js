import connectMongoDB from "@/lib/mongo";
import Drinks from "@/models/drinks";
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
          return Drinks.create({
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
    await Drinks.create({
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
export async function GET(req, res) {
  await connectMongoDB();
  const search = new URL(req.url).searchParams;
  const category = search.keys().next().value;
  let drinks;
  if (category) {
    drinks = await Drinks.find({
      category: category,
    });
  } else {
    drinks = await Drinks.find();
  }
  return NextResponse.json(drinks);
}
