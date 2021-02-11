const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

class db {

    constructor() {
        this.uri = "mongodb+srv://Krishnan:Gokul@13@cluster0.gmgmf.mongodb.net/<dbname>?retryWrites=true&w=majority";
        this.database = "InheritDatabase"
        this.client = new MongoClient(this.uri, { useUnifiedTopology: true });
    }

    async addUser(user) {
        try {

            await this.client.connect();

            const database = this.client.db(this.database);
            const collection = database.collection('User');

            const result = await collection.insertOne(user);

            if(insertedCount == 1) {
                return 1;
            }
            
        } 
        
        finally {
            await this.client.close();
        }
    }
}


module.exports = db;