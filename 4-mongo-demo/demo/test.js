//const mongodb = 'mongodb://nuvolaris:nx2Tech715!@10.42.168.89:27017/nuvolaris01' //nutanix
//const mongodb = "mongodb://nuvolaris:s3cr3t@dev.nuvolaris.io:30717/nuvolaris" // dev
//const mongodb = "mongodb://nuv:nuv@localhost:27017/test"
//let args = {"mongodb":"mongodb://nuv:nuv@localhost:27017/test"}
const {MongoClient} = require('mongodb');

async function main(args) {
    const client = new MongoClient(args.mongodb);
    await client.connect()
    const data = client.db().collection("data")
    await data.insertOne({"hello":"world"})        
    let res = []
    await data.find().forEach(x => res.push(x))
    await data.deleteMany({})
    return {
        "body": res
    }
}
