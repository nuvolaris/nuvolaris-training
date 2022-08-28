async function main(args) {

    const db = require("redis").createClient({"url":args.redis})
    await db.connect()

    let keys = await db.keys("address:*")

    return  db.del(keys)
    .then(reply => ({ "delall":reply}))
    .catch(err =>  ({ "error": err}))
}
