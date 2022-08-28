const {MongoClient} = require('mongodb');

async function main(args) {
    const client = new MongoClient(args.dburi);
    await client.connect()
    const address = client.db().collection("address")
    let res = []
    await address.find().forEach(x => res.push(x))
    //await address.deleteMany({})
    return { "body": res }
}
/* async function main(args) {
    // connect to the database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    // select from value from a key
    let key = "address:"+args.name
    return db.get(key)
    .then(reply =>  JSON.parse(reply))
    .catch(err =>  ({"error": err}))
}
*/
