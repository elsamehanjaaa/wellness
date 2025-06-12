import mongoose from 'mongoose';

import mongoose from "mongoose"; 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/WellnessCenter";

if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Missing MONGODB_URI environment variable"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "WellnessCenter",
    }).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;