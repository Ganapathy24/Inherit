const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

class registerUser {

    constructor() {
        this.database = process.env.DATABASE
        this.uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gmgmf.mongodb.net/${this.database}?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri, { useUnifiedTopology: true });
    }

    async register(user) {
        try {

            await this.client.connect();

            const database = this.client.db(this.database);
            const collection = database.collection('User');

            const result = await collection.insertOne(user);

            return result.insertedCount;
        }
        
        catch(err) {
            return 0;
        }
        
        finally {
            await this.client.close();
        }
    }
}


module.exports = registerUser;
