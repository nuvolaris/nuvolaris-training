//let args = {"mongodb":"mongodb://nuv:nuv@localhost:27017/test" }
const {MongoClient} = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    // insert
    const address = client.db().collection("address")
    return address.deleteMany({})
}
