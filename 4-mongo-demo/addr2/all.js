const {MongoClient} = require('mongodb');

async function main(args){
    const client = new MongoClient(args.dburi);
    await client.connect()
    const address = client.db().collection("address")
    let res = []
    await address.find().forEach(x => res.push(x))
    return {
        "body": res
    }
}
/* async function main(args) {
    // connect to the database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()

    // read a set of keys
    let keys = await db.keys("address:*")
    return keys.length == 0
        ? { "data": [] } 
        : db.mGet(keys)
        .then(reply => ({ "data": reply.map(JSON.parse)} ))
        .catch(err => ({ "error": err}))
}
*/
