let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const chemSchema = new Schema({
  productName: String,
  companyName: String,
  brandName: String,
  primaryCategory: String,
  subCategory: String,
  chemicalName: String
});

export default chemSchema;
