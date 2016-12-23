var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://heroku_v2lh3tm5:29v1318qfogijut0rdvgblfjnr@ds145208.mlab.com:45208/heroku_v2lh3tm5'

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
    db.close();
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// getting started using MongoDB to store songs and lyrics.  To explore at a later time...
