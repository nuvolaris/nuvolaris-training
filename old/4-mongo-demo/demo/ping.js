const {MongoClient} = require('mongodb');

async function main(args) {
   const client = new MongoClient(args.mongodb);
   await client.connect() 
   return client.db().command({ping:1}) 
}

