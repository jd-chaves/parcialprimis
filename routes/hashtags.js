var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGOLAB_URI;
const dbName = "historial";
const assert = require("assert");


const findDocuments = function(db, query, callback)
{
	const collection = db.collection("registros");
	console.log("los datos son: "+collection.find(query));
	collection.find(query).limit(10).toArray((err, docs) =>{
	assert.equal(err, null);
	console.log("Found" + docs.length + " records");
	callback(docs);
	});
}; 

function getHistory(query, callback)
{
	MongoClient.connect(url, (err,client)=>{
		assert.equal(null, err);
		console.log("Connected succesfully to the server");
		const db = client.db(dbName);  

		findDocuments(db, query, callback); 

		client.close();

	});
}


router.get("/", (req, res)=>{
	getHistory({}, (entry)=>res.send(entry));
});

router.post("/", (req, res) => {
	const el_hashtag = req.body.hashtag;
	console.log(el_hashtag);
	const quer = {
		hashtag: el_hashtag
	};
	MongoClient.connect(url, (err, client) => {
		if (err) throw err;
		console.log(err);
		const db = client.db(dbName);
		db.collection("registros").insertOne(quer);
		client.close();
		res.json({msg: "ok"});
	});
});


module.exports = router;