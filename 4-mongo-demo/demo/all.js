const {MongoClient} = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    const address = client.db().collection("address")
    // find all
    let res = []
    await address.find().forEach(x => res.push(x))
    return { "data": res }
}

