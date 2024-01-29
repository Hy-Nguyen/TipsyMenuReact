import mongoose, {
  Document,
  Schema,
  Model,
} from "mongoose";

interface IDrinkDocument extends Document {
  name: string;
  price: number;
  description: string;
  category: string;
}
interface IDrinkModel
  extends Model<IDrinkDocument> {}
let Drinks: IDrinkModel;

if (mongoose.models.Drinks) {
  Drinks = mongoose.model<IDrinkDocument>(
    "Drinks"
  ) as IDrinkModel;
} else {
  const drinkSchema = new Schema<IDrinkDocument>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  });

  Drinks = mongoose.model<
    IDrinkDocument,
    IDrinkModel
  >("Drinks", drinkSchema);
}

export default Drinks;
export type { IDrinkModel };