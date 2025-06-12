
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/WellnessCenter";

if (!MONGODB_URI) {
  throw new Error(
    "⚠️ Mungon variabla MONGODB_URI në .env file"
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

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
