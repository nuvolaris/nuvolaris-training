//let args = {"mongodb":"mongodb://nuv:nuv@localhost:27017/test", "name": "Mike" }
const {MongoClient} = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    // insert
    const address = client.db().collection("address")
    return address.findOne({
        "name": args.name 
    })
}
