import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required!"],
      category: {
        type: String,
        required: false,
        default: "Other",
      },
    },
    owner: {
      type: String,
      required: [true, "Owner name is required!"],
    },
    address: {
      type: String,
      required: [true, "Address is required!"],
    },
    contact_number: {
      type: String,
      required: [true, "Contact number is required!"],
    },
  },
  { timestamps: true }
);

export const Store = new mongoose.model("Store", storeSchema);
