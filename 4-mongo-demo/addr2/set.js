const { MongoClient } = require('mongodb');

async function main(args) {

    const client = new MongoClient(args.dburi);
    await client.connect()
    const address = client.db().collection("address")
    await address.insertOne({
        "name": args.name || "",
        "company": args.company || "", 
        "phone": args.phone || ""
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
    // set key and value
    let key = "address:"+args.name
    let value = JSON.stringify({
            "name": args.name || "",
            "company":  args.company  || "",
            "phone": args.phone || ""
    })
    // set the value
    return db.set(key, value)
    .then(reply => ({"set": reply}))
    .catch(err =>  ({"error": err}))
}
*/
