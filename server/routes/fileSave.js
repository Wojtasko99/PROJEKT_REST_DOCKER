const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const dbName = "projekt";
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

client.connect(function (err) {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    getDocuments(db, function (docs) {
        console.log('Closing connection.');
        client.close();

        try {
            fs.writeFileSync('out_file.json', JSON.stringify(docs));
            console.log('Done writing to file.');
        } catch (err) {
            console.log('Error writing to file', err);
        }
    });
});

const getDocuments = function (db, callback) {
    const query = {};
    db.collection("inCollection")
        .find(query)
        .toArray(function (err, result) {
            if (err) throw err;
            callback(result);
        });
};