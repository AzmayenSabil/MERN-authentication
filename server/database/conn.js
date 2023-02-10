// const mongoose = require("mongoose");
import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
import ENV from "../config.js";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  // const db = await mongoose.connect(getUri);
  const db = await mongoose.connect(ENV.ATLAS_URI);
  // const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database Connected");
  return db;
}

// async function connect() {
//     /** mongoDB connection */
//     mongoose.connect(
//     process.env.MONGO_URI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err) => {
//         if (!err) {
//         console.log("MongoDB Connection Succeeded.");
//         } else {
//         console.log("Error in DB connection : " + err);
//         }
//     }
//     );
// }

export default connect;
