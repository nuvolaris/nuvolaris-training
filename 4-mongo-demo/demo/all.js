//let args = {"mongodb":"mongodb://nuv:nuv@localhost:27017/test", "name": "Mike", "company":"Nuv", "phone": "347"}
const {MongoClient} = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    // find all
    const address = client.db().collection("address")
    let res = []
    await address.find().forEach(x => res.push(x))
    return { "data": res }
}

