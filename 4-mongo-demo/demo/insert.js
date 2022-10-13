//let args = {"mongodb":"mongodb://nuv:nuv@localhost:27017/test", "name": "Mike" }
const { MongoClient } = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    const address = client.db().collection("address")
    // insert
    return address.insertOne({
        "name": args.name || "",
        "company": args.company || "",
        "phone": args.phone || ""
    })
}
