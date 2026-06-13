const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const { MongoClient } = require('mongodb');

const URI = "mongodb+srv://adarshpandey:AdarshPandey@cluster0.5oyhjdy.mongodb.net/";

console.log(URI);

const client = new MongoClient(URI);

const dbName = "namasteIndia";

async function main(){
    // use connect method to connect to the server...
    await client.connect();
    console.log("Connected successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data={
        "firstname":"Adp",
        "lastname":"Johnson",
        "city":"NYC",
        "country":"US",
        "phone":"98765"
    };

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted data=>",insertResult);

    // Reading the data...
    const findResult = await collection.find().toArray();
    console.log("found document =>",findResult);
    return "done.";
    
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());
