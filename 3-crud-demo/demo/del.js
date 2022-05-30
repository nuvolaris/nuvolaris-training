async function main(args) {
    // connect to the database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    // delete the key
    let key = "address:"+args.name
    return db.del(key)
    .then(reply => ({"del":reply}))
    .catch(err =>  ({"error": err}))
}
