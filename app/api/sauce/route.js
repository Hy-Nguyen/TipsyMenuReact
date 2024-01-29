

import connectMongoDB from "@/lib/mongo";
import Sauce from "@/models/sauce";
import { NextResponse } from "next/server";

export async function POST(request) {
    const sauces = await request.json();
    await connectMongoDB();
    
    const promises = sauces.map(sauce => Sauce.create({
      name: sauce.name,
      description: sauce.description
    }));
  
    await Promise.all(promises);
  
    return NextResponse.json(
      { msg: "Topics Created" },
      { status: 201 }
    );
  }
  

export async function GET() {
  await connectMongoDB();
  const sauce = await Sauce.find();
  return NextResponse.json(sauce);
}

