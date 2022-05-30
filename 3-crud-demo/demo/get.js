async function main(args) {
    // connect to the database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    // select from value from a key
    let key = "address:"+args.name
    return db.get(key)
    .then(reply =>  JSON.parse(reply))
    .catch(err =>  ({"error": err}))
}
