import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true,
};

if (!URI) throw new Error("Please add your MongoDB URI to .env.local");

let client = new MongoClient(URI, options);

let clientPromise;

if (process.env.NODE_ENV !== "production"){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect().catch(err => {
            console.error("Failed to connect to MongoDB", err);
            process.exit(1);
        });
    }
    clientPromise = global._mongoClientPromise;
}
else {
    clientPromise = client.connect().catch(err => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });
}

export default clientPromise;