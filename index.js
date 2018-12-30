const express = require('express');
const mongoose = require('mongoose');

const api = express();
const port = 3000;

// mongoose.connect(
//   'mongodb://bartlomein:bartman23@ds145584.mlab.com:45584/willitkillalyssa',
//   { useNewUrlParser: true }
// );

const db = require('./env').mongoURI;

api.get('/', (req, res) => res.send('Hello World!'));

// api.get('/chems', (req, res) =>
//   res.send(Chems.findOne({ chemicalName: 'formaldehyde' }))
// );

api.listen(port, () => console.log(`Example app listening on port ${port}!`));

let Schema = mongoose.Schema;

const chemSchema = new Schema({
  productName: String,
  companyName: String,
  brandName: String,
  primaryCategory: String,
  subCategory: String,
  chemicalName: String
});
console.log(db);

let Chems = mongoose.model('chemicals', chemSchema);

//FIND BY PRODUCT
api.get('/formaldehyde', (req, res) =>
  res.send(
    Chems.find({ chemicalName: 'Formaldehyde (gas)' }, function(
      err,
      chemicals
    ) {
      if (err) return handleError(err);
      console.log(chemicals);

      // 'athletes' contains the list of athletes that match the criteria.
    })
  )
);
