import { MongoClient } from "mongodb";
import obj from "mongodb";
const mongostr = "mongodb://127.0.0.1:27017/";

 export async function dbconnection() {
    const client = new MongoClient(mongostr)
    await client.connect()
    return client
}


export const client = await dbconnection();
export var ObjectId = obj.ObjectId;