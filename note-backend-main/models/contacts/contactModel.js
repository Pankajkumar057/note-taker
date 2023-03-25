const mongoose =require('mongoose');

const contactSchema = new mongoose.Schema({

    name: String,
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
},{
    timestamps:true,
    toJSON:{virtuals:true},
})


const Contacts = mongoose.model('contacts', contactSchema);

module.exports = Contacts;

