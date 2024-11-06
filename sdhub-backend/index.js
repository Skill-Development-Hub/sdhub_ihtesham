const express = require('express');
const mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/SDHub';

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('dataset');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      // assert.equal(2, docs.length);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
}

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`mongodb://localhost:27017/SDHub`, {});
        console.log(`MongoDB Connected: ${db.connection.host}`);
        // Use connect method to connect to the Server
        console.log("Connected correctly to server");
        findDocuments(db, function(docs) {
            console.log(docs);
            db.close();
        });
    }catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB();