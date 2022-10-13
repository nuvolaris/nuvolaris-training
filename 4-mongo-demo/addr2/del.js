const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

async function main(args) {
    
    const client = new MongoClient(args.dburi);
    await client.connect()
    const address = client.db().collection("address")
    await address.deleteOne({
        _id: ObjectId(args.id)
    })

    let res = []
    await address.find().forEach(x => res.push(x))
    //await address.deleteMany({})
    return { "body": res }
}
/* async function main(args) {
    // connect to the database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    // delete the key
    let key = "address:"+args.name
    return db.del(key)
    .then(reply => ({"del":reply}))
    .catch(err =>  ({"error": err}))
}
*/
