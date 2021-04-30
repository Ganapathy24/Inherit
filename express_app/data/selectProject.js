const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

class selectProject {

    constructor() {
        this.database = process.env.DATABASE
        this.uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gmgmf.mongodb.net/${this.database}?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri, { useUnifiedTopology: true });
    }

    async add(id, project) {
        try {

            await this.client.connect();

            const database = this.client.db(this.database);
            const collection = database.collection('User');
            
            const query = { studentID : id };
            const update = { 
                $addToSet : { 
                    projects: project
                }
            }
            const projects = await collection.updateOne(query, update);
            return projects;
        } 

        catch (err) {
            return null;
        }
        
        finally {
            await this.client.close();
        }
    }
}


module.exports = selectProject;
