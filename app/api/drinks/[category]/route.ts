import {
  NextRequest,
  NextResponse,
} from "next/server";
import connectMongoDB from "@/lib/mongo";
import Drinks, {
  IDrinkModel,
} from "@/models/drinks";

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  console.log();
  const search = new URL(req.url).searchParams;
  console.log(search);
  await connectMongoDB();

  const category = req.body;
  const drinks = await Drinks.find({
    // category: category,
  });

  console.log("hi?");
  return NextResponse.json(drinks);
}
