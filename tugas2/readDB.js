//Requiring the package
var PouchDB = require('PouchDB');

//Creating the database object
var db = new PouchDB('indonesia');

//Reading the contents of a Document
// db.get('001', function(err, doc) {
//    if (err) {
//       return console.log(err);
//    } else {
//       console.log(doc);
//    }
// });

//Retrieving all the documents in PouchDB
db.allDocs(function(err, docs) {
   if (err) {
      return console.log(err);
   } else {
      console.log (docs.rows);
   }
});