import { MongoClient } from "mongodb";
import obj from "mongodb";
const mongostr = "mongodb+srv://Alagu:Alagupass@cluster0.chrjfup.mongodb.net/";

 export async function dbconnection() {
    const client = new MongoClient(mongostr)
    await client.connect()
    return client
}


export const client = await dbconnection();
export var ObjectId = obj.ObjectId;
