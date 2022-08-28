
async function main(args) {
    // connnect to the redis database
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    // execute a ping command
    return db.ping().then(r => ({
        "body": r
    }))
}