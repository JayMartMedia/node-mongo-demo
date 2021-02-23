const mongo = require('mongodb');

const url = "mongodb://localhost:27017/roles";

mongo.MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const dbo = db.db("roles");
    retrieveAllObjects(dbo);
});

const insertObject = async (dbo, obj) => {
    dbo.collection("emoji_role").insertOne(obj, (err, res) => {
        if (err) throw err;
    })
}

const retrieveObject = async (dbo, query) => {
    dbo.collection("emoji_role").findOne(query, (err, result) => {
        if (err) throw err;
        console.log(result)
        return result;
    })
}

const retrieveAllObjects = async (dbo) => {
    dbo.collection("emoji_role").find({}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
}

const deleteByRole = async (dbo, role) => {
    dbo.collection("emoji_role").deleteMany({"role" : role}, (err, obj) => {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
    });
}
