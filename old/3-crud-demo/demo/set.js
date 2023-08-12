async function main(args) {
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
