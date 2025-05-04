const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  No: {
    type: Number,
    default: 0,
  },
});

mongoose.model('Survey', surveySchema);
