import connectMongoDB from "@/lib/mongo";
import Chicken from "@/models/chicken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { bone_in, boneless } =
    await request.json();
  await connectMongoDB();
  await Chicken.create({ bone_in, boneless });
  return NextResponse.json(
    { msg: "Topic Created" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const chicken = await Chicken.find();
  // console.log(chicken[0]._id)
  // console.log(chicken[0].boneless)
  // console.log(chicken[0].bone_in[0].price)
  // console.log(chicken[0].bone_in[1].price)
  return NextResponse.json(chicken);
}
