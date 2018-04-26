const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  account: String,
  password: String,
  sexual: String,
  address: String,
});

mongoose.model('user', userSchema);
