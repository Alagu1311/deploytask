import { ObjectId } from "bson";
import { client } from "./connection.js";

export  function getstudent() {
 
    return client.db("studentlist").collection("studentlist").find().toArray()
    
    
}

export function Editstud(id,data) {
    return client.db("studentlist").collection("studentlist").findOneAndUpdate({_id:new ObjectId(id)},{$set:data})
}
export function AddStud(data){
    return client
    .db("studentlist")
    .collection("studentlist")
    .insertOne(data)
}
