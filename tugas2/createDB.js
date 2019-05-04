//Requiring the package
var PouchDB = require('PouchDB');

//Creating the database object
//var localdb = new PouchDB('my_data');
var remoteDB = new PouchDB('http://10.151.253.11:9000/bapakridho')

//Creating doc for testing
doc = {
   _id : '007',
   username: 'james',
   password: 'bond'
   }

doc2 = {
   _id : '046',
   username: 'redo',
   password: 'ganteng'
   }
//Inserting Document
remoteDB.put(doc, function(err, response) {
   if (err) {
      return console.log(err);
   } else {
      console.log("Document created Successfully");
   }
});

// localdb.put(doc2, function(err, response) {
//    if (err) {
//       return console.log(err);
//    } else {
//       console.log("Document 2 created Successfully");
//    }
// });