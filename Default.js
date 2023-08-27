import { products } from "./Constants/Data.js";
import Product from "./Model/product-schema.js";

const Defaultdata = async () => {
  try {
    // await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error while inserting default data is", error.message);
  }
};

export default Defaultdata;
