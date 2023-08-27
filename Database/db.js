import mongoose from "mongoose";

export const connection = async (url) => {
  
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      keepAlive: true,
    //   useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error while connecting to DB is: ${error.message}`);
  }
};

export default connection;
