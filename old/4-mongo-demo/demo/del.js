const {MongoClient} = require('mongodb');

async function main(args) {
    // connect
    const client = new MongoClient(args.mongodb);
    await client.connect()
    const address = client.db().collection("address")
    // delete by name
    return address.deleteOne({
        "name": args.name 
    })
}
