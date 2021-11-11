const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    connectionName : {type: String, required: [true, "Title is required."]},
    connectionTopic: {type: String, required: [true, "Topic is required."]},
    details: {type: String, required: [true, "Details are required."], minLength: [10, "The content should have at least 10 characters"]},
    date: {type:Date, required:[true, "You need to provide the event date."]},
    startTime : {type: String, required: [true, "Event start time is required."]},
    endTime: {type: String, required: [true, "Event end time is required."]},
    hostName: {type: String, required: [true, "Host Name is required."]},
    where: {type: String, required: [true, "Location is required."]},
    imgUrl:{type: String, required: [true, "Please type proper url format."]}
}, 
{timestamps: true} // extra
);


connectionSchema.path('imgUrl').validate((val) => {
    urlRegex = /(data|ftp|http|https|Data):(image)?\/(\/)?(\w+:{0,1}\w*@)?(\S+)(;,:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
    }
    , 'Invalid URL.'
);

// collection name is connections in the database
module.exports = mongoose.model('Connection', connectionSchema);

